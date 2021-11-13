"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RotoSparesComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var cart_details_1 = require("src/app/dataModels/cart-details");
var RotoSparesComponent = /** @class */ (function () {
    function RotoSparesComponent(apiService, toaster) {
        this.apiService = apiService;
        this.toaster = toaster;
        this.productData = new Array(); // variable to store product data
        this.subCategories = new Array(); // assigning subCategories array of SubProductCategories type
        this.pumpModels = new Array(); // assigning pumpModel code and model
        this.productsDetail = new Array(); // to store product details.
        this.spares = []; // used to store the spares
        this.productsInCart = []; // used to store added spares
    }
    RotoSparesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.homePage().pipe(operators_1.map(function (res) {
            if (res["code"] === 200) {
                var pumpType = res["categories"]; // assigning pump categories from response in pumpType Array
                var pumpData_1 = []; // used to store pump categories
                pumpType.forEach(function (eachPump) {
                    if (eachPump.name !== 'Roto Spares') {
                        pumpData_1.push(eachPump);
                    }
                });
                return pumpData_1;
            }
        })).subscribe(function (res) {
            if (res.length > 0) {
                _this.productData = res; // assign pump categories except spares in product data
            }
        });
    };
    // function used to get Pump subCategory by passing pumpCategory Id
    RotoSparesComponent.prototype.getPumpType = function (pumpId) {
        var _this = this;
        this.apiService.subCategory(pumpId).subscribe(function (res) {
            if (res["code"] === 200) {
                _this.subCategories = res["categories"];
            }
        });
    };
    // function used to get Pump Model by passing Pump subCategory id
    RotoSparesComponent.prototype.getPumpSubType = function (subPumpId) {
        var _this = this;
        this.apiService.productsByCategory(subPumpId).subscribe(function (res) {
            if (res["code"] === 200) {
                _this.pumpModels = res["products"];
            }
        });
    };
    // function used to get productDetails by passing pumpModel and code
    RotoSparesComponent.prototype.getPumpDetails = function (pumpModelIndex) {
        var _this = this;
        var pumpModelData = this.pumpModels[+pumpModelIndex];
        this.apiService.productById(pumpModelData.code, pumpModelData.pole).
            pipe(operators_1.map(function (res) {
            if (res["code"] === 200) {
                _this.productsDetail = res["product"];
                _this.productsDetail.forEach(function (eachProduct) {
                    var _a;
                    var newSpares = [];
                    eachProduct.spares.forEach(function (eachSpare) {
                        eachSpare["motorVolt"] = eachProduct.motor.volt;
                        newSpares.push(eachSpare);
                    });
                    (_a = _this.spares).push.apply(_a, newSpares);
                });
            }
            return _this.spares;
        })).subscribe(function (res) {
            _this.spares = res;
        });
    };
    // function to decrement spareQuantity
    RotoSparesComponent.prototype.consumptionSpareDecrement = function (spareCount) {
        var _this = this;
        this.spares[spareCount].spareQuantity--;
        if (this.spares[spareCount].spareQuantity < 1) {
            this.productsInCart.forEach(function (res, index) {
                if ((res.productName === _this.spares[spareCount].productName) && (res.motorVolt === _this.spares[spareCount].motorVolt)) {
                    _this.productsInCart.splice(index, 1);
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
    };
    // function to increment spareQuantity
    RotoSparesComponent.prototype.consumptionSpareIncrement = function (spareCount) {
        this.spares[spareCount].spareQuantity++;
        if (this.spares[spareCount].spareQuantity === 1) {
            this.productsInCart.push(this.spares[spareCount]);
        }
        this.findGrandTotal();
    };
    // function to calculate the total price of selected product, accessory and spare
    RotoSparesComponent.prototype.findGrandTotal = function () {
        var sparePrice = 0; // default spare price 0
        // using loop to get the selected spares price
        this.spares.forEach(function (ele) {
            if (ele.spareQuantity) {
                sparePrice = (ele.productPrice * ele.spareQuantity) + sparePrice;
            }
        });
        // calculating grandTotal
        this.subTotal = Math.round(sparePrice);
    };
    // function to add product, accessory and spares to cart
    RotoSparesComponent.prototype.addToCart = function () {
        var _this = this;
        var sparesToAdd = []; // sparesToAdd[] to add spare
        // array to push selected Spare
        this.productsInCart.forEach(function (ele) {
            if (ele.spareQuantity >= 1) {
                var spare = new cart_details_1.CartDetails(ele.productName, ele.productDesc, ele.productPrice, 'spare', null, ele.spareQuantity);
                sparesToAdd.push(spare);
            }
        });
        if (localStorage.getItem('id')) { // check if userId is present or not in localStorage
            if (localStorage.getItem('cartId') === null) { // check if cartId is present or not in localStorage(if not present the value is null)
                if (sessionStorage.getItem('cart') === null) { // check if cart is present or not in localStorage(if not present the value is null)
                    var cartArray = []; // declaring an empty array
                    cartArray.push.apply(// declaring an empty array
                    cartArray, sparesToAdd); // pushing sparesToAdd in cartArray
                    // cartData object with userId and cartArray to pass as parameter(in post body) in addToCart api
                    var cartData = {
                        user_id: localStorage.getItem('id'),
                        cart: JSON.stringify(cartArray)
                    };
                    // calling addToCart api
                    this.apiService.addToCart(cartData).subscribe(function (res) {
                        if (res["code"] === 200) {
                            var cartItems = JSON.parse(res["cart_details"].cart);
                            localStorage.setItem('cartId', res["cart_details"].id);
                            _this.toaster.success('Successfully Added To Cart');
                            _this.apiService.totalItemsInCart();
                        }
                    });
                }
                else {
                    // fetching data from sessionStorage and assign to cartLocalData
                    var cartLocalData = JSON.parse(sessionStorage.getItem('cart'));
                    this.updateCartDetails(cartLocalData, sparesToAdd, 'add'); // calling upDataCart to add
                }
            }
            // userId is present
            else {
                // calling getCartById api to get cartData using cartId
                this.apiService.getCartById(localStorage.getItem('cartId')).subscribe(function (res) {
                    if (res["code"] === 200) {
                        var cartDetails = void 0;
                        cartDetails = JSON.parse(res["details"].cart);
                        _this.updateCartDetails(cartDetails, sparesToAdd, 'update'); // calling upDataCart to update
                    }
                }, function (err) {
                    var _a;
                    _this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
                });
            }
        }
        else {
            if (sessionStorage.getItem('cart') && (sessionStorage.getItem('cart').length > 2)) {
                var cartLocalData = JSON.parse(sessionStorage.getItem('cart'));
                this.updateCartDetails(cartLocalData, sparesToAdd, 'session'); // calling upDataCart to store in session
            }
            else {
                var cartArray = [];
                cartArray.push.apply(cartArray, sparesToAdd);
                sessionStorage.setItem('cart', JSON.stringify(cartArray));
                this.apiService.totalItemsInCart();
            }
            this.toaster.success('Successfully Added To Cart');
        }
    };
    RotoSparesComponent.prototype.updateCartDetails = function (cartDetails, sparesToAdd, type) {
        var _this = this;
        var cartItems; // to store cartProducts
        // checking cartDetails length and if length 0 then push data in cartDetails
        if (cartDetails.length <= 0) {
            cartDetails.push.apply(cartDetails, sparesToAdd);
        }
        // cartDetails length is greater than 0
        else {
            var cartAccessoryDataSet = new Array(); // creating new accessoryArray
            var cartSpareDataSet = new Array(); // creating new spareArray
            var spareNotExist = true; // check if spare type is present in cartLocalData
            // for loop starts
            for (var i = 0; i < cartDetails.length; i++) {
                if (cartDetails[i].type === 'spare') { // checking productType
                    spareNotExist = false;
                    var _loop_1 = function (j) {
                        if (sparesToAdd[j].description === cartDetails[i].description) {
                            cartDetails[i].productQuantity++;
                        }
                        else {
                            /* some() is used to checks whether at least one of the elements of the array satisfies
                              the condition then returns true (and does not check the remaining values) otherwise return false*/
                            if ((!cartDetails.some(function (res) { return res.description === sparesToAdd[j].description; })) &&
                                (!cartSpareDataSet.some(function (res) { return res.description === sparesToAdd[j].description; }))) {
                                cartSpareDataSet.push(sparesToAdd[j]);
                            }
                        }
                    };
                    for (var j = 0; j < sparesToAdd.length; j++) {
                        _loop_1(j);
                    }
                }
            }
            // for loops ends
            // checking to push if cartSpareDataSet length is greater than 0
            if (cartSpareDataSet.length > 0) {
                cartDetails.push.apply(cartDetails, cartSpareDataSet);
            }
            // checking to push if spare exist
            if (spareNotExist) {
                cartDetails.push.apply(cartDetails, sparesToAdd);
            }
        }
        if (type === 'add') {
            // cartData object with userId and cartArray to pass as parameter(in post body) in addToCart api
            var cartData = {
                user_id: localStorage.getItem('id'),
                cart: JSON.stringify(cartDetails)
            };
            // calling addToCart api to add products in cart
            this.apiService.addToCart(cartData).subscribe(function (res) {
                if (res["code"] === 200) {
                    cartItems = JSON.parse(res["cart_details"].cart);
                    localStorage.setItem('cartId', res["cart_details"].id);
                    _this.toaster.success('Successfully Added To Cart');
                    _this.apiService.totalItemsInCart();
                }
            });
        }
        else if (type === 'update') {
            // cartData object with userId , cartId and cartArray to pass as parameter(in post body) in updateToCart api
            var updateCart = {
                id: localStorage.getItem('cartId'),
                user_id: localStorage.getItem('id'),
                cart: JSON.stringify(cartDetails)
            };
            // calling updateCart api
            this.apiService.updateCart(updateCart).subscribe(function (res) {
                if (res["code"] === 200) {
                    _this.toaster.success('Cart successfully stored');
                    _this.apiService.totalItemsInCart();
                }
            }, function (err) {
                var _a;
                _this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
            });
        }
        else if (type === 'session') {
            sessionStorage.setItem('cart', JSON.stringify(cartDetails));
            this.apiService.totalItemsInCart();
        }
    };
    RotoSparesComponent = __decorate([
        core_1.Component({
            selector: 'app-roto-spares',
            templateUrl: './roto-spares.component.html',
            styleUrls: ['./roto-spares.component.css']
        })
    ], RotoSparesComponent);
    return RotoSparesComponent;
}());
exports.RotoSparesComponent = RotoSparesComponent;
