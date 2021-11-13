import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { CartDetails } from 'src/app/dataModels/cart-details';
import { RetroSpareDetails } from 'src/app/dataModels/retroSpareDetails';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retro-spares',
  templateUrl: './retro-spares.component.html',
  styleUrls: ['./retro-spares.component.css']
})
export class RetroSparesComponent implements OnInit {

  retroSpares = [];
  subCategories = [];
  pumpModels = [];
  retroSpareCode: Array<{ code: string }> = [];
  retroSpareDetails: RetroSpareDetails[] = [];
  spares = []; // used to store the spares
  subTotal: number; // used to store subTotal Amount
  productsInCart = []; // used to store added spares
  msgString: string = '';
  pumpType: string = '';
  pumpSubType: string = '';
  pumpModel: string = '';
  productId: string;
  parentId: string;
  gstAmount: number;
  shippingAmount: number;

  constructor(private apiService: ApiService, private toaster: ToastrService, private router: Router) {
    // this.retroSpareCode = this.activatedRoute.snapshot.data[`retroSpare`];
    // if ( this.retroSpareCode.length) {
    //   this.msgString = 'Please select spare model';
    // }else {
    //   this.msgString = 'No data found';
    // }
  }

  ngOnInit(): void {
    this.getRetroSpares();
  }

  getRetroSpares(): void {
    this.apiService.retroSpares().subscribe(res => {
      if (res[`code`] === 200) {
        this.retroSpares = res[`categories`];
        if (this.retroSpares.length) {
          this.checkEmptyData('product');
        } else {
          this.msgString = 'No data found';
        }
      }
    });
  }

  getPumpType(pumpId: string): void {
    // this.checkEmptyData('pumpModel');
    this.parentId = pumpId;
    this.pumpSubType = '';
    this.pumpModel = '';
    this.pumpModels = [];
    this.subCategories = [];
    this.spares = [];
    this.productsInCart = [];
    this.apiService.retroSubCategoryDetails(pumpId).subscribe(res => {
      if (res[`code`] === 200) {
        this.subCategories = res[`categories`];
        // console.log(this.subCategories)
        if (this.subCategories.length) {
          this.checkEmptyData('subCat');
        } else {
          this.msgString = 'No data found';
        }
      }
    });
  }

  getPumpSubType(subPumpId: string): void {
    this.pumpModels = [];
    this.pumpModel = '';
    this.spares = [];
    this.productsInCart = [];
    this.apiService.retroSubProductCategory(subPumpId).subscribe(res => {
      if (res[`code`] === 200) {
        // console.log('pump', pumpSeries)
        this.pumpModels = res[`products`];
        if (this.subCategories.length) {
          this.checkEmptyData('pumpModel');
        } else {
          this.msgString = 'No data found';
        }
      }
    });

  }

  checkEmptyData(type: string): void {
    if (type === 'product') {
      if (this.retroSpares.length) {
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
  getRetroSpareType(spareId: string): void {
    this.apiService.retroSubCategoryCategoryDetails(spareId).
      pipe(map(res => {
        if (res[`code`] === 200) {
          this.retroSpareDetails = res[`product`];
          // console.log(this.retroSpareDetails, 'test')
          this.spares = [];
          this.retroSpareDetails.forEach(eachRetroSpare => {
            if (eachRetroSpare.dev_status === 'Dev') {
              switch (eachRetroSpare.part) {
                case 'Rotor':
                  eachRetroSpare.image = 'assets/images/SparesImg/rotor.jpg';
                  break;
                case 'Stator':
                  eachRetroSpare.image = 'assets/images/icons/stator.png';
                  break;
                case 'Mech Seal':
                  eachRetroSpare.image = 'assets/images/SparesImg/Mech_seal.jpeg';
                  break;
                case 'UJ M Kit':
                  eachRetroSpare.image = 'assets/images/SparesImg/UJ_KIT.jpg';
                  break;
                case 'Pump Lantern':
                  eachRetroSpare.image = 'assets/images/SparesImg/PUMPLANTERN.BMP';
                  break;
                case 'Foot':
                  eachRetroSpare.image = 'assets/images/SparesImg/FOOT.BMP';
                  break;
                case 'Tie Rod':
                  eachRetroSpare.image = 'assets/images/SparesImg/TIEROD.BMP';
                  break;
                case 'Pump Housing':
                  eachRetroSpare.image = 'assets/images/SparesImg/PUMPHOUSING.BMP';
                  break;
                case 'End Cover':
                  eachRetroSpare.image = 'assets/images/SparesImg/END_COVER.BMP';
                  break;
                case 'Seal Plate':
                  eachRetroSpare.image = 'assets/images/SparesImg/SEAL_PLATE.BMP';
                  break;
                case 'Mech Seal Housing':
                  eachRetroSpare.image = 'assets/images/SparesImg/MECHSEALHOUSING.BMP';
                  break;
                case 'Shaft Stub Price':
                  eachRetroSpare.image = 'assets/images/SparesImg/SHAFT.BMP';
                  break;
                case 'Coupling Rod':
                  eachRetroSpare.image = 'assets/images/SparesImg/COUPLINGROD.BMP';
                  break;
                case 'B.S.R. Retaining Ring':
                  eachRetroSpare.image = 'assets/images/SparesImg/BOOTSEALRETAINER.BMP'; // will change
                  break;
                case 'Boot Seal Reatainer':
                  eachRetroSpare.image = 'assets/images/SparesImg/BOOTSEALRETAINER.BMP';
                  break;
                case 'Boot Seal Support Ring':
                  eachRetroSpare.image = 'assets/images/SparesImg/Boot_Seal_Support_Ring.bmp';
                  break;
                case 'Boot Seal':
                  eachRetroSpare.image = 'assets/images/SparesImg/BOOT_SEAL.BMP';
                  break;
                case 'Foot And Face Mounted Motor 240v 4Pole':
                  eachRetroSpare.image = 'assets/images/SparesImg/Foot_face_mounted_motor.jpg';
                  break;
                case 'Foot And Face Mounted Motor 240v 6Pole':
                  eachRetroSpare.image = 'assets/images/SparesImg/Foot_face_mounted_motor.jpg';
                  break;
                case 'Bearing Cover':
                  eachRetroSpare.image = 'assets/images/SparesImg/BEARINGCOVER.BMP';
                  break;
                case 'Bearing Spacer External':
                  eachRetroSpare.image = 'assets/images/SparesImg/BEARINGSPACER.BMP';
                  break;
                case 'Mechanical Seal':
                  eachRetroSpare.image = 'assets/images/SparesImg/Mechanical-Seal_image.jpg';
                  break;
                case 'Ball_Bearing':
                  eachRetroSpare.image = 'assets/images/SparesImg/BALLBEARING.BMP';
                  break;
                case 'Foot Support For Stator Housing':
                  eachRetroSpare.image = 'assets/images/SparesImg/FOOT_FOR_STATOR_HOUSING.BMP';
                  break;
                case 'Foot Support For Bearing Housing':
                  eachRetroSpare.image = 'assets/images/SparesImg/FOOTFORBEARINGHOUSING.BMP';
                  break;
                case 'Stator Housing':
                  eachRetroSpare.image = 'assets/images/SparesImg/STATORHOUSING.BMP';
                  break;
                case 'Bonded Bush':
                  eachRetroSpare.image = 'assets/images/SparesImg/BONDEDBUSH.BMP';
                  break;
                case 'Bearning Housing':
                  eachRetroSpare.image = 'assets/images/SparesImg/BEARINGHOUSING.BMP';
                  break;
                case 'Ball Bearing Small':
                  eachRetroSpare.image = 'assets/images/SparesImg/BALLBEARING.BMP'; // will change
                  break;
                case 'Ball Bearing Large':
                  eachRetroSpare.image = 'assets/images/SparesImg/BALLBEARING.BMP'; // will change
                  break;
                case 'Mech Seal Retainer':
                  eachRetroSpare.image = 'assets/images/SparesImg/MECHANICHALSEALRETAINER.BMP';
                  break;
                case 'Stator Support Ring':
                  eachRetroSpare.image = 'assets/images/SparesImg/STATOR_SUPPORT_RING.jpg';
                  break;
                case 'Drive Shaft':
                  eachRetroSpare.image = 'assets/images/SparesImg/SHAFT.BMP.BMP';
                  break;
                case 'Abutment Ring':
                  eachRetroSpare.image = 'assets/images/SparesImg/ABUTMENT_RING.jpg';
                  break;
                case 'Bearing':
                  eachRetroSpare.image = 'assets/images/SparesImg/BALLBEARING.BMP'; // will change
                  break;
                default:
                  eachRetroSpare.image = 'assets/images/icons/accessories2.png';
              }
              this.spares.push(eachRetroSpare);
            }
          });
        }
        return this.spares;
      }))
      .subscribe(res => {
        this.spares = res;
        this.spares.sort((a, b) => a.part.localeCompare(b.part));
        if (this.spares.length === 0) {
          this.msgString = 'No data found';
        }
      });
  }

  // function to decrement quantity
  consumptionSpareDecrement(spareCount): void {
    this.spares[spareCount].quantity--;
    if (this.spares[spareCount].quantity < 1) {
      this.productsInCart.forEach((res, index) => {
        if ((res.part === this.spares[spareCount].part)) {
          this.productsInCart.splice(index, 1);
        }
      });
    }
    this.findGrandTotal();
  }

  // function to increment quantity
  consumptionSpareIncrement(spareCount): void {
    this.spares[spareCount].quantity++;
    if (this.spares[spareCount].quantity === 1) {
      this.router.navigate(['/comingSoon']);
      // this.productsInCart.push(this.spares[spareCount]); to be uncomment when price are inserted
      // console.log(this.productsInCart, 'prod')
    }
    // this.findGrandTotal();
  }


  // function to calculate the total price of selected product, accessory and spare
  findGrandTotal(): void {
    let sparePrice = 0; // default spare price 0
    let total = 0;
    // using loop to get the selected spares price
    this.spares.forEach((ele) => {
      if (ele.quantity) {
        sparePrice = (ele.price * ele.quantity) + sparePrice;
      }
    });
    // calculating grandTotal
    // this.gstAmount = 0.10 * sparePrice;
    // this.subTotal = Math.round(sparePrice + this.gstAmount);
    this.shippingAmount = Math.round(+(0.05 * sparePrice).toFixed(3));
    total = Math.round(sparePrice + this.shippingAmount);
    this.gstAmount = 0.10 * (sparePrice + this.shippingAmount);
    this.subTotal = Math.round(+(total + this.gstAmount).toFixed(3));
  }

  // function to add product, accessory and spares to cart
  addToCart(): void {
    const sparesToAdd = []; // sparesToAdd[] to add spare
    // array to push selected Spare
    this.productsInCart.forEach(ele => {
      // let driveType = {
      //   desc: ''
      // };
      if (ele.quantity >= 1) {
        const spare = new CartDetails(ele.id, ele.part,
          ele.original_part_code, ele.price, 0, 'spare', 0, '0', '0', '0', '0', '0', '0', ele.code, ele.quantity);
        sparesToAdd.push(spare);
      }
    });
    // if (localStorage.getItem('id')) { // check if userId is present or not in localStorage
    if (sessionStorage.getItem('id')) { // check if userId is present or not in sessionStorage
      // tslint:disable-next-line: max-line-length
      // if (localStorage.getItem('cartId') === null) { // check if cartId is present or not in localStorage(if not present the value is null)
      if (sessionStorage.getItem('cartId') === null) { // check if cartId is present or not in sessionStorage(if not present the value is null)
        // tslint:disable-next-line: max-line-length
        if (sessionStorage.getItem('cart') === null) { // check if cart is present or not in localStorage(if not present the value is null)
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
              this.getRetroSpares();
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
        this.getRetroSpares();
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
      // const cartAccessoryDataSet = new Array(); // creating new accessoryArray
      const cartSpareDataSet = new Array(); // creating new spareArray
      let spareNotExist = true; // check if spare type is present in cartLocalData
      // for loop starts
      for (let i = 0; i < cartDetails.length; i++) {
        if (cartDetails[i].type === 'spare') { // checking productType
          spareNotExist = false;
          for (let j = 0; j < sparesToAdd.length; j++) {
            if (sparesToAdd[j].description === cartDetails[i].description
              && sparesToAdd[j].driveType === cartDetails[i].driveType) {
              cartDetails[i].productQuantity++;
            } else {
              /* some() is used to checks whether at least one of the elements of the array satisfies
                the condition then returns true (and does not check the remaining values) otherwise return false*/
              if (!cartDetails.some(res => (res.description === sparesToAdd[j].description) &&
                (res.driveType === sparesToAdd[j].driveType)) &&
                (!cartSpareDataSet.some(res => (res.description === sparesToAdd[j].description)
                  && (res.driveType === sparesToAdd[j].driveType)))) {
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
          this.getRetroSpares();
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

      // console.log(cartDetails, 'cartDetails');

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
          this.getRetroSpares();
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
      this.getRetroSpares();
    }
  }


}
