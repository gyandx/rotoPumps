import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { environment } from '../../environments/environment.prod';
import { take } from 'rxjs/operators';
import { OrderDetails } from '../dataModels/order-details';


@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnDestroy {


  cartValue = new BehaviorSubject<number>(0); // cartValue of behaviourSubject to reflect change in cartQuantity
  orderDetails = new BehaviorSubject<OrderDetails>({} as any); /* orderDetails of behaviourSubject to reflect change in orderDetails
                                                  using during payment-successfull*/
  subscribe: Subscription;    // subscribe used to store subscription
  private countryData: string = './assets/countryList/country.json'; // country-list data


  constructor(private httpService: HttpClient) {
  }

  totalItemsInCart(): void {
    this.updateItemsInCart();
  }

  // used to update the cartQuantity value
  updateItemsInCart(): void {
    // if (localStorage.getItem('id') === null) {
    if (sessionStorage.getItem('id') === null) {
      if (sessionStorage.getItem('cart') !== null) {
        const cartData = JSON.parse(window.atob(sessionStorage.getItem('cart')));
        this.cartValue.next(cartData.length);
      }else{
        this.cartValue.next(0);
      }
    } else {
      // if (localStorage.getItem('cartId')) {
      if (sessionStorage.getItem('cartId')) {
        // take is used to emit only the first count values emitted by the source Observable and the unsubscribe automatically.
        // this.subscribe = this.getCartById(window.atob(localStorage.getItem('cartId'))).pipe(take(1)).subscribe(res => {
        this.subscribe = this.getCartById(window.atob(sessionStorage.getItem('cartId'))).pipe(take(1)).subscribe(res => {
          if (res[`code`] === 200) {
            if (res[`details`] !== null){
              const cartData = JSON.parse(res[`details`].cart);
              if (cartData === null) {
                this.cartValue.next(0);
              } else {
                this.cartValue.next(cartData.length);
              }
            }else{
              this.cartValue.next(0);
            }
          }
        });
      }else {
        if (sessionStorage.getItem('cart')){
          const cartData = JSON.parse(window.atob(sessionStorage.getItem('cart')));
          this.cartValue.next(cartData.length);
        }else{
          this.cartValue.next(0);
        }
      }
    }
  }

  // used to categorise products
  productCategories(eachProduct): void {
    if (eachProduct?.description.includes("Surface Agri")) {
      eachProduct[`imgSrc`] = "assets/images/banner/surface-banner.png";
      if (eachProduct?.description.includes("Close Coupled")) {
        eachProduct[
          `routePath`
        ] = `/surfaceAgriPumps/1/closedCouplePump/${eachProduct?.id}/${eachProduct?.category_id}/${eachProduct?.code}/${eachProduct?.pole}`;
      } else if (eachProduct?.description.includes("Bare Shaft")) {
        eachProduct[
          `routePath`
        ] = `/surfaceAgriPumps/1/bareShaftPump/${eachProduct?.sub_category_id}/${eachProduct?.category_id}`;
      }
    } else if (eachProduct?.description.includes("Multipurpose")) {
      eachProduct[`imgSrc`] = "assets/images/card-images/multi-pump.png";
      if (eachProduct?.description.includes("Close Coupled")) {
        eachProduct[
          `routePath`
        ] = `/multiPurposePumps/2/closedCouplePump/${eachProduct?.id}/${eachProduct?.category_id}/${eachProduct?.code}/${eachProduct?.pole}`;
      } else if (eachProduct?.description.includes("Bare Shaft")) {
        eachProduct[
          `routePath`
        ] = `/multiPurposePumps/2/bareShaftPump/${eachProduct?.sub_category_id}/${eachProduct?.category_id}`;
      }
    }
  }

  // website Api's
  homePage = () => this.httpService.get(`${environment.apiUrl}home`);
  subCategory = (productId) => this.httpService.get(`${environment.apiUrl}category/${productId}`);
  productsByCategory = (productId, parentId) => this.httpService.get(`${environment.apiUrl}getProductsByCategory/${productId}/${parentId}`);
  productById = (productId, type) => this.httpService.get(`${environment.apiUrl}products/${productId}/${type}`);
  rotoSpareDetails = (productId, type) => this.httpService.get(`${environment.apiUrl}roto-spare-products/${productId}/${type}`);
  retroSpares = () => this.httpService.get(`${environment.apiUrl}retro-categories`);
  retroSubCategoryDetails = (productId) => this.httpService.get(`${environment.apiUrl}retro-category/${productId}`);
  retroSubProductCategory = (productId) => this.httpService.get(`${environment.apiUrl}getRetroProductsByCategory/${productId}`);
  retroSubCategoryCategoryDetails = (productId) => this.httpService.get(`${environment.apiUrl}retro-products/${productId}`);
  imageCarousel = (productId) => this.httpService.get(`${environment.apiUrl}get-images/${productId}`);
  tableList = (motorModel) => this.httpService.get(`${environment.apiUrl}list-bareshaft/${motorModel}`);
  bareShaftTableDetails = (productId, type, tableId) => this.httpService.get
  (`${environment.apiUrl}products/${productId}/${type}/${tableId}`)
  motorTypes = () => this.httpService.get(`${environment.apiUrl}motor_type`);
  driveTypes = (motorCode) => this.httpService.get(`${environment.apiUrl}get-drivebymodel/${motorCode}`);
  dataDriveTypes = (productCode , motorcode) => this.httpService.get(`${environment.apiUrl}get-productByDrive/${productCode}/${motorcode}`);
  contactUs = (userData) => this.httpService.post(`${environment.apiUrl}contact-us`, userData);
  search = (searchData) => this.httpService.post(`${environment.apiUrl}search-products-model`, searchData);
  mostTrendingProducts = () => this.httpService.get(`${environment.apiUrl}trending-products`);

  // enquiry form
  addEnquiry = (userData) => this.httpService.post(`${environment.apiUrl}add-enquiry`, userData);
  addDealer = (userData) => this.httpService.post(`${environment.apiUrl}add-dealer`, userData);

  // account Api's
  login = (userData) => this.httpService.post(`${environment.apiUrl}login`, userData);
  register = (userData) => this.httpService.post(`${environment.apiUrl}register`, userData);
  addAddress = (addressData) => this.httpService.post(`${environment.apiUrl}address/add`, addressData);
  getAllAddress = (userId) => this.httpService.post(`${environment.apiUrl}address`, userId);
  getUserDetails = (userId) => this.httpService.get(`${environment.apiUrl}get-details/${userId}`);
  getAddressById = (addressId) => this.httpService.get(`${environment.apiUrl}address/${addressId}`);
  updatePersonalDetails = (userData) => this.httpService.post(`${environment.apiUrl}profile`, userData);
  updatePassword = (userData) => this.httpService.post(`${environment.apiUrl}update-password`, userData);
  forgotPassword = (passwordData) => this.httpService.post(`${environment.apiUrl}forgot-password`, passwordData);
  deleteAddress = (addressId) => this.httpService.delete(`${environment.apiUrl}address/${addressId}`);
  updateAddress = (addressData) => this.httpService.post(`${environment.apiUrl}update-address`, addressData);
  tabularData = (productId, type) => this.httpService.get(`${environment.apiUrl}pump-details/${productId}/${type}`);
  footerContents = () => this.httpService.get(`${environment.apiUrl}cms_pages`);
  awardAndCertificates = () => this.httpService.get(`${environment.apiUrl}get-awards-and-certificates`);
  researchAndDevelopment = () => this.httpService.get(`${environment.apiUrl}get-research-and-development`);
  dealerDiscount = () => this.httpService.get(`${environment.apiUrl}get-dealers-discount`);

  // cart Api's
  addToCart = (cartData) => this.httpService.post(`${environment.apiUrl}cart/add-to-cart`, cartData);
  updateCart = (cartData) => this.httpService.post(`${environment.apiUrl}cart/update-cart`, cartData);
  getCartById = (cartId) => this.httpService.get(`${environment.apiUrl}cart/details/${cartId}`);

  // payment Api's
  payment = (paymentData) => this.httpService.post(`${environment.apiUrl}stripe-payment`, paymentData);

  // order Api's
  addOrders = (orderData) => this.httpService.post(`${environment.apiUrl}order/add`, orderData);
  orderHistory = (userId) => this.httpService.post(`${environment.apiUrl}order/order-history`, userId);
  orderDetailsById = (orderDetail) => this.httpService.post(`${environment.apiUrl}order/order-details`, orderDetail);

  // countryList
  getCountryData = () => this.httpService.get(this.countryData);


  // used to unsubscribe the subscription
  ngOnDestroy(): void{
    if (this.subscribe){
      this.subscribe.unsubscribe();
    }
  }
}
