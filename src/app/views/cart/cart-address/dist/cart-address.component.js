"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartAddressComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var cart_details_1 = require("src/app/dataModels/cart-details");
var CartAddressComponent = /** @class */ (function () {
    function CartAddressComponent(apiService, fb, toaster, route) {
        this.apiService = apiService;
        this.fb = fb;
        this.toaster = toaster;
        this.route = route;
        this.products = []; // assign product to be of CartDetails array type
        this.grandTotal = 0; // used to store totalPrice
        this.shippingCharges = 0; // default shipping charges value
        this.finalPrice = 0; // default final Price
        this.toggleAddress = ''; // change address according to radio buttons
        this.subscribe = []; // used to store subscription
        this.emptyAddress = false; // emptyAddress
        this.stateInfo = []; // used to store state data
        this.countryInfo = []; // used to store country data
        this.cityInfo = []; // used to store city data
        this.buyNowCartId = ''; // assign value of buyNowCartId
        this.toggleCanDeactivate = true; // change CanDeactivate resolve according to condition
    }
    CartAddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('id')) { // checking if userId is present or not
            this.userId = localStorage.getItem('id'); // assigning userId from localStorage Id
            this.getAddressList(localStorage.getItem('id'));
        }
        if (sessionStorage.getItem('buyNow')) { // checking if buyNow value is present or not
            this.getCartItems();
            var cartData = {
                user_id: localStorage.getItem('id'),
                cart: JSON.stringify(this.products)
            };
            // calling addToCart api to add data in cart
            this.apiService.addToCart(cartData).subscribe(function (res) {
                if (res["code"] === 200) {
                    _this.buyNowCartId = res["cart_details"].id; // assigning buyNowCartId with response cart value id
                }
            });
        }
        else {
            // calling getCartById api to get CartDetails by cartId
            this.subscribe.push(this.apiService.getCartById(localStorage.getItem('cartId')).subscribe(function (res) {
                if (res["code"] === 200) {
                    _this.products = JSON.parse(res["details"].cart); // assigning response to products
                    _this.findGrandTotal();
                }
            }, function (err) {
                var _a;
                _this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
            }));
        }
        this.getCountries();
        this.createAddressForm();
    };
    // function to getSelectedAddress according to addressId
    CartAddressComponent.prototype.getSelectedAddress = function (address) {
        if (address !== 'newAddress') { // checking if address is newAddress or not
            this.selectedAddress = address;
            this.toggleAddress = '';
            this.emptyAddress = false;
        }
        else {
            this.toggleAddress = 'newAddress';
            this.emptyAddress = true;
        }
    };
    // function to getCartItems from sessionStorage
    CartAddressComponent.prototype.getCartItems = function () {
        this.products = JSON.parse(sessionStorage.getItem('buyNow'));
        this.findGrandTotal();
    };
    // function to findGrandTotal
    CartAddressComponent.prototype.findGrandTotal = function () {
        var productPrice = 0; // default product price
        // calculating eachProduct price using forEach loop for products array
        this.products.forEach(function (ele) {
            if (ele.productQuantity) { // checking if productQuantity is greater than 0
                // multiplying eachProduct price with eachProduct quantity and adding the result with productPrice
                productPrice = (ele.price * ele.productQuantity) + productPrice;
            }
        });
        this.grandTotal = productPrice;
        this.shippingCharges = Math.round(+(0.05 * this.grandTotal).toFixed(3)); // 5% of totalCharges
        this.finalPrice = Math.round(this.grandTotal + this.shippingCharges); // adding price with shippingCharges and assigning to total
    };
    // function to getCountries from getCountryData function
    CartAddressComponent.prototype.getCountries = function () {
        var _this = this;
        this.subscribe.push(this.apiService.getCountryData().subscribe(function (res) {
            if (res) {
                _this.countryInfo = res["countries"];
                _this.onChangeCountry('Australia');
            }
        }));
    };
    // function to getAddressList according to userId
    CartAddressComponent.prototype.getAddressList = function (userId) {
        var _this = this;
        var userData = {
            user_id: +userId
        };
        this.subscribe.push(this.apiService.getAllAddress(userData).subscribe(function (res) {
            if (res["code"] === 200) {
                _this.addressList = res["address"]; // assigning address response to addressList
                if (_this.addressList.length > 0) {
                    _this.selectedAddress = res["address"][0];
                    _this.emptyAddress = false;
                }
                else {
                    _this.emptyAddress = true;
                    _this.getSelectedAddress('newAddress');
                }
            }
        }, function (err) {
            _this.toaster.error('No address found');
        }));
    };
    // function to get countryName and statesList according to countryValue
    CartAddressComponent.prototype.onChangeCountry = function (countryValue) {
        var countryIndex = this.countryInfo.findIndex(function (res) { return res.name === countryValue; });
        this.stateInfo = this.countryInfo[countryIndex].states;
    };
    // function to get stateName and cityList according to stateValue
    CartAddressComponent.prototype.onChangeState = function (stateValue) {
        var stateIndex = this.stateInfo.findIndex(function (res) { return res.name === stateValue; });
        this.cityInfo = this.stateInfo[stateIndex].cities;
    };
    // function to create addressForm
    CartAddressComponent.prototype.createAddressForm = function () {
        this.addressForm = this.fb.group({
            title: new forms_1.FormControl('', forms_1.Validators.required),
            first_name: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5)]),
            middle_name: new forms_1.FormControl(''),
            last_name: new forms_1.FormControl('', [forms_1.Validators.required]),
            phone: new forms_1.FormControl('', [forms_1.Validators.pattern('[0-9 ]{10}'), forms_1.Validators.required]),
            house_no: new forms_1.FormControl('', forms_1.Validators.required),
            city: new forms_1.FormControl('', forms_1.Validators.required),
            state: new forms_1.FormControl('', forms_1.Validators.required),
            pincode: new forms_1.FormControl('', [forms_1.Validators.pattern('[0-9 ]{4}'), forms_1.Validators.required]),
            country: new forms_1.FormControl('Australia', forms_1.Validators.required)
        });
    };
    Object.defineProperty(CartAddressComponent.prototype, "formControl", {
        // function to get controls of address form
        get: function () {
            return this.addressForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    // function to validate all fields according to formType
    CartAddressComponent.prototype.validateAllFields = function (formGroup) {
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
    // function to save address
    CartAddressComponent.prototype.saveAddress = function (form) {
        var _this = this;
        if (form.invalid) {
            this.validateAllFields(form); // if form in invalid then call validateAllfields function
        }
        else {
            form.value.user_id = +this.userId;
            this.subscribe.push(this.apiService.addAddress(form.value).subscribe(function (res) {
                if (res["code"] === 200) {
                    _this.toaster.success(res["message"]);
                    _this.getAddressList(_this.userId);
                    _this.toggleAddress = '';
                    form.reset();
                }
            }, function (err) {
                var _a;
                _this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
            }));
        }
    };
    // checkOut function to check whether any address is selected or not
    CartAddressComponent.prototype.checkOut = function () {
        var _a;
        if (this.toggleAddress === '') {
            this.toggleCanDeactivate = false;
            this.route.navigate(['/cart/payment', (_a = this.selectedAddress) === null || _a === void 0 ? void 0 : _a.id, this.buyNowCartId]);
        }
        else {
            this.toaster.success('Please add and select one address to continue');
        }
    };
    // canDeactivate router function to  check is navigation allowed or not
    CartAddressComponent.prototype.canDeactivate = function () {
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
                this.apiService.totalItemsInCart(); // calling totalItemsInCart function to update cartQuantity'
                sessionStorage.removeItem('buyNow');
                return true;
            }
        }
        else {
            return true;
        }
    };
    // used to unsubscribe the subscription
    CartAddressComponent.prototype.ngOnDestroy = function () {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscribe.forEach(function (s) {
            if (s) {
                s.unsubscribe();
            }
        });
    };
    CartAddressComponent = __decorate([
        core_1.Component({
            selector: 'app-cart-address',
            templateUrl: './cart-address.component.html',
            styleUrls: ['./cart-address.component.css']
        })
    ], CartAddressComponent);
    return CartAddressComponent;
}());
exports.CartAddressComponent = CartAddressComponent;
