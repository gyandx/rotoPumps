import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ProductCategories } from 'src/app/dataModels/product-categories';
import { ApiService } from 'src/app/services/api.service';
import { SubProductCategories } from 'src/app/dataModels/sub-product-categories';
import { SubProductSubCategories } from 'src/app/dataModels/sub-product-sub-categories';
import { ProductDetails } from 'src/app/dataModels/product-details';
import { CartDetails } from 'src/app/dataModels/cart-details';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-roto-spares',
  templateUrl: './roto-spares.component.html',
  styleUrls: ['./roto-spares.component.css']
})
export class RotoSparesComponent implements OnInit {

  productData: ProductCategories[] = new Array(); // variable to store product data
  subCategories: SubProductCategories[] = new Array(); // assigning subCategories array of SubProductCategories type
  pumpModels: SubProductSubCategories[] = new Array(); // assigning pumpModel code and model
  productsDetail: Array<ProductDetails> = new Array<ProductDetails>(); // to store product details.
  singleProductDetail: {};
  spares = []; // used to store the spares
  subTotal: number; // used to store subTotal Amount
  productsInCart = []; // used to store added spares
  parentId: string; // used to store id of parentProduct
  productId: string;
  productPole: number;
  msgString: string = '';
  pumpType: string = '';
  pumpSubType: string = '';
  pumpModel: string = '';
  gstAmount: number;
  shippingAmount: number;

  constructor(private apiService: ApiService, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.getPumpModels();
  }

  getPumpModels(): void {
    this.apiService.homePage().pipe(map(res => {
      if (res[`code`] === 200) {
        const pumpType: ProductCategories[] = res[`categories`]; // assigning pump categories from response in pumpType Array
        const pumpData = []; // used to store pump categories
        pumpType.forEach(eachPump => {
          if (eachPump.name !== 'Roto Spares') {
            if (eachPump.name === 'Surface Agri pumps') {
              eachPump['type'] = "AG series"
            } else if (eachPump.name === 'Multi-purpose Pumps') {
              eachPump['type'] = "DC series";
            }
            pumpData.push(eachPump);
          }
        });
        return pumpData;
      }
    })).subscribe(res => {
      if (res.length > 0) {
        this.productData = res; // assign pump categories except spares in product data
        // console.log(this.productData, 'data')
        if (this.productData.length) {
          this.checkEmptyData('product');
        } else {
          this.msgString = 'No data found';
        }
      }
    });
  }

  checkEmptyData(type: string): void {
    if (type === 'product') {
      if (this.productData.length) {
        this.msgString = 'Please select a pump type';
      }
    } else if (type === 'subCat') {
      if (this.subCategories.length) {
        this.msgString = 'Please select pump sub model';
      }
    } else if (type === 'pumpModel') {
      if (this.pumpModels.length) {
        this.msgString = 'Please select pump model';
      }
    }
  }

  // function used to get Pump subCategory by passing pumpCategory Id
  getPumpType(pumpId: string): void {
    // this.checkEmptyData('pumpModel');
    this.parentId = pumpId;
    this.pumpSubType = '';
    this.pumpModel = '';
    this.pumpModels = [];
    this.subCategories = [];
    this.spares = [];
    this.productsInCart = [];
    this.apiService.subCategory(pumpId).subscribe(res => {
      if (res[`code`] === 200) {
        this.subCategories = res[`categories`];
        if (this.subCategories.length) {
          this.checkEmptyData('subCat');
        } else {
          this.msgString = 'No data found';
        }
      }
    });
  }

  // function used to get Pump Model by passing Pump subCategory id
  getPumpSubType(subPumpId: string): void {
    this.pumpModels = [];
    this.pumpModel = '';
    this.spares = [];
    this.productsInCart = [];
    if (this.pumpType === '1' && this.pumpSubType === '2') {
      this.apiService.productsByCategory(subPumpId, this.parentId).subscribe(res => {
        if (res[`code`] === 200) {
          const pumpData = res[`products`];
          pumpData.forEach(eachModel => {
            if (eachModel.pole === '4') {
              this.pumpModels.push({ code: eachModel.code, pole: eachModel.pole });
            }
          });
          if (this.subCategories.length) {
            this.checkEmptyData('pumpModel');
          } else {
            this.msgString = 'No data found';
          }
        }
      });
    } else {
      this.apiService.productsByCategory(subPumpId, this.parentId).subscribe(res => {
        if (res[`code`] === 200) {
          this.pumpModels = res[`products`];
          if (this.subCategories.length) {
            this.checkEmptyData('pumpModel');
          } else {
            this.msgString = 'No data found';
          }
        }
      });
    }
  }

  // function used to get productDetails by passing pumpModel and code
  getPumpDetails(pumpModelIndex: string): void {
    const pumpModelData = this.pumpModels[+pumpModelIndex];
    this.productsDetail = [];
    this.apiService.rotoSpareDetails(pumpModelData.code, pumpModelData.pole).
      pipe(map(res => {
        if (res[`code`] === 200) {
          this.productsDetail = res[`product`];
          // console.log('product0', this.productsDetail)
          this.productId = this.productsDetail[0].details.id;
          this.productPole = this.productsDetail[0].details.pole;
          this.spares = [];
          const newSpares = [];
          // console.log(this.productsDetail, 'detials');
          if (this.productsDetail.length) {
            this.productsDetail[0].spares.forEach(eachSpare => {
              if (eachSpare.productPrice !== null && eachSpare.productPrice !== 0) {
                // eachSpare[`motorVolt`] = this.productsDetail[0].motor.volt;
                switch (eachSpare.productName) {
                  case 'Rotor':
                    eachSpare.imgSrc = 'assets/images/SparesImg/rotor.jpg';
                    break;
                  case 'Stator':
                    eachSpare.imgSrc = 'assets/images/icons/stator.png';
                    break;
                  case 'Mech Seal':
                    eachSpare.imgSrc = 'assets/images/SparesImg/Mech_seal.jpeg';
                    break;
                  case 'UJ M Kit':
                    eachSpare.imgSrc = 'assets/images/SparesImg/UJ_KIT.jpg';
                    break;
                  case 'Pump Lantern':
                    eachSpare.imgSrc = 'assets/images/SparesImg/PUMPLANTERN.BMP';
                    break;
                  case 'Foot':
                    eachSpare.imgSrc = 'assets/images/SparesImg/FOOT.BMP';
                    break;
                  case 'Tie Rod':
                    eachSpare.imgSrc = 'assets/images/SparesImg/TIEROD.BMP';
                    break;
                  case 'Pump Housing':
                    eachSpare.imgSrc = 'assets/images/SparesImg/PUMPHOUSING.BMP';
                    break;
                  case 'End Cover':
                    eachSpare.imgSrc = 'assets/images/SparesImg/END_COVER.BMP';
                    break;
                  case 'Seal Plate':
                    eachSpare.imgSrc = 'assets/images/SparesImg/SEAL_PLATE.BMP';
                    break;
                  case 'Mech Seal Housing':
                    eachSpare.imgSrc = 'assets/images/SparesImg/MECHSEALHOUSING.BMP';
                    break;
                  case 'Shaft Stub Price':
                    eachSpare.imgSrc = 'assets/images/SparesImg/SHAFT.BMP';
                    break;
                  case 'Coupling Rod':
                    eachSpare.imgSrc = 'assets/images/SparesImg/COUPLINGROD.BMP';
                    break;
                  case 'B.S.R. Retaining Ring':
                    eachSpare.imgSrc = 'assets/images/SparesImg/BOOTSEALRETAINER.BMP'; // will change
                    break;
                  case 'Boot Seal Reatainer':
                    eachSpare.imgSrc = 'assets/images/SparesImg/BOOTSEALRETAINER.BMP';
                    break;
                  case 'Boot Seal Support Ring':
                    eachSpare.imgSrc = 'assets/images/SparesImg/Boot_Seal_Support_Ring.bmp';
                    break;
                  case 'Boot Seal':
                    eachSpare.imgSrc = 'assets/images/SparesImg/BOOT_SEAL.BMP';
                    break;
                  case 'Foot And Face Mounted Motor 240v 4Pole':
                    eachSpare.imgSrc = 'assets/images/SparesImg/Foot_face_mounted_motor.jpg';
                    break;
                  case 'Foot And Face Mounted Motor 240v 6Pole':
                    eachSpare.imgSrc = 'assets/images/SparesImg/Foot_face_mounted_motor.jpg';
                    break;
                  case 'Bearing Cover':
                    eachSpare.imgSrc = 'assets/images/SparesImg/BEARINGCOVER.BMP';
                    break;
                  case 'Bearing Spacer External':
                    eachSpare.imgSrc = 'assets/images/SparesImg/BEARINGSPACER.BMP';
                    break;
                  case 'Mechanical Seal':
                    eachSpare.imgSrc = 'assets/images/SparesImg/Mechanical-Seal_image.jpg';
                    break;
                  case 'Ball_Bearing':
                    eachSpare.imgSrc = 'assets/images/SparesImg/BALLBEARING.BMP';
                    break;
                  case 'Foot Support For Stator Housing':
                    eachSpare.imgSrc = 'assets/images/SparesImg/FOOT_FOR_STATOR_HOUSING.BMP';
                    break;
                  case 'Foot Support For Bearing Housing':
                    eachSpare.imgSrc = 'assets/images/SparesImg/FOOTFORBEARINGHOUSING.BMP';
                    break;
                  case 'Stator Housing':
                    eachSpare.imgSrc = 'assets/images/SparesImg/STATORHOUSING.BMP';
                    break;
                  case 'Bonded Bush':
                    eachSpare.imgSrc = 'assets/images/SparesImg/BONDEDBUSH.BMP';
                    break;
                  case 'Bearning Housing':
                    eachSpare.imgSrc = 'assets/images/SparesImg/BEARINGHOUSING.BMP';
                    break;
                  case 'Ball Bearing Small':
                    eachSpare.imgSrc = 'assets/images/SparesImg/BALLBEARING.BMP'; // will change
                    break;
                  case 'Ball Bearing Large':
                    eachSpare.imgSrc = 'assets/images/SparesImg/BALLBEARING.BMP'; // will change
                    break;
                  case 'Mech Seal Retainer':
                    eachSpare.imgSrc = 'assets/images/SparesImg/MECHANICHALSEALRETAINER.BMP';
                    break;
                  case 'Stator Support Ring':
                    eachSpare.imgSrc = 'assets/images/SparesImg/STATOR_SUPPORT_RING.jpg';
                    break;
                  case 'Drive Shaft':
                    eachSpare.imgSrc = 'assets/images/SparesImg/SHAFT.BMP.BMP';
                    break;
                  case 'Abutment Ring':
                    eachSpare.imgSrc = 'assets/images/SparesImg/ABUTMENT_RING.jpg';
                    break;
                  case 'Bearing':
                    eachSpare.imgSrc = 'assets/images/SparesImg/BALLBEARING.BMP'; // will change
                    break;
                  default:
                    eachSpare.imgSrc = 'assets/images/icons/accessories2.png';
                }
                newSpares.push(eachSpare);
              }
            });
            this.spares.push(...newSpares);
          }else{
            this.spares = [];
          }
        }
        return this.spares;
      })).subscribe(res => {
        // console.log(this.spares, 'spares');
        this.spares = res;
        this.spares.sort((a, b) => a.productName.localeCompare(b.productName));
        if (this.spares.length >= 0) {
          this.msgString = 'No data found';
        }
      });
  }

  // getPumpDetails(pumpModelIndex: string): void{
  //   const pumpModelData = this.pumpModels[+pumpModelIndex];
  //   this.apiService.rotoSpareDetails(pumpModelData.code, pumpModelData.pole).subscribe(
  //     res => {
  //       if (res[`code`] === 200){
  //         this.productsDetail = res[`product`];
  //         this.productId = this.productsDetail[0].details.id;
  //         this.singleProductDetail = this.productsDetail[0].details;
  //         this.productPole = this.productsDetail[0].details.pole;
  //         this.spares = [];
  //         const newSpares = [];
  //         this.productsDetail[0].spares.forEach(eachSpare => {
  //           if (eachSpare.productPrice !== null && eachSpare.productPrice !== 0) {
  //             eachSpare[`motorVolt`] = this.productsDetail[0].motor.volt;
  //             // console.log(eachSpare, 'spare')
  //             newSpares.push(eachSpare);
  //           }
  //         });
  //         if (newSpares.length < 0 ){
  //           this.msgString = 'No data found';
  //         }else{
  //           this.spares.push(...newSpares);
  //         }
  //       }
  //     }
  //   )
  // }

  // function to decrement spareQuantity
  consumptionSpareDecrement(spareCount): void {
    this.spares[spareCount].spareQuantity--;
    if (this.spares[spareCount].spareQuantity < 1) {
      this.productsInCart.forEach((res, index) => {
        if ((res.productName === this.spares[spareCount].productName) && (res.motorVolt === this.spares[spareCount].motorVolt)) {
          this.productsInCart.splice(index, 1);
        }
      });
      // const indexNum = this.productsInCart.indexOf(res => {
      //   // tslint:disable-next-line: no-unused-expression
      //   ((res.productName === this.spares[spareCount].productName) && (res.motorVolt === this.spares[spareCount].motorVolt));
      // });
      // console.log(indexNum);
    }
    // this.productsInCart.splice(spareCount, 1);
    this.findGrandTotal();
    // console.log(this.productsInCart);
  }

  // function to increment spareQuantity
  consumptionSpareIncrement(spareCount): void {
    this.spares[spareCount].spareQuantity++;
    if (this.spares[spareCount].spareQuantity === 1) {
      this.productsInCart.push(this.spares[spareCount]);
    }
    this.findGrandTotal();
  }


  // function to calculate the total price of selected product, accessory and spare
  findGrandTotal(): void {
    let sparePrice = 0; // default spare price 0
    let total = 0;
    // using loop to get the selected spares price
    this.spares.forEach((ele) => {
      if (ele.spareQuantity) {
        sparePrice = (ele.productPrice * ele.spareQuantity) + sparePrice;
      }
    });
    // calculating shipping, gst & grandTotal
    this.shippingAmount = Math.round(+(0.05 * sparePrice).toFixed(3));
    total = Math.round(sparePrice + this.shippingAmount);
    this.gstAmount = 0.10 * (sparePrice + this.shippingAmount);
    this.subTotal = Math.round(+(total + this.gstAmount).toFixed(3));
  }

  // function to add product, accessory and spares to cart
  addToCart(): void {
    const sparesToAdd = []; // sparesToAdd[] to add spare
    const driveType = { desc: '' };
    // array to push selected Spare
    this.productsInCart.forEach(ele => {
      if (ele.spareQuantity >= 1) {
        const spare = new CartDetails(this.productId, ele.productName,
        ele.productDesc, ele.productPrice, ele.discountPrice, 'spare',
        this.productPole, '0', '0', '0', '0', '0', '0', driveType.desc, ele.spareQuantity);
        sparesToAdd.push(spare);
      }
      // console.log('spare', sparesToAdd);
    });
    // if (localStorage.getItem('id')) { // check if userId is present or not in localStorage
    if (sessionStorage.getItem('id')) { // check if userId is present or not in sessionStorage
      // tslint:disable-next-line: max-line-length
      // if (localStorage.getItem('cartId') === null) { // check if cartId is present or not in localStorage(if not present the value is null)
      if (sessionStorage.getItem('cartId') === null) { // check if cartId is present or not in sessionStorage(if not present the value is null)
        // tslint:disable-next-line: max-line-length
        if (sessionStorage.getItem('cart') === null) { // check if cart is present or not in sessionStorage(if not present the value is null)
          const cartArray = []; // declaring an empty array
          cartArray.push(...sparesToAdd); // pushing sparesToAdd in cartArray

          // cartData object with userId and cartArray to pass as parameter(in post body) in addToCart api
          const cartData = {
            // user_id: window.atob(localStorage.getItem('id')),
            user_id: window.atob(sessionStorage.getItem('id')),
            cart: JSON.stringify(cartArray)
          };
          // calling addToCart api
          this.apiService.addToCart(cartData).subscribe(res => {
            if (res[`code`] === 200) {
              const cartItems = JSON.parse(res[`cart_details`].cart);
              // localStorage.setItem('cartId', window.btoa(res[`cart_details`].id));
              sessionStorage.setItem('cartId', window.btoa(res[`cart_details`].id));
              this.toaster.success('Successfully Added To Cart');
              this.apiService.totalItemsInCart();
              this.pumpSubType = '';
              this.pumpType = '';
              this.pumpModel = '';
              this.pumpModels = [];
              this.subCategories = [];
              this.spares = [];
              this.productsInCart = [];
              this.getPumpModels();
            }
          });

        }
        else {
          // fetching data from sessionStorage and assign to cartLocalData
          const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('cart'))) as CartDetails[];
          this.updateCartDetails(cartLocalData, sparesToAdd, 'add'); // calling upDataCart to add
        }
      }
      // userId is present
      else {
        // calling getCartById api to get cartData using cartId
        // this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
        this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
          if (res[`code`] === 200) {
            let cartDetails;
            cartDetails = (JSON.parse(res[`details`].cart) as CartDetails[]);
            this.updateCartDetails(cartDetails, sparesToAdd, 'update'); // calling upDataCart to update
          }
        }, err => {
          this.toaster.error(err?.error?.message || err?.message);
        });
      }
    }
    else {
      if (sessionStorage.getItem('cart') && sessionStorage.getItem('cart').length > 2) {
        const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('cart'))) as CartDetails[];
        this.updateCartDetails(cartLocalData, sparesToAdd, 'session'); // calling upDataCart to store in session
      }
      else {
        const cartArray = [];
        cartArray.push(...sparesToAdd);
        sessionStorage.setItem('cart', window.btoa(JSON.stringify(cartArray)));
        this.apiService.totalItemsInCart();
        this.pumpSubType = '';
        this.pumpType = '';
        this.pumpModel = '';
        this.pumpModels = [];
        this.subCategories = [];
        this.spares = [];
        this.productsInCart = [];
        this.getPumpModels();
      }
      this.toaster.success('Successfully Added To Cart');
    }
  }

  updateCartDetails(cartDetails, sparesToAdd, type: string): void {
    let cartItems; // to store cartProducts
    // checking cartDetails length and if length 0 then push data in cartDetails
    if (cartDetails.length <= 0) {
      cartDetails.push(...sparesToAdd);
    }
    // cartDetails length is greater than 0
    else {
      const cartAccessoryDataSet = new Array(); // creating new accessoryArray
      const cartSpareDataSet = new Array(); // creating new spareArray
      let spareNotExist = true; // check if spare type is present in cartLocalData
      // for loop starts
      for (let i = 0; i < cartDetails.length; i++) {
        if (cartDetails[i].type === 'spare') { // checking productType
          spareNotExist = false;
          for (let j = 0; j < sparesToAdd.length; j++) {
            if (sparesToAdd[j].description === cartDetails[i].description) {
              cartDetails[i].productQuantity++;
            } else {
              /* some() is used to checks whether at least one of the elements of the array satisfies
                the condition then returns true (and does not check the remaining values) otherwise return false*/
              if ((!cartDetails.some(res => res.description === sparesToAdd[j].description)) &&
                (!cartSpareDataSet.some(res => res.description === sparesToAdd[j].description))) {
                cartSpareDataSet.push(sparesToAdd[j]);
              }
            }
          }
        }
      }
      // for loops ends

      // checking to push if cartSpareDataSet length is greater than 0
      if (cartSpareDataSet.length > 0) {
        cartDetails.push(...cartSpareDataSet);
      }
      // checking to push if spare exist
      if (spareNotExist) {
        cartDetails.push(...sparesToAdd);
      }
    }

    if (type === 'add') {
      // cartData object with userId and cartArray to pass as parameter(in post body) in addToCart api
      const cartData = {
        // user_id: window.atob(localStorage.getItem('id')),
        user_id: window.atob(sessionStorage.getItem('id')),
        cart: JSON.stringify(cartDetails)
      };

      // calling addToCart api to add products in cart
      this.apiService.addToCart(cartData).subscribe(res => {
        if (res[`code`] === 200) {
          cartItems = JSON.parse(res[`cart_details`].cart);
          // localStorage.setItem('cartId', window.btoa(res[`cart_details`].id));
          sessionStorage.setItem('cartId', window.btoa(res[`cart_details`].id));
          this.toaster.success('Successfully Added To Cart');
          this.apiService.totalItemsInCart();
          this.pumpSubType = '';
          this.pumpType = '';
          this.pumpModel = '';
          this.pumpModels = [];
          this.subCategories = [];
          this.spares = [];
          this.productsInCart = [];
          this.getPumpModels();
        }
      });
    }
    else if (type === 'update') {
      // cartData object with userId , cartId and cartArray to pass as parameter(in post body) in updateToCart api
      const updateCart = {
        // id: window.atob(localStorage.getItem('cartId')),
        // user_id: window.atob(localStorage.getItem('id')),
        id: window.atob(sessionStorage.getItem('cartId')),
        user_id: window.atob(sessionStorage.getItem('id')),
        cart: JSON.stringify(cartDetails)
      };

      // calling updateCart api
      this.apiService.updateCart(updateCart).subscribe(res => {
        if (res[`code`] === 200) {
          this.toaster.success('Cart successfully stored');
          this.apiService.totalItemsInCart();
          this.pumpSubType = '';
          this.pumpType = '';
          this.pumpModel = '';
          this.pumpModels = [];
          this.subCategories = [];
          this.spares = [];
          this.productsInCart = [];
          this.getPumpModels();
        }
      }, err => {
        this.toaster.error(err?.error?.message || err?.message);
      });
    }
    else if (type === 'session') {
      sessionStorage.setItem('cart', window.btoa(JSON.stringify(cartDetails)));
      this.apiService.totalItemsInCart();
      this.pumpSubType = '';
      this.pumpType = '';
      this.pumpModel = '';
      this.pumpModels = [];
      this.subCategories = [];
      this.spares = [];
      this.productsInCart = [];
      this.getPumpModels();
    }
  }

}
