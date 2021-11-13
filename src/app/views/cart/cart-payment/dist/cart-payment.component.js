"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CartPaymentComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var environment_prod_1 = require("src/environments/environment.prod");
var cart_details_1 = require("src/app/dataModels/cart-details");
var cardError_1 = require("src/app/dataModels/cardError");
var CartPaymentComponent = /** @class */ (function () {
    function CartPaymentComponent(fb, apiService, router, toastr, ngZone, activatedRoute, zone) {
        this.fb = fb;
        this.apiService = apiService;
        this.router = router;
        this.toastr = toastr;
        this.ngZone = ngZone;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.paymentLoading = false;
        // cardNumber: any;
        // cardExpiry: any;
        // cardCvc: any;
        this.cardErrors = new cardError_1.CardError(); // assigning cardErrors of cartError type
        this.cardHandler = this.onChange.bind(this); // used to get cardField validations
        this.subscribe = []; // used to store subscription
        this.total = 0; // used to store totalPrice
        this.toggleCanDeactivate = true; // change CanDeactivate resolve according to condition
        this.countryList = []; // used to store countryList
        this.products = []; // to store cartDetails.
    }
    CartPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.loadStripe(); // calling stripe function to load stripe
        // assigning addressId and buyNow id from route params
        this.subscribe.push(this.activatedRoute.params.subscribe(function (res) {
            if (res.id1) {
                _this.addressId = res.id1;
                _this.buyNowCartId = res.id2;
                _this.getAddress(res.id1);
            }
        }));
        if (this.buyNowCartId.length === 0) { // checking buyNow cartId is present or not
            this.subscribe.push(this.apiService.getCartById(localStorage.getItem('cartId')).subscribe(function (res) {
                if (res["code"] === 200) {
                    _this.products = JSON.parse(res["details"].cart); // assigning cartDetails from response to products
                    _this.findGrandTotal();
                }
            }, function (err) {
                var _a;
                _this.toastr.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
            }));
        }
        else { // if buyNow cartId is present
            this.subscribe.push(this.apiService.getCartById(this.buyNowCartId).subscribe(function (res) {
                if (res["code"] === 200) {
                    _this.products = JSON.parse(res["details"].cart); // assigning cartDetails from response to products
                    _this.findGrandTotal();
                }
            }, function (err) {
                var _a;
                _this.toastr.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
            }));
        }
        // calling getCountryData function to getCountryList
        this.subscribe.push(this.apiService.getCountryData().subscribe(function (res) {
            if (res) {
                _this.countryList = res["countries"]; // assigning countryList in countryList Array
            }
        }));
        this.createPaymentForm();
    };
    // used afterviewinit lifecyclehook to load card after view get initialized
    CartPaymentComponent.prototype.ngAfterViewInit = function () {
        // Giving a base style here, but most of the style is in scss file
        var cardStyle = {
            base: {
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#aab7c4'
                }
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        };
        // assign stripe publish key to stripe variable
        this.stripe = Stripe(environment_prod_1.environment.stripeTestKey);
        var elements = this.stripe.elements();
        this.card = elements.create('card');
        this.card.mount(this.cardElement.nativeElement);
        this.card.addEventListener('change', this.cardHandler);
        // this.cardNumber = elements.create('cardNumber');
        // this.cardNumber.mount(this.cardNumberElement.nativeElement);
        // this.cardNumber.addEventListener('change', this.cardHandler);
        // this.cardExpiry = elements.create('cardExpiry');
        // this.cardExpiry.mount(this.cardExpiryElement.nativeElement);
        // this.cardExpiry.addEventListener('change', this.cardHandler);
        // this.cardCvc = elements.create('cardCvc');
        // this.cardCvc.mount(this.cardCvcElement.nativeElement);
        // this.cardCvc.addEventListener('change', this.cardHandler);
    };
    // function to findGrandTotal
    CartPaymentComponent.prototype.findGrandTotal = function () {
        var price;
        var shippingCharges = 0; // default shipping charges
        var productPrice = 0; // default product price
        // calculating eachProduct price using forEach loop for products array
        this.products.forEach(function (ele) {
            if (ele.productQuantity) { // checking if productQuantity is greater than 0
                // multiplying eachProduct price with eachProduct quantity and adding the result with productPrice
                productPrice = (ele.price * ele.productQuantity) + productPrice;
            }
        });
        price = productPrice;
        shippingCharges = 0.05 * price; // 5% of totalCharges
        this.total = Math.round(price + shippingCharges); // adding price with shippingCharges and assigning to total
    };
    // function to getAddress using addressId
    CartPaymentComponent.prototype.getAddress = function (addressId) {
        var _this = this;
        this.subscribe.push(this.apiService.getAddressById(addressId).subscribe(function (res) {
            if (res["address"].length > 0) {
                _this.addressDetails = res["address"][0]; // assigning response of address to addressDetails
            }
        }));
    };
    // function to loadStripe
    CartPaymentComponent.prototype.loadStripe = function () {
        if (!window.document.getElementById('stripe-custom-form-script')) {
            var s = window.document.createElement('script');
            s.id = 'stripe-custom-form-script';
            s.type = 'text/javascript';
            s.src = 'https://js.stripe.com/v2/';
            s.onload = function () {
                window.Stripe.setPublishableKey(environment_prod_1.environment.stripeTestKey);
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
    };
    // function to create payment form
    CartPaymentComponent.prototype.createPaymentForm = function () {
        this.paymentForm = this.fb.group({
            cardUserName: new forms_1.FormControl('', [forms_1.Validators.minLength(5), forms_1.Validators.required]),
            email: new forms_1.FormControl('', [forms_1.Validators.email, forms_1.Validators.required]),
            // cardNumber: new FormControl('', [CreditCardValidators.validateCCNumber, Validators.required]),
            // cardCVV: new FormControl('', Validators.required),
            // cardExpDate: new FormControl('', [CreditCardValidators.validateExpDate, Validators.required]),
            country: new forms_1.FormControl('Australia', forms_1.Validators.required)
        });
    };
    Object.defineProperty(CartPaymentComponent.prototype, "formControl", {
        // function to get controls of payment form
        get: function () {
            return this.paymentForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    // function to validate all fields of payment form
    CartPaymentComponent.prototype.validateAllFields = function (formGroup) {
        var _this = this;
        Object.keys(this.formControl).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof forms_1.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFields(control);
            }
        });
    };
    CartPaymentComponent.prototype.onChange = function (_a) {
        var error = _a.error;
        if (error) {
            this.cardErrors = error;
        }
        else {
            this.cardErrors = null;
        }
    };
    // function to submit signUp form
    CartPaymentComponent.prototype.submitPaymentForm = function (form) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, Promise, function () {
            var _f, token, error;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        if (!form.invalid) return [3 /*break*/, 1];
                        this.validateAllFields(form); // if form in invalid then call validateAllfields function
                        return [3 /*break*/, 3];
                    case 1:
                        this.paymentLoading = true;
                        // this.spinner.show('spinner-2');
                        this.toggleCanDeactivate = false; // changing toggleCanDeactivate to false
                        return [4 /*yield*/, this.stripe.createToken(this.card, {
                                name: form.value.cardUserName,
                                address_city: (_a = this.addressDetails) === null || _a === void 0 ? void 0 : _a.city,
                                address_country: (_b = this.addressDetails) === null || _b === void 0 ? void 0 : _b.country,
                                address_line1: (_c = this.addressDetails) === null || _c === void 0 ? void 0 : _c.house_no,
                                address_state: (_d = this.addressDetails) === null || _d === void 0 ? void 0 : _d.state,
                                address_zip: (_e = this.addressDetails) === null || _e === void 0 ? void 0 : _e.pincode
                            })];
                    case 2:
                        _f = _g.sent(), token = _f.token, error = _f.error;
                        if (token) {
                            this.onSuccess(token);
                        }
                        else {
                            this.onError(error);
                        }
                        _g.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    // function to call payment if token is generated
    CartPaymentComponent.prototype.onSuccess = function (token) {
        var _this = this;
        this.paymentLoading = false;
        var paymentData = {
            token: token.id,
            amount: Math.round(this.total)
        };
        this.subscribe.push(this.apiService.payment(paymentData).subscribe(function (res) {
            if (res["code"] === 200) {
                _this.createOrder(paymentData.token);
            }
        }, function (err) {
            var _a;
            _this.paymentLoading = false;
            _this.toastr.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
        }));
    };
    // function to show error if token is not generated
    CartPaymentComponent.prototype.onError = function (error) {
        this.paymentLoading = false;
        if (error.message) {
            // this.cardErrors = error.message;
            this.toastr.error(error.message);
        }
    };
    // function to createOrder
    CartPaymentComponent.prototype.createOrder = function (token) {
        var _this = this;
        var orderData = {
            address_id: this.addressId,
            user_id: +localStorage.getItem('id'),
            amount: (this.total).toString(),
            transaction_id: token,
            purchase_details: this.products
        };
        // api function to addOrder using addOrder api
        this.subscribe.push(this.apiService.addOrders(orderData).subscribe(function (res) {
            if (res["code"] === 200) {
                _this.apiService.orderDetails.next(res["details"]);
                if (_this.buyNowCartId.length === 0) { // checking buyNowCardId is present or not
                    _this.updateCart();
                }
                else {
                    _this.router.navigate(['/payment-successful']);
                }
            }
        }, function (err) {
            var _a;
            // console.log(err);
            _this.toastr.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
        }));
    };
    // function to updateCart
    CartPaymentComponent.prototype.updateCart = function () {
        var _this = this;
        var updateCart = {
            id: localStorage.getItem('cartId'),
            user_id: localStorage.getItem('id'),
            cart: '[]'
        };
        this.subscribe.push(this.apiService.updateCart(updateCart).subscribe(function (res) {
            if (res["code"] === 200) {
                _this.apiService.totalItemsInCart(); // calling totalItemsInCart function to update cartQuantity Value.
                _this.router.navigate(['/payment-successful']);
            }
        }, function (err) {
            var _a;
            _this.toastr.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
        }));
    };
    // canDeactivate router function to  check is navigation allowed or not
    CartPaymentComponent.prototype.canDeactivate = function () {
        var _this = this;
        if (this.toggleCanDeactivate) { // checking toggleCanDeactivate value
            if (localStorage.getItem('cartId')) { // checking cartId is present or not
                if (sessionStorage.getItem('buyNow')) { // checking buyNow is present or not
                    var cartLocalData = JSON.parse(sessionStorage.getItem('buyNow')); // assigning buyNow value to cartLocalData
                    var cart_1;
                    var accessoriesToAdd_1 = []; // accessoriesToAdd[] to add accessory
                    var sparesToAdd_1 = []; // sparesToAdd[] to add spare
                    if (cartLocalData !== null) { // checking if cartLocalData is not null
                        cartLocalData.forEach(function (cartData) {
                            if (cartData.type === 'product') {
                                // assigning value in cart
                                cart_1 = new cart_details_1.CartDetails(cartData.code, cartData.description, cartData.price, cartData.type, cartData.motor, cartData.productQuantity);
                            }
                            else if (cartData.type === 'accessory') {
                                accessoriesToAdd_1.push(cartData); // pushing cartData of type accessory in accessoriesToAdd array
                            }
                            else if (cartData.type === 'spare') {
                                sparesToAdd_1.push(cartData); // pushing cartData of type spare in sparesToAdd array
                            }
                        });
                    }
                    // creating Promise to get return value
                    return new Promise(function (resolve) {
                        _this.subscribe.push(_this.apiService.getCartById(localStorage.getItem('cartId')).subscribe(function (res) {
                            if (res["code"] === 200) {
                                var cartDetails = void 0;
                                cartDetails = JSON.parse(res["details"].cart); // assigning response value to cartDetails
                                if (cartDetails.length <= 0) { // checking cartDetails length is smaller or equal to 0
                                    // (...)spread operator takes in an iterable (e.g an array) and expands it into individual elements.
                                    cartDetails.push(cart_1); // pushing cart value in cartDetails
                                    cartDetails.push.apply(// pushing cart value in cartDetails
                                    cartDetails, accessoriesToAdd_1); // pushing each accessoriesToAdd value in cartDetails
                                    cartDetails.push.apply(// pushing each accessoriesToAdd value in cartDetails
                                    cartDetails, sparesToAdd_1); // pushing each sparesToAdd value in cartDetails
                                }
                                else {
                                    var cartAccessoryDataSet = new Array(); // creating new accessoryArray
                                    var cartSpareDataSet = new Array(); // creating new spareArray
                                    var cartProductDataSet = // variable to set productData
                                     void 0; // variable to set productData
                                    var spareNotExist = true; // check if spare type is present in cartLocalData
                                    var accessoryNotExist = true; // check if accessory type is present in cartLocalData
                                    for (var i = 0; i < cartDetails.length; i++) {
                                        if (cartDetails[i].type === 'product') { // checking type of product
                                            // checking cartDetails(got by getCartDetails api) with buyNow cartDetails(from sessionStorage)
                                            if ((cartDetails[i].motor.volt === cart_1.motor.volt) && (cartDetails[i].code === cart_1.code)) {
                                                cartDetails[i].productQuantity++;
                                            }
                                            else {
                                                cartProductDataSet = cart_1;
                                            }
                                        }
                                        else if (cartDetails[i].type === 'accessory') {
                                            accessoryNotExist = false;
                                            var _loop_1 = function (j) {
                                                if (accessoriesToAdd_1[j].code === cartDetails[i].code) {
                                                    cartDetails[i].productQuantity++;
                                                }
                                                else {
                                                    /* some() is used to checks whether at least one of the elements of the array satisfies
                                                      the condition then returns true (and does not check the remaining values) otherwise return false*/
                                                    if (!cartDetails.some(function (res) { return res.code === accessoriesToAdd_1[j].code; }) &&
                                                        (!cartAccessoryDataSet.some(function (res) { return res.code === accessoriesToAdd_1[j].code; }))) {
                                                        cartAccessoryDataSet.push(accessoriesToAdd_1[j]);
                                                    }
                                                }
                                            };
                                            for (var j = 0; j < accessoriesToAdd_1.length; j++) {
                                                _loop_1(j);
                                            }
                                        }
                                        else if (cartDetails[i].type === 'spare') {
                                            spareNotExist = false;
                                            var _loop_2 = function (j) {
                                                if (sparesToAdd_1[j].description === cartDetails[i].description) {
                                                    cartDetails[i].productQuantity++;
                                                }
                                                else {
                                                    /* some() is used to checks whether at least one of the elements of the array satisfies
                                                        the condition then returns true (and does not check the remaining values) otherwise return false*/
                                                    if (!cartDetails.some(function (res) { return res.description === sparesToAdd_1[j].description; }) &&
                                                        (!cartSpareDataSet.some(function (res) { return res.description === sparesToAdd_1[j].description; }))) {
                                                        cartSpareDataSet.push(sparesToAdd_1[j]);
                                                    }
                                                }
                                            };
                                            for (var j = 0; j < sparesToAdd_1.length; j++) {
                                                _loop_2(j);
                                            }
                                        }
                                    }
                                    // checking to push if cartAccessoryDataSet length is greater than 0
                                    if (cartAccessoryDataSet.length > 0) {
                                        cartDetails.push.apply(cartDetails, cartAccessoryDataSet);
                                    }
                                    // checking to push if cartSpareDataSet length is greater than 0
                                    if (cartSpareDataSet.length > 0) {
                                        cartDetails.push.apply(cartDetails, cartSpareDataSet);
                                    }
                                    // checking to push if cartProductDataSet is not undefined
                                    if (cartProductDataSet !== undefined) {
                                        cartDetails.push(cartProductDataSet);
                                    }
                                    // checking to push if accessory exist
                                    if (accessoryNotExist) {
                                        cartDetails.push.apply(cartDetails, accessoriesToAdd_1);
                                    }
                                    // checking to push if spare exist
                                    if (spareNotExist) {
                                        cartDetails.push.apply(cartDetails, sparesToAdd_1);
                                    }
                                }
                                var updateCart = {
                                    id: localStorage.getItem('cartId'),
                                    user_id: localStorage.getItem('id'),
                                    cart: JSON.stringify(cartDetails)
                                };
                                // calling updateCart api
                                return _this.subscribe.push(_this.apiService.updateCart(updateCart).subscribe(function (response) {
                                    if (response["code"] === 200) {
                                        sessionStorage.removeItem('buyNow');
                                        _this.apiService.totalItemsInCart();
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
                localStorage.setItem('cartId', this.buyNowCartId); // setting buyNowCartId as cartId in localStorage
                this.apiService.totalItemsInCart(); // calling totalItemsInCart function to update cartQuantity
                sessionStorage.removeItem('buyNow');
                return true;
            }
        }
        else {
            return true;
        }
    };
    // used to unsubscribe the subscription
    CartPaymentComponent.prototype.ngOnDestroy = function () {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscribe.forEach(function (s) {
            if (s) {
                s.unsubscribe();
            }
        });
        this.card.destroy();
        // this.cardNumber.destroy();
        // this.cardExpiry.destroy();
        // this.cardCvc.destroy();
    };
    __decorate([
        core_1.ViewChild('cardInfo', { static: true })
    ], CartPaymentComponent.prototype, "cardElement");
    CartPaymentComponent = __decorate([
        core_1.Component({
            selector: 'app-cart-payment',
            templateUrl: './cart-payment.component.html',
            styleUrls: ['./cart-payment.component.css']
        })
    ], CartPaymentComponent);
    return CartPaymentComponent;
}());
exports.CartPaymentComponent = CartPaymentComponent;
