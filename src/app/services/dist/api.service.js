"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var environment_prod_1 = require("../../environments/environment.prod");
var operators_1 = require("rxjs/operators");
var ApiService = /** @class */ (function () {
    function ApiService(httpService) {
        var _this = this;
        this.httpService = httpService;
        this.cartValue = new rxjs_1.BehaviorSubject(0); // cartValue of behaviourSubject to reflect change in cartQuantity
        this.orderDetails = new rxjs_1.BehaviorSubject({}); /* orderDetails of behaviourSubject to reflect change in orderDetails
                                                        using during payment-successfull*/
        this.countryData = './assets/countryList/country.json'; // country-list data
        // website Api's
        this.homePage = function () { return _this.httpService.get(environment_prod_1.environment.apiUrl + "home"); };
        this.subCategory = function (productId) { return _this.httpService.get(environment_prod_1.environment.apiUrl + "category/" + productId); };
        this.productsByCategory = function (productId) { return _this.httpService.get(environment_prod_1.environment.apiUrl + "getProductsByCategory/" + productId); };
        this.productById = function (productId, type) { return _this.httpService.get(environment_prod_1.environment.apiUrl + "products/" + productId + "/" + type); };
        // account Api's
        this.login = function (userData) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "login", userData); };
        this.register = function (userData) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "register", userData); };
        this.addAddress = function (addressData) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "address/add", addressData); };
        this.getAllAddress = function (userId) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "address", userId); };
        this.getUserDetails = function (userId) { return _this.httpService.get(environment_prod_1.environment.apiUrl + "get-details/" + userId); };
        this.getAddressById = function (addressId) { return _this.httpService.get(environment_prod_1.environment.apiUrl + "address/" + addressId); };
        this.updatePersonalDetails = function (userData) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "profile", userData); };
        this.updatePassword = function (userData) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "update-password", userData); };
        this.forgotPassword = function (passwordData) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "forgot-password", passwordData); };
        this.deleteAddress = function (addressId) { return _this.httpService["delete"](environment_prod_1.environment.apiUrl + "address/" + addressId); };
        this.updateAddress = function (addressData) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "update-address", addressData); };
        // cart Api's
        this.addToCart = function (cartData) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "cart/add-to-cart", cartData); };
        this.updateCart = function (cartData) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "cart/update-cart", cartData); };
        this.getCartById = function (cartId) { return _this.httpService.get(environment_prod_1.environment.apiUrl + "cart/details/" + cartId); };
        // payment Api's
        this.payment = function (paymentData) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "stripe-payment", paymentData); };
        // order Api's
        this.addOrders = function (orderData) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "order/add", orderData); };
        this.orderHistory = function (userId) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "order/order-history", userId); };
        this.orderDetailsById = function (orderDetail) { return _this.httpService.post(environment_prod_1.environment.apiUrl + "order/order-details", orderDetail); };
        // countryList
        this.getCountryData = function () { return _this.httpService.get(_this.countryData); };
    }
    ApiService.prototype.totalItemsInCart = function () {
        this.updateItemsInCart();
    };
    // used to update the cartQuantity value
    ApiService.prototype.updateItemsInCart = function () {
        var _this = this;
        // if (localStorage.getItem('id') === null) {
        if (sessionStorage.getItem('id') === null) {
            if (sessionStorage.getItem('cart') !== null) {
                var cartData = JSON.parse(sessionStorage.getItem('cart'));
                this.cartValue.next(cartData.length);
            }
            else {
                this.cartValue.next(0);
            }
        }
        else {
            // if (localStorage.getItem('cartId')) {
            if (sessionStorage.getItem('cartId')) {
                // take is used to emit only the first count values emitted by the source Observable and the unsubscribe automatically.
                // this.subscribe = this.getCartById(localStorage.getItem('cartId')).pipe(operators_1.take(1)).subscribe(function (res) {
                this.subscribe = this.getCartById(sessionStorage.getItem('cartId')).pipe(operators_1.take(1)).subscribe(function (res) {
                    if (res["code"] === 200) {
                        var cartData = JSON.parse(res["details"].cart);
                        if (cartData === null) {
                            _this.cartValue.next(0);
                        }
                        else {
                            _this.cartValue.next(cartData.length);
                        }
                    }
                });
            }
            else {
                if (sessionStorage.getItem('cart')) {
                    var cartData = JSON.parse(sessionStorage.getItem('cart'));
                    this.cartValue.next(cartData.length);
                }
                else {
                    this.cartValue.next(0);
                }
            }
        }
    };
    // used to unsubscribe the subscription
    ApiService.prototype.ngOnDestroy = function () {
        if (this.subscribe) {
            this.subscribe.unsubscribe();
        }
    };
    ApiService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
