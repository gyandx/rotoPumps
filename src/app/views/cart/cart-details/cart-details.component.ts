import { Component, OnInit, ElementRef, ViewChild, QueryList, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
import { Subscription } from 'rxjs';
import { CartDetails } from 'src/app/dataModels/cart-details';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit, OnDestroy {

  @ViewChild('input') inputList: QueryList<ElementRef>;

  subscribe: Subscription[] = []; // used to store subscription

  grandTotal: number = 0; // used to store totalPrice
  shippingCharges: number = 0; // default shipping charges value
  finalPrice: number = 0; // default final Price
  productQuantity: number = 0; // used to store the product quantity

  products: CartDetails[] = []; // assign product to be of CartDetails array type
  deleteItemIndex: number; // used to store the item index number to be deleted
  toggleBtn: boolean = false; // used to show/hide buttons according to user signIn or not
  showDeleteMsg: boolean = false; // used to show/hide delete popup content
  gstPrice: number;


  constructor(private apiService: ApiService, private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // if (localStorage.getItem('id')) { // checking if userId is present or not
    if (sessionStorage.getItem('id')) { // checking if userId is present or not
      // console.log('My iD', window.atob(sessionStorage.getItem('id')))
      this.toggleBtn = true; // assign toggleBtn to true
      // if (localStorage.getItem('cartId')) { // checking cartId is present or not
      if (sessionStorage.getItem('cartId')) { // checking cartId is present or not
        // console.log('My Cart')
        if (sessionStorage.getItem('cart')) { // checking cart data is present or not
          // console.log('my cart', window.atob(sessionStorage.getItem('cart')))
          // console.log('my cartId', window.atob(sessionStorage.getItem('cartId')))
          // console.log('userId', window.atob(sessionStorage.getItem('id')))
          this.updateCartDetails(window.atob(sessionStorage.getItem('cart')), 'session');
        }
        else {
          // getting data from cartResolver
          this.subscribe.push(this.activatedRoute.data.subscribe((res: CartDetails[]) => {
            this.products = res[`cartData`];
            this.insertImages(this.products);
            console.log('products', this.products);
            this.getProductQuantity();
            this.findGrandTotal();
          }));
        }
      }
      else {
        this.getCartItems();
        if (this.products.length > 0) {
          const cartData = {
            // user_id: window.atob(localStorage.getItem('id')),
            user_id: window.atob(sessionStorage.getItem('id')),
            cart: JSON.stringify(this.products)
          };
          // calling addToCart api to add items to cart
          this.subscribe.push(this.apiService.addToCart(cartData).subscribe(res => {
            if (res[`code`] === 200) {
              sessionStorage.removeItem('cart');
              // localStorage.setItem('cartId', window.btoa(res[`cart_details`].id));
              sessionStorage.setItem('cartId', window.btoa(res[`cart_details`].id));
              this.products = JSON.parse(res[`cart_details`].cart);
              this.getProductQuantity();
              this.findGrandTotal();
              this.apiService.totalItemsInCart();
            }
          }));
        }
      }
    }
    else {
      // if (localStorage.getItem('cardId') === null) {
      if (sessionStorage.getItem('cardId') === null) {
        this.getCartItems();
        this.getProductQuantity();
        this.toggleBtn = false;
      }
    }
  }

  insertImages(products): void {
    let pumpModel;
    products.forEach(element => {
      if (element.type === 'product') {
        pumpModel = element.description.split(" ");
      } else {
        pumpModel = '';
      }
      if (pumpModel[0] === 'Surface' && (pumpModel[2] === 'Close' || pumpModel[2] === 'Bare')) {
        element[`img`] = 'assets/images/AGCACC/AGCApumpcopy.png';
        // this.productImages = 'assets/images/banner/SAP-AG-Home.jpg';
      } else if (pumpModel[0] === 'Multipurpose' && (pumpModel[1] === 'Close' || pumpModel[1] === 'Bare')) {
        element[`img`] = 'assets/images/banner/DC.png';
        // this.productImages = 'assets/images/banner/DC.png';
      } else if (element.type === 'accessory' || element.type === 'spare') {
        switch (element.code) {
          case 'Baseplate':
            element[`img`] = 'assets/images/SparesImg/Baseplate_pic.png';
            break;
          case 'DRP':
            element[`img`] = 'assets/images/SparesImg/DRP_pic.png';
            break;
          case 'Rotor':
            element[`img`] = 'assets/images/SparesImg/rotor.jpg';
            break;
          case 'Stator':
            element[`img`] = 'assets/images/icons/stator.png';
            break;
          case 'Mech Seal':
            element[`img`] = 'assets/images/SparesImg/Mech_seal.jpeg';
            break;
          case 'UJ M Kit':
            element[`img`] = 'assets/images/SparesImg/UJ_KIT.jpg';
            break;
          case 'Pump Lantern':
            element[`img`] = 'assets/images/SparesImg/PUMPLANTERN.BMP';
            break;
          case 'Foot':
            element[`img`] = 'assets/images/SparesImg/FOOT.BMP';
            break;
          case 'Tie Rod':
            element[`img`] = 'assets/images/SparesImg/TIEROD.BMP';
            break;
          case 'Pump Housing':
            element[`img`] = 'assets/images/SparesImg/PUMPHOUSING.BMP';
            break;
          case 'End Cover':
            element[`img`] = 'assets/images/SparesImg/END_COVER.BMP';
            break;
          case 'Seal Plate':
            element[`img`] = 'assets/images/SparesImg/SEAL_PLATE.BMP';
            break;
          case 'Mech Seal Housing':
            element[`img`] = 'assets/images/SparesImg/MECHSEALHOUSING.BMP';
            break;
          case 'Shaft Stub Price':
            element[`img`] = 'assets/images/SparesImg/SHAFT.BMP';
            break;
          case 'Coupling Rod':
            element[`img`] = 'assets/images/SparesImg/COUPLINGROD.BMP';
            break;
          case 'B.S.R. Retaining Ring':
            element[`img`] = 'assets/images/SparesImg/BOOTSEALRETAINER.BMP'; // will change
            break;
          case 'Boot Seal Reatainer':
            element[`img`] = 'assets/images/SparesImg/BOOTSEALRETAINER.BMP';
            break;
          case 'Boot Seal Support Ring':
            element[`img`] = 'assets/images/SparesImg/Boot_Seal_Support_Ring.bmp';
            break;
          case 'Boot Seal':
            element[`img`] = 'assets/images/SparesImg/BOOT_SEAL.BMP';
            break;
          case 'Foot And Face Mounted Motor 240v 4Pole':
            element[`img`] = 'assets/images/SparesImg/Foot_face_mounted_motor.jpg';
            break;
          case 'Foot And Face Mounted Motor 240v 6Pole':
            element[`img`] = 'assets/images/SparesImg/Foot_face_mounted_motor.jpg';
            break;
          case 'Bearing Cover':
            element[`img`] = 'assets/images/SparesImg/BEARINGCOVER.BMP';
            break;
          case 'Bearing Spacer External':
            element[`img`] = 'assets/images/SparesImg/BEARINGSPACER.BMP';
            break;
          case 'Mechanical Seal':
            element[`img`] = 'assets/images/SparesImg/Mechanical-Seal_image.jpg';
            break;
          case 'Ball_Bearing':
            element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP';
            break;
          case 'Foot Support For Stator Housing':
            element[`img`] = 'assets/images/SparesImg/FOOT_FOR_STATOR_HOUSING.BMP';
            break;
          case 'Foot Support For Bearing Housing':
            element[`img`] = 'assets/images/SparesImg/FOOTFORBEARINGHOUSING.BMP';
            break;
          case 'Stator Housing':
            element[`img`] = 'assets/images/SparesImg/STATORHOUSING.BMP';
            break;
          case 'Bonded Bush':
            element[`img`] = 'assets/images/SparesImg/BONDEDBUSH.BMP';
            break;
          case 'Bearning Housing':
            element[`img`] = 'assets/images/SparesImg/BEARINGHOUSING.BMP';
            break;
          case 'Ball Bearing Small':
            element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP';
            break;
          case 'Ball Bearing Large':
            element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP';
            break;
          case 'Mech Seal Retainer':
            element[`img`] = 'assets/images/SparesImg/MECHANICHALSEALRETAINER.BMP';
            break;
          case 'Stator Support Ring':
            element[`img`] = 'assets/images/SparesImg/STATOR_SUPPORT_RING.jpg';
            break;
          case 'Drive Shaft':
            element[`img`] = 'assets/images/SparesImg/SHAFT.BMP.BMP';
            break;
          case 'Abutment Ring':
            element[`img`] = 'assets/images/SparesImg/ABUTMENT_RING.jpg';
            break;
          case 'Bearing':
            element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP';
            break;
          default:
            element[`img`] = 'assets/images/icons/accessories2.png';
        }
        // this.productImages = 'assets/images/icons/accessories.png';
      }
    });
  }

  // function to getProductQuantity of total products in cart
  getProductQuantity(): void {
    this.productQuantity = 0;
    this.products.forEach(product => {
      this.productQuantity = product.productQuantity + this.productQuantity;
    });
  }

  // function to update cart according to type
  updateCartDetails(cartArray, type): void {
    if (type === 'session') { // checking if cart data is present in sessionStorage or not
      // console.log('session');
      const cartLocalData = JSON.parse(cartArray) as CartDetails[]; // assigning sessionStoraege cart value to cartLocalData
      let cart = [];
      const accessoriesToAdd = []; // accessoriesToAdd[] to add accessory
      const sparesToAdd = []; // sparesToAdd[] to add spare
      if (cartLocalData !== null) { // checking if cartLocalData is not null
        cartLocalData.forEach(cartData => {
          if (cartData.type === 'product') {
            // assigning value in cart
            cart.push(new CartDetails(
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
            ));
          } else if (cartData.type === 'accessory') {
            accessoriesToAdd.push(cartData); // pushing cartData of type accessory in accessoriesToAdd array
          } else if (cartData.type === 'spare') {
            sparesToAdd.push(cartData); // pushing cartData of type spare in sparesToAdd array
          }
        });
        this.subscribe.push(this.activatedRoute.data.subscribe((res: CartDetails) => {
          let cartDetails = [];
          cartDetails = res[`cartData`]; // assigning data from cartResolver to cartDetails
          if (cartDetails.length <= 0) { // checking cartDetails length is smaller or equal to 0
            // (...)spread operator takes in an iterable (e.g an array) and expands it into individual elements.
            if (cart.length) {
              cartDetails.push(...cart); // pushing cart value in cartDetails
            }
            if (accessoriesToAdd.length) {
              cartDetails.push(...accessoriesToAdd); // pushing each accessoriesToAdd value in cartDetails
            }
            if (sparesToAdd.length) {
              cartDetails.push(...sparesToAdd); // pushing each sparesToAdd value in cartDetails
            }
            const updateCartData = {
              // id: window.atob(localStorage.getItem('cartId')),
              // user_id: window.atob(localStorage.getItem('id')),
              id: window.atob(sessionStorage.getItem('cartId')),
              user_id: window.atob(sessionStorage.getItem('id')),
              cart: JSON.stringify(cartDetails)
            };
            // calling updateCart api
            this.apiService.updateCart(updateCartData).subscribe(response => {
              if (response[`code`] === 200) {
                sessionStorage.removeItem('cart');
                this.apiService.getCartById(updateCartData.id).subscribe(response => {
                  if (response[`code`] === 200) {
                    this.products = (JSON.parse(response[`details`].cart) as CartDetails[]);
                    this.insertImages(this.products);
                    this.getProductQuantity();
                    this.findGrandTotal();
                    this.apiService.totalItemsInCart();
                  }
                });
              }
            });
          }
          else {
            const cartAccessoryDataSet = new Array(); // creating new accessoryArray
            const cartSpareDataSet = new Array(); // creating new spareArray
            let cartProductDataSet; // variable to set productData
            let spareNotExist = true; // check if spare type is present in cartLocalData
            let accessoryNotExist = true; // check if accessory type is present in cartLocalData
            let cartNotExist = true; // check if cart type is present in cartLocalData
            // cartDetails.filter(eachData => {
            //   if (eachData.motor === null){
            //     return eachData.motor = {volt: 0};
            //   }
            // });
            // for loop starts
            for (let i = 0; i < cartDetails.length; i++) {
              if (cartDetails[i].type === 'product') { // checking productType
                cartNotExist = false;
                for (let j = 0; j < cart.length; j++) {
                  if (((cartDetails[i].driveType === '' || cartDetails[i].driveType)
                    === (cart[j].driveType === '' || cart[j].driveType))
                    && (cartDetails[i].code === cart[j].code) &&
                    (cartDetails[i].pole === cart[j].pole)) {
                    cartDetails[i].productQuantity++;
                  } else {
                    cartProductDataSet = cart;
                  }
                }
              } else if (cartDetails[i].type === 'accessory') {
                accessoryNotExist = false;
                for (let j = 0; j < accessoriesToAdd.length; j++) {
                  if (accessoriesToAdd[j].description === cartDetails[i].description &&
                    accessoriesToAdd[j].driveType === cartDetails[i].driveType &&
                    accessoriesToAdd[j].pole === cartDetails[i].pole
                  ) { // checking productType
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
              } else if (cartDetails[i].type === 'spare') { // checking productType
                spareNotExist = false;
                // console.log(cartDetails)
                // console.log(sparesToAdd)
                for (let j = 0; j < sparesToAdd.length; j++) {
                  if (sparesToAdd[j].description === cartDetails[i].description && sparesToAdd[j].pole === cartDetails[i].pole
                    && sparesToAdd[j].driveType === cartDetails[i].driveType) {
                    cartDetails[i].productQuantity++;
                  } else {
                    /* some() is used to checks whether at least one of the elements of the array satisfies
                      the condition then returns true (and does not check the remaining values) otherwise return false*/
                    if ((!cartDetails.some(res => (res.description === sparesToAdd[j].description)
                      && (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j]?.driveType))) &&
                      (!cartSpareDataSet.some(res => (res.description === sparesToAdd[j].description) &&
                        (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j]?.driveType)))) {
                      cartSpareDataSet.push(sparesToAdd[j]);
                    }
                  }
                }
              }
            }
            // for loops ends

            // checking to push if cartAccessoryDataSet length is greater than 0
            if (cartAccessoryDataSet.length > 0) {
              cartDetails.push(...cartAccessoryDataSet);
            }

            // checking to push if cartSpareDataSet length is greater than 0
            if (cartSpareDataSet.length > 0) {
              cartDetails.push(...cartSpareDataSet);
            }

            // checking to push if cartProductDataSet is not undefined
            if (cartProductDataSet !== undefined || cartProductDataSet?.length) {
              cartDetails.push(...cartProductDataSet);
            }

            // checking to push if accessory exist
            if (accessoryNotExist) {
              cartDetails.push(...accessoriesToAdd);
            }

            // checking to push if spare exist
            if (spareNotExist) {
              cartDetails.push(...sparesToAdd);
            }

            // checking to push if cart exist
            if (cartNotExist) {
              cartDetails.push(...cart);
            }
            const updateCartData = {
              // id: window.atob(localStorage.getItem('cartId')),
              // user_id: window.atob(localStorage.getItem('id')),
              id: window.atob(sessionStorage.getItem('cartId')),
              user_id: window.atob(sessionStorage.getItem('id')),
              cart: JSON.stringify(cartDetails)
            };
            // calling updateCart api
            this.apiService.updateCart(updateCartData).subscribe(response => {
              if (response[`code`] === 200) {
                sessionStorage.removeItem('cart');
                this.apiService.getCartById(updateCartData.id).subscribe(response => {
                  if (response[`code`] === 200) {
                    // console.log(res, 'output')
                    this.products = (JSON.parse(response[`details`].cart) as CartDetails[]);
                    this.insertImages(this.products);
                    this.getProductQuantity();
                    this.findGrandTotal();
                    this.apiService.totalItemsInCart();
                  }
                });
              }
            });
          }
        }));
      }
    }
    else if (type === 'cart') {
      const updateCart = {
        // id: window.atob(localStorage.getItem('cartId')),
        // user_id: window.atob(localStorage.getItem('id')),
        id: window.atob(sessionStorage.getItem('cartId')),
        user_id: window.atob(sessionStorage.getItem('id')),
        cart: JSON.stringify(cartArray)
      };
      this.subscribe.push(this.apiService.updateCart(updateCart).subscribe(res => {
        if (res[`code`] === 200) {
          this.apiService.totalItemsInCart();
        }
      }));
    }
  }

  // function to getCartItems from sessionStorage
  getCartItems(): void {
    if (sessionStorage.getItem('cart')) {
      this.products = (JSON.parse(window.atob(sessionStorage.getItem('cart'))) as CartDetails[]);
      // console.log(this.products, 'products')
      this.insertImages(this.products);
      // this.sparePriceChange(this.products);
      this.findGrandTotal();
    } else {
      this.products = [];
    }
  }

  // sparePriceChange(products: CartDetails[]): void{
  //   products.filter(eachProduct => {
  //     if (eachProduct.type === 'spare'){
  //       eachProduct.price = eachProduct.discountPrice;
  //     }
  //   });
  // }

  // function to findGrandTotal
  findGrandTotal(): void {
    let productPrice = 0; // default product price

    // calculating eachProduct price using forEach loop for products array
    this.products.forEach((ele) => {
      if (ele.productQuantity) { // checking if productQuantity is greater than 0
        // multiplying eachProduct price with eachProduct quantity and adding the result with productPrice
        productPrice = ((ele.discountPrice > 0 ? ele.discountPrice : ele.price) * ele.productQuantity) + productPrice;
      }
    });
    this.grandTotal = productPrice;
    this.shippingCharges = Math.round(+(0.05 * this.grandTotal).toFixed(3)); // 5% of totalCharges
    this.finalPrice = Math.round(this.grandTotal + this.shippingCharges); // adding price with shippingCharges and assigning to total
    this.gstPrice = Math.round(+(0.10 * this.finalPrice).toFixed(3));
  }

  // function to decrease productQuantity
  decrementProductQuantity(productCount): void {
    let productItemQuantity = this.products[productCount].productQuantity; // assign particular productQuantity according to index number
    productItemQuantity = productItemQuantity - 1; // decrementing productQuantity by 1
    if (productItemQuantity < 1) { // checking if productQuantity is less than 1 or not to open delete popup
      const show = document.getElementById('cartdeletemodal') as HTMLElement;
      show.classList.add('in');
      show.style.display = 'block';
      this.deleteItemIndex = productCount;
      const productId = this.products[this.deleteItemIndex].productId;
      const productType = this.products[this.deleteItemIndex].type;
      if (productType === 'product') {
        const productData = this.products.some(eachProduct => {
          return eachProduct.type === 'accessory' && eachProduct.productId === productId;
        });
        if (productData) {
          this.showDeleteMsg = true;
        } else {
          this.showDeleteMsg = false;
        }
      } else {
        this.showDeleteMsg = false;
      }
    } else {
      // if greater than 1 then adding the decremented productQuantity
      this.products[productCount].productQuantity = productItemQuantity;
      // if (localStorage.getItem('id') === null) { // checking if userId is present or not
      if (sessionStorage.getItem('id') === null) { // checking if userId is present or not
        sessionStorage.setItem('cart', window.btoa(JSON.stringify(this.products))); // setting the product value in sessionStorage
      } else {
        this.updateCartDetails(this.products, 'cart');
      }
      this.getProductQuantity();
    }
    this.findGrandTotal();
  }

  // function to remove item from cart
  removeItemFromCart(): void {
    let productIndex;
    if (this.deleteItemIndex > -1) { // checking deleteItemIndex i.e. product Index is greater than -1 or not
      const productId = this.products[this.deleteItemIndex].productId;
      const productType = this.products[this.deleteItemIndex].type;

      if (productType === 'product') {
        //this.products = this.products.filter( eachProduct => eachProduct.type === 'accessory' && eachProduct.productId !== productId );
        this.products = this.products.filter(eachProduct => {
          return !(eachProduct.type === 'accessory' && eachProduct.productId === productId);
        });
        productIndex = this.products.findIndex(eachProduct => eachProduct.productId === productId && eachProduct.type === 'product');
      }

      if (productIndex !== undefined && productIndex !== -1) {
        // splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
        this.products.splice(productIndex, 1); // removing the particular product from array
        this.products.forEach(eachProduct => {
          if (eachProduct.type === 'spare' && eachProduct.productId === productId) {
            eachProduct.discountPrice = 0;
          }
        });
      } else {
        this.products.splice(this.deleteItemIndex, 1); // removing the particular product from array
        this.products.forEach(eachProduct => {
          if (eachProduct.type === 'spare' && eachProduct.productId === productId) {
            eachProduct.discountPrice = 0;
          }
        });
      }
    }
    // if (localStorage.getItem('id') === null) { // checking if userId is present or not
    if (sessionStorage.getItem('id') === null) { // checking if userId is present or not
      sessionStorage.setItem('cart', window.btoa(JSON.stringify(this.products))); // setting products in sessionStorage
    } else {
      this.updateCartDetails(this.products, 'cart');
    }
    // hiding delete Modal after delete is done.
    const show = document.getElementById('cartdeletemodal') as HTMLElement;
    show.classList.remove('in');
    show.style.display = 'none';
    this.findGrandTotal();
    this.apiService.totalItemsInCart();
  }

  // function to hide delete Modal
  closeDeleteModal(): void {
    const show = document.getElementById('cartdeletemodal') as HTMLElement;
    show.classList.remove('in');
    show.style.display = 'none';
  }

  // function to increment productQuantity
  incrementProductQuantity(productCount): void {
    let productTotal = this.products[productCount].productQuantity; // assign particular productQuantity
    productTotal++; // incrementing productQuantity by 1
    this.products[productCount].productQuantity = productTotal; // assigning the incremented productQuantity to productArray
    // if (localStorage.getItem('id') === null) { // checking if userID present or not
    if (sessionStorage.getItem('id') === null) { // checking if userID present or not
      sessionStorage.setItem('cart', window.btoa(JSON.stringify(this.products)));
    } else {
      this.updateCartDetails(this.products, 'cart');
    }
    this.getProductQuantity();
    this.findGrandTotal();
  }


  // function to navigate after continue or sin-in/sign-up
  onContinue(type: string): void {
    // if (localStorage.getItem('id') && type === 'continue') {
    if (sessionStorage.getItem('id') && type === 'continue') {
      // if (localStorage.getItem('cartId')) {
      if (sessionStorage.getItem('cartId')) {
        this.router.navigate(['./deliveryAddress'], { relativeTo: this.activatedRoute });
      }
    } else {
      sessionStorage.setItem('cart', window.btoa(JSON.stringify(this.products)));
      // if (type === 'sign-up') {
      //   this.router.navigate(['/sign-up'], { queryParams: { origin: 'cart' } });
      // } else if (type === 'sign-in') {
      //   this.router.navigate(['/sign-in'], { queryParams: { origin: 'cart' } });
      // }

      if (type === 'sign-in') {
        this.router.navigate(['/sign-in'], { queryParams: { origin: 'cart' } });
      }
    }
  }

  // function to navigate according to type
  redirect(type: string): void {
    if (type === 'sign-up') {
      this.router.navigate(['/sign-up'], { queryParams: { origin: 'cart' } });
    } else if (type === 'sign-in') {
      this.router.navigate(['/sign-in'], { queryParams: { origin: 'cart' } });
    }
  }

  // used to unsubscribe the subscription
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.subscribe.forEach(sub => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }

}
