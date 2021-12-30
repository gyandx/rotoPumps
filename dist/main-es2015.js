(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gyandx/rotopumps/src/main.ts */"zUnb");


/***/ }),

/***/ "1UKJ":
/*!********************************************!*\
  !*** ./src/app/dataModels/cart-details.ts ***!
  \********************************************/
/*! exports provided: CartDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetails", function() { return CartDetails; });
class CartDetails {
    constructor(productId, code, description, price, discountPrice, type, pole, flow, head, speed, power, engineSpeed, enginekW, driveType, productQuantity) {
        this.productId = productId;
        this.code = code;
        this.description = description;
        this.price = price;
        this.discountPrice = discountPrice;
        this.type = type;
        this.pole = pole;
        this.flow = flow;
        this.head = head;
        this.speed = speed;
        this.power = power;
        this.engineSpeed = engineSpeed;
        this.enginekW = enginekW;
        this.driveType = driveType;
        this.productQuantity = productQuantity;
    }
}


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "lGQG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/text-only.directive */ "ZSuO");
/* harmony import */ var _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/number-only/numonly.directive */ "3iOn");











const _c0 = ["btnClose"];
const _c1 = function (a0, a1) { return { search: a0, driveType: a1 }; };
function HeaderComponent_header_0_ul_12_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_header_0_ul_12_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.hideSearchResults(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSearch_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", eachSearch_r14 == null ? null : eachSearch_r14.routePath)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, eachSearch_r14 == null ? null : eachSearch_r14.code, eachSearch_r14 == null ? null : eachSearch_r14.drive_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", eachSearch_r14 == null ? null : eachSearch_r14.description, "(", eachSearch_r14 == null ? null : eachSearch_r14.drive_type, ")");
} }
function HeaderComponent_header_0_ul_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_header_0_ul_12_li_1_Template, 3, 7, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.searchResults);
} }
function HeaderComponent_header_0_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r10.cartItemsQuantity, " ");
} }
const _c2 = function () { return ["/account"]; };
function HeaderComponent_header_0_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.userName);
} }
function HeaderComponent_header_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return ["/cart"]; };
function HeaderComponent_header_0_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_header_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.search(_r8.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HeaderComponent_header_0_ul_12_Template, 2, 1, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HeaderComponent_header_0_span_19_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Dealership Enquiry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, HeaderComponent_header_0_div_25_Template, 5, 3, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HeaderComponent_header_0_div_26_Template, 3, 2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toogleSearch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.cartItemsQuantity != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.userName === "");
} }
function HeaderComponent_ng_template_1_div_6_ul_6_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_1_div_6_ul_6_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r25.hideSearchResults(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSearch_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", eachSearch_r24 == null ? null : eachSearch_r24.routePath)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](4, _c1, eachSearch_r24 == null ? null : eachSearch_r24.code, eachSearch_r24 == null ? null : eachSearch_r24.drive_type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", eachSearch_r24 == null ? null : eachSearch_r24.description, " (", eachSearch_r24 == null ? null : eachSearch_r24.drive_type, ")");
} }
function HeaderComponent_ng_template_1_div_6_ul_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_template_1_div_6_ul_6_li_1_Template, 3, 7, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.searchResults);
} }
function HeaderComponent_ng_template_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 55, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HeaderComponent_ng_template_1_div_6_Template_input_input_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.textChange($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_1_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.search(_r21.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ng_template_1_div_6_ul_6_Template, 2, 1, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.toogleSearch);
} }
function HeaderComponent_ng_template_1_div_7_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r30.cartItemsQuantity, " ");
} }
function HeaderComponent_ng_template_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_1_div_7_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.gotoCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ng_template_1_div_7_span_6_Template, 2, 1, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Dealership Enquiry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_1_div_7_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.signIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_ng_template_1_div_7_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.signUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.cartItemsQuantity != 0);
} }
const _c4 = function (a0) { return { "justify-content": a0 }; };
function HeaderComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_ng_template_1_div_6_Template, 7, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_ng_template_1_div_7_Template, 17, 1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c4, ctx_r2.headerButton ? "space-between" : "center"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.headerButton);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.headerButton);
} }
function HeaderComponent_ng_container_23_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Company name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_23_p_1_Template, 2, 0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formControl == null ? null : ctx_r3.formControl.company_name == null ? null : ctx_r3.formControl.company_name.errors.required);
} }
function HeaderComponent_ng_container_32_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Full name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_32_p_1_Template, 2, 0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formControl == null ? null : ctx_r4.formControl.name == null ? null : ctx_r4.formControl.name.errors.required);
} }
function HeaderComponent_ng_container_42_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_container_42_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid email(abc@abc.abc) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_42_p_1_Template, 2, 0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_ng_container_42_p_2_Template, 2, 0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formControl == null ? null : ctx_r5.formControl.email == null ? null : ctx_r5.formControl.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formControl == null ? null : ctx_r5.formControl.email == null ? null : ctx_r5.formControl.email.errors.pattern);
} }
function HeaderComponent_ng_container_50_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_container_50_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid Phone number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_container_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_50_p_1_Template, 2, 0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_ng_container_50_p_2_Template, 2, 0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.formControl == null ? null : ctx_r6.formControl.number == null ? null : ctx_r6.formControl.number.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.formControl == null ? null : ctx_r6.formControl.number == null ? null : ctx_r6.formControl.number.errors.pattern);
} }
function HeaderComponent_ng_container_57_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Interestedin is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HeaderComponent_ng_container_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_container_57_p_1_Template, 2, 0, "p", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.formControl == null ? null : ctx_r7.formControl.intrested_in == null ? null : ctx_r7.formControl.intrested_in.errors.required);
} }
const _c5 = function (a0) { return { border: a0 }; };
class HeaderComponent {
    constructor(apiService, toasterService, router, toaster, authService, fb, changeDetectorRef) {
        this.apiService = apiService;
        this.toasterService = toasterService;
        this.router = router;
        this.toaster = toaster;
        this.authService = authService;
        this.fb = fb;
        this.changeDetectorRef = changeDetectorRef;
        this.subscription = []; // subscription of array type
        this.searchResults = [];
        this.toogleSearch = false;
    }
    ngOnInit() {
        this.authService.getCurrentUser(); // calling authService getCurrentUser function to get the username
        // subscribing the userName(behaviourSubject) to get username
        this.subscription.push(this.authService.userName.subscribe((res) => {
            if (res !== "") {
                // split() method is used to split a string into an array of substrings and return a new array
                const uName = res.split(" ");
                this.userName = uName[0];
            }
            else {
                this.userName = res;
            }
        }));
        this.createDealershipForm();
        this.apiService.totalItemsInCart(); // calling apiService totalItemsIn Cart function to get the cart quantity
        this.getCartQuantity();
    }
    textChange(searchText) {
        if (searchText === '') {
            this.searchResults = [];
        }
    }
    search(searchText) {
        let searchData = {
            query: searchText,
        };
        this.apiService.search(searchData).subscribe((res) => {
            if (res[`products`].length) {
                this.searchResults = res[`products`];
                if (this.searchResults.length) {
                    this.toogleSearch = true;
                    this.searchResults.forEach((eachProduct) => this.apiService.productCategories(eachProduct));
                }
            }
            else {
                this.toaster.success("No results found");
            }
        }, (error) => {
            var _a;
            this.toaster.error((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message);
        });
    }
    hideSearchResults() {
        this.toogleSearch = false;
    }
    createDealershipForm() {
        this.dealershipForm = this.fb.group({
            company_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            full_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$"),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[0-9 ]{10,12}"),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            intrested_in: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    onInputChange(validNumber) {
        let maxLength = 12;
        if (validNumber.length >= maxLength) {
            this.dealershipForm.patchValue({
                phone: validNumber.substring(0, 12),
            });
        }
    }
    // function to get controls of address form
    get formControl() {
        return this.dealershipForm.controls;
    }
    validateAllFields(formGroup) {
        Object.keys(this.formControl).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                this.validateAllFields(control);
            }
        });
    }
    // function to get cartValue(behavoiurSubject) by subscribing to it.
    getCartQuantity() {
        this.subscription.push(this.apiService.cartValue.subscribe((res) => {
            this.cartItemsQuantity = res;
        }));
    }
    addDealer(form) {
        if (form.invalid) {
            this.validateAllFields(form); // if form in invalid then call validateAllfields function
        }
        else {
            const reqBody = this.dealershipForm.getRawValue();
            // this.apiService.addDealer(reqBody).subscribe((res) => {
            //   this.toasterService.success('Add dealer successfully');
            // });
            $("#delarModal").modal("hide");
            this.router.navigate(["/thank-you"], {
                queryParams: { type: "dealership" },
            });
        }
    }
    resetForm() {
        this.dealershipForm.reset();
        this.changeDetectorRef.detectChanges();
    }
    // function to navigate to sign-in component
    signIn() {
        this.router.navigate(["/sign-in"]);
    }
    // function to navigate to sign-up component
    signUp() {
        this.router.navigate(["/sign-up"]);
    }
    // function to navigate to cart component
    gotoCart() {
        this.router.navigate(["/cart"]);
    }
    // to unsubscribe the subscriptions
    ngOnDestroy() {
        this.subscription.forEach((s) => {
            if (s) {
                s.unsubscribe();
            }
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.btnClose = _t.first);
    } }, inputs: { headerButton: "headerButton" }, decls: 61, vars: 23, consts: [[4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["id", "delarModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content", "enquiry-form-wrapper"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-body"], [1, "address-row"], [3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "name-container"], [1, "address-feild", "address2"], ["appTextOnly", "", "type", "text", "placeholder", "Company Name", "formControlName", "company_name", "required", "", 1, "form-control", 3, "ngStyle"], [4, "ngIf"], ["appTextOnly", "", "type", "text", "placeholder", "Full Name", "formControlName", "full_name", "required", "", 1, "form-control", 3, "ngStyle"], ["type", "text", "placeholder", "abc@xyz.com", "formControlName", "email", "required", "", 1, "form-control", 3, "ngStyle"], [1, "address-feild"], ["type", "text", "placeholder", "Contact Number", "appNumOnly", "", "formControlName", "number", "required", "", 3, "ngStyle", "input"], ["formControlName", "intrested_in", "required", "", 2, "width", "100%", "background", "rgba(0, 0, 0, 0.05)", 3, "ngStyle"], [1, "modal-footer"], ["type", "button", 1, "blue-button", 3, "click"], [1, "container"], [1, "header-row"], [1, "logo"], ["href", "javascript:void(0)", "routerLink", "/home"], ["src", "assets/images/logo/logo.png"], [1, "input-group", "header-search-box-wrapper"], ["type", "text", "placeholder", "Search", "name", "srch-term", "id", "srch-term", 1, "form-control"], ["searchText", ""], [1, "input-group-btn"], ["type", "button", 1, "btn", "btn-default", 3, "click"], [1, "fas", "fa-search"], [1, "right-header"], [1, "cart", "cart-wrapper"], ["href", "javascript:void(0)", 3, "routerLink"], ["src", "assets/images/icons/cart.png"], [1, "cart-title"], ["class", "cart-quantity-wrapper", 4, "ngIf"], [1, "dealer-icon-wrapper"], ["href", "#delarModal", "data-toggle", "modal"], [1, "far", "fa-handshake"], [1, "text-center"], ["class", "cart", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "routerLink", "queryParams", "click"], [1, "cart-quantity-wrapper"], [1, "cart"], ["href", "javascript:void(0)", 2, "text-decoration", "none", 3, "routerLink"], ["src", "assets/images/icons/user.png"], [1, "header-row", 3, "ngStyle"], ["class", "input-group header-search-box-wrapper", 4, "ngIf"], ["class", "right-header", 4, "ngIf"], ["type", "text", "placeholder", "Search", "name", "srch-term", "id", "srch-term", 1, "form-control", 3, "input"], [1, "cart", "cart-wrapper2"], ["href", "javascript:void(0)", 3, "click"], [1, "header-top-bttn"], [1, "white-button", 3, "click"], [1, "blue-button", 3, "click"], ["class", "error-addressMsg", 4, "ngIf"], [1, "error-addressMsg"], ["class", "validation-error", 4, "ngIf"], [1, "validation-error"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_header_0_Template, 27, 6, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ng_template_1_Template, 8, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dealership Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Company Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, HeaderComponent_ng_container_23_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HeaderComponent_ng_container_32_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, HeaderComponent_ng_container_42_Template, 3, 2, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Contact Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function HeaderComponent_Template_input_input_49_listener($event) { return ctx.onInputChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, HeaderComponent_ng_container_50_Template, 3, 2, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Interested In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "textarea", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, HeaderComponent_ng_container_57_Template, 2, 1, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_59_listener() { return ctx.addDealer(ctx.dealershipForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userName !== "")("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.dealershipForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c5, (ctx.formControl == null ? null : ctx.formControl.company_name == null ? null : ctx.formControl.company_name.errors == null ? null : ctx.formControl.company_name.errors.required) && ((ctx.formControl == null ? null : ctx.formControl.company_name == null ? null : ctx.formControl.company_name.touched) || (ctx.formControl == null ? null : ctx.formControl.company_name == null ? null : ctx.formControl.company_name.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.company_name == null ? null : ctx.formControl.company_name.valid) && ((ctx.formControl == null ? null : ctx.formControl.company_name == null ? null : ctx.formControl.company_name.touched) || (ctx.formControl == null ? null : ctx.formControl.company_name == null ? null : ctx.formControl.company_name.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.company_name == null ? null : ctx.formControl.company_name.invalid) && ((ctx.formControl == null ? null : ctx.formControl.company_name == null ? null : ctx.formControl.company_name.touched) || (ctx.formControl == null ? null : ctx.formControl.company_name == null ? null : ctx.formControl.company_name.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c5, (ctx.formControl == null ? null : ctx.formControl.full_name == null ? null : ctx.formControl.full_name.errors == null ? null : ctx.formControl.full_name.errors.required) && ((ctx.formControl == null ? null : ctx.formControl.full_name == null ? null : ctx.formControl.full_name.touched) || (ctx.formControl == null ? null : ctx.formControl.full_name == null ? null : ctx.formControl.full_name.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.full_name == null ? null : ctx.formControl.full_name.valid) && ((ctx.formControl == null ? null : ctx.formControl.full_name == null ? null : ctx.formControl.full_name.touched) || (ctx.formControl == null ? null : ctx.formControl.full_name == null ? null : ctx.formControl.full_name.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.invalid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c5, ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.pattern) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.required)) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.valid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.invalid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c5, ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.errors == null ? null : ctx.formControl.number.errors.pattern) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.errors == null ? null : ctx.formControl.number.errors.required)) && ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.touched) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.valid) && ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.touched) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.invalid) && ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.touched) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c5, (ctx.formControl == null ? null : ctx.formControl.intrested_in == null ? null : ctx.formControl.intrested_in.errors == null ? null : ctx.formControl.intrested_in.errors.required) && ((ctx.formControl == null ? null : ctx.formControl.intrested_in == null ? null : ctx.formControl.intrested_in.touched) || (ctx.formControl == null ? null : ctx.formControl.intrested_in == null ? null : ctx.formControl.intrested_in.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.intrested_in == null ? null : ctx.formControl.intrested_in.valid) && ((ctx.formControl == null ? null : ctx.formControl.intrested_in == null ? null : ctx.formControl.intrested_in.touched) || (ctx.formControl == null ? null : ctx.formControl.intrested_in == null ? null : ctx.formControl.intrested_in.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.intrested_in == null ? null : ctx.formControl.intrested_in.invalid) && ((ctx.formControl == null ? null : ctx.formControl.intrested_in == null ? null : ctx.formControl.intrested_in.touched) || (ctx.formControl == null ? null : ctx.formControl.intrested_in == null ? null : ctx.formControl.intrested_in.dirty)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_7__["TextOnlyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_8__["NumonlyDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-header",
                templateUrl: "./header.component.html",
                styleUrls: ["./header.component.css"],
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { headerButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], btnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["btnClose"]
        }] }); })();


/***/ }),

/***/ "3iOn":
/*!*************************************************************!*\
  !*** ./src/app/directives/number-only/numonly.directive.ts ***!
  \*************************************************************/
/*! exports provided: NumonlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumonlyDirective", function() { return NumonlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NumonlyDirective {
    constructor(el) {
        this.el = el;
    }
    // hostlistener that on input change only to return only numbers.
    onInputChange(event) {
        const initalValue = this.el.nativeElement.value;
        this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this.el.nativeElement.value) {
            event.stopPropagation();
        }
    }
}
NumonlyDirective.ɵfac = function NumonlyDirective_Factory(t) { return new (t || NumonlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NumonlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumonlyDirective, selectors: [["", "appNumOnly", ""]], hostBindings: function NumonlyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NumonlyDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumonlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appNumOnly]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'https://api-eshop.rotopumps.com.au/index.php/api/',
    // apiUrl: 'http://127.0.0.1:8000/api/'
    stripeKey: 'pk_live_51HOzYGE100LdCkst5Th9b9ZQq6BStMgEhArh5eDVUjIGrqeguqymcxg1km47DcSALDx6HIeVvqkR6ZZoXFTwRgSf00f8gxV8xa',
    stripeTestKey: 'pk_live_51HOzYGE100LdCkst5Th9b9ZQq6BStMgEhArh5eDVUjIGrqeguqymcxg1km47DcSALDx6HIeVvqkR6ZZoXFTwRgSf00f8gxV8xaz'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DmRL":
/*!******************************************************************!*\
  !*** ./src/app/shared/footerContents/awards/awards.component.ts ***!
  \******************************************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AwardsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.pageContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AwardsComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AwardsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.footerPages = [];
    }
    ngOnInit() {
        this.apiService.awardAndCertificates().subscribe((res) => {
            var _a, _b;
            this.pageType = (_a = res === null || res === void 0 ? void 0 : res.awardsandcertificates) === null || _a === void 0 ? void 0 : _a.type;
            this.pageContent = (_b = res === null || res === void 0 ? void 0 : res.awardsandcertificates) === null || _b === void 0 ? void 0 : _b.content;
        });
    }
}
AwardsComponent.ɵfac = function AwardsComponent_Factory(t) { return new (t || AwardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
AwardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AwardsComponent, selectors: [["app-awards"]], decls: 12, vars: 3, consts: [[1, "main-container", "about-page"], [1, "roto-retro"], [1, "container"], [1, "card"], [1, "dummy-pic"], [1, "card-title"], [2, "text-align", "center"], ["class", "about-content", 3, "innerHtml", 4, "ngIf", "ngIfElse"], ["error", ""], [1, "about-content", 3, "innerHtml"]], template: function AwardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AwardsComponent_div_9_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AwardsComponent_ng_template_10_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageContent)("ngIfElse", _r1);
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXJDb250ZW50cy9hd2FyZHMvYXdhcmRzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AwardsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-awards',
                templateUrl: './awards.component.html',
                styleUrls: ['./awards.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "E15m":
/*!**********************************************!*\
  !*** ./src/app/views/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/text-only.directive */ "ZSuO");
/* harmony import */ var _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/number-only/numonly.directive */ "3iOn");










function MainComponent_ng_container_34_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Full name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_ng_container_34_p_1_Template, 2, 0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formControl == null ? null : ctx_r0.formControl.name == null ? null : ctx_r0.formControl.name.errors.required);
} }
function MainComponent_ng_container_37_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_37_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid email(abc@abc.abc) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_ng_container_37_p_1_Template, 2, 0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_ng_container_37_p_2_Template, 2, 0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formControl == null ? null : ctx_r1.formControl.email == null ? null : ctx_r1.formControl.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formControl == null ? null : ctx_r1.formControl.email == null ? null : ctx_r1.formControl.email.errors.pattern);
} }
function MainComponent_ng_container_40_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contact number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_40_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid contact number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_ng_container_40_p_1_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_ng_container_40_p_2_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formControl == null ? null : ctx_r2.formControl.number == null ? null : ctx_r2.formControl.number.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formControl == null ? null : ctx_r2.formControl.number == null ? null : ctx_r2.formControl.number.errors.pattern);
} }
function MainComponent_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachProduct_r17 == null ? null : eachProduct_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachProduct_r17 == null ? null : eachProduct_r17.name, " ");
} }
function MainComponent_p_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select product from list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachCountry_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachCountry_r18 == null ? null : eachCountry_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachCountry_r18.name, " ");
} }
function MainComponent_option_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachState_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachState_r20 == null ? null : eachState_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachState_r20.name, " ");
} }
function MainComponent_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select state from list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachCity_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachCity_r22 == null ? null : eachCity_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachCity_r22.name, " ");
} }
function MainComponent_p_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select city from list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_64_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Postal code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_64_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid postal code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_ng_container_64_div_1_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainComponent_ng_container_64_div_2_Template, 2, 0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.formControl == null ? null : ctx_r10.formControl.postal_code == null ? null : ctx_r10.formControl.postal_code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.formControl == null ? null : ctx_r10.formControl.postal_code == null ? null : ctx_r10.formControl.postal_code.errors.pattern);
} }
function MainComponent_ng_container_67_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Message is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainComponent_ng_container_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainComponent_ng_container_67_p_1_Template, 2, 0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.formControl == null ? null : ctx_r11.formControl.message == null ? null : ctx_r11.formControl.message.errors.required);
} }
const _c0 = function (a0) { return { border: a0 }; };
class MainComponent {
    constructor(scroller, apiService, fb, toasterService, router) {
        this.scroller = scroller;
        this.apiService = apiService;
        this.fb = fb;
        this.toasterService = toasterService;
        this.router = router;
        this.subscribe = []; // subscribe used to store subscription
        this.cityInfo = [""]; // used to store city data
        this.stateInfo = []; // used to store state data
        this.countryInfo = []; // used to store country data
        this.pumpTypes = [
            { name: "Surface Agri Pumps" },
            { name: "Multipurpose Pumps" },
            { name: "Roto Spares" },
            { name: "Retrofit Spares" },
        ];
    }
    ngOnInit() {
        this.getCountries();
        this.createEnquiryForm();
    }
    // function to create enquiryForm
    createEnquiryForm() {
        this.enquiryForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9 ]{10,12}'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            product: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9 ]{4}'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Australia')
        });
    }
    // function to getCountries from getCountryData function
    getCountries() {
        this.subscribe.push(this.apiService.getCountryData().subscribe(res => {
            if (res) {
                this.countryInfo = res[`countries`]; // assigning response to countryInfo array
                this.onChangeCountry('Australia');
            }
        }));
    }
    // function to get countryName and statesList according to countryValue
    onChangeCountry(countryValue) {
        this.cityInfo = [];
        const countryIndex = this.countryInfo.findIndex(res => res.name === countryValue);
        this.stateInfo = this.countryInfo[countryIndex].states;
        if (this.enquiryForm.controls[`state`].value !== null) {
            this.enquiryForm.controls[`state`].setValue(null, { onlySelf: true });
            this.enquiryForm.controls[`city`].setValue(null, { onlySelf: true });
        }
    }
    onChangeState(stateValue) {
        const stateIndex = this.stateInfo.findIndex(res => res.name === stateValue);
        this.cityInfo = this.stateInfo[stateIndex].cities;
    }
    onInputChange(validNumber, type) {
        let maxLength = 0;
        if (type === 'phone') {
            maxLength = 12;
            if (validNumber.length >= maxLength) {
                this.enquiryForm.patchValue({
                    phone: validNumber.substring(0, 12)
                });
            }
        }
        else if (type === 'zip') {
            maxLength = 4;
            if (validNumber.length >= maxLength) {
                this.enquiryForm.patchValue({
                    pincode: validNumber.substring(0, 4)
                });
            }
        }
    }
    // function to get controls of address form
    get formControl() {
        return this.enquiryForm.controls;
    }
    validateAllFields(formGroup) {
        Object.keys(this.formControl).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                this.validateAllFields(control);
            }
        });
    }
    addEnquiry(form) {
        if (form.invalid) {
            this.validateAllFields(form);
            // if form in invalid then call validateAllfields function
        }
        else {
            this.apiService.addEnquiry(form.value).subscribe((res) => {
                if (res[`return`]) {
                    this.toasterService.success(res[`message`]);
                    this.router.navigate(['/home']);
                }
            });
        }
    }
    scroll() {
        this.scroller.scrollToPosition([0, 0]);
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 270, vars: 42, consts: [[1, "main-page"], [1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container"], [1, "nav-wrapper"], ["href", "#", 1, "navbar-brand"], ["src", "assets/images/mainpageimages/roto-pumps-logo.png", "alt", "Roto Pumps", "title", "Roto Pumps"], [1, "logo-right"], ["src", "assets/images/mainpageimages/tirrana-logo.png", "alt", "Roto Pumps", "title", "Roto Pumps"], [1, "full-banner-home"], ["id", "myhomeCarousel", "data-ride", "carousel", "data-interval", "2000", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "item", "img_right", "active"], ["src", "assets/images/mainpageimages/slide-1.jpg", "alt", "Home Banner"], [1, "item", "img_right"], [1, "item", "img_left"], ["href", "#myhomeCarousel", "data-slide", "prev", 1, "left", "carousel-control"], [1, "fa", "fa-arrow-left", "fa-2x"], [1, "sr-only"], ["href", "#myhomeCarousel", "data-slide", "next", 1, "right", "carousel-control"], [1, "fa", "fa-arrow-right", "fa-2x"], ["id", "cta-form", 1, "cta-form"], [3, "formGroup"], [1, "form-col-1"], ["appTextOnly", "", "type", "text", "placeholder", "Full Name", "formControlName", "name", "required", "", 1, "form-control", 3, "ngStyle"], [4, "ngIf"], ["type", "email", "placeholder", "abc@xyz.com", "formControlName", "email", "required", "", 1, "form-control", 3, "ngStyle"], ["type", "text", "placeholder", "Contact Number", "appNumOnly", "", "formControlName", "number", "required", "", 3, "ngStyle", "input"], ["formControlName", "product", "required", "", 3, "ngStyle"], ["value", "", "disabled", "disabled", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "validation-error", 4, "ngIf"], ["formControlName", "country", "required", "", 3, "ngStyle", "change"], ["formControlName", "state", "required", "", 3, "ngStyle", "change"], ["disabled", "disabled", 3, "ngValue"], ["formControlName", "city", "required", "", 3, "ngStyle"], ["class", "error-addressMsg", 4, "ngIf"], ["type", "text", "placeholder", "Zip Code(1234)", "appNumOnly", "", "formControlName", "postal_code", "required", "", 3, "ngStyle", "input"], ["formControlName", "message", "placeholder", "Message", "required", "", 2, "width", "100%", "background", "rgba(0, 0, 0, 0.05)", 3, "ngStyle"], ["type", "button", 1, "blue-button", "enquiryBtn", 3, "click"], [1, "key-capabilities"], [1, "about-text"], [1, "key-capabilities-image"], ["src", "assets/images/mainpageimages/ra-office.jpeg", "alt", "Roto Pumps", "title", "Roto Pumps"], [1, "clear"], [1, "product"], [1, "product-text"], [1, "product-features"], [1, "product-image"], ["src", "assets/images/mainpageimages/tirrana-pump.jpg", "alt", "Tirrana Pump | Roto Pumps", "title", "Tirrana Pump | Roto Pumps"], ["src", "assets/images/mainpageimages/blaster-dc.jpg", "alt", "Blaster DC | Roto Pumps", "title", "Blaster DC | Roto Pumps"], [1, "subtext"], ["src", "assets/images/mainpageimages/rotors.jpg", "alt", "Roto Spare | Roto Pumps", "title", "Roto Spare | Roto Pumps"], ["src", "assets/images/mainpageimages/stator.jpg", "alt", "Retrofit | Roto Pumps", "title", "Retrofit | Roto Pumps"], [2, "font-weight", "400"], ["src", "assets/images/mainpageimages/other-spare-parts.jpg", "alt", "Retrofit | Roto Pumps", "title", "Retrofit | Roto Pumps"], [3, "click"], [1, "cta-button"], [1, "awards-list"], ["width", "100%", "height", "260", "src", "https://www.youtube.com/embed/8ljfJvSmWRM", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["width", "100%", "height", "260", "src", "https://www.youtube.com/embed/p1oQTFbjyb4", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], ["width", "100%", "height", "260", "src", "https://www.youtube.com/embed/SnwmdYYXUjI", "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", ""], [1, "error-addressMsg"], [1, "validation-error"], [3, "value"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MainComponent_ng_container_34_Template, 2, 1, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MainComponent_ng_container_37_Template, 3, 2, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MainComponent_Template_input_input_39_listener($event) { return ctx.onInputChange($event.target.value, "number"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, MainComponent_ng_container_40_Template, 3, 2, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Please select product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MainComponent_option_45_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, MainComponent_p_46_Template, 2, 0, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MainComponent_Template_select_change_48_listener($event) { return ctx.onChangeCountry($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MainComponent_option_49_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "select", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MainComponent_Template_select_change_51_listener($event) { return ctx.onChangeState($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Please select state ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, MainComponent_option_54_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, MainComponent_p_55_Template, 2, 0, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Please select city ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, MainComponent_option_60_Template, 2, 2, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, MainComponent_p_61_Template, 2, 0, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MainComponent_Template_input_input_63_listener($event) { return ctx.onInputChange($event.target.value, "zip"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, MainComponent_ng_container_64_Template, 3, 2, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "textarea", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, MainComponent_ng_container_67_Template, 2, 1, "ng-container", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_button_click_68_listener() { return ctx.addEnquiry(ctx.enquiryForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " 2001, Roto Pumps Ltd. established a branch in Melbourne, Australia with warehouse and assembly infrastructure to provide positive displacement pump solutions to various industries. The facility was established with an aim to cater to the growing markets of Australia and New Zealand. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " To gain a strong foothold in the Australian Market, Roto Pumps focused on providing customized engineered pump packages, strong service support and ensuring ready availability with optimum stock levels of Pumps & spares. Also, Roto Pumps Australia has established an extensive network of distributors and channel partners.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " 18 years of experience in the Australian market, Roto Pumps have demonstrated its expertise in application engineering i.e. understanding of complex pumping requirements, handling critical media, optimizing pump life cycle cost. Also, we have supplied and installed thousands of high quality Helical Rotor Positive Displacement pumps and the spare parts.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Key Capabilities of Roto Pumps Australia ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "18 years of strong presence in Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "State-of-the-art Manufacturing Infrastructure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Readily available pump & parts stock (including other brands)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Huge Warehouse facility ensuring on-time delivery to customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Robust supply chain network with localized sales support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Cost-effective & customized engineered packages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, " Expertise of handling more than 5000 fluids across 25+ industries ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Strong sales & service support team in Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Roto Pumps & Spares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Tirrana Agricultural Pumps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Built on heavy-duty and proven platform. The Tirrana range of helical rotor pumps offers peace of mind and best solutions to all types of surface water transfer duties.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Capacity: 360 LPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, " Head: 120 m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Applications:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Ideal for tank filling or stock watering from dams, creeks, wells and rivers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Can handle clean water, brown water, dirty water with sand, silt or algae. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "High Suction Lift Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Viscous, Abrasive & Solid Laden Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "High / Varying Discharge Pressures Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Dirty / Salty Water");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Dairy effluent pumping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Green water pumping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Raw effluent pumping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Animal effluent pumping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Dirty water with sand, silt and algae");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Molasses transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Multipurpose Pump Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Roto\u2019s Little Master Blaster DC Series Pump has been widely acknowledged across agricultural industries for its superior flow rates and high suction lift capabilities. These multipurpose pumps can be used for dosing, transfer, and injection duties for varied liquids. Roto DC Pumps are compact, lightweight, and easy to maintain. These pumps are used for varied applications such as Feeding ponds and sprinkler systems, Automatic water pressure systems, Hosing down of cattle and stock sheds, Drawing water from wells, creeks, or shallow bores, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, " Capacity: up to 115 LPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Head: up to 60 m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Applications:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Feeding ponds and sprinkler systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Automatic water pressure systems");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "Hosing down of cattle and stock sheds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Drawing water from wells, creeks or shallow bores, etc.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Retrofit Parts for Progressive Cavity Pumps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, " Roto ensures strict in-house process control and stringent quility checks for designing & manufacturing of the highest quality retrofit spares having a long life cycle. We understand the criticality of our customer\u2019s operation, thus we always make sure to provide on-time delivery of spares while keeping ex-stock readily available. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Rotor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, " Right material conforming to international standards combined with special heat treatment and hard chrome plating technology. We at Roto Pumps ensure that dimensions and critical tolerances are maintained for all rotors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "Material Options for Rotor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Carbon Steel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "Tool Steel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "Stainless Steel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Haste alloy Duplex");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "Super Duplex.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Stator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, " Micronic accuracy moulds and advanced compound technology perfected by Roto are used to produce high quality stators having desired properties. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Material Options for Stator:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Natural.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](215, "Nitrile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "High Nitrile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "Food Grade White Nitrile.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "HNBR.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Fluoro Elastomer.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](225, "Food Grade White Fluoro Elastomer & AFLAS.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Tubing can be in Mild Steel SS 04, SS 316.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "Other parts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " Full range of coupling rods, shafts, universal joint kits are also available for all brands. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "h3", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](237, "Coating options:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "Hard chrome plating, Roto chrome and special hard coatings.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Material Options for Universal Joint Parts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Material Options for Universal Joint Parts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Shaft- Alloy Steel HCP, Stainless Steel UP/HCP.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, " Universal Joint Parts- Stainless Steel, Tool Steel and Exotic Alloys. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, " Special Material- Other Exotic Options Including Alloy 20, Haste Alloy Duplex/Super Duplex Also Available. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](254, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](255, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_a_click_256_listener() { return ctx.scroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "SEND QUERY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "ul", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "iframe", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "iframe", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](268, "iframe", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.enquiryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.errors == null ? null : ctx.formControl.name.errors.required) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.valid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.invalid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.pattern) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.required)) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.valid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.invalid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.errors == null ? null : ctx.formControl.number.errors.pattern) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.errors == null ? null : ctx.formControl.number.errors.required)) && ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.touched) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.valid) && ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.touched) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.invalid) && ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.touched) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.invalid) && ((ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.touched) || (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.valid) && ((ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.touched) || (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pumpTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.invalid) && ((ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.touched) || (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.invalid) && ((ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.touched) || (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.valid) && ((ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.touched) || (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.invalid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.valid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.invalid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.invalid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.valid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cityInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.invalid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ((ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.errors == null ? null : ctx.formControl.postal_code.errors.required) || (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.errors == null ? null : ctx.formControl.postal_code.errors.pattern)) && ((ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.touched) || (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.valid) && ((ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.touched) || (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.invalid) && ((ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.touched) || (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.errors == null ? null : ctx.formControl.message.errors.required) && ((ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.touched) || (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.valid) && ((ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.touched) || (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.invalid) && ((ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.touched) || (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.dirty)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_6__["TextOnlyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_7__["NumonlyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-main",
                templateUrl: "./main.component.html",
                styleUrls: ["./main.component.css"],
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "FSQi":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/footerContents/tirrana-general-pump/tirrana-general-pump.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TirranaGeneralPumpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TirranaGeneralPumpComponent", function() { return TirranaGeneralPumpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/home"]; };
class TirranaGeneralPumpComponent {
    constructor() { }
    ngOnInit() {
    }
}
TirranaGeneralPumpComponent.ɵfac = function TirranaGeneralPumpComponent_Factory(t) { return new (t || TirranaGeneralPumpComponent)(); };
TirranaGeneralPumpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TirranaGeneralPumpComponent, selectors: [["app-tirrana-general-pump"]], decls: 33, vars: 2, consts: [[1, "main-container", "about-page"], [1, "container", 2, "padding-top", "40px"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], [1, "card-title"], [2, "text-align", "center", "position", "relative"], [1, "row"], [1, "col-sm-9"], [1, "col-sm-8"], [1, "wpb_wrapper"], [1, "wpb_text_column", "wpb_content_element"], [1, "col-sm-4"], [1, "vc_column-inner"], [1, "wpb_single_image", "wpb_content_element", "vc_align_center"], [1, "vc_single_image-wrapper", "vc_box_border_grey"], ["src", "https://www.rotopumps.com/wp-content/uploads/2019/06/Wobble-Stator-DC-Series.png"]], template: function TirranaGeneralPumpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tirrana General Pump");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "General Purpose pumps are designed for use where low flow transfer duties in a domestic and wide range of industrial applications are required. These pumps have excellent suction lift capability up to 8 meters for water. It is available in close-coupled configurations and with standard IEC frame motors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "DC Series Pump");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Roto\u2019s Little-Champ DC Pump range are compact, lightweight and easy to maintain. 11,12 & 31 pump sizes are available with UV resistant Acetyl-co-polymer housing and 41 & 51 pump sizes are available with cast iron housing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Capacity: up to 115 LPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Head: up to 60 m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".main-container[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    \r\n}\r\n.col-sm-9[_ngcontent-%COMP%]{\r\n    margin-top: 40px;\r\n    margin-bottom: 15px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: #336fb5;\r\n    font-size: 20px;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    font-size: 1em;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-weight: 300;\r\n    color: #333;\r\n}\r\nstrong[_ngcontent-%COMP%]{\r\n    font-family: 'Roboto', sans-serif!important;\r\n    font-size: 1em;\r\n    \r\n}\r\n.vc_single_image-img[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n@media screen and (min-width: 850px){\r\n    .image-part[_ngcontent-%COMP%]{\r\n        max-width: 500px;\r\n        height: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3RlckNvbnRlbnRzL3RpcnJhbmEtZ2VuZXJhbC1wdW1wL3RpcnJhbmEtZ2VuZXJhbC1wdW1wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7O0FBRTNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBSUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlDQUFpQztJQUNqQyxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmO0FBQ0E7SUFDSSwyQ0FBMkM7SUFDM0MsY0FBYzs7QUFFbEI7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCO0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyQ29udGVudHMvdGlycmFuYS1nZW5lcmFsLXB1bXAvdGlycmFuYS1nZW5lcmFsLXB1bXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIFxyXG59XHJcbi5jb2wtc20tOXtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5cclxuXHJcbmgze1xyXG4gICAgY29sb3I6ICMzMzZmYjU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbnN0cm9uZ3tcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIFxyXG59XHJcblxyXG4udmNfc2luZ2xlX2ltYWdlLWltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODUwcHgpe1xyXG4gICAgLmltYWdlLXBhcnR7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TirranaGeneralPumpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tirrana-general-pump',
                templateUrl: './tirrana-general-pump.component.html',
                styleUrls: ['./tirrana-general-pump.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "FUS3":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./number-only/numonly.directive */ "3iOn");
/* harmony import */ var _text_only_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-only.directive */ "ZSuO");





class DirectivesModule {
}
DirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirectivesModule });
DirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectivesModule, { declarations: [_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_2__["NumonlyDirective"], _text_only_directive__WEBPACK_IMPORTED_MODULE_3__["TextOnlyDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_2__["NumonlyDirective"], _text_only_directive__WEBPACK_IMPORTED_MODULE_3__["TextOnlyDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_2__["NumonlyDirective"], _text_only_directive__WEBPACK_IMPORTED_MODULE_3__["TextOnlyDirective"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_2__["NumonlyDirective"], _text_only_directive__WEBPACK_IMPORTED_MODULE_3__["TextOnlyDirective"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "FvYy":
/*!***************************************************!*\
  !*** ./src/app/shared/banner/banner.component.ts ***!
  \***************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/text-only.directive */ "ZSuO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../directives/number-only/numonly.directive */ "3iOn");










const _c0 = ["btnClose"];
function BannerComponent_ng_container_52_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Full name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerComponent_ng_container_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerComponent_ng_container_52_p_1_Template, 2, 0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formControl == null ? null : ctx_r0.formControl.name == null ? null : ctx_r0.formControl.name.errors.required);
} }
function BannerComponent_ng_container_61_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerComponent_ng_container_61_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid email(abc@abc.abc) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerComponent_ng_container_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerComponent_ng_container_61_p_1_Template, 2, 0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BannerComponent_ng_container_61_p_2_Template, 2, 0, "p", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formControl == null ? null : ctx_r1.formControl.email == null ? null : ctx_r1.formControl.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formControl == null ? null : ctx_r1.formControl.email == null ? null : ctx_r1.formControl.email.errors.pattern);
} }
function BannerComponent_ng_container_70_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " number number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerComponent_ng_container_70_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid number number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerComponent_ng_container_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerComponent_ng_container_70_p_1_Template, 2, 0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BannerComponent_ng_container_70_p_2_Template, 2, 0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formControl == null ? null : ctx_r2.formControl.number == null ? null : ctx_r2.formControl.number.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formControl == null ? null : ctx_r2.formControl.number == null ? null : ctx_r2.formControl.number.errors.pattern);
} }
function BannerComponent_option_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachProduct_r17 == null ? null : eachProduct_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachProduct_r17 == null ? null : eachProduct_r17.name, " ");
} }
function BannerComponent_p_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select product from list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerComponent_option_92_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachCountry_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachCountry_r18 == null ? null : eachCountry_r18.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachCountry_r18.name, " ");
} }
function BannerComponent_option_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachState_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachState_r20 == null ? null : eachState_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachState_r20.name, " ");
} }
function BannerComponent_p_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select state from list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerComponent_option_113_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachCity_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachCity_r22 == null ? null : eachCity_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachCity_r22.name, " ");
} }
function BannerComponent_p_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select city from list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerComponent_ng_container_122_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Postal code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerComponent_ng_container_122_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid postal code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerComponent_ng_container_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerComponent_ng_container_122_div_1_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BannerComponent_ng_container_122_div_2_Template, 2, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.formControl == null ? null : ctx_r10.formControl.postal_code == null ? null : ctx_r10.formControl.postal_code.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.formControl == null ? null : ctx_r10.formControl.postal_code == null ? null : ctx_r10.formControl.postal_code.errors.pattern);
} }
function BannerComponent_ng_container_129_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Message is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerComponent_ng_container_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BannerComponent_ng_container_129_p_1_Template, 2, 0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.formControl == null ? null : ctx_r11.formControl.message == null ? null : ctx_r11.formControl.message.errors.required);
} }
const _c1 = function (a0) { return { border: a0 }; };
class BannerComponent {
    constructor(router, apiService, fb, toasterService, changeDetectorRef) {
        this.router = router;
        this.apiService = apiService;
        this.fb = fb;
        this.toasterService = toasterService;
        this.changeDetectorRef = changeDetectorRef;
        this.subscribe = []; // subscribe used to store subscription
        this.cityInfo = ['']; // used to store city data
        this.stateInfo = []; // used to store state data
        this.countryInfo = []; // used to store country data
        this.pumpTypes = [
            { name: 'Surface Agri Pumps' },
            { name: 'Multipurpose Pumps' },
            { name: 'Roto Spares' },
            { name: 'Retrofit Spares' }
        ];
    }
    ngOnInit() {
        this.getCountries();
        this.createEnquiryForm();
    }
    // function to create enquiryForm
    createEnquiryForm() {
        this.enquiryForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            number: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9 ]{10,12}'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            product: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            postal_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9 ]{4}'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Australia')
        });
    }
    // function to getCountries from getCountryData function
    getCountries() {
        this.subscribe.push(this.apiService.getCountryData().subscribe(res => {
            if (res) {
                this.countryInfo = res[`countries`]; // assigning response to countryInfo array
                this.onChangeCountry('Australia');
            }
        }));
    }
    // function to get countryName and statesList according to countryValue
    onChangeCountry(countryValue) {
        this.cityInfo = [];
        const countryIndex = this.countryInfo.findIndex(res => res.name === countryValue);
        this.stateInfo = this.countryInfo[countryIndex].states;
        if (this.enquiryForm.controls[`state`].value !== null) {
            this.enquiryForm.controls[`state`].setValue(null, { onlySelf: true });
            this.enquiryForm.controls[`city`].setValue(null, { onlySelf: true });
        }
    }
    onChangeState(stateValue) {
        const stateIndex = this.stateInfo.findIndex(res => res.name === stateValue);
        this.cityInfo = this.stateInfo[stateIndex].cities;
    }
    onInputChange(validNumber, type) {
        let maxLength = 0;
        if (type === 'phone') {
            maxLength = 12;
            if (validNumber.length >= maxLength) {
                this.enquiryForm.patchValue({
                    phone: validNumber.substring(0, 12)
                });
            }
        }
        else if (type === 'zip') {
            maxLength = 4;
            if (validNumber.length >= maxLength) {
                this.enquiryForm.patchValue({
                    pincode: validNumber.substring(0, 4)
                });
            }
        }
    }
    // function to get controls of address form
    get formControl() {
        return this.enquiryForm.controls;
    }
    validateAllFields(formGroup) {
        Object.keys(this.formControl).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                this.validateAllFields(control);
            }
        });
    }
    addEnquiry(form) {
        if (form.invalid) {
            this.validateAllFields(form);
            // if form in invalid then call validateAllfields function
        }
        else {
            const reqBody = this.enquiryForm.getRawValue();
            $('#changeModal').modal('hide');
            this.router.navigate(['/thank-you'], { queryParams: { type: 'enquiry' } });
        }
    }
    resetForm() {
        this.enquiryForm.reset();
        this.changeDetectorRef.detectChanges();
    }
    redirectTo(path) {
        this.router.navigate([path]);
    }
    ngOnDestroy() {
        this.subscribe.forEach(sub => {
            if (sub) {
                sub.unsubscribe();
            }
        });
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], viewQuery: function BannerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.btnClose = _t.first);
    } }, decls: 133, vars: 42, consts: [[1, "full-banner-home"], [1, "banner-btn-wrapper"], ["type", "button", "data-toggle", "modal", "data-target", "#changeModal", 1, "btn", "btn-info", "col-xs-12"], [1, "far", "fa-question-circle"], ["id", "myhomeCarousel", "data-ride", "carousel", "data-interval", "2000", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "item", "img_right", "active", 3, "click"], ["src", "assets/images/banner/homeBanner/Tirrana1.jpg", "alt", "Home Banner"], [1, "item", "img_right", 3, "click"], ["src", "assets/images/banner/homeBanner/Tirrana2.jpg", "alt", "Home Banner"], [1, "item", "img_left", 3, "click"], ["src", "assets/images/banner/homeBanner/Tirrana3.jpg", "alt", "Home Banner"], ["src", "assets/images/banner/homeBanner/Tirrana4.jpg", "alt", "Home Banner"], ["src", "assets/images/banner/homeBanner/Tirrana5.jpg", "alt", "Home Banner"], ["src", "assets/images/banner/homeBanner/Tirrana6.jpg", "alt", "Home Banner"], ["href", "#myhomeCarousel", "data-slide", "prev", 1, "left", "carousel-control"], [1, "fa", "fa-arrow-left", "fa-2x"], [1, "sr-only"], ["href", "#myhomeCarousel", "data-slide", "next", 1, "right", "carousel-control"], [1, "fa", "fa-arrow-right", "fa-2x"], [1, "container"], ["id", "changeModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content", "enquiry-form-wrapper"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", 1, "close", 3, "click"], [1, "modal-body"], [1, "address-row"], [3, "formGroup"], [1, "row"], [1, "col-md-6"], [1, "name-container"], [1, "address-feild", "address2"], ["appTextOnly", "", "type", "text", "placeholder", "Full Name", "formControlName", "name", "required", "", 1, "form-control", 3, "ngStyle"], [4, "ngIf"], ["type", "text", "placeholder", "abc@xyz.com", "formControlName", "email", "required", "", 1, "form-control", 3, "ngStyle"], [1, "address-feild"], ["type", "text", "placeholder", "Contact Number", "appNumOnly", "", "formControlName", "number", "required", "", 3, "ngStyle", "input"], ["formControlName", "product", "required", "", 3, "ngStyle"], ["value", "", "disabled", "disabled", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "validation-error", 4, "ngIf"], ["formControlName", "country", 3, "ngStyle", "change"], ["formControlName", "state", "required", "", 3, "ngStyle", "change"], ["disabled", "disabled", 3, "ngValue"], ["formControlName", "city", "required", "", 3, "ngStyle"], ["class", "error-addressMsg", 4, "ngIf"], ["type", "text", "placeholder", "1234", "appNumOnly", "", "formControlName", "postal_code", "required", "", 3, "ngStyle", "input"], ["formControlName", "message", "required", "", 2, "width", "100%", "background", "rgba(0, 0, 0, 0.05)", 3, "ngStyle"], [1, "modal-footer"], ["type", "button", 1, "blue-button", 3, "click"], [1, "error-addressMsg"], [1, "validation-error"], [3, "value"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Enquiry Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_div_click_7_listener() { return ctx.redirectTo("/multiPurposePumps/2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_div_click_9_listener() { return ctx.redirectTo("/surfaceAgriPumps/1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_div_click_11_listener() { return ctx.redirectTo("/multiPurposePumps/2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_div_click_13_listener() { return ctx.redirectTo("/rotoSpares/3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_div_click_15_listener() { return ctx.redirectTo("/retrospares"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_div_click_17_listener() { return ctx.redirectTo("/multiPurposePumps/2/bareShaftPump/4/2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Enquiry Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_button_click_36_listener() { return ctx.resetForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " \u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Post Your Enquiry");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "form", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, BannerComponent_ng_container_52_Template, 2, 1, "ng-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, BannerComponent_ng_container_61_Template, 3, 2, "ng-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Contact Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function BannerComponent_Template_input_input_69_listener($event) { return ctx.onInputChange($event.target.value, "number"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, BannerComponent_ng_container_70_Template, 3, 2, "ng-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Please select product ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, BannerComponent_option_80_Template, 2, 2, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, BannerComponent_p_81_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "select", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BannerComponent_Template_select_change_91_listener($event) { return ctx.onChangeCountry($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, BannerComponent_option_92_Template, 2, 2, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "select", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BannerComponent_Template_select_change_99_listener($event) { return ctx.onChangeState($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " Please select state ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, BannerComponent_option_102_Template, 2, 2, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](103, BannerComponent_p_103_Template, 2, 0, "p", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "select", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Please select city ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](113, BannerComponent_option_113_Template, 2, 2, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](114, BannerComponent_p_114_Template, 2, 0, "p", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Postal code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function BannerComponent_Template_input_input_121_listener($event) { return ctx.onInputChange($event.target.value, "zip"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, BannerComponent_ng_container_122_Template, 3, 2, "ng-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "textarea", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](129, BannerComponent_ng_container_129_Template, 2, 1, "ng-container", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_button_click_131_listener() { return ctx.addEnquiry(ctx.enquiryForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.enquiryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.errors == null ? null : ctx.formControl.name.errors.required) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.valid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.invalid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.pattern) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.required)) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.valid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.invalid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.errors == null ? null : ctx.formControl.number.errors.pattern) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.errors == null ? null : ctx.formControl.number.errors.required)) && ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.touched) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.valid) && ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.touched) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.invalid) && ((ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.touched) || (ctx.formControl == null ? null : ctx.formControl.number == null ? null : ctx.formControl.number.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c1, (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.invalid) && ((ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.touched) || (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.valid) && ((ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.touched) || (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pumpTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.invalid) && ((ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.touched) || (ctx.formControl == null ? null : ctx.formControl.product == null ? null : ctx.formControl.product.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c1, (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.invalid) && ((ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.touched) || (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.valid) && ((ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.touched) || (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c1, (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.invalid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.valid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.invalid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c1, (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.invalid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.valid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cityInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.invalid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c1, ((ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.errors == null ? null : ctx.formControl.postal_code.errors.required) || (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.errors == null ? null : ctx.formControl.postal_code.errors.pattern)) && ((ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.touched) || (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.valid) && ((ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.touched) || (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.invalid) && ((ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.touched) || (ctx.formControl == null ? null : ctx.formControl.postal_code == null ? null : ctx.formControl.postal_code.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c1, (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.errors == null ? null : ctx.formControl.message.errors.required) && ((ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.touched) || (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.valid) && ((ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.touched) || (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.invalid) && ((ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.touched) || (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.dirty)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_5__["TextOnlyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_7__["NumonlyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".item[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n@media screen  and (max-width: 767px) {\r\n    \r\n.item[_ngcontent-%COMP%]   .img_left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .img_right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: auto !important;\r\n    max-width: auto !important;    \r\n}\r\n\r\n.item[_ngcontent-%COMP%]   .img_left[_ngcontent-%COMP%]  {\r\n        \r\n}\r\n.item[_ngcontent-%COMP%]   .img_right[_ngcontent-%COMP%]  {\r\n        \r\n}    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QiwwQkFBMEI7QUFDOUI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5AbWVkaWEgc2NyZWVuICBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIFxyXG4uaXRlbSAuaW1nX2xlZnQgaW1nLC5pdGVtIC5pbWdfcmlnaHQgIGltZ3tcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IGF1dG8gIWltcG9ydGFudDsgICAgXHJcbn1cclxuXHJcbi5pdGVtIC5pbWdfbGVmdCAge1xyXG4gICAgICAgIFxyXG59XHJcbi5pdGVtIC5pbWdfcmlnaHQgIHtcclxuICAgICAgICBcclxufSAgICBcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { btnClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['btnClose']
        }] }); })();


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment.prod */ "cxbk");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ApiService {
    constructor(httpService) {
        this.httpService = httpService;
        this.cartValue = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0); // cartValue of behaviourSubject to reflect change in cartQuantity
        this.orderDetails = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({}); /* orderDetails of behaviourSubject to reflect change in orderDetails
                                                        using during payment-successfull*/
        this.countryData = './assets/countryList/country.json'; // country-list data
        // website Api's
        this.homePage = () => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}home`);
        this.subCategory = (productId) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}category/${productId}`);
        this.productsByCategory = (productId, parentId) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}getProductsByCategory/${productId}/${parentId}`);
        this.productById = (productId, type) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}products/${productId}/${type}`);
        this.rotoSpareDetails = (productId, type) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}roto-spare-products/${productId}/${type}`);
        this.retroSpares = () => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}retro-categories`);
        this.retroSubCategoryDetails = (productId) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}retro-category/${productId}`);
        this.retroSubProductCategory = (productId) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}getRetroProductsByCategory/${productId}`);
        this.retroSubCategoryCategoryDetails = (productId) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}retro-products/${productId}`);
        this.imageCarousel = (productId) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}get-images/${productId}`);
        this.tableList = (motorModel) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}list-bareshaft/${motorModel}`);
        this.bareShaftTableDetails = (productId, type, tableId) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}products/${productId}/${type}/${tableId}`);
        this.motorTypes = () => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}motor_type`);
        this.driveTypes = (motorCode) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}get-drivebymodel/${motorCode}`);
        this.dataDriveTypes = (productCode, motorcode) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}get-productByDrive/${productCode}/${motorcode}`);
        this.contactUs = (userData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}contact-us`, userData);
        this.search = (searchData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}search-products-model`, searchData);
        this.mostTrendingProducts = () => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}trending-products`);
        // enquiry form
        this.addEnquiry = (userData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}add-enquiry`, userData);
        this.addDealer = (userData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}add-dealer`, userData);
        // account Api's
        this.login = (userData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}login`, userData);
        this.register = (userData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}register`, userData);
        this.addAddress = (addressData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}address/add`, addressData);
        this.getAllAddress = (userId) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}address`, userId);
        this.getUserDetails = (userId) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}get-details/${userId}`);
        this.getAddressById = (addressId) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}address/${addressId}`);
        this.updatePersonalDetails = (userData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}profile`, userData);
        this.updatePassword = (userData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}update-password`, userData);
        this.forgotPassword = (passwordData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}forgot-password`, passwordData);
        this.deleteAddress = (addressId) => this.httpService.delete(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}address/${addressId}`);
        this.updateAddress = (addressData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}update-address`, addressData);
        this.tabularData = (productId, type) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}pump-details/${productId}/${type}`);
        this.footerContents = () => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}cms_pages`);
        this.awardAndCertificates = () => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}get-awards-and-certificates`);
        this.researchAndDevelopment = () => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}get-research-and-development`);
        this.dealerDiscount = () => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}get-dealers-discount`);
        // cart Api's
        this.addToCart = (cartData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}cart/add-to-cart`, cartData);
        this.updateCart = (cartData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}cart/update-cart`, cartData);
        this.getCartById = (cartId) => this.httpService.get(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}cart/details/${cartId}`);
        // payment Api's
        this.payment = (paymentData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}stripe-payment`, paymentData);
        // order Api's
        this.addOrders = (orderData) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}order/add`, orderData);
        this.orderHistory = (userId) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}order/order-history`, userId);
        this.orderDetailsById = (orderDetail) => this.httpService.post(`${_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl}order/order-details`, orderDetail);
        // countryList
        this.getCountryData = () => this.httpService.get(this.countryData);
    }
    totalItemsInCart() {
        this.updateItemsInCart();
    }
    // used to update the cartQuantity value
    updateItemsInCart() {
        // if (localStorage.getItem('id') === null) {
        if (sessionStorage.getItem('id') === null) {
            if (sessionStorage.getItem('cart') !== null) {
                const cartData = JSON.parse(window.atob(sessionStorage.getItem('cart')));
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
                // this.subscribe = this.getCartById(window.atob(localStorage.getItem('cartId'))).pipe(take(1)).subscribe(res => {
                this.subscribe = this.getCartById(window.atob(sessionStorage.getItem('cartId'))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(res => {
                    if (res[`code`] === 200) {
                        if (res[`details`] !== null) {
                            const cartData = JSON.parse(res[`details`].cart);
                            if (cartData === null) {
                                this.cartValue.next(0);
                            }
                            else {
                                this.cartValue.next(cartData.length);
                            }
                        }
                        else {
                            this.cartValue.next(0);
                        }
                    }
                });
            }
            else {
                if (sessionStorage.getItem('cart')) {
                    const cartData = JSON.parse(window.atob(sessionStorage.getItem('cart')));
                    this.cartValue.next(cartData.length);
                }
                else {
                    this.cartValue.next(0);
                }
            }
        }
    }
    // used to categorise products
    productCategories(eachProduct) {
        if (eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.description.includes("Surface Agri")) {
            eachProduct[`imgSrc`] = "assets/images/banner/surface-banner.png";
            if (eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.description.includes("Close Coupled")) {
                eachProduct[`routePath`] = `/surfaceAgriPumps/1/closedCouplePump/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.id}/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.category_id}/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.code}/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.pole}`;
            }
            else if (eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.description.includes("Bare Shaft")) {
                eachProduct[`routePath`] = `/surfaceAgriPumps/1/bareShaftPump/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.sub_category_id}/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.category_id}`;
            }
        }
        else if (eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.description.includes("Multipurpose")) {
            eachProduct[`imgSrc`] = "assets/images/card-images/multi-pump.png";
            if (eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.description.includes("Close Coupled")) {
                eachProduct[`routePath`] = `/multiPurposePumps/2/closedCouplePump/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.id}/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.category_id}/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.code}/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.pole}`;
            }
            else if (eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.description.includes("Bare Shaft")) {
                eachProduct[`routePath`] = `/multiPurposePumps/2/bareShaftPump/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.sub_category_id}/${eachProduct === null || eachProduct === void 0 ? void 0 : eachProduct.category_id}`;
            }
        }
    }
    // used to unsubscribe the subscription
    ngOnDestroy() {
        if (this.subscribe) {
            this.subscribe.unsubscribe();
        }
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "K4lT":
/*!************************************************************************************!*\
  !*** ./src/app/shared/footerContents/service-support/service-support.component.ts ***!
  \************************************************************************************/
/*! exports provided: ServiceSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceSupportComponent", function() { return ServiceSupportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ServiceSupportComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.pageContent[0] == null ? null : ctx_r0.pageContent[0].content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ServiceSupportComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ServiceSupportComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.pageContent = [];
        this.footerPages = [];
    }
    ngOnInit() {
        this.apiService.footerContents().subscribe(res => {
            if (res[`code`] === 200) {
                this.footerPages = res[`pages`];
                this.getFooterData('Services & Supports');
            }
        });
    }
    getFooterData(page) {
        if (this.footerPages.length) {
            this.pageContent = this.footerPages.filter(data => data.type === page);
        }
        else {
            this.pageContent = this.pageContent;
        }
    }
}
ServiceSupportComponent.ɵfac = function ServiceSupportComponent_Factory(t) { return new (t || ServiceSupportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ServiceSupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceSupportComponent, selectors: [["app-service-support"]], decls: 12, vars: 2, consts: [[1, "main-container", "about-page"], [1, "roto-retro"], [1, "container"], [1, "card"], [1, "dummy-pic"], [1, "card-title"], [2, "text-align", "center"], ["class", "about-content", 3, "innerHtml", 4, "ngIf", "ngIfElse"], ["error", ""], [1, "about-content", 3, "innerHtml"]], template: function ServiceSupportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Services & Supports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ServiceSupportComponent_div_9_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ServiceSupportComponent_ng_template_10_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageContent.length)("ngIfElse", _r1);
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXJDb250ZW50cy9zZXJ2aWNlLXN1cHBvcnQvc2VydmljZS1zdXBwb3J0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceSupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-service-support',
                templateUrl: './service-support.component.html',
                styleUrls: ['./service-support.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "L9i+":
/*!**********************************************************************!*\
  !*** ./src/app/shared/footerContents/about-us/about-us.component.ts ***!
  \**********************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AboutUsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.pageContent[0] == null ? null : ctx_r0.pageContent[0].content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function AboutUsComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AboutUsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.pageContent = [];
        this.footerPages = [];
    }
    ngOnInit() {
        this.apiService.footerContents().subscribe(res => {
            if (res[`code`] === 200) {
                this.footerPages = res[`pages`];
                this.getFooterData('About Us');
            }
        });
    }
    getFooterData(page) {
        if (this.footerPages.length) {
            this.pageContent = this.footerPages.filter(data => data.type === page);
        }
        else {
            this.pageContent = this.pageContent;
        }
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 12, vars: 2, consts: [[1, "main-container", "about-page"], [1, "roto-retro"], [1, "container"], [1, "card"], [1, "dummy-pic"], [1, "card-title"], [2, "text-align", "center"], ["class", "about-content", 3, "innerHtml", 4, "ngIf", "ngIfElse"], ["error", ""], [1, "about-content", 3, "innerHtml"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AboutUsComponent_div_9_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AboutUsComponent_ng_template_10_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageContent.length)("ngIfElse", _r1);
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXJDb250ZW50cy9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "N3nS":
/*!********************************************************************!*\
  !*** ./src/app/views/product-details/product-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataModels/cart-details */ "1UKJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/number-only/numonly.directive */ "3iOn");










const _c0 = function () { return { height: "220px" }; };
function ProductDetailsComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_27_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const i_r28 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.open(i_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachImg_r27 = ctx.$implicit;
    const i_r28 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", i_r28 == ctx_r0.carouselIndexVal ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-slide-to", i_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachImg_r27 == null ? null : eachImg_r27.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", eachImg_r27 == null ? null : eachImg_r27.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", eachImg_r27 == null ? null : eachImg_r27.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
} }
function ProductDetailsComponent_li_34_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_li_34_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const imgCount_r32 = ctx.index; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.changeCarousalImg(imgCount_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachThumbImg_r31 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachThumbImg_r31 == null ? null : eachThumbImg_r31.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("alt", eachThumbImg_r31 == null ? null : eachThumbImg_r31.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", eachThumbImg_r31 == null ? null : eachThumbImg_r31.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngClass", (eachThumbImg_r31 == null ? null : eachThumbImg_r31.imgSrc) === ctx_r1.selectedProductImg ? "activeImg" : "inactiveImg");
} }
function ProductDetailsComponent_ng_container_39_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Drive Type: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_39_div_3_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachProduct_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachProduct_r38, " ");
} }
function ProductDetailsComponent_ng_container_39_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductDetailsComponent_ng_container_39_div_3_Template_select_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.toggleDriveType($event.target.value); })("ngModelChange", function ProductDetailsComponent_ng_container_39_div_3_Template_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.driveType = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductDetailsComponent_ng_container_39_div_3_option_4_Template, 2, 2, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.driveType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r36.driveType != "" ? ctx_r36.driveType : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r36.driveType != "" ? ctx_r36.driveType : "Drive Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r36.toggleSelectorDropdown);
} }
function ProductDetailsComponent_ng_container_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_ng_container_39_div_2_Template, 2, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailsComponent_ng_container_39_div_3_Template, 6, 4, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.toggleDropdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.toggleDropdown);
} }
function ProductDetailsComponent_ng_container_41_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Drive Description: ", ctx_r42.driveDesc, " ");
} }
function ProductDetailsComponent_ng_container_41_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Drive Description: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_ng_container_41_span_2_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailsComponent_ng_container_41_ng_template_3_Template, 2, 0, "ng-template", null, 49, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.driveDesc)("ngIfElse", _r43);
} }
function ProductDetailsComponent_ng_container_42_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Flow Rate: ", ctx_r45.tableDetails[0], " LPS / ", ctx_r45.tableDetails[1], " GPH");
} }
function ProductDetailsComponent_ng_container_42_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Flow Rate: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_ng_container_42_span_2_Template, 2, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailsComponent_ng_container_42_ng_template_3_Template, 2, 0, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.tableDetails[0] && ctx_r4.tableDetails[1])("ngIfElse", _r46);
} }
function ProductDetailsComponent_ng_template_43_p_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("/ ", ctx_r51.selectedProduct == null ? null : ctx_r51.selectedProduct.details == null ? null : ctx_r51.selectedProduct.details.capacity, "");
} }
function ProductDetailsComponent_ng_template_43_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_ng_template_43_p_0_span_2_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Flow Rate: ", ctx_r48.selectedProduct == null ? null : ctx_r48.selectedProduct.details == null ? null : ctx_r48.selectedProduct.details.flow, " LPS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r48.selectedProduct == null ? null : ctx_r48.selectedProduct.details == null ? null : ctx_r48.selectedProduct.details.capacity);
} }
function ProductDetailsComponent_ng_template_43_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Flow Rate: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_template_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProductDetailsComponent_ng_template_43_p_0_Template, 3, 2, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_ng_template_43_ng_template_1_Template, 2, 0, "ng-template", null, 51, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.selectedProduct == null ? null : ctx_r6.selectedProduct.details == null ? null : ctx_r6.selectedProduct.details.flow)("ngIfElse", _r49);
} }
function ProductDetailsComponent_ng_container_45_span_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("/ ", ctx_r55.tableDetails[3], "");
} }
function ProductDetailsComponent_ng_container_45_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_ng_container_45_span_2_span_2_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Head: ", ctx_r52.tableIndex, " m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r52.tableDetails.length > 3);
} }
function ProductDetailsComponent_ng_container_45_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Head: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_ng_container_45_span_2_Template, 3, 2, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailsComponent_ng_container_45_ng_template_3_Template, 2, 0, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.tableIndex)("ngIfElse", _r53);
} }
function ProductDetailsComponent_ng_template_46_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Head: ", ctx_r56.selectedProduct == null ? null : ctx_r56.selectedProduct.details == null ? null : ctx_r56.selectedProduct.details.head, " m");
} }
function ProductDetailsComponent_ng_template_46_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Head: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_template_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_ng_template_46_span_1_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_ng_template_46_ng_template_2_Template, 2, 0, "ng-template", null, 53, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.selectedProduct == null ? null : ctx_r9.selectedProduct.details == null ? null : ctx_r9.selectedProduct.details.head)("ngIfElse", _r57);
} }
function ProductDetailsComponent_p_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Speed: ", ctx_r10.pumpSpeed.length ? ctx_r10.pumpSpeed[0] : ctx_r10.selectedProduct == null ? null : ctx_r10.selectedProduct.details == null ? null : ctx_r10.selectedProduct.details.speed, " RPM (", ctx_r10.pumpSpeed.length ? ctx_r10.pumpSpeed[1] : (ctx_r10.selectedProduct == null ? null : ctx_r10.selectedProduct.details == null ? null : ctx_r10.selectedProduct.details.pole) + " Pole", ") ");
} }
function ProductDetailsComponent_ng_template_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Speed: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_51_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Absorbed Power: ", ctx_r59.tableDetails[2], " KW");
} }
function ProductDetailsComponent_ng_container_51_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Absorbed Power: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_ng_container_51_p_1_Template, 3, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_ng_container_51_ng_template_2_Template, 3, 0, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.tableDetails[2])("ngIfElse", _r60);
} }
function ProductDetailsComponent_p_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Housing Part: ", ctx_r14.selectedProduct == null ? null : ctx_r14.selectedProduct.details == null ? null : ctx_r14.selectedProduct.details.whp_moc, "");
} }
function ProductDetailsComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Housing Part: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_p_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sealing: ", ctx_r17.selectedProduct == null ? null : ctx_r17.selectedProduct.details == null ? null : ctx_r17.selectedProduct.details.sealing, "");
} }
function ProductDetailsComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sealing: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_58_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rotor: ", ctx_r62.selectedProduct == null ? null : ctx_r62.selectedProduct.details == null ? null : ctx_r62.selectedProduct.details.rotor, "");
} }
function ProductDetailsComponent_ng_container_58_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rotor: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_58_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Stator: ", ctx_r65.selectedProduct == null ? null : ctx_r65.selectedProduct.details == null ? null : ctx_r65.selectedProduct.details.stator, "");
} }
function ProductDetailsComponent_ng_container_58_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Stator: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_58_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Inlet: ", ctx_r68.selectedProduct == null ? null : ctx_r68.selectedProduct.details == null ? null : ctx_r68.selectedProduct.details.inlet, ";");
} }
function ProductDetailsComponent_ng_container_58_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Outlet: ", ctx_r69.selectedProduct == null ? null : ctx_r69.selectedProduct.details == null ? null : ctx_r69.selectedProduct.details.outlet, "");
} }
function ProductDetailsComponent_ng_container_58_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inlet: NA; ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A0\u00A0 ");
} }
function ProductDetailsComponent_ng_container_58_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Outlet: NA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_ng_container_58_p_1_Template, 3, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_ng_container_58_ng_template_2_Template, 3, 0, "ng-template", null, 55, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProductDetailsComponent_ng_container_58_span_5_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductDetailsComponent_ng_container_58_ng_template_6_Template, 2, 0, "ng-template", null, 56, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ProductDetailsComponent_ng_container_58_span_9_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProductDetailsComponent_ng_container_58_span_11_Template, 2, 1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProductDetailsComponent_ng_container_58_ng_template_12_Template, 3, 0, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ProductDetailsComponent_ng_container_58_ng_template_14_Template, 2, 0, "ng-template", null, 58, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.selectedProduct == null ? null : ctx_r20.selectedProduct.details == null ? null : ctx_r20.selectedProduct.details.rotor) !== null)("ngIfElse", _r63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r20.selectedProduct == null ? null : ctx_r20.selectedProduct.details == null ? null : ctx_r20.selectedProduct.details.stator) !== null)("ngIfElse", _r66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.selectedProduct == null ? null : ctx_r20.selectedProduct.details == null ? null : ctx_r20.selectedProduct.details.inlet)("ngIfElse", _r70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r20.selectedProduct == null ? null : ctx_r20.selectedProduct.details == null ? null : ctx_r20.selectedProduct.details.outlet)("ngIfElse", _r72);
} }
function ProductDetailsComponent_p_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " V-Drive & Centrifugal Clutch included ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "pointer-events": a0 }; };
function ProductDetailsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_60_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.decrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ProductDetailsComponent_div_60_Template_input_valueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r76.quantityValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_60_Template_span_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r77.incrementQuantity(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r22.quantityValue <= 1 ? "none" : "auto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r22.quantityValue);
} }
function ProductDetailsComponent_div_61_span_6_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r81.defaultSelectedProductPrice), " ");
} }
function ProductDetailsComponent_div_61_span_6_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachWarranty_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, eachWarranty_r79 == null ? null : eachWarranty_r79.price));
} }
function ProductDetailsComponent_div_61_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_61_span_6_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86); const warrantyCount_r80 = ctx.index; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r85.changeProductWarranty(warrantyCount_r80); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_div_61_span_6_p_2_Template, 3, 3, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailsComponent_div_61_span_6_ng_template_3_Template, 3, 3, "ng-template", null, 67, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachWarranty_r79 = ctx.$implicit;
    const _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx_r78.standardWarranty == null ? null : ctx_r78.standardWarranty.duration) === (eachWarranty_r79 == null ? null : eachWarranty_r79.duration) ? "active-volt" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", eachWarranty_r79 == null ? null : eachWarranty_r79.duration, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachWarranty_r79 == null ? null : eachWarranty_r79.price) == 0)("ngIfElse", _r82);
} }
function ProductDetailsComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Warranty ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "* Refer the policy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductDetailsComponent_div_61_span_6_Template, 5, 4, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r23.warranty);
} }
function ProductDetailsComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "(plus GST@10%)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx_r24.selectedProduct == null ? null : ctx_r24.selectedProduct.details == null ? null : ctx_r24.selectedProduct.details.price, " ");
} }
function ProductDetailsComponent_div_63_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Suggested Accessories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_div_63_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_63_div_2_div_3_Template_input_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r95); const accessoryCount_r93 = ctx.index; const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r94.toggleAccessories($event, accessoryCount_r93); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachAccessory_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", eachAccessory_r92 == null ? null : eachAccessory_r92.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", eachAccessory_r92 == null ? null : eachAccessory_r92.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", eachAccessory_r92 == null ? null : eachAccessory_r92.productPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachAccessory_r92 == null ? null : eachAccessory_r92.productDesc);
} }
function ProductDetailsComponent_div_63_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "* Included by default. Please unselect if not required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailsComponent_div_63_div_2_div_3_Template, 14, 5, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r88.accessories);
} }
function ProductDetailsComponent_div_63_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r90.emptyAccMsg);
} }
function ProductDetailsComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_div_63_div_1_Template, 3, 0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductDetailsComponent_div_63_div_2_Template, 4, 1, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductDetailsComponent_div_63_ng_template_3_Template, 2, 1, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.accessories.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.accessories.length)("ngIfElse", _r89);
} }
function ProductDetailsComponent_div_64_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_64_ng_container_7_div_1_Template_span_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const spareCount_r101 = ctx.index; const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r102.consumptionSpareDecrement(spareCount_r101); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_64_ng_container_7_div_1_Template_span_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r103); const spareCount_r101 = ctx.index; const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r104.consumptionSpareIncrement(spareCount_r101); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSpare_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", eachSpare_r100 == null ? null : eachSpare_r100.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", eachSpare_r100 == null ? null : eachSpare_r100.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, (eachSpare_r100 == null ? null : eachSpare_r100.spareQuantity) <= 0 ? "none" : "auto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", eachSpare_r100 == null ? null : eachSpare_r100.spareQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 7, eachSpare_r100 == null ? null : eachSpare_r100.productPrice), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 9, eachSpare_r100 == null ? null : eachSpare_r100.discountPrice), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachSpare_r100 == null ? null : eachSpare_r100.productDesc);
} }
function ProductDetailsComponent_div_64_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_div_64_ng_container_7_div_1_Template, 24, 13, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r96.spares);
} }
function ProductDetailsComponent_div_64_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r98.emptySpareMsg);
} }
function ProductDetailsComponent_div_64_Template(rf, ctx) { if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Consumable Spares (Optional):");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " * Buy spares with pump for a special 10% discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductDetailsComponent_div_64_ng_container_7_Template, 2, 1, "ng-container", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductDetailsComponent_div_64_ng_template_8_Template, 2, 1, "ng-template", null, 88, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sub Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Shipping & Handling @5%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "GST @10%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Total Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "(In AUD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_64_Template_a_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r105.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Add To Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_div_64_Template_a_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r106); const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r107.buyNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.spares.length)("ngIfElse", _r97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 7, ctx_r26.grandTotal));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 9, ctx_r26.shippingCharges));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 11, ctx_r26.finalPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 13, ctx_r26.gstPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 15, ctx_r26.finalPrice + ctx_r26.gstPrice));
} }
const _c2 = function (a0) { return [a0]; };
const _c3 = function () { return ["../../"]; };
class ProductDetailsComponent {
    constructor(activatedRoute, toaster, apiService, router, _lightbox) {
        this.activatedRoute = activatedRoute;
        this.toaster = toaster;
        this.apiService = apiService;
        this.router = router;
        this._lightbox = _lightbox;
        this.toggleDropdown = true;
        this.driveType = "";
        this.grandTotal = 0; // default grandTotal
        this.shippingCharges = 0; // default shipping charges value
        this.finalPrice = 0; // default final Price
        this.carouselIndexVal = 0;
        this.productsDetail = new Array(); // to store product details.
        this.dummyImg = "assets/images/card-images/surfaceAgri_closedCouple/CrossSectionalDrawing.png";
        this.productCarousalImages = [];
        this.thumbnailImages = []; // to add thumbnail images
        this.routerUrl = []; // to store router path
        // productDetails: any;
        this.enableZoom = true; // to zoomIn on picture hover of type boolean
        this.zoomImageSrc = ""; // to store zoom in image default is empty string
        this.accessories = []; // to store accessories
        this.spares = []; // to store spares
        this.warranty = []; // to store warranty
        this.toggleOption = false; // change display according to pump type
        this.toggleSelectorDropdown = [];
        this.toggleMotorOption = false; // show or hide select dropdown
        this.toggleMotorDriveOption = []; // show or hide select dropdown for motor or drive
        this.tableData = []; // store table values
        this.tableValues = [];
        this.tableInfo = [];
        this.tableDetails = [];
        this.emptyAccMsg = ""; // empty accessory msg
        this.emptySpareMsg = ""; // empty spare msg
        this.toggleDetails = false;
        this.defaultMsg = "Please select drive type/motor";
        this.pumpSpeed = [];
        this.albums = [];
        this.toggleDieselEngine = false;
    }
    ngOnInit() {
        const routerUrlPath = this.router.url;
        this.routerUrl = routerUrlPath.split("/");
        this.activatedRoute.params.subscribe((res) => {
            if (res) {
                this.productId = res.model; // getting productId from router params
                this.poleType = res.type;
                this.getProductDetails(this.productId, res.type);
            }
        });
        this.activatedRoute.queryParams.subscribe((res) => {
            if (res) {
                this.tableIndex = res[`index`];
                this.tableId = res[`id`];
                if (res[`driveType`]) {
                    this.driveType = res[`driveType`];
                }
            }
        });
        if ((this.router.url.includes("surfaceAgriPumps") &&
            this.router.url.includes("bareShaftPump")) ||
            (this.router.url.includes("multiPurposePumps") &&
                this.router.url.includes("bareShaftPump"))) {
            this.getTableData(this.productId, this.poleType, this.tableId);
            this.toggleOption = true;
        }
        if (this.router.url.includes("surfaceAgriPumps") &&
            this.router.url.includes("closedCouplePump")) {
            this.thumbnailImages = [
                {
                    imgSrc: "assets/images/AGCACC/AGCApumpcopy1.png",
                    name: "PUMP REVIEW",
                    alt: "MODEL",
                },
                {
                    imgSrc: "assets/images/AGCACC/AGCAGA1.png",
                    name: "GA DWG",
                    alt: "GA DWG",
                    heading: "General Arrangement Drawing",
                },
                {
                    imgSrc: "assets/images/AGCACC/AGCASeriespump1.png",
                    name: "CS DWG",
                    alt: "CS DWG",
                    heading: "Cross Sectional Drawing",
                },
                {
                    imgSrc: "assets/images/AGCACC/curve1copy.png",
                    name: "Performance Curve",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                },
            ];
            this.productCarousalImages = [
                {
                    imgSrc: "assets/images/AGCACC/AGCApumpcopy1.png",
                    name: "PUMP REVIEW",
                    alt: "Image Required",
                },
                {
                    imgSrc: "assets/images/AGCACC/AGCAGA1.png",
                    name: "GA DWG",
                    alt: "GA DWG",
                    heading: "General Arrangement Drawing",
                },
                {
                    imgSrc: "assets/images/AGCACC/AGCASeriespump1.png",
                    name: "CS DWG",
                    alt: "CS DWG",
                    heading: "Cross Sectional Drawing",
                },
                {
                    imgSrc: "assets/images/AGCACC/curve1copy.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Performance Curve",
                    heading: "Performance Curve",
                },
            ];
            for (let i = 0; i < this.thumbnailImages.length; i++) {
                const src = this.thumbnailImages[i].imgSrc;
                const caption = "Image " + this.thumbnailImages[i].alt;
                const thumb = this.thumbnailImages[i].imgSrc;
                const album = {
                    src: src,
                    caption: caption,
                    thumb: thumb,
                };
                this.albums.push(album);
            }
        }
        if (this.router.url.includes("multiPurposePumps") &&
            this.router.url.includes("closedCouplePump")) {
            this.thumbnailImages = [
                {
                    imgSrc: "assets/images/banner/DC.png",
                    name: "PUMP REVIEW",
                    alt: "Image Required",
                    heading: "",
                },
            ];
            this.productCarousalImages = [
                {
                    imgSrc: "assets/images/banner/DC.png",
                    name: "PUMP REVIEW",
                    alt: "Image Required",
                    heading: "",
                },
            ];
            if (this.productId === "DCCC012" ||
                this.productId === "DCCC022" ||
                this.productId === "DCCC032") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 012 022 032.jpg",
                    name: "GA DWG",
                    alt: "Image Required",
                    heading: "General Arrangement Drawing",
                }, {
                    imgSrc: "assets/images/Multipurpose_GACW/CS DCAC BARESHAFT 012 022 032.jpg",
                    name: "CS DWG",
                    alt: "CS DWG",
                    heading: "Cross Sectional Drawing",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 012 022 032.jpg",
                    name: "GA DWG",
                    alt: "Image Required",
                    heading: "General Arrangement Drawing",
                }, {
                    imgSrc: "assets/images/Multipurpose_GACW/CS DCAC BARESHAFT 012 022 032.jpg",
                    name: "CS DWG",
                    alt: "CS DWG",
                    heading: "Cross Sectional Drawing",
                });
            }
            else if (this.productId === "DCCA041" || this.productId === "DCAC051") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 41 51.jpg",
                    name: "GA DWG",
                    alt: "Image Required",
                    heading: "General Arrangement Drawing",
                }, {
                    imgSrc: "assets/images/Multipurpose_GACW/CS DCAA BARESHAFT 041 051.jpg",
                    name: "CS DWG",
                    alt: "CS DWG",
                    heading: "Cross Sectional Drawing",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 41 51.jpg",
                    name: "GA DWG",
                    alt: "Image Required",
                    heading: "General Arrangement Drawing",
                }, {
                    imgSrc: "assets/images/Multipurpose_GACW/CS DCAA BARESHAFT 041 051.jpg",
                    name: "CS DWG",
                    alt: "CS DWG",
                    heading: "Cross Sectional Drawing",
                });
            }
            if (this.productId === "DCCA041") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuproseCC/DC041.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuproseCC/DC041.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC051") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuproseCC/DC051.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuproseCC/DC051.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCCC012") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuproseCC/DC012.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuproseCC/DC012.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCCC022") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuproseCC/DC022.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuproseCC/DC022.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCCC032") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuproseCC/DC032.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuproseCC/DC032.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            for (let i = 0; i < this.thumbnailImages.length; i++) {
                const src = this.thumbnailImages[i].imgSrc;
                const caption = "Image " + this.thumbnailImages[i].alt;
                const thumb = this.thumbnailImages[i].imgSrc;
                const album = {
                    src: src,
                    caption: caption,
                    thumb: thumb,
                };
                this.albums.push(album);
            }
        }
        if (this.router.url.includes("surfaceAgriPumps") &&
            this.router.url.includes("bareShaftPump")) {
            this.thumbnailImages = [
                {
                    imgSrc: "assets/images/AGAABS/Agaapumpcopy-Copy.png",
                    name: "PUMP REVIEW",
                    alt: "",
                    heading: "",
                },
                {
                    imgSrc: "assets/images/AGAABS/AGAAGADWG1.png",
                    name: "GA DWG",
                    alt: "GA DWG",
                    heading: "General Arrangement Drawing",
                },
                {
                    imgSrc: "assets/images/AGAABS/AGAACS1.png",
                    name: "CA DWG",
                    alt: "CA DWG",
                    heading: "Cross Sectional Drawing",
                },
            ];
            this.productCarousalImages = [
                {
                    imgSrc: "assets/images/AGAABS/Agaapumpcopy-Copy.png",
                    name: "PUMP REVIEW",
                    alt: "",
                    heading: "",
                },
                {
                    imgSrc: "assets/images/AGAABS/AGAAGADWG1.png",
                    name: "GA DWG",
                    alt: "GA DWG",
                    heading: "General Arrangement Drawing",
                },
                {
                    imgSrc: "assets/images/AGAABS/AGAACS1.png",
                    name: "CA DWG",
                    alt: "CA DWG",
                    heading: "Cross Sectional Drawing",
                },
            ];
            if (this.productId === "AGAA01A" && this.poleType === "4") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA1A4POLE1450RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA1A4POLE1450RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA01A" && this.poleType === "6") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA1A6POLE960RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA1A6POLE960RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA01B" && this.poleType === "4") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA1B4POLE1450RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA1B4POLE1450RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA01B" && this.poleType === "6") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA1B6POLE960RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA1B6POLE960RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA03A" && this.poleType === "4") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA3A4POLE1450RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA3A4POLE1450RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA03A" && this.poleType === "6") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Img Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Img Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA03B" && this.poleType === "4") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA3B6POLE960RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA3B6POLE960RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA03B" && this.poleType === "6") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Img Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Img Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA05A" && this.poleType === "4") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA5A4POLE1450RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA5A4POLE1450RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA05B" && this.poleType === "6") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA5B6POLE960RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/AGAABS/AGCA5B6POLE960RPMPERCURVE1.png",
                    name: "PERFORMANCE CURVE",
                    alt: "PERFORMANCE CURVE",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA07A" && this.poleType === "4") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Img Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Img Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA07A" && this.poleType === "6") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Img Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA07B" && this.poleType === "6") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Img Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "AGAA07B" && this.poleType === "4") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/icons/No-Image-Found.png",
                    name: "PERFORMANCE CURVE",
                    alt: "Img Required",
                    heading: "Performance Curve",
                });
            }
            for (let i = 0; i < this.thumbnailImages.length; i++) {
                const src = this.thumbnailImages[i].imgSrc;
                const caption = "Image " + this.thumbnailImages[i].alt;
                const thumb = this.thumbnailImages[i].imgSrc;
                const album = {
                    src: src,
                    caption: caption,
                    thumb: thumb,
                };
                this.albums.push(album);
            }
        }
        this.selectedProductImg = this.productCarousalImages[0]; // assign selectedProductImg to 1st index of productImg arraythis.se
    }
    onMotorChange(event) {
        this.motorData = event;
    }
    getPerformanceCurve() {
        if (this.router.url.includes("multiPurposePumps") &&
            this.router.url.includes("bareShaftPump")) {
            this.thumbnailImages = [
                {
                    imgSrc: "assets/images/banner/DC.png",
                    name: "PUMP REVIEW",
                    alt: "Image Required",
                    heading: "",
                },
            ];
            this.productCarousalImages = [
                {
                    imgSrc: "assets/images/banner/DC.png",
                    name: "PUMP REVIEW",
                    alt: "Image Required",
                    heading: "",
                },
            ];
            if (this.productId === "DCAC012" ||
                this.productId === "DCAC022" ||
                this.productId === "DCAC032") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 012 022 032.jpg",
                    name: "GA DWG",
                    alt: "Image Required",
                    heading: "General Arrangement Drawing",
                }, {
                    imgSrc: "assets/images/Multipurpose_GACW/CS DCAC BARESHAFT 012 022 032.jpg",
                    name: "CS DWG",
                    alt: "CS DWG",
                    heading: "Cross Sectional Drawing",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 012 022 032.jpg",
                    name: "GA DWG",
                    alt: "Image Required",
                    heading: "General Arrangement Drawing",
                }, {
                    imgSrc: "assets/images/Multipurpose_GACW/CS DCAC BARESHAFT 012 022 032.jpg",
                    name: "CS DWG",
                    alt: "CS DWG",
                    heading: "Cross Sectional Drawing",
                });
            }
            else if (this.productId === "DCAA041" || this.productId === "DCAA051") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 41 51.jpg",
                    name: "GA DWG",
                    alt: "Image Required",
                    heading: "General Arrangement Drawing",
                }, {
                    imgSrc: "assets/images/Multipurpose_GACW/CS DCAA BARESHAFT 041 051.jpg",
                    name: "CS DWG",
                    alt: "Image Required",
                    heading: "Cross Sectional Drawing",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_GACW/GA BARESHAFT AND CLOSE COUPLED DC 41 51.jpg",
                    name: "CS DWG",
                    alt: "Image Required",
                    heading: "General Arrangement Drawing",
                }, {
                    imgSrc: "assets/images/Multipurpose_GACW/CS DCAA BARESHAFT 041 051.jpg",
                    name: "CS DWG",
                    alt: "Image Required",
                    heading: "Cross Sectional Drawing",
                });
            }
            if (this.productId === "DCAC012" && this.pumpSpeed[0] === "800") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_800RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_800RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC012" && this.pumpSpeed[0] === "960") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_960RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_960RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC012" && this.pumpSpeed[0] === "1200") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_1200RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_1200RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC012" && this.pumpSpeed[0] === "1450") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_1450RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC012/DC_012_1450RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC022" && this.pumpSpeed[0] === "800") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_800RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_800RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC022" && this.pumpSpeed[0] === "960") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_960RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_960RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC022" && this.pumpSpeed[0] === "1200") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_1200RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_1200RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC022" && this.pumpSpeed[0] === "1450") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_1450RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC022/DC_022_1450RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC032" && this.pumpSpeed[0] === "800") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_800RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_800RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC032" && this.pumpSpeed[0] === "960") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_960RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_960RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC032" && this.pumpSpeed[0] === "1200") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_1200RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_1200RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAC032" && this.pumpSpeed[0] === "1450") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_1450RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC032/DC_032_1450RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAA041" && this.pumpSpeed[0] === "800") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_800RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_800RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAA041" && this.pumpSpeed[0] === "960") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_960RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_960RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAA041" && this.pumpSpeed[0] === "1200") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_1200RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_1200RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAA041" && this.pumpSpeed[0] === "1450") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_1450RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC041/DC_041_1450RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAA051" && this.pumpSpeed[0] === "800") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_800RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_800RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAA051" && this.pumpSpeed[0] === "960") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_960RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_960RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAA051" && this.pumpSpeed[0] === "1200") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_1200RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_1200RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            else if (this.productId === "DCAA051" && this.pumpSpeed[0] === "1450") {
                this.thumbnailImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_1450RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
                this.productCarousalImages.push({
                    imgSrc: "assets/images/Multipurpose_PC_New/MultipuposeBS/DC051/DC_051_1450RPM.jpg",
                    name: "PERFORMANCE CURVE",
                    alt: "Image Required",
                    heading: "Performance Curve",
                });
            }
            for (let i = 0; i < this.thumbnailImages.length; i++) {
                const src = this.thumbnailImages[i].imgSrc;
                const caption = "Image " + this.thumbnailImages[i].alt;
                const thumb = this.thumbnailImages[i].imgSrc;
                const album = {
                    src: src,
                    caption: caption,
                    thumb: thumb,
                };
                this.albums.push(album);
            }
        }
    }
    // function to get product details by passing productId and productPoleType(4 or 6)
    getProductDetails(productId, poleType) {
        // productById api call to get that particular product
        this.apiService.productById(productId, poleType).subscribe((res) => {
            if (res[`code`] === 200) {
                this.productsDetail = res[`product`]; // assigned res['product] to productDetails
                this.selectedProduct = this.productsDetail[0]; // assign 1st index of productDetails to selectedProduct
                if (this.router.url.includes("surfaceAgriPumps") &&
                    this.router.url.includes("closedCouplePump")) {
                    if (this.driveType != "") {
                        this.toggleDriveType(this.driveType);
                        this.toggleSelectorDropdown = [];
                    }
                    else {
                        this.toggleMotorDriveOption = res[`drive`];
                        if (this.toggleMotorDriveOption.length) {
                            this.toggleMotorDriveOption.forEach((eachData) => {
                                Object.values(eachData).forEach((data) => {
                                    this.toggleSelectorDropdown.push(data);
                                });
                            });
                        }
                    }
                }
                else if (this.router.url.includes("multiPurposePumps") &&
                    this.router.url.includes("closedCouplePump")) {
                    this.toggleDropdown = false;
                    this.toggleDetails = true;
                    this.driveType = null;
                    this.quantityValue =
                        this.selectedProduct[`details`].productQuantity;
                    this.defaultSelectedProductPrice =
                        this.selectedProduct[`details`].price;
                    this.onchangeSelectedProduct();
                    this.findGrandTotal();
                }
                else {
                    this.getDriveMotorOptions(this.selectedProduct.details.code);
                }
            }
        }, (err) => {
            var _a;
            this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
        });
    }
    getDriveMotorOptions(modelCode) {
        if (this.driveType != "") {
            this.toggleDriveType(this.driveType);
        }
        else {
            this.apiService.driveTypes(modelCode).subscribe((res) => {
                if (res[`code`] === 200) {
                    this.toggleMotorDriveOption = res[`drive_type`];
                    if (this.toggleMotorDriveOption.length) {
                        this.toggleMotorDriveOption.forEach((eachData) => {
                            Object.values(eachData).forEach((data) => {
                                this.toggleSelectorDropdown.push(data);
                            });
                        });
                    }
                }
            });
        }
    }
    open(index) {
        // open lightbox
        this._lightbox.open(this.albums, index, {
            wrapAround: true,
            showImageNumberLabel: true,
            showZoom: true,
            showRotate: true,
            centerVertically: true,
        });
    }
    close() {
        // close lightbox programmatically
        this._lightbox.close();
    }
    toggleDriveType(data) {
        if (this.router.url.includes("surfaceAgriPumps") &&
            this.router.url.includes("closedCouplePump")) {
            this.toggleDetails = true;
            this.driveDesc = this.selectedProduct[`details`].drive_desc;
            this.driveType = data;
            this.quantityValue = this.selectedProduct[`details`].productQuantity;
            this.defaultSelectedProductPrice = this.selectedProduct[`details`].price;
            this.onchangeSelectedProduct();
            this.findGrandTotal();
        }
        else {
            this.apiService
                .dataDriveTypes(this.selectedProduct.details.code, data)
                .subscribe((res) => {
                if (res[`code`] === 200) {
                    this.selectedProduct = [];
                    this.toggleDetails = true;
                    this.driveType = data;
                    if (res[`product`].length) {
                        this.selectedProduct = res[`product`][0];
                    }
                    if (this.driveType ===
                        "Diesel Engine Manual (engine speed 1800 rpm)" ||
                        this.driveType === "Diesel Engine Automatic") {
                        this.toggleDieselEngine = true;
                        this.engineKw = this.selectedProduct[`details`].pole;
                    }
                    else {
                        this.toggleDieselEngine = false;
                    }
                    this.driveDesc = this.selectedProduct[`details`].drive_desc;
                    this.defaultSelectedProductPrice =
                        this.selectedProduct[`details`].price; /* assign selectedProduct price to defaultSelectedProductPrice*/
                    this.quantityValue =
                        this.selectedProduct[`details`].productQuantity;
                    this.onchangeSelectedProduct();
                    this.findGrandTotal();
                }
            });
        }
    }
    getTableData(productId, poleType, tableId) {
        this.apiService
            .bareShaftTableDetails(productId, poleType, tableId)
            .subscribe((res) => {
            if (res[`code`] === 200) {
                let table;
                this.tableInfo = res[`Bareshaft`];
                this.tableValues = this.tableInfo[0];
                table = this.tableValues[this.tableIndex];
                this.tableDetails = table.split(",");
                this.pumpSpeed = this.tableValues[`pump_speed`].split(" - ");
                if (this.tableDetails.length > 3 &&
                    this.tableDetails[3] !== "33 ft") {
                    this.tableIndex = +this.tableIndex * 2;
                }
                if (this.router.url.includes("multiPurposePumps") &&
                    this.router.url.includes("bareShaftPump")) {
                    this.getPerformanceCurve();
                }
            }
        });
    }
    getImageCarosual(productId) {
        this.apiService.imageCarousel(productId).subscribe((res) => {
            if (res[`code`] === 200) {
                this.productCarousalImages = res[`product_images`];
            }
        });
    }
    // function to assign values to warranty, accessories and spares
    onchangeSelectedProduct() {
        this.warranty = this.selectedProduct.warranty;
        this.accessories = [];
        this.spares = [];
        this.standardWarranty = this.warranty[0]; // default warranty of 1 year is selected
        if (this.selectedProduct.accessories.length > 0) {
            this.selectedProduct.accessories.filter((eachAccessory) => {
                if (eachAccessory.productPrice !== null &&
                    eachAccessory.productPrice !== "NULL" &&
                    eachAccessory.productPrice !== 0) {
                    if (eachAccessory.productName === "Baseplate") {
                        eachAccessory.imgSrc = "assets/images/SparesImg/Baseplate_pic.png";
                    }
                    else if (eachAccessory.productName === "DRP") {
                        eachAccessory.imgSrc = "assets/images/SparesImg/DRP_pic.png";
                    }
                    this.accessories.push(eachAccessory);
                }
            });
        }
        else {
            this.emptyAccMsg = "No accessories found";
        }
        // assign selectedProduct spares to spare array
        if (this.selectedProduct.spares.length > 0) {
            this.selectedProduct.spares.filter((eachSpare) => {
                if ((eachSpare === null || eachSpare === void 0 ? void 0 : eachSpare.productPrice) !== null &&
                    eachSpare.productPrice !== "NULL" &&
                    (eachSpare === null || eachSpare === void 0 ? void 0 : eachSpare.productPrice) !== 0) {
                    let spareDiscountPrice = 0;
                    spareDiscountPrice =
                        (eachSpare === null || eachSpare === void 0 ? void 0 : eachSpare.productPrice) - (eachSpare === null || eachSpare === void 0 ? void 0 : eachSpare.productPrice) * 0.1;
                    eachSpare.discountPrice = Math.round(spareDiscountPrice);
                    if (eachSpare.productName === "Rotor") {
                        eachSpare.imgSrc = "assets/images/SparesImg/rotor.jpg";
                    }
                    else if (eachSpare.productName === "Stator") {
                        eachSpare.imgSrc = "assets/images/icons/stator.png";
                    }
                    else if (eachSpare.productName === "Mech Seal") {
                        eachSpare.imgSrc =
                            "assets/images/SparesImg/Mechanical-Seal_image.jpg";
                    }
                    else if (eachSpare.productName === "UJ M Kit") {
                        eachSpare.imgSrc = "assets/images/SparesImg/UJ_KIT.jpg";
                    }
                    this.spares.push(eachSpare);
                }
            });
        }
        else {
            this.emptySpareMsg = "No spares found";
        }
    }
    // function to calculate the total price of selected product, accessory and spare
    findGrandTotal() {
        let accessoryPrice = 0; // default accessory price 0
        let sparePrice = 0; // default spare price 0
        // using loop to get the selected accessories price
        this.accessories.forEach((ele) => {
            if (ele.accessoryQuantity) {
                accessoryPrice = +ele.productPrice + accessoryPrice;
            }
        });
        // using loop to get the selected spares price
        this.spares.forEach((ele) => {
            if (ele.spareQuantity) {
                sparePrice = ele.discountPrice * ele.spareQuantity + sparePrice;
            }
        });
        // calculating grandTotal
        this.grandTotal =
            accessoryPrice +
                sparePrice +
                this.quantityValue * +this.selectedProduct.details.price;
        this.shippingCharges = Math.round(+(0.05 * this.grandTotal).toFixed(3)); // 5% of totalCharges
        this.finalPrice = Math.round(this.grandTotal + this.shippingCharges); // adding price with shippingCharges and assigning to total
        this.gstPrice = Math.round(+(0.1 * this.finalPrice).toFixed(3));
    }
    // function to change warranty
    changeProductWarranty(warrantyCount) {
        this.standardWarranty =
            this.warranty[warrantyCount]; /* getting warrantyCount(warrantyIndex) as assign warranty to selectedWarranty */
        if (+this.standardWarranty.price === 0) {
            this.selectedProduct.details.price =
                this.defaultSelectedProductPrice; /* changing selected Price according to defaultSelectedProductPrice */
        }
        else {
            this.selectedProduct.details.price = this.standardWarranty.price; // changing selected Price according to standardWarranty price
        }
        this.findGrandTotal();
    }
    // function to change motorVoltage and change products according to motorVolt
    changeMotorVoltage(voltCount) {
        var _a, _b;
        this.selectedProduct = this.productsDetail[voltCount];
        this.defaultSelectedProductPrice = (_b = (_a = this.selectedProduct) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.price;
        this.onchangeSelectedProduct();
        this.findGrandTotal();
    }
    // function to increment productQuantity
    incrementQuantity() {
        this.quantityValue = this.quantityValue + 1;
        this.findGrandTotal();
    }
    // function to decrement productQuantity
    decrementQuantity() {
        this.quantityValue = this.quantityValue - 1;
        if (this.quantityValue < 1) {
            this.quantityValue = 1;
        }
        this.findGrandTotal();
    }
    // function to decrement spareQuantity
    consumptionSpareDecrement(spareCount) {
        this.spares[spareCount].spareQuantity--;
        this.findGrandTotal();
    }
    // function to increment spareQuantity
    consumptionSpareIncrement(spareCount) {
        this.spares[spareCount].spareQuantity++;
        this.findGrandTotal();
    }
    // function to toggleAccessory(if checked increase accessory product count to 1 else to 0)
    toggleAccessories(event, accessoryCount) {
        if (event.srcElement.checked) {
            this.accessories[accessoryCount].accessoryQuantity = 1;
        }
        else {
            this.accessories[accessoryCount].accessoryQuantity = 0;
        }
        this.findGrandTotal();
    }
    // function to add product, accessory and spares to cart
    addToCart() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const accessoriesToAdd = []; // accessoriesToAdd[] to add accessory
        const sparesToAdd = []; // sparesToAdd[] to add spare
        let driveType = null;
        if (this.driveType !== null) {
            driveType = {
                desc: this.driveType,
            };
        }
        else {
            driveType = { desc: "" };
        }
        // array to push selected Accessory
        this.accessories.forEach((ele) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (ele.accessoryQuantity >= 1) {
                const accessory = new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_1__["CartDetails"]((_b = (_a = this.selectedProduct) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.id, ele.productName, ele.productDesc, ele.productPrice, 0, "accessory", this.pumpSpeed.length
                    ? this.pumpSpeed[1]
                    : (_d = (_c = this.selectedProduct) === null || _c === void 0 ? void 0 : _c.details) === null || _d === void 0 ? void 0 : _d.pole, this.tableDetails.length > 0
                    ? this.tableIndex + " LPS/ " + this.tableDetails[1] + " GPH"
                    : ((_f = (_e = this.selectedProduct) === null || _e === void 0 ? void 0 : _e.details) === null || _f === void 0 ? void 0 : _f.flow) + " LPS", this.tableDetails.length > 0
                    ?  true
                        ? this.tableDetails.length > 0
                            ? this.tableIndex + " m" + " / " + this.tableDetails[3]
                            : ""
                        : undefined
                    : ((_h = (_g = this.selectedProduct) === null || _g === void 0 ? void 0 : _g.details) === null || _h === void 0 ? void 0 : _h.head) + "m", this.pumpSpeed.length
                    ? this.pumpSpeed[0] + " RPM"
                    : ((_k = (_j = this.selectedProduct) === null || _j === void 0 ? void 0 : _j.details) === null || _k === void 0 ? void 0 : _k.speed) + " RPM", this.tableDetails.length > 0 ? this.tableDetails[2] + " KW" : "0", this.toggleDieselEngine ? "1800 RPM" : "0", this.toggleDieselEngine ? "5.5 kw" : "0", driveType.desc, ele.accessoryQuantity);
                accessoriesToAdd.push(accessory);
            }
        });
        // array to push selected Spare
        this.spares.forEach((ele) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (ele.spareQuantity >= 1) {
                const spare = new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_1__["CartDetails"]((_b = (_a = this.selectedProduct) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.id, ele.productName, ele.productDesc, ele.productPrice, ele.discountPrice, "spare", this.pumpSpeed.length
                    ? this.pumpSpeed[1]
                    : (_d = (_c = this.selectedProduct) === null || _c === void 0 ? void 0 : _c.details) === null || _d === void 0 ? void 0 : _d.pole, this.tableDetails.length > 0
                    ? this.tableIndex + " LPS/ " + this.tableDetails[1] + " GPH"
                    : ((_f = (_e = this.selectedProduct) === null || _e === void 0 ? void 0 : _e.details) === null || _f === void 0 ? void 0 : _f.flow) + " LPS", this.tableDetails.length > 0
                    ?  true
                        ? this.tableDetails.length > 0
                            ? this.tableIndex + " m" + " / " + this.tableDetails[3]
                            : ""
                        : undefined
                    : ((_h = (_g = this.selectedProduct) === null || _g === void 0 ? void 0 : _g.details) === null || _h === void 0 ? void 0 : _h.head) + " m", this.pumpSpeed.length
                    ? this.pumpSpeed[0] + " RPM"
                    : ((_k = (_j = this.selectedProduct) === null || _j === void 0 ? void 0 : _j.details) === null || _k === void 0 ? void 0 : _k.speed) + " RPM", this.tableDetails.length > 0 ? this.tableDetails[2] + " KW" : "0", this.toggleDieselEngine ? "1800 RPM" : "0", this.toggleDieselEngine ? "5.5 kw" : "0", driveType.desc, ele.spareQuantity);
                sparesToAdd.push(spare);
            }
        });
        // assign selectedProduct to cart
        const cart = new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_1__["CartDetails"](this.selectedProduct.details.id, this.selectedProduct.details.code, this.selectedProduct.details.description, this.selectedProduct.details.price, 0, "product", this.pumpSpeed.length
            ? this.pumpSpeed[1]
            : (_b = (_a = this.selectedProduct) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.pole, this.tableDetails.length > 0
            ? this.tableIndex + " LPS/ " + this.tableDetails[1] + " GPH"
            : ((_d = (_c = this.selectedProduct) === null || _c === void 0 ? void 0 : _c.details) === null || _d === void 0 ? void 0 : _d.flow) + " LPS", this.tableDetails.length > 0
            ?  true
                ? this.tableDetails.length > 0
                    ? this.tableIndex + " m" + " / " + this.tableDetails[3]
                    : ""
                : undefined
            : (_f = (_e = this.selectedProduct) === null || _e === void 0 ? void 0 : _e.details) === null || _f === void 0 ? void 0 : _f.head, this.pumpSpeed.length
            ? this.pumpSpeed[0] + " RPM"
            : ((_h = (_g = this.selectedProduct) === null || _g === void 0 ? void 0 : _g.details) === null || _h === void 0 ? void 0 : _h.speed) + " RPM", this.tableDetails.length > 0 ? this.tableDetails[2] + " KW" : "0", this.toggleDieselEngine ? "1800 RPM" : "0", this.toggleDieselEngine ? "5.5 kw" : "0", driveType.desc, this.quantityValue);
        // if (localStorage.getItem('id')) { // check if userId is present or not in localStorage
        if (sessionStorage.getItem("id")) {
            // check if userId is present or not in sessionStorage
            // tslint:disable-next-line: max-line-length
            // if (localStorage.getItem('cartId') === null) { // check if cartId is present or not in localStorage(if not present the value is null)
            if (sessionStorage.getItem("cartId") === null) {
                // check if cartId is present or not in sessionStorage(if not present the value is null)
                // tslint:disable-next-line: max-line-length
                if (sessionStorage.getItem("cart") === null) {
                    // check if cart is present or not in sessionStorage(if not present the value is null)
                    const cartArray = []; // declaring an empty array
                    cartArray.push(Object.assign({}, cart)); // pushing cart(i.e. selectedProduct) to cartArray
                    cartArray.push(...accessoriesToAdd); // pushing accessoriesToAdd in cartArray
                    cartArray.push(...sparesToAdd); // pushing sparesToAdd in cartArray
                    // cartData object with userId and cartArray to pass as parameter(in post body) in addToCart api
                    const cartData = {
                        // user_id: window.atob(localStorage.getItem('id')),
                        user_id: window.atob(sessionStorage.getItem("id")),
                        cart: JSON.stringify(cartArray),
                    };
                    // calling addToCart api
                    this.apiService.addToCart(cartData).subscribe((res) => {
                        if (res[`code`] === 200) {
                            const cartItems = JSON.parse(res[`cart_details`].cart);
                            // localStorage.setItem('cartId', window.btoa(res[`cart_details`].id));
                            sessionStorage.setItem("cartId", window.btoa(res[`cart_details`].id));
                            this.toaster.success("Successfully Added To Cart");
                            this.apiService.totalItemsInCart();
                            // console.log('res', res)
                        }
                    });
                }
                else {
                    // fetching data from sessionStorage and assign to cartLocalData
                    const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem("cart")));
                    this.updateCartDetails(cartLocalData, cart, accessoriesToAdd, sparesToAdd, "add"); // calling upDataCart to add
                }
            }
            // userId is present
            else {
                // calling getCartById api to get cartData using cartId
                // this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
                this.apiService
                    .getCartById(window.atob(sessionStorage.getItem("cartId")))
                    .subscribe((res) => {
                    if (res[`code`] === 200) {
                        let cartDetails;
                        // console.log('update', cart)
                        cartDetails = JSON.parse(res[`details`].cart);
                        this.updateCartDetails(cartDetails, cart, accessoriesToAdd, sparesToAdd, "update"); // calling upDataCart to update
                    }
                }, (err) => {
                    var _a;
                    this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
                });
            }
        }
        else {
            if (sessionStorage.getItem("cart") &&
                sessionStorage.getItem("cart").length > 2) {
                const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem("cart")));
                this.updateCartDetails(cartLocalData, cart, accessoriesToAdd, sparesToAdd, "session"); // calling upDataCart to store in session
            }
            else {
                const cartArray = [];
                cartArray.push(Object.assign({}, cart));
                cartArray.push(...accessoriesToAdd);
                cartArray.push(...sparesToAdd);
                sessionStorage.setItem("cart", window.btoa(JSON.stringify(cartArray)));
                this.apiService.totalItemsInCart();
            }
            this.toaster.success("Successfully Added To Cart");
        }
    }
    updateCartDetails(cartDetails, cart, accessoriesToAdd, sparesToAdd, type) {
        let cartItems; // to store cartProducts
        // checking cartDetails length and if length 0 then push data in cartDetails
        if (cartDetails.length <= 0) {
            cartDetails.push(cart);
            cartDetails.push(...accessoriesToAdd);
            cartDetails.push(...sparesToAdd);
        }
        // cartDetails length is greater than 0
        else {
            const cartAccessoryDataSet = new Array(); // creating new accessoryArray
            const cartSpareDataSet = new Array(); // creating new spareArray
            let cartProductDataSet; // variable to set productData
            let spareNotExist = true; // check if spare type is present in cartLocalData
            let accessoryNotExist = true; // check if accessory type is present in cartLocalData
            let cartNotExist = true;
            // for loop starts
            for (let i = 0; i < cartDetails.length; i++) {
                if (cartDetails[i].type === "product") {
                    // checking productType
                    cartNotExist = false;
                    if (cartDetails[i].driveType === cart.driveType &&
                        cartDetails[i].code === cart.code &&
                        cartDetails[i].pole === cart.pole) {
                        cartDetails[i].productQuantity++;
                    }
                    else {
                        cartProductDataSet = cart;
                    }
                }
                else if (cartDetails[i].type === "accessory") {
                    accessoryNotExist = false;
                    for (let j = 0; j < accessoriesToAdd.length; j++) {
                        if (accessoriesToAdd[j].description === cartDetails[i].description &&
                            accessoriesToAdd[j].pole === cartDetails[i].pole &&
                            accessoriesToAdd[j].driveType === cartDetails[i].driveType) {
                            // checking productType
                            cartDetails[i].productQuantity++;
                        }
                        else {
                            /* some() is used to checks whether at least one of the elements of the array satisfies
                              the condition then returns true (and does not check the remaining values) otherwise return false*/
                            if (!cartDetails.some((res) => res.description === accessoriesToAdd[j].description &&
                                res.pole === accessoriesToAdd[j].pole &&
                                res.driveType === accessoriesToAdd[j].driveType) &&
                                !cartAccessoryDataSet.some((res) => res.description === accessoriesToAdd[j].description &&
                                    res.pole === accessoriesToAdd[j].pole &&
                                    res.driveType === accessoriesToAdd[j].driveType)) {
                                cartAccessoryDataSet.push(accessoriesToAdd[j]);
                            }
                        }
                    }
                }
                else if (cartDetails[i].type === "spare") {
                    // checking productType
                    spareNotExist = false;
                    for (let j = 0; j < sparesToAdd.length; j++) {
                        if (sparesToAdd[j].description === cartDetails[i].description &&
                            sparesToAdd[j].pole === cartDetails[i].pole &&
                            sparesToAdd[j].driveType === cartDetails[i].driveType) {
                            cartDetails[i].productQuantity++;
                        }
                        else {
                            /* some() is used to checks whether at least one of the elements of the array satisfies
                              the condition then returns true (and does not check the remaining values) otherwise return false*/
                            if (!cartDetails.some((res) => res.description === sparesToAdd[j].description &&
                                res.pole === sparesToAdd[j].pole &&
                                res.driveType === sparesToAdd[j].driveType) &&
                                !cartSpareDataSet.some((res) => res.description === sparesToAdd[j].description &&
                                    res.pole === sparesToAdd[j].pole &&
                                    res.driveType === sparesToAdd[j].driveType)) {
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
            if (cartProductDataSet !== undefined) {
                cartDetails.push(Object.assign({}, cartProductDataSet));
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
                cartDetails.push(Object.assign({}, cart));
            }
        }
        if (type === "add") {
            // cartData object with userId and cartArray to pass as parameter(in post body) in addToCart api
            const cartData = {
                // user_id: window.atob(localStorage.getItem('id')),
                user_id: window.atob(sessionStorage.getItem("id")),
                cart: JSON.stringify(cartDetails),
            };
            // calling addToCart api to add products in cart
            this.apiService.addToCart(cartData).subscribe((res) => {
                if (res[`code`] === 200) {
                    cartItems = JSON.parse(res[`cart_details`].cart);
                    // localStorage.setItem('cartId', window.atob(res[`cart_details`].id));
                    sessionStorage.setItem("cartId", window.atob(res[`cart_details`].id));
                    this.toaster.success("Successfully Added To Cart");
                    this.apiService.totalItemsInCart();
                }
            });
        }
        else if (type === "update") {
            // cartData object with userId , cartId and cartArray to pass as parameter(in post body) in updateToCart api
            const updateCart = {
                id: window.atob(sessionStorage.getItem("cartId")),
                user_id: window.atob(sessionStorage.getItem("id")),
                cart: JSON.stringify(cartDetails),
            };
            // calling updateCart api
            this.apiService.updateCart(updateCart).subscribe((res) => {
                if (res[`code`] === 200) {
                    this.toaster.success("Cart successfully stored");
                    this.apiService.totalItemsInCart();
                }
            }, (err) => {
                var _a;
                this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
            });
        }
        else if (type === "session") {
            sessionStorage.setItem("cart", window.btoa(JSON.stringify(cartDetails)));
            this.apiService.totalItemsInCart();
        }
    }
    // buyNow function to instant buy things
    buyNow() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const accessoriesToAdd = []; // accessoriesToAdd[] to add accessory
        const sparesToAdd = []; // sparesToAdd[] to add spare
        const cartArray = [];
        let driveType = null;
        if (this.driveType !== null) {
            driveType = {
                desc: this.driveType,
            };
        }
        else {
            driveType = { desc: "" };
        }
        // array to push selected Accessory
        this.accessories.forEach((ele) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (ele.accessoryQuantity >= 1) {
                const acc = new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_1__["CartDetails"]((_b = (_a = this.selectedProduct) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.id, ele.productName, ele.productDesc, ele.productPrice, 0, "accessory", this.pumpSpeed.length
                    ? this.pumpSpeed[1]
                    : (_d = (_c = this.selectedProduct) === null || _c === void 0 ? void 0 : _c.details) === null || _d === void 0 ? void 0 : _d.pole, this.tableDetails.length > 0
                    ? this.tableIndex + " LPS/ " + this.tableDetails[1] + " GPH"
                    : ((_f = (_e = this.selectedProduct) === null || _e === void 0 ? void 0 : _e.details) === null || _f === void 0 ? void 0 : _f.flow) + " LPS", this.tableDetails.length > 0
                    ?  true
                        ? this.tableDetails.length > 0
                            ? this.tableIndex + " m" + " / " + this.tableDetails[3]
                            : ""
                        : undefined
                    : ((_h = (_g = this.selectedProduct) === null || _g === void 0 ? void 0 : _g.details) === null || _h === void 0 ? void 0 : _h.head) + " m", this.pumpSpeed.length
                    ? this.pumpSpeed[0] + " RPM"
                    : ((_k = (_j = this.selectedProduct) === null || _j === void 0 ? void 0 : _j.details) === null || _k === void 0 ? void 0 : _k.speed) + " RPM", this.tableDetails.length > 0 ? this.tableDetails[2] + " KW" : "0", this.toggleDieselEngine ? "1800 RPM" : "0", this.toggleDieselEngine ? "5.5 kw" : "0", driveType.desc, ele.accessoryQuantity);
                accessoriesToAdd.push(acc);
            }
        });
        // array to push selected Spare
        this.spares.forEach((ele) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            if (ele.spareQuantity >= 1) {
                const spares = new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_1__["CartDetails"]((_b = (_a = this.selectedProduct) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.id, ele.productName, ele.productDesc, ele.productPrice, ele.discountPrice, "spare", this.pumpSpeed.length
                    ? this.pumpSpeed[1]
                    : (_d = (_c = this.selectedProduct) === null || _c === void 0 ? void 0 : _c.details) === null || _d === void 0 ? void 0 : _d.pole, this.tableDetails.length > 0
                    ? this.tableIndex + " LPS/ " + this.tableDetails[1] + " GPH"
                    : ((_f = (_e = this.selectedProduct) === null || _e === void 0 ? void 0 : _e.details) === null || _f === void 0 ? void 0 : _f.flow) + " LPS", this.tableDetails.length > 0
                    ?  true
                        ? this.tableDetails.length > 0
                            ? this.tableIndex + " m" + " / " + this.tableDetails[3]
                            : ""
                        : undefined
                    : ((_h = (_g = this.selectedProduct) === null || _g === void 0 ? void 0 : _g.details) === null || _h === void 0 ? void 0 : _h.head) + " m", this.pumpSpeed.length
                    ? this.pumpSpeed[0] + " RPM"
                    : ((_k = (_j = this.selectedProduct) === null || _j === void 0 ? void 0 : _j.details) === null || _k === void 0 ? void 0 : _k.speed) + " RPM", this.tableDetails.length > 0 ? this.tableDetails[2] + " KW" : "0", this.toggleDieselEngine ? "1800 RPM" : "0", this.toggleDieselEngine ? "5.5 kw" : "0", driveType.desc, ele.spareQuantity);
                sparesToAdd.push(spares);
            }
        });
        // assign selectedProduct to cart
        const cart = new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_1__["CartDetails"]((_b = (_a = this.selectedProduct) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.id, this.selectedProduct.details.code, this.selectedProduct.details.description, this.selectedProduct.details.price, 0, "product", this.pumpSpeed.length
            ? this.pumpSpeed[1]
            : (_d = (_c = this.selectedProduct) === null || _c === void 0 ? void 0 : _c.details) === null || _d === void 0 ? void 0 : _d.pole, this.tableDetails.length > 0
            ? this.tableIndex + " LPS/ " + this.tableDetails[1] + " GPH"
            : ((_f = (_e = this.selectedProduct) === null || _e === void 0 ? void 0 : _e.details) === null || _f === void 0 ? void 0 : _f.flow) + " LPS", this.tableDetails.length > 0
            ?  true
                ? this.tableDetails.length > 0
                    ? this.tableIndex + " m" + " / " + this.tableDetails[3]
                    : ""
                : undefined
            : ((_h = (_g = this.selectedProduct) === null || _g === void 0 ? void 0 : _g.details) === null || _h === void 0 ? void 0 : _h.head) + " m", this.pumpSpeed.length
            ? this.pumpSpeed[0] + " RPM"
            : ((_k = (_j = this.selectedProduct) === null || _j === void 0 ? void 0 : _j.details) === null || _k === void 0 ? void 0 : _k.speed) + " RPM", this.tableDetails.length > 0 ? this.tableDetails[2] + " KW" : "0", this.toggleDieselEngine ? "1800 RPM" : "0", this.toggleDieselEngine ? "5.5 kw" : "0", driveType.desc, this.quantityValue);
        // pushing all data in cartArray
        cartArray.push(Object.assign({}, cart));
        cartArray.push(...accessoriesToAdd);
        cartArray.push(...sparesToAdd);
        // setting cartArray in sessionStorage
        sessionStorage.setItem("buyNow", window.btoa(JSON.stringify(cartArray)));
        // checking userId present or not according to it next route is activated.
        if (sessionStorage.getItem("id")) {
            this.router.navigate(["/cart/deliveryAddress"]);
        }
        else {
            this.router.navigate(["/sign-in"], {
                queryParams: { origin: "cartAddress" },
            });
        }
    }
    // function to change carousalImage according to selectedIndex
    changeCarousalImg(imgIndex) {
        this.carouselIndexVal = imgIndex;
        switch (imgIndex) {
            case 0:
                this.selectedProductImg = this.productCarousalImages[0];
                break;
            case 1:
                this.selectedProductImg = this.productCarousalImages[1];
                break;
            case 2:
                this.selectedProductImg = this.productCarousalImages[2];
                break;
            case 3:
                this.selectedProductImg = this.productCarousalImages[3];
                break;
            default:
                this.selectedProductImg = this.productCarousalImages[0];
        }
    }
    // function to zoom image
    imageZoom(imgID, resultID) {
        let img;
        let lens;
        let result;
        let cx;
        let cy;
        // this.toggleSelector = true;
        img = document.getElementById(imgID);
        result = document.getElementById(resultID);
        /*create lens:*/
        lens = document.createElement("DIV");
        lens.setAttribute("class", "img-zoom-lens");
        /*insert lens:*/
        lens.style.color = "black";
        img.parentElement.insertBefore(lens, img);
        /*calculate the ratio between result DIV and lens:*/
        cx = result.offsetWidth / lens.offsetWidth;
        cy = result.offsetHeight / lens.offsetHeight;
        /*set background properties for the result DIV:*/
        result.style.backgroundImage = "url('" + img.src + "')";
        result.style.backgroundSize =
            img.width * cx + "px " + img.height * cy + "px";
        /*execute a function when someone moves the cursor over the image, or the lens:*/
        lens.addEventListener("mousemove", moveLens);
        img.addEventListener("mousemove", moveLens);
        /*and also for touch screens:*/
        lens.addEventListener("touchmove", moveLens);
        img.addEventListener("touchmove", moveLens);
        function moveLens(e) {
            let pos;
            let x;
            let y;
            /*prevent any other actions that may occur when moving over the image:*/
            e.preventDefault();
            /*get the cursor's x and y positions:*/
            pos = getCursorPos(e);
            /*calculate the position of the lens:*/
            x = pos.x - lens.offsetWidth / 2;
            y = pos.y - lens.offsetHeight / 2;
            /*prevent the lens from being positioned outside the image:*/
            if (x > img.width - lens.offsetWidth) {
                x = img.width - lens.offsetWidth;
            }
            if (x < 0) {
                x = 0;
            }
            if (y > img.height - lens.offsetHeight) {
                y = img.height - lens.offsetHeight;
            }
            if (y < 0) {
                y = 0;
            }
            /*set the position of the lens:*/
            lens.style.left = x + "px";
            lens.style.top = y + "px";
            /*display what the lens "sees":*/
            result.style.backgroundPosition = "-" + x * cx + "px -" + y * cy + "px";
        }
        function getCursorPos(e) {
            let a;
            let x = 0;
            let y = 0;
            e = e || window.event;
            /*get the x and y positions of the image:*/
            a = img.getBoundingClientRect();
            /*calculate the cursor's x and y coordinates, relative to the image:*/
            x = e.pageX - a.left;
            y = e.pageY - a.top;
            /*consider any page scrolling:*/
            x = x - window.pageXOffset;
            y = y - window.pageYOffset;
            return { x, y };
        }
    }
    // function to remove zoom on mouseout
    imageZoomOut(event) {
        const imageClass = event.path[0].firstChild.className;
        const classRes = document.getElementsByClassName(imageClass);
        if (classRes.length > 0) {
            const lastClass = classRes[classRes.length - 1];
            lastClass[`style`].visibility = "hidden";
        }
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__["Lightbox"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 66, vars: 31, consts: [[1, "main-container", "profile-container"], [1, "breadcrum"], [1, "container"], [1, "bread-inner"], ["href", "javascript:void(0)", "routerLink", "/home"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "product-section"], [1, "product-section-inner"], [1, "product-slider"], ["id", "slider"], [1, "warranty-section"], ["src", "assets/images/card-images/goldenfeaturesstrip.png", 2, "border-radius", "15px"], ["id", "carousel-bounding-box"], ["id", "myCarousel", 1, "carousel", "slide"], [1, "carousel-inner"], ["class", "item", 3, "ngClass", 4, "ngFor", "ngForOf"], ["href", "#myCarousel", "data-slide", "prev", 1, "carousel-control", "left"], ["href", "#myCarousel", "data-slide", "next", 1, "carousel-control", "right"], ["id", "slider-thumbs", 1, ""], [1, "list-inline"], [4, "ngFor", "ngForOf"], [1, "account-tab"], [1, "product-description"], [4, "ngIf"], [1, "productTab"], [4, "ngIf", "ngIfElse"], ["flowRate", ""], ["flowHead", ""], ["speed", ""], ["moc", ""], ["sealing", ""], ["class", "product-row", 4, "ngIf"], [1, "item", 3, "ngClass"], [1, "carouselText-wrapper"], [1, "carouselText"], [1, "img-responsive", 3, "src", "ngStyle", "alt", "click"], [2, "text-align", "center", "font-size", "10px"], ["id", "'carousel-selector-'+imgCount", 1, "selected", 2, "cursor", "pointer", 3, "click"], [1, "img-responsive", 3, "src", "alt", "ngClass"], [1, "product-row"], ["class", "prod-title", "style", "width: 100%", 4, "ngIf"], ["class", "prod-specification", 4, "ngIf"], [1, "prod-title", 2, "width", "100%"], [1, "prod-specification"], [1, "custom-dropdown", "btn", 3, "ngModel", "change", "ngModelChange"], ["selected", "", "disabled", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "fas", "fa-hand-point-left"], [3, "value"], ["selectedDesc", ""], ["flowCapacity", ""], ["flow", ""], ["Head", ""], ["selectedHead", ""], ["absPower", ""], ["rotor", ""], ["stator", ""], ["inlet", ""], ["outlet", ""], [1, "prod-title"], [1, "number"], [1, "minus", 3, "ngStyle", "click"], ["type", "text", 3, "value", "valueChange"], [1, "plus", 3, "click"], [1, "volt-box", 2, "cursor", "pointer"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "ngClass", "click"], ["ElseBlock", ""], [1, "volt-box"], [2, "color", "#bc8129", "font-size", "15px"], ["class", "prod-title", 4, "ngIf"], ["class", "product-row-inner", 4, "ngIf", "ngIfElse"], ["Accessories", ""], [1, "suggested"], [1, "product-row-inner"], [2, "color", "#bc8129"], ["class", "progress-row", 4, "ngFor", "ngForOf"], [1, "progress-row"], [1, "left-progress"], [1, "progress-pic", 2, "margin", "0"], [3, "src"], [1, "right-progress"], [1, "top-progress"], [1, "accessoryPrice"], ["type", "checkbox", "id", "check-${accessoryCount}", 1, "largerCheckbox", 3, "checked", "click"], [1, "mid-progress"], [1, "prod-title", "spaceTop"], [1, "promo-text", 2, "color", "#bc8129"], ["Spare", ""], [1, "product-total"], [1, "total-row"], [1, "total-row", "grand-total"], [1, "productAmount"], [1, "final-price"], [1, "add-to-cart"], [1, "cart-btn", "black-btn"], ["href", "javascript:void(0)", 3, "click"], [1, "buy-btn"], [1, "progress-pic"], [1, "right-progress", "spare-section"], ["type", "text", "appNumOnly", "", "disabled", "", 3, "value"], [1, "price-progress"], [2, "text-decoration-line", "line-through", "text-decoration-color", "rgba(0, 0, 0, 0.4)"], [2, "color", "red"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProductDetailsComponent_div_27_Template, 5, 7, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u2039");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u203A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProductDetailsComponent_li_34_Template, 5, 4, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ProductDetailsComponent_ng_container_39_Template, 4, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, ProductDetailsComponent_ng_container_41_Template, 5, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, ProductDetailsComponent_ng_container_42_Template, 5, 2, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, ProductDetailsComponent_ng_template_43_Template, 3, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, ProductDetailsComponent_ng_container_45_Template, 5, 2, "ng-container", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProductDetailsComponent_ng_template_46_Template, 4, 2, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, ProductDetailsComponent_p_48_Template, 3, 2, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProductDetailsComponent_ng_template_49_Template, 3, 0, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ProductDetailsComponent_ng_container_51_Template, 4, 2, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ProductDetailsComponent_p_52_Template, 3, 1, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProductDetailsComponent_ng_template_53_Template, 3, 0, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ProductDetailsComponent_p_55_Template, 3, 1, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ProductDetailsComponent_ng_template_56_Template, 2, 0, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ProductDetailsComponent_ng_container_58_Template, 16, 8, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, ProductDetailsComponent_p_59_Template, 2, 0, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ProductDetailsComponent_div_60_Template, 10, 4, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ProductDetailsComponent_div_61_Template, 7, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ProductDetailsComponent_div_62_Template, 8, 1, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, ProductDetailsComponent_div_63_Template, 5, 3, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ProductDetailsComponent_div_64_Template, 51, 17, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](44);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](54);
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c2, "/" + ctx.routerUrl[1] + "/" + ctx.routerUrl[2]));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.routerUrl[1].includes("surface") ? "Surface Agri Pumps" : "Multi Purpose Pumps", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.routerUrl[3].includes("bareShaftPump") ? "Bare Shaft Pumps" : "Close Coupled Pumps", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.productId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productCarousalImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.thumbnailImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedProduct == null ? null : ctx.selectedProduct.details == null ? null : ctx.selectedProduct.details.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.toggleMotorOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableDetails.length > 0 && ctx.toggleOption)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableDetails.length > 0 && ctx.toggleOption)("ngIfElse", _r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pumpSpeed.length || (ctx.selectedProduct == null ? null : ctx.selectedProduct.details == null ? null : ctx.selectedProduct.details.speed))("ngIfElse", _r11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableDetails.length > 0 && ctx.toggleOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.selectedProduct == null ? null : ctx.selectedProduct.details == null ? null : ctx.selectedProduct.details.whp_moc) !== null)("ngIfElse", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedProduct == null ? null : ctx.selectedProduct.details == null ? null : ctx.selectedProduct.details.sealing)("ngIfElse", _r18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDieselEngine);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDetails);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_8__["NumonlyDirective"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-product-details",
                templateUrl: "./product-details.component.html",
                styleUrls: ["./product-details.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_5__["Lightbox"] }]; }, null); })();


/***/ }),

/***/ "OGO5":
/*!*****************************************************!*\
  !*** ./src/app/views/home/home-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: HomeDetailsResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeDetailsResolver", function() { return HomeDetailsResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");





class HomeDetailsResolver {
    constructor(appService) {
        this.appService = appService;
    }
    resolve(route, state) {
        const homeDetails = this.appService.homePage();
        //  const retroSpares = this.appService.retroSpares();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([homeDetails]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([homeData]) => {
            // forkJoin returns an array of values, here we map those values to an object
            return { homeData };
        }));
    }
}
HomeDetailsResolver.ɵfac = function HomeDetailsResolver_Factory(t) { return new (t || HomeDetailsResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
HomeDetailsResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeDetailsResolver, factory: HomeDetailsResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeDetailsResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "OrE0":
/*!************************************************************************!*\
  !*** ./src/app/shared/footerContents/roto-edge/roto-edge.component.ts ***!
  \************************************************************************/
/*! exports provided: RotoEdgeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotoEdgeComponent", function() { return RotoEdgeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function RotoEdgeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.pageContent[0] == null ? null : ctx_r0.pageContent[0].content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function RotoEdgeComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RotoEdgeComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.pageContent = [];
        this.footerPages = [];
    }
    ngOnInit() {
        this.apiService.footerContents().subscribe(res => {
            if (res[`code`] === 200) {
                this.footerPages = res[`pages`];
                this.getFooterData('Roto Edge');
            }
        });
    }
    getFooterData(page) {
        if (this.footerPages.length) {
            this.pageContent = this.footerPages.filter(data => data.type === page);
        }
        else {
            this.pageContent = this.pageContent;
        }
    }
}
RotoEdgeComponent.ɵfac = function RotoEdgeComponent_Factory(t) { return new (t || RotoEdgeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
RotoEdgeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RotoEdgeComponent, selectors: [["app-roto-edge"]], decls: 12, vars: 2, consts: [[1, "main-container", "about-page"], [1, "roto-retro"], [1, "container"], [1, "card"], [1, "dummy-pic"], [1, "card-title"], [2, "text-align", "center"], ["class", "about-content", 3, "innerHtml", 4, "ngIf", "ngIfElse"], ["error", ""], [1, "about-content", 3, "innerHtml"]], template: function RotoEdgeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Roto Edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RotoEdgeComponent_div_9_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RotoEdgeComponent_ng_template_10_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageContent.length)("ngIfElse", _r1);
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXJDb250ZW50cy9yb3RvLWVkZ2Uvcm90by1lZGdlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RotoEdgeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roto-edge',
                templateUrl: './roto-edge.component.html',
                styleUrls: ['./roto-edge.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _footerContents_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footerContents/terms-conditions/terms-conditions.component */ "aZ1U");
/* harmony import */ var _footerContents_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footerContents/privacy-policy/privacy-policy.component */ "zZDJ");
/* harmony import */ var _footerContents_service_support_service_support_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footerContents/service-support/service-support.component */ "K4lT");
/* harmony import */ var _footerContents_roto_edge_roto_edge_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footerContents/roto-edge/roto-edge.component */ "OrE0");
/* harmony import */ var _footerContents_products_products_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footerContents/products/products.component */ "uitp");
/* harmony import */ var _footerContents_returns_returns_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footerContents/returns/returns.component */ "X3j5");
/* harmony import */ var _footerContents_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footerContents/contact-us/contact-us.component */ "TcwW");
/* harmony import */ var _footerContents_awards_awards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footerContents/awards/awards.component */ "DmRL");
/* harmony import */ var _footerContents_research_research_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footerContents/research/research.component */ "j/xX");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../directives/directives.module */ "FUS3");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./banner/banner.component */ "FvYy");
/* harmony import */ var _footerContents_tirrana_general_pump_tirrana_general_pump_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footerContents/tirrana-general-pump/tirrana-general-pump.component */ "FSQi");
/* harmony import */ var _footerContents_tirrana_agricultural_pump_new_tirrana_agricultural_pump_new_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footerContents/tirrana-agricultural-pump-new/tirrana-agricultural-pump-new.component */ "VbcD");
/* harmony import */ var _footerContents_retrofit_spare_parts_retrofit_spare_parts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footerContents/retrofit-spare-parts/retrofit-spare-parts.component */ "wVd6");





















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_15__["DirectivesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _footerContents_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsComponent"], _footerContents_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyPolicyComponent"],
        _footerContents_service_support_service_support_component__WEBPACK_IMPORTED_MODULE_8__["ServiceSupportComponent"], _footerContents_roto_edge_roto_edge_component__WEBPACK_IMPORTED_MODULE_9__["RotoEdgeComponent"],
        _footerContents_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], _footerContents_returns_returns_component__WEBPACK_IMPORTED_MODULE_11__["ReturnsComponent"], _footerContents_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"],
        _footerContents_awards_awards_component__WEBPACK_IMPORTED_MODULE_13__["AwardsComponent"], _footerContents_research_research_component__WEBPACK_IMPORTED_MODULE_14__["ResearchComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_16__["BannerComponent"], _footerContents_tirrana_agricultural_pump_new_tirrana_agricultural_pump_new_component__WEBPACK_IMPORTED_MODULE_18__["TirranaAgriculturalPumpNewComponent"], _footerContents_tirrana_general_pump_tirrana_general_pump_component__WEBPACK_IMPORTED_MODULE_17__["TirranaGeneralPumpComponent"], _footerContents_retrofit_spare_parts_retrofit_spare_parts_component__WEBPACK_IMPORTED_MODULE_19__["RetrofitSparePartsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _directives_directives_module__WEBPACK_IMPORTED_MODULE_15__["DirectivesModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_16__["BannerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _footerContents_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsComponent"], _footerContents_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_7__["PrivacyPolicyComponent"],
                    _footerContents_service_support_service_support_component__WEBPACK_IMPORTED_MODULE_8__["ServiceSupportComponent"], _footerContents_roto_edge_roto_edge_component__WEBPACK_IMPORTED_MODULE_9__["RotoEdgeComponent"],
                    _footerContents_products_products_component__WEBPACK_IMPORTED_MODULE_10__["ProductsComponent"], _footerContents_returns_returns_component__WEBPACK_IMPORTED_MODULE_11__["ReturnsComponent"], _footerContents_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"],
                    _footerContents_awards_awards_component__WEBPACK_IMPORTED_MODULE_13__["AwardsComponent"], _footerContents_research_research_component__WEBPACK_IMPORTED_MODULE_14__["ResearchComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_16__["BannerComponent"], _footerContents_tirrana_agricultural_pump_new_tirrana_agricultural_pump_new_component__WEBPACK_IMPORTED_MODULE_18__["TirranaAgriculturalPumpNewComponent"], _footerContents_tirrana_general_pump_tirrana_general_pump_component__WEBPACK_IMPORTED_MODULE_17__["TirranaGeneralPumpComponent"], _footerContents_retrofit_spare_parts_retrofit_spare_parts_component__WEBPACK_IMPORTED_MODULE_19__["RetrofitSparePartsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _directives_directives_module__WEBPACK_IMPORTED_MODULE_15__["DirectivesModule"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _banner_banner_component__WEBPACK_IMPORTED_MODULE_16__["BannerComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QlPV":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/banner/banner.component */ "FvYy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0) { return { visibility: a0 }; };
function HomeComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const eachProduct_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.routeChange(eachProduct_r2 == null ? null : eachProduct_r2.name, eachProduct_r2 == null ? null : eachProduct_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_div_9_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const eachProduct_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.readMore(eachProduct_r2 == null ? null : eachProduct_r2.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Read More...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", eachProduct_r2 == null ? null : eachProduct_r2.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, eachProduct_r2 == null ? null : eachProduct_r2.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, (eachProduct_r2 == null ? null : eachProduct_r2.name) === "Roto Spares" ? "hidden" : "visible"));
} }
const _c1 = function (a0) { return { model: a0 }; };
function HomeComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachTrendingProduct_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", eachTrendingProduct_r6 == null ? null : eachTrendingProduct_r6.routePath)("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, eachTrendingProduct_r6 == null ? null : eachTrendingProduct_r6.code));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", eachTrendingProduct_r6 == null ? null : eachTrendingProduct_r6.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTrendingProduct_r6 == null ? null : eachTrendingProduct_r6.description);
} }
const _c2 = function () { return ["/retrospares"]; };
const _c3 = function () { return ["/retrofit-spare-parts"]; };
class HomeComponent {
    constructor(apiService, router, activatedRoute, fb, toaster) {
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.toaster = toaster;
        this.productData = new Array(); // variable to store product data
        this.retroSpares = [];
        this.retroSparesDetails = [];
        this.cityInfo = [""]; // used to store city data
        this.stateInfo = []; // used to store state data
        this.countryInfo = []; // used to store country data
        this.mostTrendingProducts = [];
    }
    ngOnInit() {
        if (this.activatedRoute.snapshot.data[`homeData`].homeData.code === 200) {
            this.productData =
                this.activatedRoute.snapshot.data[`homeData`].homeData.categories;
            this.productData.forEach((element) => {
                switch (element.name) {
                    case "Surface Agri pumps":
                        element.imageUrl = "assets/images/banner/SAP-AG-Home.jpg";
                        break;
                    case "Multi-purpose Pumps":
                        element.imageUrl = "assets/images/banner/DC.png";
                        break;
                    case "Roto Spares":
                        element.imageUrl = "assets/images/banner/Retrofit1home.jpg";
                        break;
                }
            });
        }
        this.getTrendingProducts();
    }
    getTrendingProducts() {
        this.apiService.mostTrendingProducts().subscribe((res) => {
            if (res[`return`]) {
                this.mostTrendingProducts = res[`tps`];
                if (this.mostTrendingProducts.length) {
                    this.mostTrendingProducts.forEach((eachProduct) => {
                        this.apiService.productCategories(eachProduct);
                    });
                }
            }
        }, (error) => {
            var _a;
            if (error === null || error === void 0 ? void 0 : error.status) {
                this.toaster.error((_a = error === null || error === void 0 ? void 0 : error.error) === null || _a === void 0 ? void 0 : _a.message);
            }
        });
    }
    readMore(product) {
        if (product === "Surface Agri pumps") {
            this.router.navigate(["/tirrana-agricultural-pump-new"]);
        }
        else if (product === "Multi-purpose Pumps") {
            this.router.navigate(["/tirrana-general-pump"]);
        }
    }
    getSparesSubCategory(spareId) {
        this.apiService.retroSubCategoryDetails(spareId).subscribe((res) => {
            if (res[`code`] === 200) {
                this.retroSparesDetails = res[`categories`];
            }
        });
    }
    // function to change spare
    changeSpare(spareId) {
        this.getSparesSubCategory(spareId);
    }
    // function to change route according to productName
    routeChange(productName, productId) {
        if (productName === "Surface Agri pumps") {
            this.router.navigate(["/surfaceAgriPumps", productId]);
        }
        else if (productName === "Multi-purpose Pumps") {
            this.router.navigate(["/multiPurposePumps", productId]);
        }
        else if (productName === "Roto Spares") {
            this.router.navigate(["/rotoSpares", productId]);
        }
    }
    // function to scroll to a particular section using scrollIntoView.
    navigateToSection(section) {
        this.navClass = section;
        const element = document.getElementById(section);
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 34, vars: 6, consts: [[1, "main-container", "homepage"], [1, "roto-retro"], [1, "container"], ["id", "rotofit", 1, "roto-box-section"], [1, "common-title"], [1, "box-section-inner"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "dummy-pic"], ["src", "assets/images/card-images/retro-card.jpg"], [1, "card-title"], [2, "cursor", "pointer", "text-align", "center", "display", "block", 3, "routerLink"], [1, "row"], [1, "well"], ["id", "productCarousel", "data-interval", "5000", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "item", "active"], ["class", "col-md-3", 4, "ngFor", "ngForOf"], ["href", "#productCarousel", "data-slide", "prev", 1, "left", "carousel-control"], [1, "fa", "fa-chevron-left", "fa-2x"], ["href", "#productCarousel", "data-slide", "next", 1, "right", "carousel-control"], [1, "fa", "fa-chevron-right", "fa-2x"], ["href", "javascript:void(0)", 3, "click"], [3, "src"], [2, "cursor", "pointer", "text-align", "center", "display", "block", 3, "ngStyle", "click"], [1, "col-md-3"], [3, "routerLink", "queryParams"], [1, "thumbnail"], [1, "image-cover"], ["alt", "Slide1", 3, "src"], [1, "caption"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Roto Pumps & Spares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, HomeComponent_div_9_Template, 10, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Retrofit Spares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Read More...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Most Trending Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, HomeComponent_div_29_Template, 8, 6, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mostTrendingProducts);
    } }, directives: [_shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: [".common-title[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmhvbWVwYWdle1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59ICovXHJcbi5jb21tb24tdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-home",
                templateUrl: "./home.component.html",
                styleUrls: ["./home.component.css"],
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api.service */ "H+bZ");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");










function AppComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("headerButton", ctx_r0.showHeaderButtons);
} }
class AppComponent {
    constructor(router, apiService, authService) {
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.toggleHeader = false; // show or hide header according to condition.
        this.footerData = [];
        this.showHeaderButtons = false;
        this.showHeader = true;
    }
    // to closing the page this hostLister is called and makes the cartQuantity to 0.
    clearLocalStorage() {
        this.apiService.cartValue.next(0);
    }
    ngOnInit() {
        // subscribing to router events
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            else {
                if (evt[`url`].includes(`/sign-up`) ||
                    evt[`url`].includes(`/sign-in`) ||
                    evt[`url`].includes(`/forget-password`)) {
                    this.showHeaderButtons = false;
                }
                else if (evt[`url`].includes(`/main`) || evt[`url`] === '/') {
                    this.showHeader = false;
                }
                else {
                    this.showHeaderButtons = true;
                    this.showHeader = true;
                }
            }
            window.scrollTo(0, 0); // used to scroll to top in component loads
        });
    }
    // to unsubscribe the subscriptions
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onbeforeunload", function AppComponent_onbeforeunload_HostBindingHandler($event) { return ctx.clearLocalStorage($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 2, consts: [["bdColor", "rgb(0,0,0)", "size", "medium", "color", "#2e94ef", "type", "ball-newton-cradle", 3, "fullScreen"], [2, "color", "white"], [4, "ngIf"], [3, "headerButton"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showHeader);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, { clearLocalStorage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:onbeforeunload", ["$event"]]
        }] }); })();
function elseif() {
    throw new Error("Function not implemented.");
}


/***/ }),

/***/ "TcwW":
/*!**************************************************************************!*\
  !*** ./src/app/shared/footerContents/contact-us/contact-us.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../directives/text-only.directive */ "ZSuO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ContactUsComponent_ng_container_18_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_ng_container_18_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name must not exceed 15 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactUsComponent_ng_container_18_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactUsComponent_ng_container_18_p_2_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formControl == null ? null : ctx_r0.formControl.name == null ? null : ctx_r0.formControl.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formControl == null ? null : ctx_r0.formControl.name == null ? null : ctx_r0.formControl.name.errors.maxlength);
} }
function ContactUsComponent_ng_container_26_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_ng_container_26_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid email(abc@abc.abc) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactUsComponent_ng_container_26_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactUsComponent_ng_container_26_p_2_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formControl == null ? null : ctx_r1.formControl.email == null ? null : ctx_r1.formControl.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formControl == null ? null : ctx_r1.formControl.email == null ? null : ctx_r1.formControl.email.errors.pattern);
} }
function ContactUsComponent_ng_container_34_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Query Is Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactUsComponent_ng_container_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactUsComponent_ng_container_34_p_1_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formControl == null ? null : ctx_r2.formControl.message == null ? null : ctx_r2.formControl.message.errors.required);
} }
const _c0 = function (a0) { return { "border": a0 }; };
class ContactUsComponent {
    constructor(fb, apiService, toaster, route) {
        this.fb = fb;
        this.apiService = apiService;
        this.toaster = toaster;
        this.route = route;
    }
    ngOnInit() {
        this.createContactForm();
    }
    createContactForm() {
        this.contactForm = this.fb.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    get formControl() {
        return this.contactForm.controls;
    }
    validateAllFields(formGroup) {
        Object.keys(this.formControl).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                this.validateAllFields(control);
            }
        });
    }
    submitContactForm(form) {
        if (form.invalid) { // condition checking if form is valid or not
            this.validateAllFields(form); // if form in invalid then call validateAllfields function
        }
        else {
            // console.log(form.value);
            this.apiService.contactUs(form.value).subscribe(res => {
                if (res[`code`] === 200) {
                    this.toaster.success(res[`msg`]);
                    this.route.navigate(['/home']);
                }
                else {
                    this.formControl.reset();
                }
            });
        }
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 37, vars: 13, consts: [[1, "main-container", "about-page"], [1, "profile-section"], [1, "container"], [1, "card"], [1, "dummy-pic"], [1, "card-title"], [2, "text-align", "center"], [1, "cancel-form"], [3, "formGroup", "ngSubmit"], [1, "sign-field"], [2, "color", "red"], [1, "sign-input"], ["type", "text", "appTextOnly", "", "placeholder", "Ivan Pavlov", "formControlName", "name", "required", "", 3, "ngStyle"], [4, "ngIf"], ["type", "email", "placeholder", "abc@xyz.com", "formControlName", "email", "required", "", 3, "ngStyle"], ["name", "message", "id", "query", "cols", "20", "rows", "10", "formControlName", "message", "required", "", 3, "ngStyle"], ["type", "submit", 1, "blue-button"], ["class", "error-msg", 4, "ngIf"], [1, "error-msg"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_10_listener() { return ctx.submitContactForm(ctx.contactForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Full Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactUsComponent_ng_container_18_Template, 3, 2, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ContactUsComponent_ng_container_26_Template, 3, 2, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Query ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ContactUsComponent_ng_container_34_Template, 2, 1, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.errors == null ? null : ctx.formControl.name.errors.maxlength) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.errors == null ? null : ctx.formControl.name.errors.required)) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.valid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.invalid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.pattern) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.required)) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.valid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.invalid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.errors == null ? null : ctx.formControl.message.errors.required) && ((ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.touched) || (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.dirty)) ? "1px solid red" : (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.valid) && ((ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.touched) || (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.dirty)) ? "1px solid green" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.invalid) && ((ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.touched) || (ctx.formControl == null ? null : ctx.formControl.message == null ? null : ctx.formControl.message.dirty)));
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_5__["BannerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_6__["TextOnlyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXJDb250ZW50cy9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "UfA1":
/*!**************************************************************!*\
  !*** ./src/app/views/retro-spares/retro-spares.component.ts ***!
  \**************************************************************/
/*! exports provided: RetroSparesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroSparesComponent", function() { return RetroSparesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataModels/cart-details */ "1UKJ");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function RetroSparesComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachProduct_r5 == null ? null : eachProduct_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachProduct_r5 == null ? null : eachProduct_r5.name, " ");
} }
function RetroSparesComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSubCategory_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachSubCategory_r6 == null ? null : eachSubCategory_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachSubCategory_r6 == null ? null : eachSubCategory_r6.title, " ");
} }
function RetroSparesComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachPumpModel_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachPumpModel_r7 == null ? null : eachPumpModel_r7.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachPumpModel_r7 == null ? null : eachPumpModel_r7.code, " ");
} }
function RetroSparesComponent_div_48_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSpare_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachSpare_r9 == null ? null : eachSpare_r9.code);
} }
function RetroSparesComponent_div_48_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSpare_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", eachSpare_r9 == null ? null : eachSpare_r9.original_part_code, ")");
} }
function RetroSparesComponent_div_48_small_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSpare_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PRODUCT ID :", eachSpare_r9 == null ? null : eachSpare_r9.roto_part_code, " ");
} }
const _c0 = function (a0) { return { "pointer-events": a0 }; };
function RetroSparesComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RetroSparesComponent_div_48_span_10_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RetroSparesComponent_div_48_span_11_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RetroSparesComponent_div_48_small_13_Template, 2, 1, "small", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RetroSparesComponent_div_48_Template_span_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const spareCount_r10 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.consumptionSpareDecrement(spareCount_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RetroSparesComponent_div_48_Template_span_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const spareCount_r10 = ctx.index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.consumptionSpareIncrement(spareCount_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSpare_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", eachSpare_r9 == null ? null : eachSpare_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", eachSpare_r9 == null ? null : eachSpare_r9.part, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachSpare_r9 == null ? null : eachSpare_r9.code) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachSpare_r9 == null ? null : eachSpare_r9.original_part_code) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachSpare_r9 == null ? null : eachSpare_r9.roto_part_code) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, (eachSpare_r9 == null ? null : eachSpare_r9.quantity) <= 0 ? "none" : "auto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", eachSpare_r9 == null ? null : eachSpare_r9.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 8, eachSpare_r9 == null ? null : eachSpare_r9.price));
} }
function RetroSparesComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachProduct_r20 == null ? null : eachProduct_r20.part, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model No: ", eachProduct_r20 == null ? null : eachProduct_r20.original_part_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 3, (eachProduct_r20 == null ? null : eachProduct_r20.price) * (eachProduct_r20 == null ? null : eachProduct_r20.quantity)), " ");
} }
const _c1 = function (a0) { return { display: a0 }; };
class RetroSparesComponent {
    constructor(apiService, toaster, router) {
        this.apiService = apiService;
        this.toaster = toaster;
        this.router = router;
        this.retroSpares = [];
        this.subCategories = [];
        this.pumpModels = [];
        this.retroSpareCode = [];
        this.retroSpareDetails = [];
        this.spares = []; // used to store the spares
        this.productsInCart = []; // used to store added spares
        this.msgString = '';
        this.pumpType = '';
        this.pumpSubType = '';
        this.pumpModel = '';
    }
    ngOnInit() {
        this.getRetroSpares();
    }
    getRetroSpares() {
        this.apiService.retroSpares().subscribe(res => {
            if (res[`code`] === 200) {
                this.retroSpares = res[`categories`];
                if (this.retroSpares.length) {
                    this.checkEmptyData('product');
                }
                else {
                    this.msgString = 'No data found';
                }
            }
        });
    }
    getPumpType(pumpId) {
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
                if (this.subCategories.length) {
                    this.checkEmptyData('subCat');
                }
                else {
                    this.msgString = 'No data found';
                }
            }
        });
    }
    getPumpSubType(subPumpId) {
        this.pumpModels = [];
        this.pumpModel = '';
        this.spares = [];
        this.productsInCart = [];
        this.apiService.retroSubProductCategory(subPumpId).subscribe(res => {
            if (res[`code`] === 200) {
                this.pumpModels = res[`products`];
                if (this.subCategories.length) {
                    this.checkEmptyData('pumpModel');
                }
                else {
                    this.msgString = 'No data found';
                }
            }
        });
    }
    checkEmptyData(type) {
        if (type === 'product') {
            if (this.retroSpares.length) {
                this.msgString = 'Please select a pump type';
            }
        }
        else if (type === 'subCat') {
            if (this.subCategories.length) {
                this.msgString = 'Please select pump sub model';
            }
        }
        else if (type === 'pumpModel') {
            if (this.pumpModels.length) {
                this.msgString = 'Please select pump model';
            }
        }
    }
    // function used to get Pump subCategory by passing pumpCategory Id
    getRetroSpareType(spareId) {
        this.apiService.retroSubCategoryCategoryDetails(spareId).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
            if (res[`code`] === 200) {
                this.retroSpareDetails = res[`product`];
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
    consumptionSpareDecrement(spareCount) {
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
    consumptionSpareIncrement(spareCount) {
        this.spares[spareCount].quantity++;
        if (this.spares[spareCount].quantity === 1) {
            this.router.navigate(['/comingSoon']);
        }
    }
    // function to calculate the total price of selected product, accessory and spare
    findGrandTotal() {
        let sparePrice = 0; // default spare price 0
        let total = 0;
        // using loop to get the selected spares price
        this.spares.forEach((ele) => {
            if (ele.quantity) {
                sparePrice = (ele.price * ele.quantity) + sparePrice;
            }
        });
        // calculating grandTotal
        this.shippingAmount = Math.round(+(0.05 * sparePrice).toFixed(3));
        total = Math.round(sparePrice + this.shippingAmount);
        this.gstAmount = 0.10 * (sparePrice + this.shippingAmount);
        this.subTotal = Math.round(+(total + this.gstAmount).toFixed(3));
    }
    // function to add product, accessory and spares to cart
    addToCart() {
        const sparesToAdd = []; // sparesToAdd[] to add spare
        // array to push selected Spare
        this.productsInCart.forEach(ele => {
            if (ele.quantity >= 1) {
                const spare = new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_2__["CartDetails"](ele.id, ele.part, ele.original_part_code, ele.price, 0, 'spare', 0, '0', '0', '0', '0', '0', '0', ele.code, ele.quantity);
                sparesToAdd.push(spare);
            }
        });
        // if (localStorage.getItem('id')) { // check if userId is present or not in localStorage
        if (sessionStorage.getItem('id')) { // check if userId is present or not in sessionStorage
            // tslint:disable-next-line: max-line-length
            if (sessionStorage.getItem('cartId') === null) { // check if cartId is present or not in sessionStorage(if not present the value is null)
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
                    const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('cart')));
                    this.updateCartDetails(cartLocalData, sparesToAdd, 'add'); // calling upDataCart to add
                }
            }
            // userId is present
            else {
                // calling getCartById api to get cartData using cartId
                this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
                    if (res[`code`] === 200) {
                        let cartDetails;
                        cartDetails = JSON.parse(res[`details`].cart);
                        this.updateCartDetails(cartDetails, sparesToAdd, 'update'); // calling upDataCart to update
                    }
                }, err => {
                    var _a;
                    this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
                });
            }
        }
        else {
            if (sessionStorage.getItem('cart') && sessionStorage.getItem('cart').length > 2) {
                const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('cart')));
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
    updateCartDetails(cartDetails, sparesToAdd, type) {
        let cartItems; // to store cartProducts
        // checking cartDetails length and if length 0 then push data in cartDetails
        if (cartDetails.length <= 0) {
            cartDetails.push(...sparesToAdd);
        }
        // cartDetails length is greater than 0
        else {
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
                        }
                        else {
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
                var _a;
                this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
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
RetroSparesComponent.ɵfac = function RetroSparesComponent_Factory(t) { return new (t || RetroSparesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RetroSparesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RetroSparesComponent, selectors: [["app-retro-spares"]], decls: 77, vars: 27, consts: [[1, "main-container", "cartpage", "roto-spares"], [1, "full-banner"], ["src", "assets/images/banner/top-banner-small.jpg"], [1, "container"], [1, "breadcrum"], ["href", "javascript:void(0)", "routerLink", "/home"], [1, "select-box-sec"], [1, "select-box-inner", "select-cat"], [1, "select-box", "clean"], [3, "ngModel", "change", "ngModelChange"], ["value", "", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "cart-section"], [1, "cart-inner"], [1, "emptyState", 3, "ngStyle"], [1, "cart", "border-grey", 3, "ngStyle"], [1, "price-title"], [2, "color", "#BC8129", "font-size", "15px"], ["class", "progress-row progress-row-spare", 4, "ngFor", "ngForOf"], [1, "price-detail", 3, "ngStyle"], ["class", "price-row", 4, "ngFor", "ngForOf"], [1, "price-row", "total-price"], [1, "left-price-spare"], ["routerLink", "/comingSoon"], [3, "value"], [1, "progress-row", "progress-row-spare"], [1, "left-progress"], [1, "progress-pic"], [3, "src"], [1, "right-progress"], [1, "top-progress"], [1, "top-heading", 2, "width", "160px"], [2, "font-weight", "bold", "width", "100px"], [4, "ngIf"], [1, "top-para", 2, "width", "auto"], [1, "number"], [1, "minus", 3, "ngStyle", "click"], ["type", "text", "disabled", "", 2, "font-size", "19px", 3, "value"], [1, "plus", 3, "click"], [2, "font-size", "19px"], [1, "mid-progress", 2, "display", "none"], [1, "price-row"], [1, "left-price"], [1, "right-price"]], template: function RetroSparesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Retrofit Spares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Retrofit Spares ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "PUMP TYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RetroSparesComponent_Template_select_change_20_listener($event) { return ctx.getPumpType($event.target.value); })("ngModelChange", function RetroSparesComponent_Template_select_ngModelChange_20_listener($event) { return ctx.pumpType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Please select pump");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RetroSparesComponent_option_23_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "PUMP SERIES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RetroSparesComponent_Template_select_change_27_listener($event) { return ctx.getPumpSubType($event.target.value); })("ngModelChange", function RetroSparesComponent_Template_select_ngModelChange_27_listener($event) { return ctx.pumpSubType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Please select pump type first ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RetroSparesComponent_option_30_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "SELECT PUMP MODEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RetroSparesComponent_Template_select_change_34_listener($event) { return ctx.getRetroSpareType($event.target.value); })("ngModelChange", function RetroSparesComponent_Template_select_ngModelChange_34_listener($event) { return ctx.pumpModel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Please select pump sub-type first ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RetroSparesComponent_option_37_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Select Spares ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "(plus GST 10%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RetroSparesComponent_div_48_Template, 24, 12, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Product Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, RetroSparesComponent_div_52_Template, 10, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Shipping & Handling @5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](59, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Gst @10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "(In AUD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "ADD TO CART");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pumpType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.retroSpares);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pumpSubType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pumpModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pumpModels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.spares.length <= 0 ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.msgString, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.spares.length > 0 ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spares);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, ctx.productsInCart.length > 0 ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productsInCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](59, 15, ctx.shippingAmount));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 17, ctx.gstAmount));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 19, ctx.subTotal));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JldHJvLXNwYXJlcy9yZXRyby1zcGFyZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RetroSparesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-retro-spares',
                templateUrl: './retro-spares.component.html',
                styleUrls: ['./retro-spares.component.css']
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "VbcD":
/*!****************************************************************************************************************!*\
  !*** ./src/app/shared/footerContents/tirrana-agricultural-pump-new/tirrana-agricultural-pump-new.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: TirranaAgriculturalPumpNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TirranaAgriculturalPumpNewComponent", function() { return TirranaAgriculturalPumpNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/home"]; };
class TirranaAgriculturalPumpNewComponent {
    constructor() { }
    ngOnInit() {
    }
}
TirranaAgriculturalPumpNewComponent.ɵfac = function TirranaAgriculturalPumpNewComponent_Factory(t) { return new (t || TirranaAgriculturalPumpNewComponent)(); };
TirranaAgriculturalPumpNewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TirranaAgriculturalPumpNewComponent, selectors: [["app-tirrana-agricultural-pump-new"]], decls: 56, vars: 2, consts: [[1, "main-container", "about-page"], [1, "container", 2, "padding-top", "40px"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], [1, "card-title"], [2, "text-align", "center", "position", "relative"], [1, "row"], [1, "text-part", "col-sm-6"], [1, "vc_column-inner"], [1, "wpb_wrapper"], [1, "wpb_text_column", "wpb_content_element", "mx-2"], [1, "wpb_wrapper", "px-5"], [1, "image-part", "col-sm-6"], [1, "wpb_single_image", "wpb_content_element", "vc_align_center"], [1, "vc_single_image-wrapper", "vc_box_border_grey"], ["title", "Tirrana Agricultural Range", "src", "https://www.rotopumps.com/wp-content/uploads/2020/11/1st.png", "alt", "Tirrana Agricultural Range", 1, "vc_single_image-img", "attachment-full"]], template: function TirranaAgriculturalPumpNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Go to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Tirrana Agricultural Pump");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Tirrana Agricultural Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Bu ilt on heavy-duty and proven platform. The Tirrana range of helical rotor pumps offers peace of mind and best solutions to all types of surface water transfer duties.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Capacity: 360 LPM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Head: 120 m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Why Tirrana is your go to pump?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Ensuring Smooth flow of Water, Viscous, Abrasive & Shear Sensitive Media ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Fair Pricing Policy for Pumps & Spares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Readily Available Pump and Spares Stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Robust Distributor Network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "24*7 Quick Service Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Power Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Close Coupled with Electric Motor (240V or 415V)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Petrol / Diesel Drive Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".main-container[_ngcontent-%COMP%] {\r\n    background: transparent;\r\n    margin: 0;padding: 0;\r\n    \r\n}\r\n.col-sm-9[_ngcontent-%COMP%]{\r\n    margin-top: 15px;\r\n    margin-bottom: 10px;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: #336fb5;\r\n    font-size: 20px;\r\n}\r\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{\r\n    font-size: 1em;\r\n    font-family: 'Roboto', sans-serif!important;\r\n    font-weight: 300!important;\r\n}\r\nstrong[_ngcontent-%COMP%]{\r\n    font-family: 'Roboto', sans-serif!important;\r\n    font-size: 1em;\r\n    \r\n}\r\n.vc_single_image-img[_ngcontent-%COMP%]{\r\n    max-width: 100%;\r\n    height: auto;\r\n}\r\n@media screen and (min-width: 850px){\r\n    .image-part[_ngcontent-%COMP%]{\r\n        max-width: 500px;\r\n        height: auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3RlckNvbnRlbnRzL3RpcnJhbmEtYWdyaWN1bHR1cmFsLXB1bXAtbmV3L3RpcnJhbmEtYWdyaWN1bHR1cmFsLXB1bXAtbmV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsU0FBUyxDQUFDLFVBQVU7O0FBRXhCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBSUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksY0FBYztJQUNkLDJDQUEyQztJQUMzQywwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDJDQUEyQztJQUMzQyxjQUFjOztBQUVsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO1FBQ2hCLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXJDb250ZW50cy90aXJyYW5hLWFncmljdWx0dXJhbC1wdW1wLW5ldy90aXJyYW5hLWFncmljdWx0dXJhbC1wdW1wLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgbWFyZ2luOiAwO3BhZGRpbmc6IDA7XHJcbiAgICBcclxufVxyXG4uY29sLXNtLTl7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcblxyXG5oM3tcclxuICAgIGNvbG9yOiAjMzM2ZmI1O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbnAsbGl7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZiFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwIWltcG9ydGFudDtcclxufVxyXG5zdHJvbmd7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWYhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBcclxufVxyXG5cclxuLnZjX3NpbmdsZV9pbWFnZS1pbWd7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KXtcclxuICAgIC5pbWFnZS1wYXJ0e1xyXG4gICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TirranaAgriculturalPumpNewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tirrana-agricultural-pump-new',
                templateUrl: './tirrana-agricultural-pump-new.component.html',
                styleUrls: ['./tirrana-agricultural-pump-new.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "X3j5":
/*!********************************************************************!*\
  !*** ./src/app/shared/footerContents/returns/returns.component.ts ***!
  \********************************************************************/
/*! exports provided: ReturnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnsComponent", function() { return ReturnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ReturnsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.pageContent[0] == null ? null : ctx_r0.pageContent[0].content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ReturnsComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ReturnsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.pageContent = [];
        this.footerPages = [];
    }
    ngOnInit() {
        this.apiService.footerContents().subscribe(res => {
            if (res[`code`] === 200) {
                this.footerPages = res[`pages`];
                this.getFooterData('Return & Cancellation');
            }
        });
    }
    getFooterData(page) {
        if (this.footerPages.length) {
            this.pageContent = this.footerPages.filter(data => data.type === page);
        }
        else {
            this.pageContent = this.pageContent;
        }
    }
}
ReturnsComponent.ɵfac = function ReturnsComponent_Factory(t) { return new (t || ReturnsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ReturnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReturnsComponent, selectors: [["app-returns"]], decls: 12, vars: 2, consts: [[1, "main-container", "about-page"], [1, "roto-retro"], [1, "container"], [1, "card"], [1, "dummy-pic"], [1, "card-title"], [2, "text-align", "center"], ["class", "about-content", 3, "innerHtml", 4, "ngIf", "ngIfElse"], ["error", ""], [1, "about-content", 3, "innerHtml"]], template: function ReturnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Return & Cancellation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ReturnsComponent_div_9_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReturnsComponent_ng_template_10_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageContent.length)("ngIfElse", _r1);
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXJDb250ZW50cy9yZXR1cm5zL3JldHVybnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReturnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-returns',
                templateUrl: './returns.component.html',
                styleUrls: ['./returns.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/shared/shared.module */ "PCNd");
/* harmony import */ var _error_error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error/error.component */ "kg7W");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _views_closed_couple_closed_couple_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/closed-couple/closed-couple.component */ "cswZ");
/* harmony import */ var _views_bare_shaft_bare_shaft_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/bare-shaft/bare-shaft.component */ "xJzR");
/* harmony import */ var _views_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./views/product-details/product-details.component */ "N3nS");
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/directives.module */ "FUS3");
/* harmony import */ var _views_payment_successful_payment_successful_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/payment-successful/payment-successful.component */ "m6t3");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _services_main_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/main.interceptor */ "jKUv");
/* harmony import */ var _views_roto_spares_roto_spares_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./views/roto-spares/roto-spares.component */ "vDoC");
/* harmony import */ var _views_retro_spares_retro_spares_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/retro-spares/retro-spares.component */ "UfA1");
/* harmony import */ var ngx_image_zoom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-image-zoom */ "1zy2");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-lightbox */ "m3o8");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var ng_maphilight__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng-maphilight */ "0VB4");
/* harmony import */ var _shared_footerContents_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/footerContents/about-us/about-us.component */ "L9i+");
/* harmony import */ var _views_retro_selection_retro_selection_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/retro-selection/retro-selection.component */ "m91S");
/* harmony import */ var _views_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./views/coming-soon/coming-soon.component */ "aMa8");
/* harmony import */ var _views_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/thankyou/thankyou.component */ "r+tH");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/main/main.component */ "E15m");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _services_main_interceptor__WEBPACK_IMPORTED_MODULE_17__["MainInterceptor"],
            multi: true
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                timeOut: 2000,
                preventDuplicates: true
            }),
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _directives_directives_module__WEBPACK_IMPORTED_MODULE_14__["DirectivesModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"],
            ngx_image_zoom__WEBPACK_IMPORTED_MODULE_20__["NgxImageZoomModule"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_21__["LightboxModule"],
            ng_maphilight__WEBPACK_IMPORTED_MODULE_22__["MaphilightModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _error_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
        _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _views_closed_couple_closed_couple_component__WEBPACK_IMPORTED_MODULE_11__["ClosedCoupleComponent"],
        _views_bare_shaft_bare_shaft_component__WEBPACK_IMPORTED_MODULE_12__["BareShaftComponent"],
        _views_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"],
        _views_payment_successful_payment_successful_component__WEBPACK_IMPORTED_MODULE_15__["PaymentSuccessfulComponent"],
        _views_roto_spares_roto_spares_component__WEBPACK_IMPORTED_MODULE_18__["RotoSparesComponent"],
        _views_retro_spares_retro_spares_component__WEBPACK_IMPORTED_MODULE_19__["RetroSparesComponent"],
        _shared_footerContents_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_23__["AboutUsComponent"],
        _views_retro_selection_retro_selection_component__WEBPACK_IMPORTED_MODULE_24__["RetroSelectionComponent"],
        _views_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_25__["ComingSoonComponent"],
        _views_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_26__["ThankyouComponent"],
        _views_main_main_component__WEBPACK_IMPORTED_MODULE_27__["MainComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
        _directives_directives_module__WEBPACK_IMPORTED_MODULE_14__["DirectivesModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"],
        ngx_image_zoom__WEBPACK_IMPORTED_MODULE_20__["NgxImageZoomModule"],
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_21__["LightboxModule"],
        ng_maphilight__WEBPACK_IMPORTED_MODULE_22__["MaphilightModule"]], exports: [_views_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _error_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                    _views_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _views_closed_couple_closed_couple_component__WEBPACK_IMPORTED_MODULE_11__["ClosedCoupleComponent"],
                    _views_bare_shaft_bare_shaft_component__WEBPACK_IMPORTED_MODULE_12__["BareShaftComponent"],
                    _views_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailsComponent"],
                    _views_payment_successful_payment_successful_component__WEBPACK_IMPORTED_MODULE_15__["PaymentSuccessfulComponent"],
                    _views_roto_spares_roto_spares_component__WEBPACK_IMPORTED_MODULE_18__["RotoSparesComponent"],
                    _views_retro_spares_retro_spares_component__WEBPACK_IMPORTED_MODULE_19__["RetroSparesComponent"],
                    _shared_footerContents_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_23__["AboutUsComponent"],
                    _views_retro_selection_retro_selection_component__WEBPACK_IMPORTED_MODULE_24__["RetroSelectionComponent"],
                    _views_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_25__["ComingSoonComponent"],
                    _views_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_26__["ThankyouComponent"],
                    _views_main_main_component__WEBPACK_IMPORTED_MODULE_27__["MainComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                        timeOut: 2000,
                        preventDuplicates: true
                    }),
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                    _directives_directives_module__WEBPACK_IMPORTED_MODULE_14__["DirectivesModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_16__["NgxSpinnerModule"],
                    ngx_image_zoom__WEBPACK_IMPORTED_MODULE_20__["NgxImageZoomModule"],
                    ngx_lightbox__WEBPACK_IMPORTED_MODULE_21__["LightboxModule"],
                    ng_maphilight__WEBPACK_IMPORTED_MODULE_22__["MaphilightModule"]
                ],
                exports: [_views_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]],
                providers: [{
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _services_main_interceptor__WEBPACK_IMPORTED_MODULE_17__["MainInterceptor"],
                        multi: true
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZSuO":
/*!***************************************************!*\
  !*** ./src/app/directives/text-only.directive.ts ***!
  \***************************************************/
/*! exports provided: TextOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextOnlyDirective", function() { return TextOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TextOnlyDirective {
    constructor(el) {
        this.el = el;
    }
    onKeydown(event) {
        this.key = event.keyCode;
        // console.log(this.key);
        if ((this.key >= 15 && this.key <= 64 && this.key !== 32) || (this.key >= 123) || (this.key >= 96 && this.key <= 105)) {
            event.preventDefault();
        }
    }
}
TextOnlyDirective.ɵfac = function TextOnlyDirective_Factory(t) { return new (t || TextOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TextOnlyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TextOnlyDirective, selectors: [["", "appTextOnly", ""]], hostBindings: function TextOnlyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TextOnlyDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appTextOnly]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "aMa8":
/*!************************************************************!*\
  !*** ./src/app/views/coming-soon/coming-soon.component.ts ***!
  \************************************************************/
/*! exports provided: ComingSoonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingSoonComponent", function() { return ComingSoonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/retrospares"]; };
class ComingSoonComponent {
    constructor() { }
    ngOnInit() {
    }
}
ComingSoonComponent.ɵfac = function ComingSoonComponent_Factory(t) { return new (t || ComingSoonComponent)(); };
ComingSoonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ComingSoonComponent, selectors: [["app-coming-soon"]], decls: 14, vars: 4, consts: [[1, "main-container", 2, "margin-top", "0px"], [1, "breadcrum", 2, "padding", "10px 0", "margin-top", "0px"], [1, "container"], ["href", "javascript:void(0)", 3, "routerLink"], ["src", "assets/images/icons/comingSoon.jpg", 1, "img-responsive"]], template: function ComingSoonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Retrofit Spares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Coming Soon ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbWluZy1zb29uL2NvbWluZy1zb29uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComingSoonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-coming-soon',
                templateUrl: './coming-soon.component.html',
                styleUrls: ['./coming-soon.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "aZ1U":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/footerContents/terms-conditions/terms-conditions.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TermsConditionsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.pageContent.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function TermsConditionsComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TermsConditionsComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.footerPages = [];
    }
    ngOnInit() {
        this.apiService.footerContents().subscribe(res => {
            if (res[`code`] === 200) {
                this.footerPages = res[`pages`];
                this.getFooterData('Terms & Conditions');
            }
        });
    }
    getFooterData(page) {
        if (this.footerPages.length) {
            this.pageContent = this.footerPages.filter(data => data.type === page)[0];
            this.pageType = this.pageContent.type;
        }
        else {
            this.pageContent = this.pageContent;
        }
    }
}
TermsConditionsComponent.ɵfac = function TermsConditionsComponent_Factory(t) { return new (t || TermsConditionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
TermsConditionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsConditionsComponent, selectors: [["app-terms-conditions"]], decls: 12, vars: 3, consts: [[1, "main-container", "about-page"], [1, "roto-retro"], [1, "container"], [1, "card"], [1, "dummy-pic"], [1, "card-title"], [2, "text-align", "center"], ["class", "about-content", 3, "innerHtml", 4, "ngIf", "ngIfElse"], ["error", ""], [1, "about-content", 3, "innerHtml"]], template: function TermsConditionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TermsConditionsComponent_div_9_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TermsConditionsComponent_ng_template_10_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageContent)("ngIfElse", _r1);
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXJDb250ZW50cy90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsConditionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms-conditions',
                templateUrl: './terms-conditions.component.html',
                styleUrls: ['./terms-conditions.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "cswZ":
/*!****************************************************************!*\
  !*** ./src/app/views/closed-couple/closed-couple.component.ts ***!
  \****************************************************************/
/*! exports provided: ClosedCoupleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedCoupleComponent", function() { return ClosedCoupleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_maphilight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-maphilight */ "0VB4");






const _c0 = function (a1, a2) { return ["../", a1, a2, 4]; };
function ClosedCoupleComponent_div_0_a_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachBtn1_r4 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", eachBtn1_r4 === ctx_r2.btn4Active ? "active-bttn" : "")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r2.parentId, eachBtn1_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachBtn1_r4);
} }
const _c1 = function (a1, a2) { return ["../", a1, a2, 6]; };
function ClosedCoupleComponent_div_0_a_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachBtn2_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", eachBtn2_r5 === ctx_r3.btn6Active ? "active-bttn" : "")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, ctx_r3.parentId, eachBtn2_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachBtn2_r5);
} }
const _c2 = function () { return ["/home"]; };
const _c3 = function (a1) { return ["/surfaceAgriPumps/", a1]; };
const _c4 = function (a0) { return { visibility: a0 }; };
const _c5 = function (a1) { return ["../", a1, "AGCA01A", 4]; };
const _c6 = function (a1) { return ["../", a1, "AGCA01B", 4]; };
const _c7 = function (a1) { return ["../", a1, "AGCA03A", 4]; };
const _c8 = function (a1) { return ["../", a1, "AGCA03B", 4]; };
const _c9 = function (a1) { return ["../", a1, "AGCA05A", 4]; };
const _c10 = function (a1) { return ["../", a1, "AGCA01A", 6]; };
const _c11 = function (a1) { return ["../", a1, "AGCA01B", 6]; };
const _c12 = function (a1) { return ["../", a1, "AGCA03A", 6]; };
const _c13 = function (a1) { return ["../", a1, "AGCA03B", 6]; };
function ClosedCoupleComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Close Coupled Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Surface Agri Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Close Coupled Pumps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Choose the pump from graph or model based on the media property (Head/flow) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ClosedCoupleComponent_div_0_a_26_Template, 2, 6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "4 Pole - 1450 RPM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "maphilight", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "area", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_0_Template_area_mouseenter_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.activateBtn(4, $event); })("mouseleave", function ClosedCoupleComponent_div_0_Template_area_mouseleave_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deActivateBtn(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "area", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_0_Template_area_mouseenter_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.activateBtn(4, $event); })("mouseleave", function ClosedCoupleComponent_div_0_Template_area_mouseleave_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deActivateBtn(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "area", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_0_Template_area_mouseenter_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.activateBtn(4, $event); })("mouseleave", function ClosedCoupleComponent_div_0_Template_area_mouseleave_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.deActivateBtn(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "area", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_0_Template_area_mouseenter_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.activateBtn(4, $event); })("mouseleave", function ClosedCoupleComponent_div_0_Template_area_mouseleave_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.deActivateBtn(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "area", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_0_Template_area_mouseenter_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.activateBtn(4, $event); })("mouseleave", function ClosedCoupleComponent_div_0_Template_area_mouseleave_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.deActivateBtn(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ClosedCoupleComponent_div_0_a_39_Template, 2, 6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "6 Pole - 960 RPM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "maphilight", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "area", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_0_Template_area_mouseenter_45_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.activateBtn(6, $event); })("mouseleave", function ClosedCoupleComponent_div_0_Template_area_mouseleave_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.deActivateBtn(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "area", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_0_Template_area_mouseenter_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.activateBtn(6, $event); })("mouseleave", function ClosedCoupleComponent_div_0_Template_area_mouseleave_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.deActivateBtn(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "area", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_0_Template_area_mouseenter_47_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.activateBtn(6, $event); })("mouseleave", function ClosedCoupleComponent_div_0_Template_area_mouseleave_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.deActivateBtn(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "area", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_0_Template_area_mouseenter_48_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.activateBtn(6, $event); })("mouseleave", function ClosedCoupleComponent_div_0_Template_area_mouseleave_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.deActivateBtn(6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c3, ctx_r0.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.fourPoleButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.graphImgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c4, ctx_r0.graphImgSrc && ctx_r0.graphImgSrc != "" ? "visible" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c5, ctx_r0.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c6, ctx_r0.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c7, ctx_r0.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c8, ctx_r0.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c9, ctx_r0.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.sixPoleButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r0.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.graphImgSrc1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c4, ctx_r0.graphImgSrc1 && ctx_r0.graphImgSrc1 != "" ? "visible" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c10, ctx_r0.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c11, ctx_r0.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c12, ctx_r0.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c13, ctx_r0.parentId));
} }
function ClosedCoupleComponent_div_1_div_21_a_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachBtn1_r27 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", eachBtn1_r27 === ctx_r26.btn4Active ? "active-bttn" : "")("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r26.parentId, eachBtn1_r27));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachBtn1_r27);
} }
const _c14 = function (a1) { return ["../", a1, "DCCC012", 4]; };
const _c15 = function (a1) { return ["../", a1, "DCCC022", 4]; };
const _c16 = function (a1) { return ["../", a1, "DCCC032", 4]; };
const _c17 = function (a1) { return ["../", a1, "DCAC041", 4]; };
const _c18 = function (a1) { return ["../", a1, "DCAC051", 4]; };
function ClosedCoupleComponent_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClosedCoupleComponent_div_1_div_21_a_5_Template, 2, 6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "4 Pole - 1450 RPM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "maphilight", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "area", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_1_div_21_Template_area_mouseenter_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.activateBtn(4, $event); })("mouseleave", function ClosedCoupleComponent_div_1_div_21_Template_area_mouseleave_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.deActivateBtn(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "area", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_1_div_21_Template_area_mouseenter_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.activateBtn(4, $event); })("mouseleave", function ClosedCoupleComponent_div_1_div_21_Template_area_mouseleave_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.deActivateBtn(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "area", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_1_div_21_Template_area_mouseenter_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.activateBtn(4, $event); })("mouseleave", function ClosedCoupleComponent_div_1_div_21_Template_area_mouseleave_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.deActivateBtn(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "area", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_1_div_21_Template_area_mouseenter_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.activateBtn(4, $event); })("mouseleave", function ClosedCoupleComponent_div_1_div_21_Template_area_mouseleave_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.deActivateBtn(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "area", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ClosedCoupleComponent_div_1_div_21_Template_area_mouseenter_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.activateBtn(4, $event); })("mouseleave", function ClosedCoupleComponent_div_1_div_21_Template_area_mouseleave_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.deActivateBtn(4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.fourPoleButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r25.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r25.graphImgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c4, ctx_r25.graphImgSrc && ctx_r25.graphImgSrc != "" ? "visible" : "hidden"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c14, ctx_r25.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c15, ctx_r25.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c16, ctx_r25.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c17, ctx_r25.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c18, ctx_r25.parentId));
} }
const _c19 = function (a1) { return ["/multiPurposePumps/", a1]; };
function ClosedCoupleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Closed Couple Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Multi Purpose Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Closed Couple Pumps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Select Pump based on Performance Curves ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ClosedCoupleComponent_div_1_div_21_Template, 16, 21, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c19, ctx_r1.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.toggleDisplay === "multiPurposePumps");
} }
class ClosedCoupleComponent {
    constructor(apiService, activatedRoute, router) {
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.subscribe = []; // used to store subscription
        this.graphImg = [];
        this.graphImgSrc = '';
        this.graphImg1 = [];
        this.graphImgSrc1 = '';
        this.fourPoleButtons = [];
        this.sixPoleButtons = [];
        this.config = {
            fade: true,
            // fill
            fill: true,
            fillColor: '#2F80ED',
            fillOpacity: 0.8,
            // stroke
            stroke: false,
            wrapClass: true
        };
    }
    ngOnInit() {
        if (this.router.url.includes('surfaceAgriPumps')) {
            this.toggleDisplay = 'surfaceAgriPumps';
            this.graphImg = ['assets/images/SACC/4poles/4_poles/img_sa_cc_4p_01A.jpg', 'assets/images/SACC/4poles/4_poles/img_sa_cc_4p_01B.jpg',
                'assets/images/SACC/4poles/4_poles/img_sa_cc_4p_03A.jpg', 'assets/images/SACC/4poles/4_poles/img_sa_cc_4p_03B.jpg',
                'assets/images/SACC/4poles/4_poles/img_sa_cc_4p_05A.jpg'];
            this.graphImgSrc = 'assets/images/SACC/4poles/4_poles/img_sa_cc_4p_base.jpg'; // 4 pole graphImg default value
            this.graphImg1 = ['assets/images/SACC/6poles/6_poles/img_sa_cc_6p_01A.jpg', 'assets/images/SACC/6poles/6_poles/img_sa_cc_6p_01B.jpg',
                'assets/images/SACC/6poles/6_poles/img_sa_cc_6p_03A.jpg', 'assets/images/SACC/6poles/6_poles/img_sa_cc_6p_03B.jpg'];
            this.graphImgSrc1 = 'assets/images/SACC/6poles/6_poles/img_sa_cc_6p_base.jpg'; // 6 pole graphImg default value
        }
        else if (this.router.url.includes('multiPurposePumps')) {
            this.toggleDisplay = 'multiPurposePumps';
            this.graphImg = ['assets/images/MpGraph/Frame22.png', 'assets/images/MpGraph/Frame23.png',
                'assets/images/MpGraph/Frame26.png', 'assets/images/MpGraph/Frame25.png', 'assets/images/MpGraph/Frame24.png'];
            this.graphImgSrc = 'assets/images/MpGraph/Frame21.png'; // 4 pole graphImg default value
        }
        this.subscribe.push(this.activatedRoute.params.subscribe(res => {
            if (res[`id`]) {
                this.parentId = res === null || res === void 0 ? void 0 : res.parentId;
                this.getProductDetails(res.id, res.parentId);
            }
        }));
    }
    getProductDetails(productId, parentId) {
        this.subscribe.push(this.apiService.productsByCategory(productId, parentId).subscribe(res => {
            if (res[`code`] === 200) {
                const products = res[`products`];
                // console.log(products)
                products.forEach(element => {
                    if (element.pole === '4') {
                        this.fourPoleButtons.push(element.code);
                    }
                    else if (element.pole === '6') {
                        this.sixPoleButtons.push(element.code);
                    }
                });
                this.fourPoleButtons.sort((a, b) => +a.substring(4, 7) - (+b.substring(4, 7)));
            }
        }));
    }
    activateBtn(pole, event) {
        if (pole === 4) {
            this.btn4Active = event.target.title;
        }
        else if (pole === 6) {
            this.btn6Active = event.target.title;
        }
    }
    deActivateBtn(pole) {
        if (pole === 4) {
            this.btn4Active = '';
        }
        else if (pole === 6) {
            this.btn6Active = '';
        }
    }
    // mouseenter function to change image according motorModel of 4 or 6 poles
    changeGraphImg(index, motorModel) {
        if (index === 1) {
            this.btn4Active = motorModel; // assign 4poles buttons if index is 1
        }
        else if (index === 2) {
            this.btn6Active = motorModel; // assign 6poles motorModel if index is 2
        }
        else if (index === 3) {
            this.btn4Active = motorModel;
        }
        // switching graphImg according to index and motorModel
        if (index === 1) {
            switch (motorModel) {
                case 'AGCA01A':
                    this.graphImgSrc = this.graphImg[0];
                    break;
                case 'AGCA05A':
                    this.graphImgSrc = this.graphImg[4];
                    break;
                case 'AGCA03A':
                    this.graphImgSrc = this.graphImg[2];
                    break;
                case 'AGCA03B':
                    this.graphImgSrc = this.graphImg[3];
                    break;
                case 'AGCA01B':
                    this.graphImgSrc = this.graphImg[1];
                    break;
                default:
                    this.graphImgSrc = this.graphImg[0];
            }
        }
        else if (index === 2) {
            switch (motorModel) {
                case 'AGCA01A':
                    this.graphImgSrc1 = this.graphImg1[0];
                    break;
                case 'AGCA01B':
                    this.graphImgSrc1 = this.graphImg1[1];
                    break;
                case 'AGCA03A':
                    this.graphImgSrc1 = this.graphImg1[2];
                    break;
                case 'AGCA03B':
                    this.graphImgSrc1 = this.graphImg1[3];
                    break;
                default:
                    this.graphImgSrc = this.graphImg1[0];
            }
        }
        else if (index === 3) {
            switch (motorModel) {
                case 'DCAC051':
                    this.graphImgSrc = this.graphImg[0];
                    break;
                case 'DCCA041':
                    this.graphImgSrc = this.graphImg[1];
                    break;
                case 'DCCC012':
                    this.graphImgSrc = this.graphImg[2];
                    break;
                case 'DCCC022':
                    this.graphImgSrc = this.graphImg[3];
                    break;
                case 'DCCC032':
                    this.graphImgSrc = this.graphImg[4];
                    break;
                default:
                    this.graphImgSrc = this.graphImg[0];
            }
        }
    }
    // mouseleave function to closeGraph Image according to index
    closeGraphImg(index) {
        if (index === 1) {
            this.btn4Active = '';
            this.graphImgSrc = 'assets/images/SACC/4poles/img_sa_cc_4p_base.jpg';
        }
        else if (index === 2) {
            this.btn6Active = '';
            this.graphImgSrc1 = 'assets/images/SACC/6poles/img_sa_cc_6p_base.jpg';
        }
        else if (index === 3) {
            this.btn4Active = '';
            this.graphImgSrc = 'assets/images/MpGraph/Frame21.png';
        }
    }
    // unsubscribing the subscription
    ngOnDestroy() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscribe.forEach(sub => {
            if (sub) {
                sub.unsubscribe();
            }
        });
    }
}
ClosedCoupleComponent.ɵfac = function ClosedCoupleComponent_Factory(t) { return new (t || ClosedCoupleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ClosedCoupleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClosedCoupleComponent, selectors: [["app-closed-couple"]], decls: 2, vars: 2, consts: [["class", "main-container surface-page", 4, "ngIf"], [1, "main-container", "surface-page"], [1, "full-banner"], ["src", "assets/images/banner/top-banner-small.jpg"], [1, "container"], [1, "breadcrum"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "pumpHeading"], [1, "fas", "fa-hand-point-left"], [1, "performance-curve"], [1, "performance-box-outer"], [1, "performance-box"], [1, "performance-buttons"], ["href", "javascript:void(0)", 3, "ngClass", "routerLink", 4, "ngFor", "ngForOf"], [1, "poleType"], ["id", "imageMap1", 3, "config"], [1, "mapper", 3, "src", "ngStyle"], ["title", "AGCA01A", "coords", "55,312,56,353,244,353,244,318", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["title", "AGCA01B", "coords", "53,307,245,313,435,322,435,353,244,353,243,317,54,313,55,306,245,313", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["title", "AGCA03A", "coords", "54,285,54,307,245,312,245,297", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["title", "AGCA03B", "coords", "54,281,435,297,434,321,246,313,245,297,54,286", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["title", "AGCA05A", "coords", "55,234,55,281,245,288,245,252", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["id", "imageMap2", 3, "config"], ["title", "AGCA01A", "coords", "55,227,244,241,244,353,56,353", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["title", "AGCA01B", "coords", "54,225,436,244,436,355,244,353,244,241,54,227", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["title", "AGCA03A", "coords", "54,141,55,224,245,234,244,172", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["title", "AGCA03B", "coords", "54,137,434,156,434,243,245,234,245,172,54,141", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["href", "javascript:void(0)", 3, "ngClass", "routerLink"], ["src", "assets/images/banner/top-banner.jpg"], ["href", "javascript:void(0)", "routerLink", "/home"], ["class", "performance-curve multi-box-curve", 4, "ngIf"], [1, "performance-curve", "multi-box-curve"], ["id", "imageMap3", 3, "config"], ["title", "DCCC012", "coords", "86,338,87,362,467,362,467,342", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["title", "DCCC022", "coords", "85,322,467,329,467,342,85,338", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["title", "DCCC032", "coords", "85,296,86,322,339,327,339,322", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["title", "DCAC041", "coords", "85,201,86,297,276,315,277,237", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"], ["title", "DCAC051", "coords", "86,77,86,201,275,237,275,136", "shape", "poly", 3, "routerLink", "mouseenter", "mouseleave"]], template: function ClosedCoupleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ClosedCoupleComponent_div_0_Template, 49, 44, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClosedCoupleComponent_div_1_Template, 22, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDisplay === "surfaceAgriPumps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDisplay === "multiPurposePumps");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_maphilight__WEBPACK_IMPORTED_MODULE_4__["MaphilightComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Nsb3NlZC1jb3VwbGUvY2xvc2VkLWNvdXBsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClosedCoupleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-closed-couple',
                templateUrl: './closed-couple.component.html',
                styleUrls: ['./closed-couple.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "cxbk":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true,
    apiUrl: 'https://api-eshop.rotopumps.com.au/index.php/api/',
    // apiUrl: 'http://127.0.0.1:8000/api/',
    stripeKey: 'pk_live_51HOzYGE100LdCkst5Th9b9ZQq6BStMgEhArh5eDVUjIGrqeguqymcxg1km47DcSALDx6HIeVvqkR6ZZoXFTwRgSf00f8gxV8xa',
    stripeTestKey: 'pk_live_51HOzYGE100LdCkst5Th9b9ZQq6BStMgEhArh5eDVUjIGrqeguqymcxg1km47DcSALDx6HIeVvqkR6ZZoXFTwRgSf00f8gxV8xa'
};


/***/ }),

/***/ "j/xX":
/*!**********************************************************************!*\
  !*** ./src/app/shared/footerContents/research/research.component.ts ***!
  \**********************************************************************/
/*! exports provided: ResearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchComponent", function() { return ResearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ResearchComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.pageContent, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function ResearchComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ResearchComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.footerPages = [];
    }
    ngOnInit() {
        this.apiService.researchAndDevelopment().subscribe((res) => {
            var _a, _b;
            this.pageType = (_a = res === null || res === void 0 ? void 0 : res.researchanddevelopment) === null || _a === void 0 ? void 0 : _a.type;
            this.pageContent = (_b = res === null || res === void 0 ? void 0 : res.researchanddevelopment) === null || _b === void 0 ? void 0 : _b.content;
        });
    }
}
ResearchComponent.ɵfac = function ResearchComponent_Factory(t) { return new (t || ResearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
ResearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResearchComponent, selectors: [["app-research"]], decls: 12, vars: 3, consts: [[1, "main-container", "about-page"], [1, "roto-retro"], [1, "container"], [1, "card"], [1, "dummy-pic"], [1, "card-title"], [2, "text-align", "center"], ["class", "about-content", 3, "innerHtml", 4, "ngIf", "ngIfElse"], ["error", ""], [1, "about-content", 3, "innerHtml"]], template: function ResearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResearchComponent_div_9_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResearchComponent_ng_template_10_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pageType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageContent)("ngIfElse", _r1);
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXJDb250ZW50cy9yZXNlYXJjaC9yZXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-research',
                templateUrl: './research.component.html',
                styleUrls: ['./research.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "jKUv":
/*!**********************************************!*\
  !*** ./src/app/services/main.interceptor.ts ***!
  \**********************************************/
/*! exports provided: MainInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainInterceptor", function() { return MainInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class MainInterceptor {
    constructor(spinner, router) {
        this.spinner = spinner;
        this.router = router;
    }
    intercept(request, next) {
        this.spinner.show();
        let authReq;
        if (request.url) {
            // setting headers for api requests
            authReq = request.clone({
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'OPTIONS, GET, PUT, PATCH, POST, DELETE',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
                })
            });
            return next.handle(authReq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((event) => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    this.spinner.hide();
                }
            }, error => {
                if ((error === null || error === void 0 ? void 0 : error.status) === 0 || (error === null || error === void 0 ? void 0 : error.status)) {
                    // handle error according to status code
                    switch (error === null || error === void 0 ? void 0 : error.status) {
                        case 404:
                            this.spinner.hide();
                            this.router.navigate(['/error'], { queryParams: { errorMsg: 'Page Not Found' } });
                            break;
                        case 500:
                            this.spinner.hide();
                            this.router.navigate(['/error'], { queryParams: { errorMsg: 'Something went wrong' } });
                            break;
                        case 403:
                            this.spinner.hide();
                            this.router.navigate(['/error'], { queryParams: { errorMsg: 'Something went wrong' } });
                            break;
                        case 502:
                            this.spinner.hide();
                            this.router.navigate(['/error'], { queryParams: { errorMsg: 'Something went wrong' } });
                            break;
                        case 503:
                            this.spinner.hide();
                            this.router.navigate(['/error'], { queryParams: { errorMsg: 'Something went wrong' } });
                            break;
                        case 504:
                            this.spinner.hide();
                            this.router.navigate(['/error'], { queryParams: { errorMsg: 'Something went wrong' } });
                            break;
                        case 101:
                            this.spinner.hide();
                            this.router.navigate(['/error'], { queryParams: { errorMsg: 'No Internet Connection' } });
                            break;
                        case 0:
                            console.log('internet');
                            this.spinner.hide();
                            this.router.navigate(['/error'], { queryParams: { errorMsg: 'Error In Connection' } });
                            break;
                        default:
                            this.spinner.hide();
                    }
                }
            }));
        }
        else {
            return next.handle(request);
        }
    }
}
MainInterceptor.ɵfac = function MainInterceptor_Factory(t) { return new (t || MainInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MainInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainInterceptor, factory: MainInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/aboutUs"]; };
const _c2 = function () { return ["/contactUs"]; };
const _c3 = function () { return ["/rotoEdge"]; };
const _c4 = function () { return ["/awards"]; };
const _c5 = function () { return ["/research"]; };
const _c6 = function () { return ["/returnandcancellation"]; };
const _c7 = function () { return ["/termsConditions"]; };
const _c8 = function () { return ["/privacyPolicy"]; };
const _c9 = function () { return ["/serviceandsupport"]; };
class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.year = new Date().getFullYear();
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 67, vars: 21, consts: [[1, "footer"], [1, "container"], [1, "footer-inner"], [1, "footer-list"], [3, "routerLink"], [2, "cursor", "none", "text-decoration", "none"], ["src", "assets/images/icons/map.png"], ["href", "tel:+61397945200"], ["src", "assets/images/icons/call.png"], ["href", "mailto:sales@rotopumps.com.au", "target", "_blank"], ["src", "assets/images/icons/mail.png"], [1, "social"], [1, "social-icons"], ["href", "https://www.facebook.com/Rotopump/", "target", "_blank"], ["src", "assets/images/icons/fb.png"], ["href", "https://www.linkedin.com/company/roto-pumps-ltd/", "target", "_blank"], ["src", "assets/images/icons/linkden.png"], ["href", "https://twitter.com/Rotopump", "target", "_blank"], ["src", "assets/images/icons/tweet.png"], ["href", "https://www.youtube.com/channel/UCjhw0H3JHPSPkQSaCn3ztWA", "target", "_blank"], ["src", "assets/images/icons/youtube.png"], [1, "footer-copy"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Roto Edge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Awards & Certificates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Research & Development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Return & Cancellation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Services & Supports");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "26, Deans Court, Dandenong South, Victoria 3175");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "+61 397945200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " sales@rotopumps.com.au");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c9));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Copyright \u00A9 ", ctx.year, " | Roto Pumps Australia.");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "kg7W":
/*!************************************************!*\
  !*** ./src/app/error/error/error.component.ts ***!
  \************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ErrorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sorry");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Go Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorText, "");
} }
function ErrorComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "404 PAGE NOT FOUND");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ErrorComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.errorType = false;
    }
    ngOnInit() {
        // getting the error message from interceptors according to status code.
        this.activatedRoute.queryParams.subscribe(res => {
            if (res[`errorMsg`] !== undefined) {
                this.errorText = res[`errorMsg`];
                this.errorType = true;
            }
            else {
                this.errorText = 'Page Not Found';
            }
        });
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 3, vars: 2, consts: [["class", "main-container error-wrapper", 4, "ngIf", "ngIfElse"], ["pageNotFound", ""], [1, "main-container", "error-wrapper"], [1, "container"], [1, "error-page", "text-centre"], ["src", "assets/images/card-images/error.png"], [1, "error-msg"], ["href", "javascript:void(0)", "routerLink", "/home"], [1, "emptyCartMsg"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ErrorComponent_div_0_Template, 11, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ErrorComponent_ng_template_1_Template, 5, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorType)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "H+bZ");





class AuthService {
    constructor(route, apiService) {
        this.route = route;
        this.apiService = apiService;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]({}); // userData of behaviourSubject to store the userData after login
        this.userName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](''); // userName of behaviourSubject to reflect change in username in header
        this.showHeader = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false); // used to show and height search header
    }
    // login function to store login data from login api
    loginData(userDetails) {
        sessionStorage.setItem('token', userDetails[`access_token`]);
        sessionStorage.setItem('id', window.btoa(userDetails[`user`].id));
        sessionStorage.setItem('currentUser', window.btoa(userDetails[`user`].name));
        sessionStorage.setItem('userType', window.btoa(userDetails[`user`].user_type));
        sessionStorage.setItem('userStatus', window.btoa(userDetails[`user`].status));
        sessionStorage.setItem('userDiscount', window.btoa(userDetails[`user`].discount_rate));
        if (userDetails[`user`].cart[`id`]) {
            // localStorage.setItem('cartId', window.btoa(userDetails[`user`].cart.id));
            sessionStorage.setItem('cartId', window.btoa(userDetails[`user`].cart.id));
        }
        this.updateData();
    }
    // logout function to clear all storage(local&session storage)
    logOut() {
        this.userData.next({});
        localStorage.clear();
        sessionStorage.clear();
        this.userName.next('');
        this.apiService.cartValue.next(0);
        this.route.navigate(['/home']);
    }
    // function to get current user-details
    getCurrentUser() {
        this.updateData();
    }
    // function to reflect userName from storage or from getUserDetails api.
    updateData() {
        if (sessionStorage.getItem('id')) {
            if (sessionStorage.getItem('currentUser')) {
                this.userName.next(window.atob(sessionStorage.getItem('currentUser')));
            }
            else {
                this.subscribe = this.apiService.getUserDetails(window.atob(sessionStorage.getItem('id'))).subscribe(res => {
                    if (res[`code`] === 200) {
                        sessionStorage.setItem('currentUser', window.btoa(res[`details`].name));
                        this.userName.next(res[`details`].name);
                    }
                });
            }
        }
        else {
            this.userName.next('');
        }
    }
    // to unsubscribe the subscriptions
    ngOnDestroy() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        if (this.subscribe) {
            this.subscribe.unsubscribe();
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "m6t3":
/*!**************************************************************************!*\
  !*** ./src/app/views/payment-successful/payment-successful.component.ts ***!
  \**************************************************************************/
/*! exports provided: PaymentSuccessfulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSuccessfulComponent", function() { return PaymentSuccessfulComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/orderHistory"]; };
const _c1 = function (a0) { return { orderId: a0 }; };
class PaymentSuccessfulComponent {
    constructor(apiService, router, activatedRoute) {
        this.apiService = apiService;
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(orderId => {
            this.orderId = orderId[`orderId`];
            if (this.orderId) {
                this.getOrderDetails();
            }
        });
    }
    getOrderDetails() {
        const order = {
            order_id: this.orderId
        };
        this.apiService.orderDetailsById(order).subscribe(res => {
            if (res[`code`] === 200) {
                this.orderData = res[`orders`];
                this.getUserEmail();
            }
        });
    }
    getUserEmail() {
        this.subscribe = this.apiService.getUserDetails(window.atob(sessionStorage.getItem('id'))).subscribe(res => {
            if (res[`code`] === 200) {
                this.userEmail = res[`details`].email;
            }
        });
    }
    // function to navigate back to home
    goToHome() {
        this.router.navigate(['/home']);
    }
    // used to unsubscribe Subscription.
    ngOnDestroy() {
        if (this.subscribe) {
            this.subscribe.unsubscribe();
        }
    }
}
PaymentSuccessfulComponent.ɵfac = function PaymentSuccessfulComponent_Factory(t) { return new (t || PaymentSuccessfulComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
PaymentSuccessfulComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaymentSuccessfulComponent, selectors: [["app-payment-successful"]], decls: 24, vars: 9, consts: [[1, "main-container"], [1, "container"], [1, "payment-successfull"], ["src", "assets/images/icons/pay-success.png"], [1, "paymentBtn"], [1, "blue-button", 3, "click"], [1, "blue-button", 3, "routerLink", "queryParams"]], template: function PaymentSuccessfulComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Payment Successful!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Amount Paid: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaymentSuccessfulComponent_Template_button_click_19_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Go To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Go To Order History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Order ID : ", ctx.orderData == null ? null : ctx.orderData.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Transaction ID : ", ctx.orderData == null ? null : ctx.orderData.transaction_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.orderData == null ? null : ctx.orderData.amount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Payment successful and mail sent to ", ctx.userEmail, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx.orderData == null ? null : ctx.orderData.id));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BheW1lbnQtc3VjY2Vzc2Z1bC9wYXltZW50LXN1Y2Nlc3NmdWwuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaymentSuccessfulComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-payment-successful',
                templateUrl: './payment-successful.component.html',
                styleUrls: ['./payment-successful.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "m91S":
/*!********************************************************************!*\
  !*** ./src/app/views/retro-selection/retro-selection.component.ts ***!
  \********************************************************************/
/*! exports provided: RetroSelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetroSelectionComponent", function() { return RetroSelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = function (a1) { return ["/retroSpares", a1]; };
function RetroSelectionComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSubSpare_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, eachSubSpare_r1 == null ? null : eachSubSpare_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachSubSpare_r1 == null ? null : eachSubSpare_r1.title);
} }
const _c1 = function () { return ["/home"]; };
class RetroSelectionComponent {
    constructor(activatedRoute, apiService) {
        this.activatedRoute = activatedRoute;
        this.apiService = apiService;
        this.retroSpares = [];
        this.retroSparesDetails = [];
    }
    ngOnInit() {
        this.activatedRoute.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            return data.retroData;
        })).subscribe(res => {
            if (res[`code`] === 200) {
                this.retroSpares = res[`categories`];
                if (this.retroSpares.length) {
                    this.defaultSelected = this.retroSpares[0];
                    this.getSparesSubCategory(this.defaultSelected.id);
                }
            }
        });
    }
    getSparesSubCategory(spareId) {
        this.apiService.retroSubCategoryDetails(spareId).subscribe(res => {
            if (res[`code`] === 200) {
                this.retroSparesDetails = res[`categories`];
            }
        });
    }
}
RetroSelectionComponent.ɵfac = function RetroSelectionComponent_Factory(t) { return new (t || RetroSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
RetroSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RetroSelectionComponent, selectors: [["app-retro-selection"]], decls: 17, vars: 4, consts: [[1, "main-container", "surface-page", "common-inner-card"], [1, "container"], [1, "breadcrum"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "pumps-sel-sec"], [1, "common-title"], [1, "pumps-sel"], ["class", "pumps-sec", 4, "ngFor", "ngForOf"], [1, "pumps-sec"], ["href", "javascript:void(0)", 2, "text-decoration", "none", 3, "routerLink"]], template: function RetroSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Retrofit Spares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RetroSelectionComponent_div_16_Template, 3, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.defaultSelected.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.retroSparesDetails);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JldHJvLXNlbGVjdGlvbi9yZXRyby1zZWxlY3Rpb24uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RetroSelectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-retro-selection',
                templateUrl: './retro-selection.component.html',
                styleUrls: ['./retro-selection.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "r+tH":
/*!******************************************************!*\
  !*** ./src/app/views/thankyou/thankyou.component.ts ***!
  \******************************************************/
/*! exports provided: ThankyouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankyouComponent", function() { return ThankyouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ThankyouComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.routerParam = params.type;
        });
    }
    // function to navigate back to home
    goToHome() {
        this.router.navigate(['/home']);
    }
}
ThankyouComponent.ɵfac = function ThankyouComponent_Factory(t) { return new (t || ThankyouComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
ThankyouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThankyouComponent, selectors: [["app-thankyou"]], decls: 12, vars: 1, consts: [[1, "main-container"], [1, "container"], [1, "payment-successfull"], ["src", "assets/images/icons/pay-success.png"], [1, "paymentBtn"], [1, "blue-button", 3, "click"]], template: function ThankyouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Thank You!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ThankyouComponent_Template_button_click_10_listener() { return ctx.goToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Go To Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your ", ctx.routerParam === "enquiry" ? "enquiry" : ctx.routerParam, " submitted successfully.");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoYW5reW91L3RoYW5reW91LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankyouComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thankyou',
                templateUrl: './thankyou.component.html',
                styleUrls: ['./thankyou.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "uitp":
/*!**********************************************************************!*\
  !*** ./src/app/shared/footerContents/products/products.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 16, vars: 0, consts: [[1, "main-container", "about-page"], [1, "full-banner-home"], ["src", "assets/images/banner/BannerImage.png"], [1, "container"], [1, "roto-retro"], [1, "card"], [1, "dummy-pic"], [1, "card-title"], [2, "text-align", "center"], [1, "about-content"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur illo ipsum dicta sequi enim omnis aliquid iure et amet, quidem nihil. Reprehenderit provident ex veritatis repudiandae excepturi obcaecati inventore possimus libero, quas nihil ab perferendis, debitis ullam ipsa earum maiores eos esse! Soluta laborum temporibus nisi, eos quas veniam numquam? Necessitatibus vitae distinctio deserunt fuga! Alias quis tenetur quos voluptatibus placeat eum sint doloribus dolorum blanditiis aspernatur porro debitis ducimus, recusandae dolor, sequi modi! Possimus, maiores ea voluptatem nesciunt consequatur autem exercitationem, praesentium ex saepe inventore id minus quod debitis dolor dignissimos facere odio amet optio fuga rem vitae vero sunt architecto! Deserunt ex ipsa eius, minus eum officiis modi. Numquam maiores commodi perspiciatis tempora itaque quia at explicabo ducimus, totam dolore repellat, rem, ipsum architecto officia sequi? Iste quas esse inventore itaque corporis soluta voluptatibus consequatur molestias, qui provident! Commodi ratione aperiam vel! Natus nostrum sed ex nam consectetur, exercitationem quasi modi asperiores cumque et, ducimus distinctio blanditiis similique maxime id commodi, voluptatibus quidem dolorum. Illum qui eligendi fugit quasi tempore aliquid dolorum ducimus corrupti unde molestias dignissimos quibusdam sunt, a harum nisi laudantium? Cupiditate ullam consectetur doloremque. Unde nam voluptas facilis repellat quidem, commodi dolorem nemo iste laudantium reprehenderit enim consectetur incidunt neque minus, non ex perspiciatis? Exercitationem dolor saepe recusandae commodi ullam debitis deserunt vel corrupti id facere, molestias, laudantium iusto ea quasi veritatis in? Repellat eligendi, necessitatibus similique magnam dolorum quaerat eum. Reiciendis minus quae qui non odit ut neque illum quos ea, cum nihil ipsum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXJDb250ZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vDoC":
/*!************************************************************!*\
  !*** ./src/app/views/roto-spares/roto-spares.component.ts ***!
  \************************************************************/
/*! exports provided: RotoSparesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RotoSparesComponent", function() { return RotoSparesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataModels/cart-details */ "1UKJ");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function RotoSparesComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachProduct_r5 == null ? null : eachProduct_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", eachProduct_r5 == null ? null : eachProduct_r5.name, "(", eachProduct_r5 == null ? null : eachProduct_r5.type, ") ");
} }
function RotoSparesComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSubCategory_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachSubCategory_r6 == null ? null : eachSubCategory_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachSubCategory_r6 == null ? null : eachSubCategory_r6.title, " ");
} }
function RotoSparesComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachPumpModel_r7 = ctx.$implicit;
    const pumpModel_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", pumpModel_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", eachPumpModel_r7 == null ? null : eachPumpModel_r7.code, " (", eachPumpModel_r7 == null ? null : eachPumpModel_r7.pole, " pole) ");
} }
function RotoSparesComponent_div_48_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSpare_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("PRODUCT ID : ", eachSpare_r9 == null ? null : eachSpare_r9.productDesc, " ");
} }
function RotoSparesComponent_div_48_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "PRODUCT ID : NA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "pointer-events": a0 }; };
function RotoSparesComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RotoSparesComponent_div_48_p_8_Template, 3, 1, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RotoSparesComponent_div_48_ng_template_9_Template, 3, 0, "ng-template", null, 32, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RotoSparesComponent_div_48_Template_span_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const spareCount_r10 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.consumptionSpareDecrement(spareCount_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RotoSparesComponent_div_48_Template_span_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const spareCount_r10 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.consumptionSpareIncrement(spareCount_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachSpare_r9 = ctx.$implicit;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", eachSpare_r9 == null ? null : eachSpare_r9.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", eachSpare_r9 == null ? null : eachSpare_r9.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachSpare_r9 == null ? null : eachSpare_r9.productDesc) !== null && (eachSpare_r9 == null ? null : eachSpare_r9.productDesc) !== "")("ngIfElse", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, (eachSpare_r9 == null ? null : eachSpare_r9.spareQuantity) <= 0 ? "none" : "auto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", eachSpare_r9 == null ? null : eachSpare_r9.spareQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 7, eachSpare_r9 == null ? null : eachSpare_r9.productPrice), " ");
} }
function RotoSparesComponent_div_54_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Model No: ", eachProduct_r18 == null ? null : eachProduct_r18.productDesc, "");
} }
function RotoSparesComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RotoSparesComponent_div_54_small_4_Template, 2, 1, "small", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachProduct_r18 == null ? null : eachProduct_r18.productName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachProduct_r18 == null ? null : eachProduct_r18.productDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, (eachProduct_r18 == null ? null : eachProduct_r18.productPrice) * (eachProduct_r18 == null ? null : eachProduct_r18.spareQuantity)), " ");
} }
const _c1 = function (a0) { return { display: a0 }; };
class RotoSparesComponent {
    constructor(apiService, toaster) {
        this.apiService = apiService;
        this.toaster = toaster;
        this.productData = new Array(); // variable to store product data
        this.subCategories = new Array(); // assigning subCategories array of SubProductCategories type
        this.pumpModels = new Array(); // assigning pumpModel code and model
        this.productsDetail = new Array(); // to store product details.
        this.spares = []; // used to store the spares
        this.productsInCart = []; // used to store added spares
        this.msgString = '';
        this.pumpType = '';
        this.pumpSubType = '';
        this.pumpModel = '';
    }
    ngOnInit() {
        this.getPumpModels();
    }
    getPumpModels() {
        this.apiService.homePage().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
            if (res[`code`] === 200) {
                const pumpType = res[`categories`]; // assigning pump categories from response in pumpType Array
                const pumpData = []; // used to store pump categories
                pumpType.forEach(eachPump => {
                    if (eachPump.name !== 'Roto Spares') {
                        if (eachPump.name === 'Surface Agri pumps') {
                            eachPump['type'] = "AG series";
                        }
                        else if (eachPump.name === 'Multi-purpose Pumps') {
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
                if (this.productData.length) {
                    this.checkEmptyData('product');
                }
                else {
                    this.msgString = 'No data found';
                }
            }
        });
    }
    checkEmptyData(type) {
        if (type === 'product') {
            if (this.productData.length) {
                this.msgString = 'Please select a pump type';
            }
        }
        else if (type === 'subCat') {
            if (this.subCategories.length) {
                this.msgString = 'Please select pump sub model';
            }
        }
        else if (type === 'pumpModel') {
            if (this.pumpModels.length) {
                this.msgString = 'Please select pump model';
            }
        }
    }
    // function used to get Pump subCategory by passing pumpCategory Id
    getPumpType(pumpId) {
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
                }
                else {
                    this.msgString = 'No data found';
                }
            }
        });
    }
    // function used to get Pump Model by passing Pump subCategory id
    getPumpSubType(subPumpId) {
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
                    }
                    else {
                        this.msgString = 'No data found';
                    }
                }
            });
        }
        else {
            this.apiService.productsByCategory(subPumpId, this.parentId).subscribe(res => {
                if (res[`code`] === 200) {
                    this.pumpModels = res[`products`];
                    if (this.subCategories.length) {
                        this.checkEmptyData('pumpModel');
                    }
                    else {
                        this.msgString = 'No data found';
                    }
                }
            });
        }
    }
    // function used to get productDetails by passing pumpModel and code
    getPumpDetails(pumpModelIndex) {
        const pumpModelData = this.pumpModels[+pumpModelIndex];
        this.productsDetail = [];
        this.apiService.rotoSpareDetails(pumpModelData.code, pumpModelData.pole).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(res => {
            if (res[`code`] === 200) {
                this.productsDetail = res[`product`];
                this.productId = this.productsDetail[0].details.id;
                this.productPole = this.productsDetail[0].details.pole;
                this.spares = [];
                const newSpares = [];
                if (this.productsDetail.length) {
                    this.productsDetail[0].spares.forEach(eachSpare => {
                        if (eachSpare.productPrice !== null && eachSpare.productPrice !== 0) {
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
                }
                else {
                    this.spares = [];
                }
            }
            return this.spares;
        })).subscribe(res => {
            this.spares = res;
            this.spares.sort((a, b) => a.productName.localeCompare(b.productName));
            if (this.spares.length >= 0) {
                this.msgString = 'No data found';
            }
        });
    }
    // function to decrement spareQuantity
    consumptionSpareDecrement(spareCount) {
        this.spares[spareCount].spareQuantity--;
        if (this.spares[spareCount].spareQuantity < 1) {
            this.productsInCart.forEach((res, index) => {
                if ((res.productName === this.spares[spareCount].productName) && (res.motorVolt === this.spares[spareCount].motorVolt)) {
                    this.productsInCart.splice(index, 1);
                }
            });
        }
        this.findGrandTotal();
    }
    // function to increment spareQuantity
    consumptionSpareIncrement(spareCount) {
        this.spares[spareCount].spareQuantity++;
        if (this.spares[spareCount].spareQuantity === 1) {
            this.productsInCart.push(this.spares[spareCount]);
        }
        this.findGrandTotal();
    }
    // function to calculate the total price of selected product, accessory and spare
    findGrandTotal() {
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
    addToCart() {
        const sparesToAdd = []; // sparesToAdd[] to add spare
        const driveType = { desc: '' };
        // array to push selected Spare
        this.productsInCart.forEach(ele => {
            if (ele.spareQuantity >= 1) {
                const spare = new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_2__["CartDetails"](this.productId, ele.productName, ele.productDesc, ele.productPrice, ele.discountPrice, 'spare', this.productPole, '0', '0', '0', '0', '0', '0', driveType.desc, ele.spareQuantity);
                sparesToAdd.push(spare);
            }
            // console.log('spare', sparesToAdd);
        });
        if (sessionStorage.getItem('id')) { // check if userId is present or not in sessionStorage
            if (sessionStorage.getItem('cartId') === null) { // check if cartId is present or not in sessionStorage(if not present the value is null)
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
                    const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('cart')));
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
                        cartDetails = JSON.parse(res[`details`].cart);
                        this.updateCartDetails(cartDetails, sparesToAdd, 'update'); // calling upDataCart to update
                    }
                }, err => {
                    var _a;
                    this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
                });
            }
        }
        else {
            if (sessionStorage.getItem('cart') && sessionStorage.getItem('cart').length > 2) {
                const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('cart')));
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
    updateCartDetails(cartDetails, sparesToAdd, type) {
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
                        }
                        else {
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
                var _a;
                this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
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
RotoSparesComponent.ɵfac = function RotoSparesComponent_Factory(t) { return new (t || RotoSparesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
RotoSparesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RotoSparesComponent, selectors: [["app-roto-spares"]], decls: 79, vars: 27, consts: [[1, "main-container", "cartpage", "roto-spares"], [1, "full-banner"], ["src", "assets/images/banner/top-banner-small.jpg"], [1, "container"], [1, "breadcrum"], ["href", "javascript:void(0)", "routerLink", "/home"], [1, "select-box-sec"], [1, "select-box-inner", "select-cat"], [1, "select-box", "clean"], [3, "ngModel", "change", "ngModelChange"], ["value", "", "selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "cart-section"], [1, "cart-inner"], [1, "emptyState", 3, "ngStyle"], [1, "cart", "border-grey", 3, "ngStyle"], [1, "price-title"], [2, "color", "#bc8129", "font-size", "15px"], ["class", "progress-row progress-row-spare", 4, "ngFor", "ngForOf"], [1, "price-detail", 3, "ngStyle"], ["class", "price-row", 4, "ngFor", "ngForOf"], [1, "price-row", "total-price"], [1, "left-price-spare"], ["href", "javascript:void(0)", 3, "click"], [3, "value"], [1, "progress-row", "progress-row-spare"], [1, "left-progress"], [1, "progress-pic"], [3, "src"], [1, "right-progress"], [1, "top-progress"], [4, "ngIf", "ngIfElse"], ["productDesc", ""], [1, "number"], [1, "minus", 3, "ngStyle", "click"], ["type", "text", "disabled", "", 2, "font-size", "19px", 3, "value"], [1, "plus", 3, "click"], [2, "font-size", "19px"], [1, "price-row"], [1, "left-price"], [4, "ngIf"], [1, "right-price"]], template: function RotoSparesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Roto Spares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Roto Spares ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "PUMP TYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RotoSparesComponent_Template_select_change_20_listener($event) { return ctx.getPumpType($event.target.value); })("ngModelChange", function RotoSparesComponent_Template_select_ngModelChange_20_listener($event) { return ctx.pumpType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Please select pump");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RotoSparesComponent_option_23_Template, 2, 3, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "PUMP SUB TYPE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RotoSparesComponent_Template_select_change_27_listener($event) { return ctx.getPumpSubType($event.target.value); })("ngModelChange", function RotoSparesComponent_Template_select_ngModelChange_27_listener($event) { return ctx.pumpSubType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Please select pump type first ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RotoSparesComponent_option_30_Template, 2, 2, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "SELECT PUMP MODEL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RotoSparesComponent_Template_select_change_34_listener($event) { return ctx.getPumpDetails($event.target.value); })("ngModelChange", function RotoSparesComponent_Template_select_ngModelChange_34_listener($event) { return ctx.pumpModel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Please select pump sub-type first ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, RotoSparesComponent_option_37_Template, 2, 3, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Select Spares ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "(plus GST 10%)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, RotoSparesComponent_div_48_Template, 20, 11, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Product Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RotoSparesComponent_div_54_Template, 9, 5, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Shipping & Handling @5%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](61, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "GST @10%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](67, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "(In AUD)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](75, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RotoSparesComponent_Template_a_click_77_listener() { return ctx.addToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "ADD TO CART");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pumpType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pumpSubType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pumpModel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pumpModels);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx.spares.length <= 0 ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.msgString, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx.spares.length > 0 ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spares);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c1, ctx.productsInCart.length > 0 ? "block" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productsInCart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](61, 15, ctx.shippingAmount));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](67, 17, ctx.gstAmount));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](75, 19, ctx.subTotal));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3JvdG8tc3BhcmVzL3JvdG8tc3BhcmVzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RotoSparesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roto-spares',
                templateUrl: './roto-spares.component.html',
                styleUrls: ['./roto-spares.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _error_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error/error.component */ "kg7W");
/* harmony import */ var _views_home_home_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/home/home-resolver.service */ "OGO5");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/home/home.component */ "QlPV");
/* harmony import */ var _shared_footerContents_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footerContents/about-us/about-us.component */ "L9i+");
/* harmony import */ var _views_payment_successful_payment_successful_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/payment-successful/payment-successful.component */ "m6t3");
/* harmony import */ var _views_retro_spares_retro_spares_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/retro-spares/retro-spares.component */ "UfA1");
/* harmony import */ var _views_roto_spares_roto_spares_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/roto-spares/roto-spares.component */ "vDoC");
/* harmony import */ var _shared_footerContents_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footerContents/terms-conditions/terms-conditions.component */ "aZ1U");
/* harmony import */ var _shared_footerContents_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/footerContents/privacy-policy/privacy-policy.component */ "zZDJ");
/* harmony import */ var _shared_footerContents_returns_returns_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footerContents/returns/returns.component */ "X3j5");
/* harmony import */ var _shared_footerContents_service_support_service_support_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footerContents/service-support/service-support.component */ "K4lT");
/* harmony import */ var _shared_footerContents_products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/footerContents/products/products.component */ "uitp");
/* harmony import */ var _shared_footerContents_roto_edge_roto_edge_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/footerContents/roto-edge/roto-edge.component */ "OrE0");
/* harmony import */ var _views_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./views/coming-soon/coming-soon.component */ "aMa8");
/* harmony import */ var _shared_footerContents_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/footerContents/contact-us/contact-us.component */ "TcwW");
/* harmony import */ var _shared_footerContents_awards_awards_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/footerContents/awards/awards.component */ "DmRL");
/* harmony import */ var _shared_footerContents_research_research_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/footerContents/research/research.component */ "j/xX");
/* harmony import */ var _shared_footerContents_tirrana_agricultural_pump_new_tirrana_agricultural_pump_new_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/footerContents/tirrana-agricultural-pump-new/tirrana-agricultural-pump-new.component */ "VbcD");
/* harmony import */ var _shared_footerContents_tirrana_general_pump_tirrana_general_pump_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/footerContents/tirrana-general-pump/tirrana-general-pump.component */ "FSQi");
/* harmony import */ var _shared_footerContents_retrofit_spare_parts_retrofit_spare_parts_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/footerContents/retrofit-spare-parts/retrofit-spare-parts.component */ "wVd6");
/* harmony import */ var _views_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./views/thankyou/thankyou.component */ "r+tH");
/* harmony import */ var _views_main_main_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/main/main.component */ "E15m");


























const routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: _views_main_main_component__WEBPACK_IMPORTED_MODULE_23__["MainComponent"] },
    { path: 'home', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], resolve: { homeData: _views_home_home_resolver_service__WEBPACK_IMPORTED_MODULE_3__["HomeDetailsResolver"] } },
    { path: 'aboutUs', component: _shared_footerContents_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"] },
    { path: 'contactUs', component: _shared_footerContents_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__["ContactUsComponent"] },
    { path: 'termsConditions', component: _shared_footerContents_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_9__["TermsConditionsComponent"] },
    { path: 'privacyPolicy', component: _shared_footerContents_privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_10__["PrivacyPolicyComponent"] },
    { path: 'returnandcancellation', component: _shared_footerContents_returns_returns_component__WEBPACK_IMPORTED_MODULE_11__["ReturnsComponent"] },
    { path: 'serviceandsupport', component: _shared_footerContents_service_support_service_support_component__WEBPACK_IMPORTED_MODULE_12__["ServiceSupportComponent"] },
    { path: 'products', component: _shared_footerContents_products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"] },
    { path: 'rotoEdge', component: _shared_footerContents_roto_edge_roto_edge_component__WEBPACK_IMPORTED_MODULE_14__["RotoEdgeComponent"] },
    { path: 'retrospares', component: _views_retro_spares_retro_spares_component__WEBPACK_IMPORTED_MODULE_7__["RetroSparesComponent"] },
    { path: 'awards', component: _shared_footerContents_awards_awards_component__WEBPACK_IMPORTED_MODULE_17__["AwardsComponent"] },
    { path: 'tirrana-agricultural-pump-new', component: _shared_footerContents_tirrana_agricultural_pump_new_tirrana_agricultural_pump_new_component__WEBPACK_IMPORTED_MODULE_19__["TirranaAgriculturalPumpNewComponent"] },
    { path: 'tirrana-general-pump', component: _shared_footerContents_tirrana_general_pump_tirrana_general_pump_component__WEBPACK_IMPORTED_MODULE_20__["TirranaGeneralPumpComponent"] },
    { path: 'retrofit-spare-parts', component: _shared_footerContents_retrofit_spare_parts_retrofit_spare_parts_component__WEBPACK_IMPORTED_MODULE_21__["RetrofitSparePartsComponent"] },
    { path: 'research', component: _shared_footerContents_research_research_component__WEBPACK_IMPORTED_MODULE_18__["ResearchComponent"] },
    { path: 'surfaceAgriPumps/:id', loadChildren: () => __webpack_require__.e(/*! import() | views-surface-agri-pumps-surface-agri-pumps-module */ "views-surface-agri-pumps-surface-agri-pumps-module").then(__webpack_require__.bind(null, /*! ./views/surface-agri-pumps/surface-agri-pumps.module */ "uGD2")).
            then(m => m.SurfaceAgriPumpsModule) },
    { path: 'multiPurposePumps/:id', loadChildren: () => __webpack_require__.e(/*! import() | views-multi-purpose-pumps-multi-purpose-pumps-module */ "views-multi-purpose-pumps-multi-purpose-pumps-module").then(__webpack_require__.bind(null, /*! ./views/multi-purpose-pumps/multi-purpose-pumps.module */ "x1qI")).
            then(m => m.MultiPurposePumpsModule) },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | views-profile-profile-module */ "views-profile-profile-module").then(__webpack_require__.bind(null, /*! ./views/profile/profile.module */ "8r/t")).then(m => m.ProfileModule) },
    { path: 'cart', loadChildren: () => __webpack_require__.e(/*! import() | views-cart-cart-module */ "views-cart-cart-module").then(__webpack_require__.bind(null, /*! ./views/cart/cart.module */ "e/Ek")).then(m => m.CartModule) },
    { path: '', loadChildren: () => __webpack_require__.e(/*! import() | views-account-account-module */ "views-account-account-module").then(__webpack_require__.bind(null, /*! ./views/account/account.module */ "Qrwm")).then(m => m.AccountModule) },
    { path: 'orderHistory', loadChildren: () => __webpack_require__.e(/*! import() | views-order-order-module */ "views-order-order-module").then(__webpack_require__.bind(null, /*! ./views/order/order.module */ "tPZM")).then(m => m.OrderModule) },
    { path: 'rotoSpares/:id', component: _views_roto_spares_roto_spares_component__WEBPACK_IMPORTED_MODULE_8__["RotoSparesComponent"] },
    // {path: 'retroSpares/:id', component: RetroSparesComponent, resolve: { retroSpare: RetroSpareResolver}} ,
    { path: 'payment-successful', component: _views_payment_successful_payment_successful_component__WEBPACK_IMPORTED_MODULE_6__["PaymentSuccessfulComponent"] },
    { path: 'thank-you', component: _views_thankyou_thankyou_component__WEBPACK_IMPORTED_MODULE_22__["ThankyouComponent"] },
    { path: 'comingSoon', component: _views_coming_soon_coming_soon_component__WEBPACK_IMPORTED_MODULE_15__["ComingSoonComponent"] },
    { path: 'error', component: _error_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"] },
    { path: '**', redirectTo: '/error' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wVd6":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/footerContents/retrofit-spare-parts/retrofit-spare-parts.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RetrofitSparePartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetrofitSparePartsComponent", function() { return RetrofitSparePartsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/home"]; };
class RetrofitSparePartsComponent {
    constructor() { }
    ngOnInit() {
    }
}
RetrofitSparePartsComponent.ɵfac = function RetrofitSparePartsComponent_Factory(t) { return new (t || RetrofitSparePartsComponent)(); };
RetrofitSparePartsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RetrofitSparePartsComponent, selectors: [["app-retrofit-spare-parts"]], decls: 119, vars: 2, consts: [[1, "main-container", "about-page"], [1, "vc_custom_1560775701035"], [1, "container"], [1, "row"], [1, "col-sm-12", "wpb_wrapper"], ["type", "button", 1, "btn", "btn-primary", 3, "routerLink"], [1, "card-title"], [2, "text-align", "center", "position", "relative"], [1, "row", 2, "margin-top", "20px"], [1, "col-sm-6"], [1, "list-custom-heading", 2, "display", "block"], [2, "list-style", "circle"], [1, "vc_row", "wpb_row", "vc_row-fluid", "vc_custom_1560775701035"], [1, "col-sm-4", "vc_column-inner_body"], [1, "vc_column-inner"], [1, "wpb_wrapper"], [1, "wpb_raw_code", "wpb_content_element", "wpb_raw_html"], [1, "productpgbx", "retromn"], [1, "prdcptn"], [1, "prdpicbx"], ["src", "../../../../assets/images/rotors.jpeg", "alt", ""], ["src", "../../../../assets/images/stators.jpeg", "alt", ""], ["src", "../../../../assets/images/universal-joint-parts.jpeg", "alt", ""], [1, "container", "vc_tta-panel-body"], [1, "row", "vc_column-inner"], ["id", "col-box", 1, "col-sm-3"], [1, "paoc-popup", "popupaoc-button"], ["id", " col-box", 1, "col-sm-3"], [1, "col-sm-3"], [1, "container", "vc_single_image_body"], [1, "col-sm-6", "vc_single_image-wrapper"], ["width", "100%", "height", "302", "src", "https://rotopumps.com.au/wp-content/uploads/2019/06/retrofit-advanced.jpg", "alt", "", "loading", "lazy", "srcset", "\n            https://rotopumps.com.au/wp-content/uploads/2019/06/retrofit-advanced.jpg         672w,\n            https://rotopumps.com.au/wp-content/uploads/2019/06/retrofit-advanced-300x135.jpg 300w\n          ", "sizes", "(max-width: 672px) 100vw, 672px", 1, "vc_single_image-img", "attachment-full"], ["width", "100%", "height", "302", "src", "https://rotopumps.com.au/wp-content/uploads/2019/06/retrofitparts.jpg", "alt", "", "loading", "lazy", "srcset", "\n            https://rotopumps.com.au/wp-content/uploads/2019/06/retrofitparts.jpg         672w,\n            https://rotopumps.com.au/wp-content/uploads/2019/06/retrofitparts-300x135.jpg 300w\n          ", "sizes", "(max-width: 672px) 100vw, 672px", 1, "vc_single_image-img", "attachment-full"], [1, "vc_row", "wpb_row", "vc_row-fluid"], [1, "wpb_column", "vc_column_container", "vc_col-sm-12"], [1, "wpb_text_column", "wpb_content_element", "well"]], template: function RetrofitSparePartsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Go to home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Globally trusted retrofit parts for all leading Progressive Cavity Pump Manufacturers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " High level of Quality and Interchangeability ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Ease of Operations and Complete peace of mind ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Rotors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Stators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Other Parts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "E Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "B Range- Long Pitch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "X Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "S Hygenic Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "C Compact Range- Long Pitch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "C Compact Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Merlin Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "E Range- Long Pitch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "D Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "SB Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "L Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Mini Range");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Note-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Netzsch\u00AE, Monoflo\u00AE, Seepex\u00AE, Moyno\u00AE & Allweiler\u00AE are registered trademarks of Netzsch Mohnopumpen GmbH, Mono Pumps Ltd., Seeberger GmbH + Co KG, Robbins & Myers, Inc. & Allweiler AG respectively. AFLAS\u00AE is a registered product of Asahi Glass Co. Ltd., Japan. Roto Pumps is not an authorised distributor of parts or services for Netzsch Mohnopumpen GmbH\u2019s, Monoflo, Seeberger GmbH\u2019s, Robbins & Myer\u2019s Inc. and Allweiler AG\u2019s products. Roto Pumps Ltd. products are not associated with, endorsed by, or sponsored by any of these companies. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Quality ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "systems:\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Manufacturing units certified for conformance to ISO 9001 : 2015. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_1__["BannerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".main-container[_ngcontent-%COMP%]{\r\n  background-color: transparent;\r\n}\r\n\r\n\r\n\r\n.wpb_wrapper[_ngcontent-%COMP%]{\r\n  margin-bottom: 0;\r\n  margin-top: 20px;\r\n}\r\n\r\n.list-custom-heading[_ngcontent-%COMP%]{\r\n  margin: 0;padding: 0;\r\n  padding-left: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.retromn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.retromn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: red;\r\n  -webkit-text-decoration-color: red;\r\n          text-decoration-color: red;\r\n}\r\n\r\n.productpgbx[_ngcontent-%COMP%] {\r\n  background: #f7f7f7;\r\n  border: 10px solid #ededed;\r\n  width: 100%;\r\n  text-align: center;\r\n  border-radius: 15px;\r\n  padding: 20px 0;\r\n  transition: all 1s ease;\r\n  box-shadow: #ababab 5px 5px 10px;\r\n}\r\n\r\n.productpgbx[_ngcontent-%COMP%]:hover {\r\n  border-left-color: #336fb5;\r\n  display: block;\r\n}\r\n\r\n.productpgbx[_ngcontent-%COMP%]   .prdpicbx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: block;\r\n  transition: all 1s ease;\r\n}\r\n\r\n.productpgbx[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.prdcptn[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n  color: #336fb5;\r\n  line-height: 28px;\r\n  margin: 0 0 20px;\r\n}\r\n\r\n.prdpicbx[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n  padding: 15px 0 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.retromn[_ngcontent-%COMP%]   .prdpicbx[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  margin: 0 auto;\r\n}\r\n\r\n\r\n\r\n.wpb-js-composer[_ngcontent-%COMP%]   .vc_tta.vc_general[_ngcontent-%COMP%]   .vc_tta-tab[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.vc_column-inner[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n  width: 100%;\r\n}\r\n\r\nul[_ngcontent-%COMP%] {\r\n      display: -webkit-inline-box;\r\n      margin-top: 50px;\r\n      margin-bottom: 30px;\r\n      padding: 0px;\r\n}\r\n\r\nli[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\n#vc_tta-title_mono[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n}\r\n\r\n.vc_tta.vc_general.vc_tta-color-grey.vc_tta-style-classic[_ngcontent-%COMP%]   .vc_tta-tab[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    text-transform: none!important;\r\n    padding: 20px 16px!important;\r\n    text-decoration: none;\r\n}\r\n\r\n.vc_tta.vc_general.vc_tta-color-grey.vc_tta-style-classic[_ngcontent-%COMP%]   .vc_tta-tab[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    border: none;\r\n    background-color: #f6f6f6;\r\n    color: #222;\r\n    border-radius: 0;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n}\r\n\r\n.wpb-js-composer[_ngcontent-%COMP%]   .vc_tta-color-grey.vc_tta-style-classic[_ngcontent-%COMP%]   .vc_tta-tab[_ngcontent-%COMP%] > a[_ngcontent-%COMP%] {\r\n    border-color: #e3e3e3;\r\n    background-color: #ebebeb;\r\n    color: #666;\r\n}\r\n\r\n.wpb-js-composer[_ngcontent-%COMP%]   .vc_tta-color-grey.vc_tta-style-classic[_ngcontent-%COMP%]   .vc_tta-tab[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus, .wpb-js-composer[_ngcontent-%COMP%]   .vc_tta-color-grey.vc_tta-style-classic[_ngcontent-%COMP%]   .vc_tta-tab[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  background-color: #dcdcdc;\r\n  text-decoration: none;\r\n}\r\n\r\n.wpb-js-composer[_ngcontent-%COMP%]   .vc_tta-color-grey.vc_tta-style-classic[_ngcontent-%COMP%]   .vc_tta-tab[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:focus, .wpb-js-composer[_ngcontent-%COMP%]   .vc_tta-color-grey.vc_tta-style-classic[_ngcontent-%COMP%]   .vc_tta-tab[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]:hover {\r\n    background-color: #dcdcdc;\r\n}\r\n\r\n\r\n\r\n.vc_tta-panel-body[_ngcontent-%COMP%]{\r\n  margin-top: 30px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.vc_column-inner_body[_ngcontent-%COMP%]{\r\n  margin-bottom: 30px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.col-sm-3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding: 10px 20px;\r\n    background: #336fb5;\r\n    display: block;\r\n    text-align: center;\r\n    margin: 10px;\r\n    width: 100%;\r\n    color: white;\r\n}\r\n\r\n\r\n\r\n.vc_single_image_body[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.vc_single_image-wrapper[_ngcontent-%COMP%]{\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3RlckNvbnRlbnRzL3JldHJvZml0LXNwYXJlLXBhcnRzL3JldHJvZml0LXNwYXJlLXBhcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUEsaUJBQWlCOztBQUVqQjtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTLENBQUMsVUFBVTtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGtDQUEwQjtVQUExQiwwQkFBMEI7QUFDNUI7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBLDZCQUE2Qjs7QUFJN0I7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFNBQVM7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtNQUNNLDJCQUEyQjtNQUMzQixnQkFBZ0I7TUFDaEIsbUJBQW1CO01BQ25CLFlBQVk7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBLDBCQUEwQjs7QUFHMUI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUEsMEJBQTBCOztBQUUxQjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQSx3QkFBd0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZm9vdGVyQ29udGVudHMvcmV0cm9maXQtc3BhcmUtcGFydHMvcmV0cm9maXQtc3BhcmUtcGFydHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09ICovXHJcblxyXG4ud3BiX3dyYXBwZXJ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubGlzdC1jdXN0b20taGVhZGluZ3tcclxuICBtYXJnaW46IDA7cGFkZGluZzogMDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnJldHJvbW4gYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5yZXRyb21uIGE6aG92ZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZWQ7XHJcbn1cclxuLnByb2R1Y3RwZ2J4IHtcclxuICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjZWRlZGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxuICBib3gtc2hhZG93OiAjYWJhYmFiIDVweCA1cHggMTBweDtcclxufVxyXG5cclxuLnByb2R1Y3RwZ2J4OmhvdmVyIHtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzMzNmZiNTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnByb2R1Y3RwZ2J4IC5wcmRwaWNieCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG59XHJcblxyXG4ucHJvZHVjdHBnYng6aG92ZXIgaW1nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbn1cclxuXHJcbi5wcmRjcHRuIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICMzMzZmYjU7XHJcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgbWFyZ2luOiAwIDAgMjBweDtcclxufVxyXG5cclxuLnByZHBpY2J4IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweCAwIDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnJldHJvbW4gLnByZHBpY2J4IGltZyB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLyogJycnJycnJycnJycnJycnJycnJycnJycnICovXHJcblxyXG5cclxuXHJcbi53cGItanMtY29tcG9zZXIgLnZjX3R0YS52Y19nZW5lcmFsIC52Y190dGEtdGFiIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi52Y19jb2x1bW4taW5uZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xyXG4gICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuI3ZjX3R0YS10aXRsZV9tb25ve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4udmNfdHRhLnZjX2dlbmVyYWwudmNfdHRhLWNvbG9yLWdyZXkudmNfdHRhLXN0eWxlLWNsYXNzaWMgLnZjX3R0YS10YWIgPiBhIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDIwcHggMTZweCFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi52Y190dGEudmNfZ2VuZXJhbC52Y190dGEtY29sb3ItZ3JleS52Y190dGEtc3R5bGUtY2xhc3NpYyAudmNfdHRhLXRhYiA+IGEge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbi53cGItanMtY29tcG9zZXIgLnZjX3R0YS1jb2xvci1ncmV5LnZjX3R0YS1zdHlsZS1jbGFzc2ljIC52Y190dGEtdGFiPmEge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTNlM2UzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJlYjtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG59XHJcblxyXG4ud3BiLWpzLWNvbXBvc2VyIC52Y190dGEtY29sb3ItZ3JleS52Y190dGEtc3R5bGUtY2xhc3NpYyAudmNfdHRhLXRhYiA+IGE6Zm9jdXMsXHJcbi53cGItanMtY29tcG9zZXIgLnZjX3R0YS1jb2xvci1ncmV5LnZjX3R0YS1zdHlsZS1jbGFzc2ljIC52Y190dGEtdGFiID4gYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGNkYztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi53cGItanMtY29tcG9zZXIgLnZjX3R0YS1jb2xvci1ncmV5LnZjX3R0YS1zdHlsZS1jbGFzc2ljIC52Y190dGEtdGFiPmE6Zm9jdXMsIC53cGItanMtY29tcG9zZXIgLnZjX3R0YS1jb2xvci1ncmV5LnZjX3R0YS1zdHlsZS1jbGFzc2ljIC52Y190dGEtdGFiPmE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjZGNkYztcclxufVxyXG5cclxuLyogPD09PT09PT09PT09PT09PT09PT0+ICovXHJcblxyXG5cclxuLnZjX3R0YS1wYW5lbC1ib2R5e1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG5cclxuLnZjX2NvbHVtbi1pbm5lcl9ib2R5e1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNvbC1zbS0zIGF7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzM2ZmI1O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLyogPD09PT09PT09PT09PT09PT09PT0+ICovXHJcblxyXG4udmNfc2luZ2xlX2ltYWdlX2JvZHl7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4udmNfc2luZ2xlX2ltYWdlLXdyYXBwZXJ7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PSAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RetrofitSparePartsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-retrofit-spare-parts',
                templateUrl: './retrofit-spare-parts.component.html',
                styleUrls: ['./retrofit-spare-parts.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xJzR":
/*!**********************************************************!*\
  !*** ./src/app/views/bare-shaft/bare-shaft.component.ts ***!
  \**********************************************************/
/*! exports provided: BareShaftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BareShaftComponent", function() { return BareShaftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_maphilight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-maphilight */ "0VB4");






function BareShaftComponent_ng_container_0_div_1_a_26_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_0_div_1_a_26_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const eachBtn1_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.showMotor(eachBtn1_r6, 4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachBtn1_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", eachBtn1_r6 === ctx_r5.btn4Active ? "active-bttn" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachBtn1_r6);
} }
const _c0 = function () { return ["/home"]; };
const _c1 = function (a1) { return ["/surfaceAgriPumps/", a1]; };
const _c2 = function (a0) { return { visibility: a0 }; };
function BareShaftComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bare Shaft Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Surface Agri Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bare Shaft Pumps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Select Pump based on the Configuration ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BareShaftComponent_ng_container_0_div_1_a_26_Template, 2, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "4 Pole - 1450 RPM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "maphilight", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "area", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_0_div_1_Template_area_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.showMotor("AGAA01A", 4); })("mouseenter", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseenter_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.activateBtn("SABS", $event); })("mouseleave", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseleave_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.deActivateBtn("SABS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "area", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_0_div_1_Template_area_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.showMotor("AGAA01B", 4); })("mouseenter", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseenter_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.activateBtn("SABS", $event); })("mouseleave", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseleave_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.deActivateBtn("SABS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "area", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_0_div_1_Template_area_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.showMotor("AGAA03A", 4); })("mouseenter", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseenter_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.activateBtn("SABS", $event); })("mouseleave", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseleave_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.deActivateBtn("SABS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "area", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_0_div_1_Template_area_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.showMotor("AGAA03B", 4); })("mouseenter", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseenter_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.activateBtn("SABS", $event); })("mouseleave", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseleave_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.deActivateBtn("SABS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "area", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_0_div_1_Template_area_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.showMotor("AGAA05A", 4); })("mouseenter", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseenter_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.activateBtn("SABS", $event); })("mouseleave", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseleave_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.deActivateBtn("SABS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "area", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_0_div_1_Template_area_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.showMotor("AGAA05B", 4); })("mouseenter", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseenter_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.activateBtn("SABS", $event); })("mouseleave", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseleave_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.deActivateBtn("SABS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "area", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_0_div_1_Template_area_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.showMotor("AGAA07A", 4); })("mouseenter", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseenter_38_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.activateBtn("SABS", $event); })("mouseleave", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseleave_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.deActivateBtn("SABS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "area", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_0_div_1_Template_area_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.showMotor("AGAA07B", 4); })("mouseenter", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseenter_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.activateBtn("SABS", $event); })("mouseleave", function BareShaftComponent_ng_container_0_div_1_Template_area_mouseleave_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.deActivateBtn("SABS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r4.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.fourPoleButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r4.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.graphImgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx_r4.graphImgSrc && ctx_r4.graphImgSrc != "" ? "visible" : "hidden"));
} }
function BareShaftComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BareShaftComponent_ng_container_0_div_1_Template, 40, 11, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.toggleDisplaySurfaceAgri);
} }
function BareShaftComponent_div_1_div_22_td_19_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachData_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", eachData_r37 == null ? null : eachData_r37.feet, ")");
} }
function BareShaftComponent_div_1_div_22_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BareShaftComponent_div_1_div_22_td_19_span_3_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachData_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", eachData_r37 == null ? null : eachData_r37.head, " m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachData_r37 == null ? null : eachData_r37.feet) !== "");
} }
const _c3 = function (a1, a2, a3) { return ["../", a1, a2, a3]; };
const _c4 = function (a1, a2) { return { index: 10, id: a1, driveType: a2 }; };
const _c5 = function (a1, a2) { return { index: 20, id: a1, driveType: a2 }; };
const _c6 = function (a1, a2) { return { index: 30, id: a1, driveType: a2 }; };
const _c7 = function (a1, a2) { return { index: 40, id: a1, driveType: a2 }; };
const _c8 = function (a1, a2) { return { index: 50, id: a1, driveType: a2 }; };
const _c9 = function (a1, a2) { return { index: 60, id: a1, driveType: a2 }; };
function BareShaftComponent_div_1_div_22_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "LPS");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "GPH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "KW Abs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_div_1_div_22_tr_20_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const eachTable_r40 = ctx.$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.navigateToProductDetails(eachTable_r40); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachTable_r40 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40 == null ? null : eachTable_r40.pump_speed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[0][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[0][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[0][2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](34, _c3, ctx_r36.parentId, ctx_r36.motorModel, ctx_r36.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](38, _c4, eachTable_r40.id, ctx_r36.driveType != "" ? ctx_r36.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[10][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[10][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[10][2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](41, _c3, ctx_r36.parentId, ctx_r36.motorModel, ctx_r36.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](45, _c5, eachTable_r40.id, ctx_r36.driveType != "" ? ctx_r36.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[20][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[20][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[20][2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](48, _c3, ctx_r36.parentId, ctx_r36.motorModel, ctx_r36.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](52, _c6, eachTable_r40.id, ctx_r36.driveType != "" ? ctx_r36.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[30][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[30][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[30][2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](55, _c3, ctx_r36.parentId, ctx_r36.motorModel, ctx_r36.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](59, _c7, eachTable_r40.id, ctx_r36.driveType != "" ? ctx_r36.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[40][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[40][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[40][2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](62, _c3, ctx_r36.parentId, ctx_r36.motorModel, ctx_r36.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](66, _c8, eachTable_r40.id, ctx_r36.driveType != "" ? ctx_r36.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[50][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[50][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[50][2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](69, _c3, ctx_r36.parentId, ctx_r36.motorModel, ctx_r36.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](73, _c9, eachTable_r40.id, ctx_r36.driveType != "" ? ctx_r36.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[60][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[60][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r40[60][2]);
} }
function BareShaftComponent_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Select the capacity in the below matrix based on the head and speed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pump Speed rpm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Capacity and Power");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Head from All Causes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BareShaftComponent_div_1_div_22_td_19_Template, 4, 2, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BareShaftComponent_div_1_div_22_tr_20_Template, 67, 76, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.motorModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r34.tableHead);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r34.motorData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r34.leftGraphImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r34.rightGraphImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BareShaftComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bare Shaft Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Surface Agri Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Bare Shaft Pumps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_div_1_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r43.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Select Motor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BareShaftComponent_div_1_div_22_Template, 26, 5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r1.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.showMotorDisplay);
} }
function BareShaftComponent_ng_container_2_div_1_a_26_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_2_div_1_a_26_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const eachBtn1_r47 = ctx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r48.showMotor(eachBtn1_r47, 4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachBtn1_r47 = ctx.$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", eachBtn1_r47 === ctx_r46.btn4Active ? "active-bttn" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachBtn1_r47);
} }
const _c10 = function (a1) { return ["/multiPurposePumps/", a1]; };
function BareShaftComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bare Shaft Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Multi Purpose Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bare Shaft Pumps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Select Pump based on Performance Curves ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BareShaftComponent_ng_container_2_div_1_a_26_Template, 2, 2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "4 Pole - 1450 RPM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "maphilight", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "map");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "area", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_2_div_1_Template_area_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r50.showMotor("DCAC012", 4); })("mouseenter", function BareShaftComponent_ng_container_2_div_1_Template_area_mouseenter_32_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.activateBtn("MPBS", $event); })("mouseleave", function BareShaftComponent_ng_container_2_div_1_Template_area_mouseleave_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.deActivateBtn("MPBS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "area", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_2_div_1_Template_area_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.showMotor("DCAC022", 4); })("mouseenter", function BareShaftComponent_ng_container_2_div_1_Template_area_mouseenter_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r55.activateBtn("MPBS", $event); })("mouseleave", function BareShaftComponent_ng_container_2_div_1_Template_area_mouseleave_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.deActivateBtn("MPBS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "area", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_2_div_1_Template_area_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r57.showMotor("DCAC032", 4); })("mouseenter", function BareShaftComponent_ng_container_2_div_1_Template_area_mouseenter_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r58.activateBtn("MPBS", $event); })("mouseleave", function BareShaftComponent_ng_container_2_div_1_Template_area_mouseleave_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r59.deActivateBtn("MPBS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "area", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_2_div_1_Template_area_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r60.showMotor("DCAA041", 4); })("mouseenter", function BareShaftComponent_ng_container_2_div_1_Template_area_mouseenter_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r61.activateBtn("MPBS", $event); })("mouseleave", function BareShaftComponent_ng_container_2_div_1_Template_area_mouseleave_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r62.deActivateBtn("MPBS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "area", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_ng_container_2_div_1_Template_area_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r63.showMotor("DCAA051", 4); })("mouseenter", function BareShaftComponent_ng_container_2_div_1_Template_area_mouseenter_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r64.activateBtn("MPBS", $event); })("mouseleave", function BareShaftComponent_ng_container_2_div_1_Template_area_mouseleave_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r65.deActivateBtn("MPBS"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c10, ctx_r45.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r45.fourPoleButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r45.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r45.graphImgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx_r45.graphImgSrc && ctx_r45.graphImgSrc != "" ? "visible" : "hidden"));
} }
function BareShaftComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BareShaftComponent_ng_container_2_div_1_Template, 37, 9, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.toggleDisplayMultipurpose);
} }
function BareShaftComponent_div_3_div_22_td_19_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachData_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", eachData_r69 == null ? null : eachData_r69.feet, ")");
} }
function BareShaftComponent_div_3_div_22_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BareShaftComponent_div_3_div_22_td_19_span_3_Template, 2, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachData_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", eachData_r69 == null ? null : eachData_r69.head, " m");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachData_r69 == null ? null : eachData_r69.feet) !== "" && (eachData_r69 == null ? null : eachData_r69.feet) !== undefined);
} }
function BareShaftComponent_div_3_div_22_tr_20_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_div_3_div_22_tr_20_td_11_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r83); const eachTable_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r81.navigateToProductDetails(eachTable_r72); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachTable_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[0][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[0][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[0][2]);
} }
function BareShaftComponent_div_3_div_22_tr_20_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachTable_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c3, ctx_r74.parentId, ctx_r74.motorModel, ctx_r74.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c4, eachTable_r72.id, ctx_r74.driveType != "" ? ctx_r74.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[10][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[10][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[10][2]);
} }
function BareShaftComponent_div_3_div_22_tr_20_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachTable_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c3, ctx_r75.parentId, ctx_r75.motorModel, ctx_r75.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c5, eachTable_r72.id, ctx_r75.driveType != "" ? ctx_r75.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[20][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[20][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[20][2]);
} }
function BareShaftComponent_div_3_div_22_tr_20_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachTable_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c3, ctx_r76.parentId, ctx_r76.motorModel, ctx_r76.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c6, eachTable_r72.id, ctx_r76.driveType != "" ? ctx_r76.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[30][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[30][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[30][2]);
} }
function BareShaftComponent_div_3_div_22_tr_20_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachTable_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c3, ctx_r77.parentId, ctx_r77.motorModel, ctx_r77.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c7, eachTable_r72.id, ctx_r77.driveType != "" ? ctx_r77.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[40][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[40][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[40][2]);
} }
function BareShaftComponent_div_3_div_22_tr_20_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachTable_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c3, ctx_r78.parentId, ctx_r78.motorModel, ctx_r78.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c8, eachTable_r72.id, ctx_r78.driveType != "" ? ctx_r78.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[50][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[50][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[50][2]);
} }
function BareShaftComponent_div_3_div_22_tr_20_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachTable_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c3, ctx_r79.parentId, ctx_r79.motorModel, ctx_r79.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c9, eachTable_r72.id, ctx_r79.driveType != "" ? ctx_r79.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[60][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[60][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[60][2]);
} }
const _c11 = function (a1, a2) { return { index: 80, id: a1, driveType: a2 }; };
function BareShaftComponent_div_3_div_22_tr_20_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachTable_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](5, _c3, ctx_r80.parentId, ctx_r80.motorModel, ctx_r80.motorPole))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c11, eachTable_r72.id, ctx_r80.driveType != "" ? ctx_r80.driveType : null));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[80][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[80][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72[80][2]);
} }
function BareShaftComponent_div_3_div_22_tr_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "GPH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "KW Abs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BareShaftComponent_div_3_div_22_tr_20_td_11_Template, 8, 3, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BareShaftComponent_div_3_div_22_tr_20_td_12_Template, 8, 12, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BareShaftComponent_div_3_div_22_tr_20_td_13_Template, 8, 12, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BareShaftComponent_div_3_div_22_tr_20_td_14_Template, 8, 12, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BareShaftComponent_div_3_div_22_tr_20_td_15_Template, 8, 12, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BareShaftComponent_div_3_div_22_tr_20_td_16_Template, 8, 12, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BareShaftComponent_div_3_div_22_tr_20_td_17_Template, 8, 12, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BareShaftComponent_div_3_div_22_tr_20_td_18_Template, 8, 12, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachTable_r72 = ctx.$implicit;
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachTable_r72 == null ? null : eachTable_r72.pump_speed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r68.toggleUnit ? "LPS" : "LPH");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachTable_r72[0] !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachTable_r72[10] !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachTable_r72[20] !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachTable_r72[30] !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachTable_r72[40] !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachTable_r72[50] !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachTable_r72[60] !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", eachTable_r72[80] !== null);
} }
function BareShaftComponent_div_3_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Select the capacity in the below matrix based on the head and speed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Pump Speed rpm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Capacity and Power");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total Head from All Causes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, BareShaftComponent_div_3_div_22_td_19_Template, 4, 2, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, BareShaftComponent_div_3_div_22_tr_20_Template, 19, 10, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r66.motorModel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r66.tableHead);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r66.motorData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r66.leftGraphImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function BareShaftComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bare Shaft Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " / ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Multi Purpose Pumps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Bare Shaft Pumps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BareShaftComponent_div_3_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r93); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r92.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Select Motor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BareShaftComponent_div_3_div_22_Template, 24, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c10, ctx_r3.parentId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showMotorDisplay);
} }
class BareShaftComponent {
    constructor(apiService, activatedRoute, router) {
        this.apiService = apiService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toggleDisplaySurfaceAgri = false; // used to show/hide data according to condition
        this.toggleDisplayMultipurpose = false; // used to show/hide data according to condition
        this.subscribe = []; // used to store subscription
        this.graphImg = [];
        this.graphImgSrc = '';
        this.graphImg1 = [];
        this.graphImgSrc1 = '';
        this.fourPoleButtons = []; // creating new Set
        this.sixPoleButtons = [];
        this.showMotorDisplay = false;
        this.motorData = [];
        this.msg = "";
        this.tableHead = [];
        this.toggleUnit = false;
        this.driveType = '';
        this.config = {
            fade: true,
            // fill
            fill: true,
            fillColor: '#2F80ED',
            fillOpacity: 0.8,
            // stroke
            stroke: false
        };
    }
    ngOnInit() {
        this.btn4Active = '';
        if (this.router.url.includes('surfaceAgriPumps')) {
            this.togglePage = 'surfaceAgriPumps';
            this.toggleUnit = true;
            this.graphImg = ['assets/images/SABS/SABS/AGAA-01B.jpg', 'assets/images/SABS/SABS/AGAA-03A.jpg',
                'assets/images/SABS/SABS/AGAA-03B.jpg', 'assets/images/SABS/SABS/AGAA-05A.jpg', 'assets/images/SABS/SABS/AGAA-05B.jpg',
                'assets/images/SABS/SABS/AGAA-07A.jpg', 'assets/images/SABS/SABS/AGAA-07B.jpg', 'assets/images/SABS/SABS/AGAA-01A.jpg'];
            this.graphImgSrc = 'assets/images/SABS/SABS/AGAA.jpg'; // 4 pole graphImg default value
            this.activatedRoute.queryParams.subscribe(res => {
                if (Object.keys(res).length) {
                    if (res[`model`]) {
                        this.showMotor(res[`model`], 4);
                    }
                    else {
                        this.driveType = res[`driveType`];
                        this.showMotor(res[`search`], 4);
                    }
                }
            });
        }
        else if (this.router.url.includes('multiPurposePumps')) {
            this.togglePage = 'multiPurposePumps';
            this.graphImg = ['assets/images/MpGraph/Frame22.png', 'assets/images/MpGraph/Frame23.png',
                'assets/images/MpGraph/Frame26.png', 'assets/images/MpGraph/Frame25.png', 'assets/images/MpGraph/Frame24.png'];
            this.graphImgSrc = 'assets/images/MpGraph/Frame21.png'; // 4 pole graphImg default value
            this.activatedRoute.queryParams.subscribe(res => {
                if (Object.keys(res).length) {
                    if (res[`model`]) {
                        this.showMotor(res[`model`], 4);
                    }
                    else {
                        this.driveType = res[`driveType`];
                        this.showMotor(res[`search`], 4);
                    }
                }
            });
        }
        this.subscribe.push(this.activatedRoute.params.subscribe(res => {
            if (res) {
                this.parentId = res === null || res === void 0 ? void 0 : res.parentId;
                // console.log('par444', res)
                this.getProductDetails(res.id, res.parentId);
            }
        }));
    }
    activateBtn(pumpType, event) {
        if (pumpType === 'MPBS') {
            this.btn4Active = event.target.title;
        }
        else if (pumpType === 'SABS') {
            this.btn4Active = event.target.title;
        }
    }
    deActivateBtn(pumpType) {
        if (pumpType === 'MPBS') {
            this.btn4Active = '';
        }
        else if (pumpType === 'SABS') {
            this.btn4Active = '';
        }
    }
    getProductDetails(productId, parentId) {
        this.subscribe.push(this.apiService.productsByCategory(productId, parentId).subscribe(res => {
            if (res[`code`] === 200) {
                const products = res[`products`];
                products.forEach(element => {
                    if (element.pole === '4') {
                        this.fourPoleButtons.push(element.code);
                    }
                    else if (element.pole === '6') {
                        this.sixPoleButtons.push(element.code);
                    }
                });
                this.fourPoleButtons.sort((a, b) => +a.substring(4, 7) - (+b.substring(4, 7)));
            }
        }));
    }
    // mouseenter function to change image according motorModel of 4 or 6 poles
    changeGraphImg(index, motorModel) {
        // console.log(motorModel, 'model');
        if (index === 1) {
            this.btn4Active = motorModel; // assign 4pole buttons if index is 1
        }
        else if (index === 2) {
            this.btn6Active = motorModel; // assign 6pole motorModel if index is 2
        }
        else if (index === 3) {
            this.btn4Active = motorModel; // assign 6pole motorModel if index is 2
        }
        // switching graphImg according to index and motorModel
        if (index === 1) {
            switch (motorModel) {
                case 'AGAA01B':
                    this.graphImgSrc = this.graphImg[0];
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA01B/CapacityLitrespersec-Page13.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA01B/AbsorbedPowerkW-Page13.png';
                    break;
                case 'AGAA03A':
                    this.graphImgSrc = this.graphImg[1];
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA03A/CapacityLitrespersec-Page14.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA03A/AbsorbedPowerkW-Page14.png';
                    break;
                case 'AGAA03B':
                    this.graphImgSrc = this.graphImg[2];
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA03B/CapacityLitrespersec-Page15.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA03B/AbsorbedPowerkW-Page15.png';
                    break;
                case 'AGAA05A':
                    this.graphImgSrc = this.graphImg[3];
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA05A/CapacityLitrespersec-Page16.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA05A/AbsorbedPowerkW-Page16.png';
                    break;
                case 'AGAA05B':
                    this.graphImgSrc = this.graphImg[4];
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA05B/CapacityLitrespersec-Page17.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA05B/AbsorbedPowerkW-Page17.png';
                    break;
                case 'AGAA07A':
                    this.graphImgSrc = this.graphImg[5];
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA07A/CapacityLitrespersec-Page18.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA07A/AbsorbedPowerkW-Page18.png';
                    break;
                case 'AGAA07B':
                    this.graphImgSrc = this.graphImg[6];
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA07B/CapacityLitrespersec-Page19.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA07B/AbsorbedPowerkW-Page19.png';
                    break;
                case 'AGAA01A':
                    this.graphImgSrc = this.graphImg[7];
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA01A/CapacityLitrespersec-Page12.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA01A/AbsorbedPowerkW-Page12.png';
                    break;
                default:
                    this.graphImgSrc = this.graphImg[0];
            }
        }
        else if (index === 2) {
            switch (motorModel) {
                case 'AGAA01B':
                    this.graphImgSrc1 = this.graphImg1[0];
                    break;
                case 'AGAA03A':
                    this.graphImgSrc1 = this.graphImg1[1];
                    break;
                case 'AGAA03B':
                    this.graphImgSrc1 = this.graphImg1[2];
                    break;
                case 'AGAA05A':
                    this.graphImgSrc1 = this.graphImg1[3];
                    break;
                case 'AGAA05B':
                    this.graphImgSrc1 = this.graphImg1[4];
                    break;
                case 'AGAA07A':
                    this.graphImgSrc1 = this.graphImg1[5];
                    break;
                case 'AGAA07B':
                    this.graphImgSrc1 = this.graphImg1[6];
                    break;
                case 'AGAA01A':
                    this.graphImgSrc1 = this.graphImg1[7];
                    break;
                default:
                    this.graphImgSrc1 = this.graphImg1[0];
            }
        }
        if (index === 3) {
            switch (motorModel) {
                case 'DCAA041':
                    this.graphImgSrc = this.graphImg[1];
                    break;
                case 'DCAA051':
                    this.graphImgSrc = this.graphImg[0];
                    break;
                case 'DCAC012':
                    this.graphImgSrc = this.graphImg[2];
                    break;
                case 'DCAC022':
                    this.graphImgSrc = this.graphImg[3];
                    break;
                case 'DCAC032':
                    this.graphImgSrc = this.graphImg[4];
                    break;
                default:
                    this.graphImgSrc = this.graphImg[0];
            }
        }
    }
    // mouseleave function to closeGraph Image according to index
    closeGraphImg(index) {
        if (index === 1) {
            this.btn4Active = '';
            this.graphImgSrc = 'assets/images/SABS/AGAA.jpg';
        }
        else if (index === 2) {
            this.btn6Active = '';
            this.graphImgSrc1 = 'assets/images/SABS/AGAA.jpg';
        }
        else if (index === 3) {
            this.btn4Active = '';
            this.graphImgSrc = 'assets/images/MpGraph/Frame21.png';
        }
    }
    getIndex(eachTable) {
        // console.log(eachTable, 'table')
    }
    navigateToProductDetails(eachData) {
        const speedData = eachData.pump_speed.split(" - ");
        const pole = speedData[1].substring(0, 1);
        this.router.navigate(['../', this.parentId, this.motorModel, pole], { relativeTo: this.activatedRoute, queryParams: { index: 0, id: eachData.id, driveType: this.driveType != '' ? this.driveType : null } });
    }
    // function to show motorDetails.
    showMotor(motorType, motorPole) {
        this.motorModel = motorType;
        this.motorPole = motorPole;
        this.getTableData(motorType);
        if (this.router.url.includes('surfaceAgriPumps')) {
            this.toggleDisplaySurfaceAgri = true;
            this.showMotorDisplay = true;
            switch (motorType) {
                case 'AGAA01B':
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA01B/CapacityLitrespersec-Page13copy.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA01B/AbsorbedPowerkW-Page13copy.png';
                    break;
                case 'AGAA03A':
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA03A/CapacityLitrespersec-Page14copy.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA03A/AbsorbedPowerkW-Page14copy.png';
                    break;
                case 'AGAA03B':
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA03B/CapacityLitrespersec-Page15copy.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA03B/AbsorbedPowerkW-Page15copy.png';
                    break;
                case 'AGAA05A':
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA05A/CapacityLitrespersec-Page16copy.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA05A/AbsorbedPowerkW-Page16copy.png';
                    break;
                case 'AGAA05B':
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA05B/CapacityLitrespersec-Page17copy.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA05B/AbsorbedPowerkW-Page17copy.png';
                    break;
                case 'AGAA07A':
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA07A/CapacityLitrespersec-Page18copy.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA07A/AbsorbedPowerkW-Page18copy.png';
                    break;
                case 'AGAA07B':
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA07B/CapacityLitrespersec-Page19copy.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA07B/AbsorbedPowerkW-Page19copy.png';
                    break;
                case 'AGAA01A':
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA01A/CapacityLitrespersecPage12copy.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA01A/AbsorbedPowerWPage12copy.png';
                    break;
                default:
                    this.leftGraphImg = 'assets/images/GraphBs/AGAA01A/CapacityLitrespersec-Page12copy.png';
                    this.rightGraphImg = 'assets/images/GraphBs/AGAA01A/AbsorbedPowerkW-Page12copy.png';
            }
        }
        else if (this.router.url.includes('multiPurposePumps')) {
            this.toggleDisplayMultipurpose = true;
            this.showMotorDisplay = true;
            switch (motorType) {
                case 'DCAC051':
                    this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC051.jpg';
                    break;
                case 'DCAC041':
                    this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC041.jpg';
                    break;
                case 'DCCC012':
                    this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC012.jpg';
                    break;
                case 'DCCC022':
                    this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC022.jpg';
                    break;
                case 'DCCC032':
                    this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC032.jpg';
                    break;
                default:
                    this.leftGraphImg = 'assets/images/Multipurpose_PC_New/MultipuproseCC/DC012.jpg';
            }
        }
    }
    getTableData(motorType) {
        this.apiService.tableList(motorType).subscribe(res => {
            if (res[`code`] === 200) {
                this.motorData = res[`bareshaft`];
                this.tableHead = [];
                if (this.motorData.length > 0) {
                    this.motorData.forEach(eachMotor => {
                        var _a, _b, _c, _d, _e, _f, _g, _h;
                        if (((_a = eachMotor['0']) === null || _a === void 0 ? void 0 : _a.length) || eachMotor['0'] !== null) {
                            eachMotor['0'] = eachMotor['0'].split(',');
                        }
                        if (((_b = eachMotor['10']) === null || _b === void 0 ? void 0 : _b.length) || eachMotor['10'] !== null) {
                            eachMotor['10'] = eachMotor['10'].split(',');
                        }
                        if (((_c = eachMotor['20']) === null || _c === void 0 ? void 0 : _c.length) || eachMotor['20'] !== null) {
                            eachMotor['20'] = eachMotor['20'].split(',');
                        }
                        if (((_d = eachMotor['30']) === null || _d === void 0 ? void 0 : _d.length) || eachMotor['30'] !== null) {
                            eachMotor['30'] = eachMotor['30'].split(',');
                        }
                        if (((_e = eachMotor['40']) === null || _e === void 0 ? void 0 : _e.length) || eachMotor['40'] !== null) {
                            eachMotor['40'] = eachMotor['40'].split(',');
                        }
                        if (((_f = eachMotor['50']) === null || _f === void 0 ? void 0 : _f.length) || eachMotor['50'] !== null) {
                            eachMotor['50'] = eachMotor['50'].split(',');
                        }
                        if (((_g = eachMotor['60']) === null || _g === void 0 ? void 0 : _g.length) || eachMotor['60'] !== null) {
                            eachMotor['60'] = eachMotor['60'].split(',');
                        }
                        if (((_h = eachMotor['80']) === null || _h === void 0 ? void 0 : _h.length) || eachMotor['80'] !== null) {
                            eachMotor['80'] = eachMotor['80'].split(',');
                        }
                    });
                    for (const [key, value] of Object.entries(this.motorData[0])) {
                        if (key === '0' && value !== null && (value.length > 2 || value.length <= 3)) {
                            if (this.router.url.includes('surfaceAgriPumps')) {
                                this.tableHead.push({ head: +key, feet: '0 ft' });
                            }
                            else {
                                this.tableHead.push({ head: +key, feet: '' });
                            }
                        }
                        if (key === '10' && value !== null && (value.length > 3 || value.length > 2)) {
                            this.feet = value[3];
                            if (this.feet === '35 ft' || this.feet === undefined) {
                                this.tableHead.push({ head: +key, feet: value[3] });
                            }
                            else {
                                this.tableHead.push({ head: +key * 2, feet: value[3] });
                            }
                        }
                        if (key === '20' && value !== null && (value.length > 3 || value.length > 2)) {
                            this.feet = value[3];
                            if (this.feet === '35 ft' || this.feet === undefined) {
                                this.tableHead.push({ head: +key, feet: value[3] });
                            }
                            else {
                                this.tableHead.push({ head: +key * 2, feet: value[3] });
                            }
                        }
                        if (key === '30' && value !== null && (value.length > 3 || value.length > 2)) {
                            this.feet = value[3];
                            if (this.feet === '35 ft' || this.feet === undefined) {
                                this.tableHead.push({ head: +key, feet: value[3] });
                            }
                            else {
                                this.tableHead.push({ head: +key * 2, feet: value[3] });
                            }
                        }
                        if (key === '40' && value !== null && (value.length > 3 || value.length > 2)) {
                            this.feet = value[3];
                            if (this.feet === '35 ft' || this.feet === undefined) {
                                this.tableHead.push({ head: +key, feet: value[3] });
                            }
                            else {
                                this.tableHead.push({ head: +key * 2, feet: value[3] });
                            }
                        }
                        if (key === '50' && value !== null && (value.length > 3 || value.length > 2)) {
                            this.feet = value[3];
                            if (this.feet === '35 ft' || this.feet === undefined) {
                                this.tableHead.push({ head: +key, feet: value[3] });
                            }
                            else {
                                this.tableHead.push({ head: +key * 2, feet: value[3] });
                            }
                        }
                        if (key === '60' && value !== null && (value.length > 3 || value.length > 2)) {
                            this.feet = value[3];
                            if (this.feet === '35 ft' || this.feet === undefined) {
                                this.tableHead.push({ head: +key, feet: value[3] });
                            }
                            else {
                                this.tableHead.push({ head: +key * 2, feet: value[3] });
                            }
                        }
                        if (key === '80' && value !== null && (value.length > 3 || value.length > 2)) {
                            this.feet = value[3];
                            if (this.feet === '35 ft' || this.feet === undefined) {
                                this.tableHead.push({ head: +key, feet: value[3] });
                            }
                            else {
                                this.tableHead.push({ head: +key * 2, feet: value[3] });
                            }
                        }
                    }
                }
                else {
                    this.msg = 'No data found';
                }
            }
        });
    }
    // function to hide motorDetails
    goBack() {
        if (this.router.url.includes('multiPurposePumps')) {
            this.btn4Active = '';
            this.toggleDisplayMultipurpose = false;
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
        else {
            this.btn4Active = '';
            this.toggleDisplaySurfaceAgri = false;
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }
    // unsubscribing the subscription
    ngOnDestroy() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscribe.forEach(sub => {
            if (sub) {
                sub.unsubscribe();
            }
        });
    }
}
BareShaftComponent.ɵfac = function BareShaftComponent_Factory(t) { return new (t || BareShaftComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BareShaftComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BareShaftComponent, selectors: [["app-bare-shaft"]], decls: 4, vars: 4, consts: [[4, "ngIf"], ["class", "main-container surface-page", 4, "ngIf"], [1, "main-container", "surface-page"], [1, "full-banner"], ["src", "assets/images/banner/top-banner-small.jpg"], [1, "container"], [1, "breadcrum"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "pumpHeading"], [1, "fas", "fa-hand-point-left"], [1, "performance-curve", "multi-box-curve"], [1, "performance-box-outer"], [1, "performance-box"], [1, "performance-buttons"], ["href", "javascript:void(0)", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "poleType"], ["id", "imageMap4", 3, "config"], [1, "mapper", 3, "src", "ngStyle"], ["title", "AGAA01A", "coords", "55,312,246,319,246,354,56,354", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["title", "AGAA01B", "coords", "54,307,439,323,439,354,247,354,245,320,55,313,55,305", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["title", "AGAA03A", "coords", "55,287,248,298,247,315,55,306", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["title", "AGAA03B", "coords", "55,284,439,295,439,322,247,315,247,298,55,287", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["title", "AGAA05A", "coords", "55,241,56,283,246,290,246,249", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["title", "AGAA05B", "coords", "54,239,439,245,439,294,246,289,245,249,54,241", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["title", "AGAA07A", "coords", "56,117,248,150,248,241,56,238", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["title", "AGAA07B", "coords", "55,115,244,136,439,151,439,244,248,243,247,151,55,117", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["href", "javascript:void(0)", 3, "ngClass", "click"], ["href", "javascript:void(0)", 3, "click"], ["src", "assets/images/icons/back.svg"], ["class", "performance-curve cleanBg", "id", "tableData", 4, "ngIf"], ["id", "tableData", 1, "performance-curve", "cleanBg"], [1, "table-head"], [2, "font-size", "18px"], ["rowspan", "2", 1, "head"], ["colspan", "8", 1, "head"], [4, "ngFor", "ngForOf"], [1, "tablegraphImg"], ["alt", "", 3, "src"], [1, "table-hover"], ["href", "javascript:void(0)", 3, "routerLink", "queryParams"], ["src", "assets/images/banner/top-banner.jpg"], ["href", "javascript:void(0)", "routerLink", "/home"], ["id", "imageMap5", 3, "config"], ["title", "DCAC012", "coords", "86,338,87,362,467,362,467,342", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["title", "DCAC022", "coords", "85,322,467,329,467,342,85,338", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["title", "DCAC032", "coords", "85,296,86,322,339,327,339,322", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["title", "DCAA041", "coords", "85,201,86,297,276,315,277,237", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["title", "DCAA051", "coords", "86,77,86,201,275,237,275,136", "shape", "poly", 2, "cursor", "pointer", 3, "click", "mouseenter", "mouseleave"], ["class", "table-hover", 4, "ngIf"]], template: function BareShaftComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BareShaftComponent_ng_container_0_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BareShaftComponent_div_1_Template, 23, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BareShaftComponent_ng_container_2_Template, 2, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BareShaftComponent_div_3_Template, 23, 6, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.togglePage === "surfaceAgriPumps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDisplaySurfaceAgri);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.togglePage === "multiPurposePumps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.toggleDisplayMultipurpose);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ng_maphilight__WEBPACK_IMPORTED_MODULE_4__["MaphilightComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["#tableData[_ngcontent-%COMP%]::before{\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYmFyZS1zaGFmdC9iYXJlLXNoYWZ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9iYXJlLXNoYWZ0L2JhcmUtc2hhZnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0YWJsZURhdGE6OmJlZm9yZXtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BareShaftComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bare-shaft',
                templateUrl: './bare-shaft.component.html',
                styleUrls: ['./bare-shaft.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zZDJ":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/footerContents/privacy-policy/privacy-policy.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PrivacyPolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function() { return PrivacyPolicyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../banner/banner.component */ "FvYy");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function PrivacyPolicyComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r0.pageContent[0] == null ? null : ctx_r0.pageContent[0].content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PrivacyPolicyComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Data Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PrivacyPolicyComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.pageContent = [];
        this.footerPages = [];
    }
    ngOnInit() {
        this.apiService.footerContents().subscribe(res => {
            if (res[`code`] === 200) {
                this.footerPages = res[`pages`];
                this.getFooterData('Privacy Policy');
            }
        });
    }
    getFooterData(page) {
        if (this.footerPages.length) {
            this.pageContent = this.footerPages.filter(data => data.type === page);
        }
        else {
            this.pageContent = this.pageContent;
        }
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"])); };
PrivacyPolicyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["app-privacy-policy"]], decls: 12, vars: 2, consts: [[1, "main-container", "about-page"], [1, "roto-retro"], [1, "container"], [1, "card"], [1, "dummy-pic"], [1, "card-title"], [2, "text-align", "center"], ["class", "about-content", 3, "innerHtml", 4, "ngIf", "ngIfElse"], ["error", ""], [1, "about-content", 3, "innerHtml"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PrivacyPolicyComponent_div_9_Template, 1, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PrivacyPolicyComponent_ng_template_10_Template, 2, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pageContent.length)("ngIfElse", _r1);
    } }, directives: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXJDb250ZW50cy9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyPolicyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-privacy-policy',
                templateUrl: './privacy-policy.component.html',
                styleUrls: ['./privacy-policy.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map