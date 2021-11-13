"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CartDetailsComponent = void 0;
var core_1 = require("@angular/core");
var cart_details_1 = require("src/app/dataModels/cart-details");
var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent(apiService, router, activatedRoute) {
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.subscribe = []; // used to store subscription
        this.grandTotal = 0; // used to store totalPrice
        this.shippingCharges = 0; // default shipping charges value
        this.finalPrice = 0; // default final Price
        this.productQuantity = 0; // used to store the product quantity
        this.products = []; // assign product to be of CartDetails array type
        this.toggleBtn = false; // used to show/hide buttons according to user signIn or not
    }
    CartDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('id')) { // checking if userId is present or not
            this.toggleBtn = true; // assign toggleBtn to true
            if (localStorage.getItem('cartId')) { // checking cartId is present or not
                if (sessionStorage.getItem('cart')) { // checking cart data is present or not
                    this.updateCartDetails(sessionStorage.getItem('cart'), 'session');
                }
                else {
                    // getting data from cartResolver
                    this.subscribe.push(this.activatedRoute.data.subscribe(function (res) {
                        _this.products = res["cartData"];
                        // console.log('cart1', _this.products);
                        _this.getProductQuantity();
                        _this.findGrandTotal();
                    }));
                }
            }
            else {
                this.getCartItems();
                if (this.products.length > 0) {
                    var cartData = {
                        user_id: localStorage.getItem('id'),
                        cart: JSON.stringify(this.products)
                    };
                    // calling addToCart api to add items to cart
                    this.subscribe.push(this.apiService.addToCart(cartData).subscribe(function (res) {
                        if (res["code"] === 200) {
                            sessionStorage.removeItem('cart');
                            localStorage.setItem('cartId', res["cart_details"].id);
                            _this.products = JSON.parse(res["cart_details"].cart);
                            _this.getProductQuantity();
                            _this.findGrandTotal();
                            _this.apiService.totalItemsInCart();
                        }
                    }));
                }
            }
        }
        else {
            if (localStorage.getItem('cardId') === null) {
                this.getCartItems();
                this.getProductQuantity();
            }
        }
    };
    // function to getProductQuantity of total products in cart
    CartDetailsComponent.prototype.getProductQuantity = function () {
        var _this = this;
        this.productQuantity = 0;
        this.products.forEach(function (product) {
            _this.productQuantity = product.productQuantity + _this.productQuantity;
        });
        // console.log('cart2', this.products);
    };
    // function to update cart according to type
    CartDetailsComponent.prototype.updateCartDetails = function (cartArray, type) {
        var _this = this;
        if (type === 'session') { // checking if cart data is present in sessionStorage or not
            var cartLocalData = JSON.parse(cartArray); // assigning sessionStoraege cart value to cartLocalData
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
                this.subscribe.push(this.activatedRoute.data.subscribe(function (res) {
                    var cartDetails;
                    cartDetails = res; // assigning data from cartResolver to cartDetails
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
                        // for loop starts
                        for (var i = 0; i < cartDetails.length; i++) {
                            if (cartDetails[i].type === 'product') { // checking productType
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
                                    if (accessoriesToAdd_1[j].code === cartDetails[i].code) { // checking productType
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
                            else if (cartDetails[i].type === 'spare') { // checking productType
                                spareNotExist = false;
                                var _loop_2 = function (j) {
                                    if (sparesToAdd_1[j].description === cartDetails[i].description) {
                                        cartDetails[i].productQuantity++;
                                    }
                                    else {
                                        /* some() is used to checks whether at least one of the elements of the array satisfies
                                          the condition then returns true (and does not check the remaining values) otherwise return false*/
                                        if ((!cartDetails.some(function (res) { return res.description === sparesToAdd_1[j].description; })) &&
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
                        // for loops ends
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
                        var updateCartData_1 = {
                            id: localStorage.getItem('cartId'),
                            user_id: localStorage.getItem('id'),
                            cart: JSON.stringify(cartDetails)
                        };
                        // calling updateCart api
                        _this.apiService.updateCart(updateCartData_1).subscribe(function (response) {
                            if (response["code"] === 200) {
                                sessionStorage.removeItem('cart');
                                _this.apiService.getCartById(updateCartData_1.id).subscribe(function (response) {
                                    if (response["code"] === 200) {
                                        _this.products = JSON.parse(response["details"].cart);
                                        _this.getProductQuantity();
                                        _this.findGrandTotal();
                                    }
                                });
                                _this.apiService.totalItemsInCart();
                            }
                        });
                    }
                }));
            }
        }
        else if (type === 'cart') {
            var updateCart = {
                id: localStorage.getItem('cartId'),
                user_id: localStorage.getItem('id'),
                cart: JSON.stringify(cartArray)
            };
            this.subscribe.push(this.apiService.updateCart(updateCart).subscribe(function (res) {
                if (res["code"] === 200) {
                    _this.apiService.totalItemsInCart();
                }
            }));
        }
    };
    // function to getCartItems from sessionStorage
    CartDetailsComponent.prototype.getCartItems = function () {
        if (sessionStorage.getItem('cart')) {
            this.products = JSON.parse(sessionStorage.getItem('cart'));
            this.findGrandTotal();
        }
        else {
            this.products = [];
        }
    };
    // function to findGrandTotal
    CartDetailsComponent.prototype.findGrandTotal = function () {
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
    // function to decrease productQuantity
    CartDetailsComponent.prototype.decrementProductQuantity = function (productCount) {
        var productItemQuantity = this.products[productCount].productQuantity; // assign particular productQuantity according to index number
        productItemQuantity = productItemQuantity - 1; // decrementing productQuantity by 1
        if (productItemQuantity < 1) { // checking if productQuantity is less than 1 or not to open delete popup
            var show = document.getElementById('deletemodal');
            show.classList.add('in');
            show.style.display = 'block';
            this.deleteItemIndex = productCount;
        }
        else {
            // if greater than 1 then adding the decremented productQuantity
            this.products[productCount].productQuantity = productItemQuantity;
            if (localStorage.getItem('id') === null) { // checking if userId is present or not
                sessionStorage.setItem('cart', JSON.stringify(this.products)); // setting the product value in sessionStorage
            }
            else {
                this.updateCartDetails(this.products, 'cart');
            }
            this.getProductQuantity();
        }
        this.findGrandTotal();
    };
    // function to remove item from cart
    CartDetailsComponent.prototype.removeItemFromCart = function () {
        if (this.deleteItemIndex > -1) { // checking deleteItemIndex i.e. product Index is greater than -1 or not
            // splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
            this.products.splice(this.deleteItemIndex, 1); // removing the particular product from array
        }
        if (localStorage.getItem('id') === null) { // checking if userId is present or not
            sessionStorage.setItem('cart', JSON.stringify(this.products)); // setting products in sessionStorage
        }
        else {
            this.updateCartDetails(this.products, 'cart');
        }
        // hiding delete Modal after delete is done.
        var show = document.getElementById('deletemodal');
        show.classList.remove('in');
        show.style.display = 'none';
        this.findGrandTotal();
        this.apiService.totalItemsInCart();
    };
    // function to hide delete Modal
    CartDetailsComponent.prototype.closeDeleteModal = function () {
        var show = document.getElementById('deletemodal');
        show.classList.remove('in');
        show.style.display = 'none';
    };
    // function to increment productQuantity
    CartDetailsComponent.prototype.incrementProductQuantity = function (productCount) {
        var productTotal = this.products[productCount].productQuantity; // assign particular productQuantity
        productTotal++; // incrementing productQuantity by 1
        this.products[productCount].productQuantity = productTotal; // assigning the incremented productQuantity to productArray
        if (localStorage.getItem('id') === null) { // checking if userID present or not
            sessionStorage.setItem('cart', JSON.stringify(this.products));
        }
        else {
            this.updateCartDetails(this.products, 'cart');
        }
        this.getProductQuantity();
        this.findGrandTotal();
    };
    // function to navigate after continue or sin-in/sign-up
    CartDetailsComponent.prototype.onContinue = function (type) {
        if (localStorage.getItem('id') && type === 'continue') {
            if (localStorage.getItem('cartId')) {
                this.router.navigate(['./deliveryAddress'], { relativeTo: this.activatedRoute });
            }
        }
        else {
            sessionStorage.setItem('cart', JSON.stringify(this.products));
            if (type === 'sign-up') {
                this.router.navigate(['/sign-up'], { queryParams: { origin: 'cart' } });
            }
            else if (type === 'sign-in') {
                this.router.navigate(['/sign-in'], { queryParams: { origin: 'cart' } });
            }
        }
    };
    // function to navigate according to type
    CartDetailsComponent.prototype.redirect = function (type) {
        if (type === 'sign-up') {
            this.router.navigate(['/sign-up'], { queryParams: { origin: 'cart' } });
        }
        else if (type === 'sign-in') {
            this.router.navigate(['/sign-in'], { queryParams: { origin: 'cart' } });
        }
    };
    // used to unsubscribe the subscription
    CartDetailsComponent.prototype.ngOnDestroy = function () {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscribe.forEach(function (sub) {
            if (sub) {
                sub.unsubscribe();
            }
        });
    };
    __decorate([
        core_1.ViewChild('input')
    ], CartDetailsComponent.prototype, "inputList");
    CartDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-cart-details',
            templateUrl: './cart-details.component.html',
            styleUrls: ['./cart-details.component.css']
        })
    ], CartDetailsComponent);
    return CartDetailsComponent;
}());
exports.CartDetailsComponent = CartDetailsComponent;
