import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscription } from 'rxjs';
import { CartDetails } from 'src/app/dataModels/cart-details';
import { ApiService } from 'src/app/services/api.service';
import { CanComponentDeactivate } from '../deactive-guard.guard';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-cart-address',
  templateUrl: './cart-address.component.html',
  styleUrls: ['./cart-address.component.css']
})
export class CartAddressComponent implements OnInit, CanComponentDeactivate, OnDestroy {
  products: CartDetails[] = []; // assign product to be of CartDetails array type
  grandTotal: number = 0; // used to store totalPrice
  shippingCharges: number = 0; // default shipping charges value
  finalPrice: number = 0; // default final Price
  toggleAddress: string = ''; // change address according to radio buttons
  selectedAddress: any; // assign selectedAddress Assign value
  subscribe: Subscription[] = []; // used to store subscription
  addressForm: FormGroup;  // address form of type formGroup
  addressList: any; // used to store addressList
  userId: any; // used to store userId
  emptyAddress: boolean = false; // emptyAddress
  stateInfo: any[] = [];  // used to store state data
  countryInfo: any[] = []; // used to store country data
  cityInfo: any[] = []; // used to store city data
  buyNowCartId: string = ''; // assign value of buyNowCartId
  toggleCanDeactivate: boolean = true; // change CanDeactivate resolve according to condition
  gstPrice: number;

  constructor(private apiService: ApiService, private fb: FormBuilder,
              private toaster: ToastrService, private route: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    // if (localStorage.getItem('id')) { // checking if userId is present or not
    //   this.userId = window.atob(localStorage.getItem('id')); // assigning userId from localStorage Id
    //   this.getAddressList(window.atob(localStorage.getItem('id')));
    // }
    if (sessionStorage.getItem('id')) { // checking if userId is present or not
      this.userId = window.atob(sessionStorage.getItem('id')); // assigning userId from sessionStorage Id
      this.getAddressList(window.atob(sessionStorage.getItem('id')));
    }

    if (sessionStorage.getItem('buyNow')) { // checking if buyNow value is present or not
      this.getCartItems();
      const cartData = {
        // user_id: window.atob(localStorage.getItem('id')),
        user_id: window.atob(sessionStorage.getItem('id')),
        cart: JSON.stringify(this.products)
      };
      // calling addToCart api to add data in cart
      this.apiService.addToCart(cartData).subscribe(res => {
        if (res[`code`] === 200) {
          this.buyNowCartId = res[`cart_details`].id; // assigning buyNowCartId with response cart value id
        }
      });
      // this.updateCart();
    } else {
      // calling getCartById api to get CartDetails by cartId
      // this.subscribe.push(this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
      this.subscribe.push(this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
        if (res[`code`] === 200) {
          this.products = (JSON.parse(res[`details`].cart) as CartDetails[]); // assigning response to products
          this.findGrandTotal();
        }
      }, err => {
        this.toaster.error(err?.error?.message || err?.message);
      }));
    }

    this.getCountries();
    this.createAddressForm();
  }

  // function to getSelectedAddress according to addressId
  getSelectedAddress(address): void {
    if (address !== 'newAddress') { // checking if address is newAddress or not
      this.selectedAddress = address;
      this.toggleAddress = '';
      this.emptyAddress = false;
    } else {
      this.toggleAddress = 'newAddress';
      this.emptyAddress = true;
      this.getUserDetails(this.userId);
    }
  }

  // function to getCartItems from sessionStorage
  getCartItems(): void {
    this.products = (JSON.parse(window.atob(sessionStorage.getItem('buyNow'))) as CartDetails[]);
    console.log('products', this.products)
    this.findGrandTotal();
  }

  // function to findGrandTotal
  findGrandTotal(): void {
    let productPrice = 0; // default product price

    // calculating eachProduct price using forEach loop for products array
    this.products.forEach((ele) => {
      if (ele.productQuantity) {  // checking if productQuantity is greater than 0
        // multiplying eachProduct price with eachProduct quantity and adding the result with productPrice
        productPrice = ((ele.discountPrice > 0 ? ele.discountPrice : ele.price) * ele.productQuantity) + productPrice;
      }
    });
    this.grandTotal = productPrice;
    this.shippingCharges = Math.round(+(0.05 * this.grandTotal).toFixed(3)); // 5% of totalCharges
    this.finalPrice = Math.round(this.grandTotal + this.shippingCharges); // adding price with shippingCharges and assigning to total
    this.gstPrice = Math.round(+(0.10 * this.finalPrice).toFixed(3));
    const additionalPaymentDetails = window.btoa(JSON.stringify({
      subtotal_amount: this.grandTotal, 
      shipping_amount: this.shippingCharges, 
      gst_amount: this.gstPrice
    }))
    sessionStorage.setItem('additionalPaymentDetails', additionalPaymentDetails);
  }

  // function to getCountries from getCountryData function
  getCountries(): void {
    this.subscribe.push(this.apiService.getCountryData().subscribe(res => {
      if (res) {
        this.countryInfo = res[`countries`];
        this.onChangeCountry('Australia');
      }
    }));
  }

  // function to getAddressList according to userId
  getAddressList(userId): void {
    const userData = {
      user_id: +userId
    };
    this.subscribe.push(this.apiService.getAllAddress(userData).subscribe(res => {
      if (res[`code`] === 200) {
        this.addressList = res[`address`]; // assigning address response to addressList
        this.spinner.hide();
        if (this.addressList.length > 0) {
          this.selectedAddress = res[`address`][0];
          this.emptyAddress = false;
        } else {
          this.emptyAddress = true;
          this.getSelectedAddress('newAddress');
        }
      }
    }, err => {
      this.toaster.error('No address found');
      this.spinner.hide();
    }));
  }

  getUserDetails(userId): void {
    this.apiService.getUserDetails(userId).subscribe(res => {
      if (res[`code`]) {
        // console.log('userDetails', res[`details`])
        this.patchAddressForm(res[`details`].name);
      }
    });
  }

  patchAddressForm(userName): void {
    const name = userName.split(" ");
    if (name.length === 3) {
      this.addressForm.patchValue({
        first_name: name[0],
        middle_name: name[1],
        last_name: name[2]
      });
    } else if (name.length > 1 && name.length <= 2) {
      this.addressForm.patchValue({
        first_name: name[0],
        last_name: name[1]
      });
    } else if (name.length === 1) {
      this.addressForm.patchValue({
        first_name: name[0]
      });
    }
  }

  // function to get countryName and statesList according to countryValue
  onChangeCountry(countryValue): void {
    this.cityInfo = [];
    const countryIndex = this.countryInfo.findIndex(res => res.name === countryValue);
    this.stateInfo = this.countryInfo[countryIndex].states;
  }

  // function to get stateName and cityList according to stateValue
  onChangeState(stateValue): void {
    const stateIndex = this.stateInfo.findIndex(res => res.name === stateValue);
    this.cityInfo = this.stateInfo[stateIndex].cities;
  }


  // function to create addressForm
  createAddressForm(): void {
    this.addressForm = this.fb.group({
      title: new FormControl('', Validators.required),
      first_name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      middle_name: new FormControl(''),
      last_name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      phone: new FormControl('', [Validators.pattern('[0-9 ]{10,12}'), Validators.required]),
      house_no: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pincode: new FormControl('', [Validators.pattern('[0-9 ]{4}'), Validators.required]),
      country: new FormControl('Australia', Validators.required)
    });
  }

  // function to get controls of address form
  get formControl(): any {
    return this.addressForm.controls;
  }

  onInputChange(validNumber, type): void{
    let maxLength = 0;
    if (type === 'phone'){
      maxLength = 12;
      if (validNumber.length >= maxLength){
        this.addressForm.patchValue({
          phone: validNumber.substring(0, 12)
        });
      }
    }else if (type === 'zip'){
      maxLength = 4;
      if (validNumber.length >= maxLength){
        this.addressForm.patchValue({
          pincode: validNumber.substring(0, 4)
        });
      }
    }
  }

  // function to validate all fields according to formType
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

  // function to save address
  saveAddress(form): void {
    if (form.invalid) {
      this.validateAllFields(form); // if form in invalid then call validateAllfields function
    } else {
      form.value.user_id = +this.userId;
      this.subscribe.push(this.apiService.addAddress(form.value).subscribe(res => {
        if (res[`code`] === 200) {
          this.toaster.success(res[`message`]);
          this.getAddressList(this.userId);
          this.toggleAddress = '';
          form.reset();
        }
      }, err => {
        this.toaster.error(err?.error?.message || err?.message);
      }));
    }
  }

  updateCart(): void {
    const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('buyNow'))) as CartDetails[]; // assigning buyNow value to cartLocalData
    let cart;
    console.log(cartLocalData, 'cartLocal')
    const accessoriesToAdd = [];  // accessoriesToAdd[] to add accessory
    const sparesToAdd = []; // sparesToAdd[] to add spare
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
    // this.subscribe.push(this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
    this.subscribe.push(this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
      if (res[`code`] === 200) {
        let cartDetails = [];
        cartDetails = (JSON.parse(res[`details`].cart) as CartDetails[]);  // assigning response value to cartDetails
        console.log(cartDetails, 'cartDetails');
        if (cartDetails.length <= 0) {  // checking cartDetails length is smaller or equal to 0
          // (...)spread operator takes in an iterable (e.g an array) and expands it into individual elements.
          cartDetails.push(cart); // pushing cart value in cartDetails
          cartDetails.push(...accessoriesToAdd); // pushing each accessoriesToAdd value in cartDetails
          cartDetails.push(...sparesToAdd); // pushing each sparesToAdd value in cartDetails
        } else {
          const cartAccessoryDataSet = new Array(); // creating new accessoryArray
          const cartSpareDataSet = new Array(); // creating new spareArray
          let cartProductDataSet; // variable to set productData
          let spareNotExist = true; // check if spare type is present in cartLocalData
          let accessoryNotExist = true; // check if accessory type is present in cartLocalData

          for (let i = 0; i < cartDetails.length; i++) {
            if (cartDetails[i].type === 'product') { // checking type of product
              // checking cartDetails(got by getCartDetails api) with buyNow cartDetails(from sessionStorage)
              if ((cartDetails[i].driveType === cart.driveType) && (cartDetails[i].code === cart.code) &&
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
          if (cartProductDataSet.length > 0) {
            cartDetails.push(cartProductDataSet);
            console.log(cartDetails, 'push')
          }

          // checking to push if accessory exist
          if (accessoryNotExist) {
            cartDetails.push(...accessoriesToAdd);
          }

          // checking to push if spare exist
          if (spareNotExist) {
            cartDetails.push(...sparesToAdd);
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
            this.buyNowCartId = updateCart.id;
            sessionStorage.removeItem('buyNow');
            this.apiService.totalItemsInCart();
          }
        }));
      }
    }));
  }

  // checkOut function to check whether any address is selected or not
  checkOut(): void {
    if (this.toggleAddress === '') {
      this.toggleCanDeactivate = false;
      if (this.buyNowCartId !== '') {
        this.route.navigate(['/cart/payment', this.selectedAddress?.id, this.buyNowCartId]);
      } else {
        this.route.navigate(['/cart/payment', this.selectedAddress?.id, window.atob(sessionStorage.getItem('cartId'))]);
      }
    } else {
      this.toaster.success('Please add and select one address to continue');
    }
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
                console.log('cartDetails', cartDetails);
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
                    cartDetails.push({...cart});
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
                console.log(cartDetails, 'ooo');
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
  }

}
