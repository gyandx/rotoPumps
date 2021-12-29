import { Component, OnInit, OnDestroy, NgZone, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCardValidators } from 'angular-cc-library';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { CartDetails } from 'src/app/dataModels/cart-details';
import { CanComponentDeactivate } from '../deactive-guard.guard';
import { CardError } from 'src/app/dataModels/cardError';
import { NgxSpinnerService } from 'ngx-spinner';

declare var Stripe;
@Component({
  selector: 'app-cart-payment',
  templateUrl: './cart-payment.component.html',
  styleUrls: ['./cart-payment.component.css']
})
export class CartPaymentComponent implements OnInit, CanComponentDeactivate, AfterViewInit, OnDestroy {

  @ViewChild('cardInfo', { static: true }) cardElement: ElementRef; // used to access the cardInfo element details
  // @ViewChild('cardNumber', { static: true }) cardNumberElement: ElementRef;
  // @ViewChild('cardExpiry', { static: true }) cardExpiryElement: ElementRef;
  // @ViewChild('cardCvc', { static: true }) cardCvcElement: ElementRef;

  stripe: any; // taking a variable for stripe of any type
  card: any; // taking a variable for card
  paymentLoading: boolean = false;
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  cardErrors: CardError = new CardError(); // assigning cardErrors of cartError type
  cardHandler = this.onChange.bind(this); // used to get cardField validations

  subscribe: Subscription[] = []; // used to store subscription

  total: number = 0; // used to store totalPrice
  toggleCanDeactivate: boolean = true; // change CanDeactivate resolve according to condition

  paymentForm: FormGroup;  // paymentForm form of type formGroup
  countryList: any[] = []; // used to store countryList
  addressDetails: any; // assigning addressDetail according to id
  products: CartDetails[] = []; // to store cartDetails.
  addressId: any; // used to store addressId
  buyNowCartId: string; // used to store buyNowCArtId
  orderId: number;
  toggleCardNumberError: boolean = false;
  toggleCardMonthError: boolean = false;
  toggleCardCvvError: boolean = false;
  cardNumberError: string;
  cardCvvError: string;
  cardMonthError: string;
  dealerDiscountAmount: number = 0;
  applyDealerDiscount: boolean = false; // used to apply for dealer discount
  dealerDiscountPercentage: number;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router,
              private toastr: ToastrService, private ngZone: NgZone, private activatedRoute: ActivatedRoute,
              private zone: NgZone, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    // this.loadStripe(); // calling stripe function to load stripe
    // assigning addressId and buyNow id from route params
    this.subscribe.push(this.activatedRoute.params.subscribe(res => {
      if (res.id1) {
        this.addressId = res.id1;
        this.buyNowCartId = res.id2;
        this.getAddress(res.id1);
      }
    }));
    if (
      window.atob(sessionStorage.getItem('userType')) ===
        'Dealer' &&
      window.atob(sessionStorage.getItem('userStatus')) === 'D'
    ) {
      this.applyDealerDiscount = true;
      if (window.atob(sessionStorage.getItem('userDiscount')) === null) {
        this.apiService.dealerDiscount().subscribe(res => {
          if (res[`return`] === true) {
            this.dealerDiscountPercentage = res[`dealer_discount`];
            this.dealerDiscountPercentage = this.dealerDiscountPercentage * 0.01;
          }
        })
      }else {
        let userDiscount = window.atob(sessionStorage.getItem('userDiscount'));
        this.dealerDiscountPercentage = +userDiscount * 0.01;
      }
    }
    if (this.buyNowCartId.length === 0) { // checking buyNow cartId is present or not
      // this.subscribe.push(this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
      this.subscribe.push(this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
        if (res[`code`] === 200) {
          this.products = (JSON.parse(res[`details`].cart) as CartDetails[]); // assigning cartDetails from response to products
          this.findGrandTotal();
        }
      }, err => {
        this.toastr.error(err?.error?.message || err?.message);
      }));
    } else { // if buyNow cartId is present
      this.subscribe.push(this.apiService.getCartById(this.buyNowCartId).subscribe(res => {
        if (res[`code`] === 200) {
          this.products = (JSON.parse(res[`details`].cart) as CartDetails[]); // assigning cartDetails from response to products
          this.findGrandTotal();
        }
      }, err => {
        this.toastr.error(err?.error?.message || err?.message);
      }));
    }
    // calling getCountryData function to getCountryList
    this.subscribe.push(this.apiService.getCountryData().subscribe(res => {
      if (res) {
        this.countryList = res[`countries`]; // assigning countryList in countryList Array
      }
    }));
    this.createPaymentForm();
  }

  // used afterviewinit lifecyclehook to load card after view get initialized
  ngAfterViewInit(): void {
    // Giving a base style here, but most of the style is in scss file
    this.spinner.show();
    const cardStyle = {
      base: {
        iconColor: '#1586ad',
        color: '#32325d',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '20px',
        '::placeholder': {
          color: 'rgba(190, 193, 197, 0.9)',
          fontSize: '0.9em',
          fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif'
        },
      },
      invalid: {
        color: 'red',
        iconColor: '#fa755a',
      },
    };

    // assign stripe publish key to stripe variable
    this.stripe = Stripe(environment.stripeTestKey);
    const elements = this.stripe.elements();

    // this.card = elements.create('card');
    // this.card.mount(this.cardElement.nativeElement);
    // this.card.addEventListener('change', this.cardHandler);

    this.cardNumber = elements.create('cardNumber', { showIcon: true, placeholder: 'Enter your card number', style: cardStyle });
    this.cardNumber.mount('#cc-number');
    this.cardNumber.on('change', (error) => {
      if (error.error === undefined || error) {
        // const displayError = document.getElementById('ccNum');
        if (error.error !== undefined) {
          this.toggleCardNumberError = true;
          this.cardNumberError = error.error.message;
        }else {
          this.toggleCardNumberError = false;
        }
      }
    });

    this.cardExpiry = elements.create('cardExpiry', { placeholder: 'MM / YY', style: cardStyle });
    this.cardExpiry.mount('#cc-exp-date');
    this.cardExpiry.on('change', (error) => {
      if (error.error === undefined || error) {
        // const displayError = document.getElementById('ccNum');
        if (error.error !== undefined) {
          this.toggleCardMonthError = true;
          this.cardMonthError = error.error.message;
        }else {
          this.toggleCardMonthError = false;
        }
      }
    });

    this.cardCvc = elements.create('cardCvc', { placeholder: 'Enter CVC', style: cardStyle });
    this.cardCvc.mount('#cc-cvc');
    this.cardCvc.on('change', (error) => {
      if (error.error === undefined || error) {
        // const displayError = document.getElementById('ccNum');
        if (error.error !== undefined) {
          this.toggleCardCvvError = true;
          this.cardCvvError = error.error.message;
        }else {
          this.toggleCardCvvError = false;
        }
      }
    });
    this.spinner.hide();
  }

  // function to findGrandTotal
  findGrandTotal(): void {
    let price;
    let gstPrice;
    let subPrice = 0;
    let shippingCharges = 0; // default shipping charges
    let productPrice = 0; // default product price

    // calculating eachProduct price using forEach loop for products array
    this.products.forEach((ele) => {
      if (ele.productQuantity) { // checking if productQuantity is greater than 0
        // multiplying eachProduct price with eachProduct quantity and adding the result with productPrice
        productPrice = ((ele.discountPrice > 0 ? ele.discountPrice : ele.price) * ele.productQuantity) + productPrice;
      }
    });
    price = productPrice;
    shippingCharges = 0.05 * price; // 5% of totalCharges
    subPrice = price + shippingCharges; // adding price with shippingCharges and assigning to total
    gstPrice = 0.10 * subPrice;
    this.total = Math.round(gstPrice + subPrice); // adding price with shippingCharges and assigning to total
    this.dealerDiscountAmount = Math.round(this.dealerDiscountPercentage * this.total);
  }

  // function to getAddress using addressId
  getAddress(addressId: string): void {
    this.subscribe.push(this.apiService.getAddressById(addressId).subscribe(res => {
      if (res[`address`].length > 0) {
        this.addressDetails = res[`address`][0]; // assigning response of address to addressDetails
      }
    }));
  }

  // function to loadStripe
  loadStripe(): void {
    if (!window.document.getElementById('stripe-custom-form-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-custom-form-script';
      s.type = 'text/javascript';
      s.src = 'https://js.stripe.com/v2/';
      s.onload = () => {
        window.Stripe.setPublishableKey(environment.stripeTestKey);
      };
      window.document.body.appendChild(s);
    }
    // if(!window.document.getElementById('stripe-script')) {
    //   var s = window.document.createElement("script");
    //   s.id = "stripe-script";
    //   s.type = "text/javascript";
    //   s.src = "https://checkout.stripe.com/checkout.js";
    //   window.document.body.appendChild(s);
    // }
  }

  // function to create payment form
  createPaymentForm(): void {
    this.paymentForm = this.fb.group({
      cardUserName: new FormControl('', [Validators.minLength(5), Validators.required]),
      // email: new FormControl('', [Validators.email, Validators.required]),
      // cardNumber: new FormControl('', [CreditCardValidators.validateCCNumber, Validators.required]),
      // cardCVV: new FormControl('', Validators.required),
      // cardExpDate: new FormControl('', [CreditCardValidators.validateExpDate, Validators.required]),
      // country: new FormControl('Australia', Validators.required)
    });
  }

  // function to get controls of payment form
  get formControl(): any {
    return this.paymentForm.controls;
  }

  // function to validate all fields of payment form
  validateAllFields(formGroup: FormGroup): void {
    Object.keys(this.formControl).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFields(control);
      }
    });
  }

  onChange({ error }): any {
    if (error) {
      this.cardErrors = error;
    } else {
      this.cardErrors = null;
    }
  }

  // function to submit signUp form
  async submitPaymentForm(form): Promise<any> {
    // this.spinner.show('sp3');
    if (form.invalid) { // condition checking if form is valid or not
      this.validateAllFields(form); // if form in invalid then call validateAllfields function
    } else {
      this.paymentLoading = true;
      // this.spinner.show('spinner-2');
      this.toggleCanDeactivate = false; // changing toggleCanDeactivate to false
      const { token, error } = await this.stripe.createToken(this.cardNumber, {
        name: form.value.cardUserName,
        address_city: this.addressDetails?.city,
        address_country: this.addressDetails?.country,
        address_line1: this.addressDetails?.house_no,
        address_state: this.addressDetails?.state,
        address_zip: this.addressDetails?.pincode
      });
      if (token) {
        // console.log('address', this.addressDetails, token);
        // this.spinner.hide('sp3');
        this.onSuccess(token);
      } else {
        // console.log('address', this.addressDetails, token);
        this.spinner.hide('sp3');
        this.onError(error);
      }
      // split() method is used to split a string into an array of substrings and return a new array
      // const monthYear = form.value.cardExpDate.split(' / ');
      // (window as any).Stripe.card.createToken({ // calling stripe createToken function
      //   number: form.value.cardNumber,
      //   exp_month: monthYear[0],
      //   exp_year: monthYear[1],
      //   cvc: form.value.cardCvv,
      //   address_city: this.addressDetails?.city,
      //   address_country: 'ind',
      //   address_line1: this.addressDetails?.house_no,
      //   address_line2: this.addressDetails?.town,
      //   address_state: this.addressDetails?.state,
      //   address_zip: this.addressDetails?.pincode
      // }, (status: number, response: any) => {
      //   if (status === 200 && response) {
      //     const paymentData = {
      //       token: response.id,
      //       amount: Math.round(this.total)
      //     };
      //     this.zone.run(() => { // ngZone.runOutsideAngular() - this runs the code outside the angular zone.
      //       // calling payment api and passing paymentData as body in payment api
      //       this.subscribe.push(this.apiService.payment(paymentData).subscribe(res => {
      //         if (res[`code`] === 200) {
      //           this.createOrder(response.id);
      //         }
      //       }, err => {
      //         this.toastr.error(err?.error?.message || err?.message);
      //       }));
      //     });
      //   } else {
      //     this.toastr.error('Payment Unsuccessful');
      //   }
      // });
    }
  }

  // function to call payment if token is generated
  onSuccess(token): void {
    this.paymentLoading = false;
    const paymentData = {
      token: token.id,
      amount: Math.round(this.total)
    };
    this.subscribe.push(this.apiService.payment(paymentData).subscribe(res => {
      if (res[`code`] === 200) {
        this.createOrder(paymentData.token);
      }
    }, err => {
      this.paymentLoading = false;
      this.toastr.error(err?.error?.message || err?.message);
    }));
  }

  // function to show error if token is not generated
  onError(error): void {
    this.paymentLoading = false;
    if (error.message) {
      // this.cardErrors = error.message;
      this.toastr.error(error.message);
    }
  }


  // function to createOrder
  createOrder(token: string): void {
    const additionalDetails = JSON.parse(window.atob(sessionStorage.getItem('additionalPaymentDetails'))); 
    const orderData = {
      address_id: this.addressId,
      // user_id: +window.atob(localStorage.getItem('id')),
      user_id: +window.atob(sessionStorage.getItem('id')),
      amount: (this.total).toString(),
      transaction_id: token,
      purchase_details: this.products,
      // cart_id: +window.atob(localStorage.getItem('cartId'))
      cart_id: +window.atob(sessionStorage.getItem('cartId')),
      ...additionalDetails
    };
    // api function to addOrder using addOrder api
    this.subscribe.push(this.apiService.addOrders(orderData).subscribe(res => {
      if (res[`code`] === 200) {
        this.orderId = res[`details`].id;
        // console.log('orderRes', res);
        // console.log('orderData', orderData.purchase_details);
        // this.apiService.orderDetails.next(res[`details`]);
        // this.updateCart();
        // if (this.buyNowCartId.length !== 0) { // checking buyNowCardId is present or not
        //   this.updateCart();
        // }
        // else {
        //   sessionStorage.removeItem('buyNow');
        //   this.apiService.totalItemsInCart();
        //   this.router.navigate(['/payment-successful'], { queryParams: { orderId: this.orderId } });
        // }
        sessionStorage.removeItem('buyNow');
        this.apiService.totalItemsInCart();
        this.router.navigate(['/payment-successful'], { queryParams: { orderId: this.orderId } });
      }
    }, err => {
      this.toastr.error(err?.error?.message || err?.message);
    }));
  }

  // function to updateCart
  updateCart(): void {
    const updateCart = {
      // id: window.atob(localStorage.getItem('cartId')),
      // user_id: window.atob(localStorage.getItem('id')),
      id: window.atob(sessionStorage.getItem('cartId')),
      user_id: window.atob(sessionStorage.getItem('id')),
      cart: '[]'
    };
    console.log('update', updateCart);
    // this.subscribe.push(this.apiService.updateCart(updateCart).subscribe(res => {
    //   if (res[`code`] === 200) {
    //     this.apiService.totalItemsInCart(); // calling totalItemsInCart function to update cartQuantity Value.
    //     this.router.navigate(['/payment-successful'], { queryParams: { orderId: this.orderId } });
    //   }
    // }, err => {
    //   this.toastr.error(err?.error?.message || err?.message);
    // }));
  }

  // canDeactivate router function to  check is navigation allowed or not
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.toggleCanDeactivate) { // checking toggleCanDeactivate value
      // if (localStorage.getItem('cartId')) { // checking cartId is present or not
      if (sessionStorage.getItem('cartId')) { // checking cartId is present or not
        if (sessionStorage.getItem('buyNow')) { // checking buyNow is present or not
          // tslint:disable-next-line: max-line-length
          const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('buyNow'))) as CartDetails[]; // assigning buyNow value to cartLocalData
          const accessoriesToAdd = [];  // accessoriesToAdd[] to add accessory
          const sparesToAdd = []; // sparesToAdd[] to add spare;
          let cart;
          if (cartLocalData !== null) { // checking if cartLocalData is not null
            cartLocalData.forEach(cartData => {
              if (cartData.type === 'product') {
                // assigning value in cart
                cart = new CartDetails(
                  cartData.productId,
                  cartData.code,
                  cartData.description,
                  cartData.price,
                  cartData.discountPrice,
                  cartData.type,
                  cartData.pole,
                  cartData.flow,
                  cartData.head,
                  cartData.speed,
                  cartData.power,
                  cartData.engineSpeed,
                  cartData.enginekW,
                  cartData.driveType,
                  cartData.productQuantity
                );
              } else if (cartData.type === 'accessory') {
                accessoriesToAdd.push(cartData); // pushing cartData of type accessory in accessoriesToAdd array
              } else if (cartData.type === 'spare') {
                sparesToAdd.push(cartData); // pushing cartData of type spare in sparesToAdd array
              }
            });
          }
          // creating Promise to get return value
          return new Promise((resolve) => {
            // this.subscribe.push(this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
            this.subscribe.push(this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
              if (res[`code`] === 200) {
                let cartDetails = [];
                cartDetails = (JSON.parse(res[`details`].cart) as CartDetails[]);  // assigning response value to cartDetails
                if (cartDetails.length <= 0) {  // checking cartDetails length is smaller or equal to 0
                  // (...)spread operator takes in an iterable (e.g an array) and expands it into individual elements.
                  cartDetails.push({...cart}); // pushing cart value in cartDetails
                  cartDetails.push(...accessoriesToAdd); // pushing each accessoriesToAdd value in cartDetails
                  cartDetails.push(...sparesToAdd); // pushing each sparesToAdd value in cartDetails
                }
                else {
                  const cartAccessoryDataSet = new Array(); // creating new accessoryArray
                  const cartSpareDataSet = new Array(); // creating new spareArray
                  let cartProductDataSet = {}; // variable to set productData
                  let spareNotExist = true; // check if spare type is present in cartLocalData
                  let accessoryNotExist = true; // check if accessory type is present in cartLocalData
                  let cartNotExist = true;
                  console.log(cart, 'cart');
                  console.log(cartDetails, 'cart1');
                  for (let i = 0; i < cartDetails.length; i++) {
                    if (cartDetails[i].type === 'product') { // checking type of product
                      // checking cartDetails(got by getCartDetails api) with buyNow cartDetails(from sessionStorage)
                      cartNotExist = false;
                      if (((cartDetails[i].driveType === '' || cartDetails[i].driveType)
                        === (cart.driveType === '' || cart.driveType))
                        && (cartDetails[i].code === cart.code) &&
                        (cartDetails[i].pole === cart.pole)) {
                        cartDetails[i].productQuantity++;
                      } else {
                        cartProductDataSet = cart;
                      }
                    } else if (cartDetails[i].type === 'accessory') {
                      accessoryNotExist = false;
                      for (let j = 0; j < accessoriesToAdd.length; j++) {
                        if (accessoriesToAdd[j].description === cartDetails[i].description
                          && accessoriesToAdd[j].pole === cartDetails[i].pole
                          && accessoriesToAdd[j].driveType === cartDetails[i].driveType) {
                          cartDetails[i].productQuantity++;
                        } else {
                          /* some() is used to checks whether at least one of the elements of the array satisfies
                              the condition then returns true (and does not check the remaining values) otherwise return false*/
                          if (!cartDetails.some(res => (res.description === accessoriesToAdd[j].description)
                            && (res.pole === accessoriesToAdd[j].pole) && (res.driveType === accessoriesToAdd[j].driveType)) &&
                            (!cartAccessoryDataSet.some(res => (res.description === accessoriesToAdd[j].description)
                              && (res.pole === accessoriesToAdd[j].pole) && (res.driveType === accessoriesToAdd[j].driveType)))) {
                            cartAccessoryDataSet.push(accessoriesToAdd[j]);
                          }
                        }
                      }
                    } else if (cartDetails[i].type === 'spare') {
                      spareNotExist = false;
                      for (let j = 0; j < sparesToAdd.length; j++) {
                        if (sparesToAdd[j].description === cartDetails[i].description
                          && sparesToAdd[j].pole === cartDetails[i].pole
                          && sparesToAdd[j].driveType === cartDetails[i].driveType) {
                          cartDetails[i].productQuantity++;
                        } else {
                          /* some() is used to checks whether at least one of the elements of the array satisfies
                              the condition then returns true (and does not check the remaining values) otherwise return false*/
                          if ((!cartDetails.some(res => (res.description === sparesToAdd[j].description)
                            && (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j].driveType))) &&
                            (!cartSpareDataSet.some(res => (res.description === sparesToAdd[j].description) &&
                              (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j].driveType)))) {
                            cartSpareDataSet.push(sparesToAdd[j]);
                          }
                        }
                      }
                    }
                  }

                  // checking to push if cartAccessoryDataSet length is greater than 0
                  if (cartAccessoryDataSet.length > 0) {
                    cartDetails.push(...cartAccessoryDataSet);
                  }

                  // checking to push if cartSpareDataSet length is greater than 0
                  if (cartSpareDataSet.length > 0) {
                    cartDetails.push(...cartSpareDataSet);
                  }

                  // checking to push if cartProductDataSet is not undefined
                  if (Object.keys(cartProductDataSet).length > 0) {
                    cartDetails.push({...cartProductDataSet});
                  }

                  // checking to push if accessory exist
                  if (accessoryNotExist) {
                    cartDetails.push(...accessoriesToAdd);
                  }

                  // checking to push if spare exist
                  if (spareNotExist) {
                    cartDetails.push(...sparesToAdd);
                  }

                  if (cartNotExist) {
                    cartDetails.push(...cart);
                  }
                }

                const updateCart = {
                  // id: window.atob(localStorage.getItem('cartId')),
                  // user_id: window.atob(localStorage.getItem('id')),
                  id: window.atob(sessionStorage.getItem('cartId')),
                  user_id: window.atob(sessionStorage.getItem('id')),
                  cart: JSON.stringify(cartDetails)
                };
                // calling updateCart api
                return this.subscribe.push(this.apiService.updateCart(updateCart).subscribe(response => {
                  if (response[`code`] === 200) {
                    sessionStorage.removeItem('buyNow');
                    this.apiService.totalItemsInCart();
                    return resolve(true);
                  }
                }));
              }
            }));

          });
        }
        else {
          return true;
        }
      }
      else {
        // localStorage.setItem('cartId', window.btoa(this.buyNowCartId)); // setting buyNowCartId as cartId in localStorage
        sessionStorage.setItem('cartId', window.btoa(this.buyNowCartId)); // setting buyNowCartId as cartId in sessionStorage
        this.apiService.totalItemsInCart(); // calling totalItemsInCart function to update cartQuantity'
        sessionStorage.removeItem('buyNow');
        return true;
      }
    } else {
      return true;
    }
  }

  // used to unsubscribe the subscription
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.subscribe.forEach(s => {
      if (s) {
        s.unsubscribe();
      }
    });
    // this.card.destroy();
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  }

}
