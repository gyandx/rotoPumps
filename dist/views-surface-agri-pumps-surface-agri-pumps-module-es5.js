(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-surface-agri-pumps-surface-agri-pumps-module"], {
    /***/
    "JwTL":
    /*!*********************************************************************************!*\
      !*** ./src/app/views/surface-agri-pumps/surface-agri/surface-agri.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: SurfaceAgriComponent */

    /***/
    function JwTL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SurfaceAgriComponent", function () {
        return SurfaceAgriComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function SurfaceAgriComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SurfaceAgriComponent_div_15_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var eachSubCategory_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.routeToPage(eachSubCategory_r1 == null ? null : eachSubCategory_r1.title, eachSubCategory_r1 == null ? null : eachSubCategory_r1.id, eachSubCategory_r1 == null ? null : eachSubCategory_r1.category_id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eachSubCategory_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, eachSubCategory_r1 == null ? null : eachSubCategory_r1.title));
        }
      }

      var _c0 = function _c0() {
        return ["/home"];
      };

      var SurfaceAgriComponent = /*#__PURE__*/function () {
        function SurfaceAgriComponent(activatedRoute, route, apiService) {
          _classCallCheck(this, SurfaceAgriComponent);

          this.activatedRoute = activatedRoute;
          this.route = route;
          this.apiService = apiService;
          this.subCategories = new Array(); // assigning subCategories array of SubProductCategories type

          this.subscription = []; // used to store subscription
        }

        _createClass(SurfaceAgriComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            // getting productId from routerParams
            this.subscription.push(this.activatedRoute.params.subscribe(function (res) {
              if (res) {
                _this.productId = res.id;

                _this.getProductDetails(_this.productId);
              }
            }));
          } // function to getProduct details subCategories

        }, {
          key: "getProductDetails",
          value: function getProductDetails(productId) {
            var _this2 = this;

            this.subscription.push(this.apiService.subCategory(productId).subscribe(function (res) {
              if (res["code"] === 200) {
                _this2.subCategories = res["categories"]; // assigning subCategories from subCategory api
              }
            }));
          } // function to change route according to categoryTitle

        }, {
          key: "routeToPage",
          value: function routeToPage(categoryTitle, categoryId, parentId) {
            if (categoryTitle === 'Close Coupled pump') {
              this.route.navigate(['./closedCouplePump', categoryId, parentId], {
                relativeTo: this.activatedRoute
              });
            } else if (categoryTitle === 'Bare Shaft Pump') {
              this.route.navigate(['./bareShaftPump', categoryId, parentId], {
                relativeTo: this.activatedRoute
              });
            }
          } // used to unsubscribe subscription

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Called once, before the instance is destroyed.
            // Add 'implements OnDestroy' to the class.
            this.subscription.forEach(function (sub) {
              if (sub) {
                sub.unsubscribe();
              }
            });
          }
        }]);

        return SurfaceAgriComponent;
      }();

      SurfaceAgriComponent.ɵfac = function SurfaceAgriComponent_Factory(t) {
        return new (t || SurfaceAgriComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
      };

      SurfaceAgriComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SurfaceAgriComponent,
        selectors: [["app-surface-agri"]],
        decls: 69,
        vars: 3,
        consts: [[1, "main-container", "surface-page"], [1, "container"], [1, "breadcrum"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "pumps-sel-sec"], [1, "pumps-sel"], [1, "pumps-sec"], ["class", "pumps-sec", 4, "ngFor", "ngForOf"], [1, "surface-banner-sec"], [1, "surface-banner-inner"], [1, "section-1"], ["src", "assets/images/banner/surface-banner.png"], [1, "surface-feature"], [1, "surface-feature-lists"], [1, "section-2"], [1, "surface-banner-content"], [1, "content-box"], [2, "margin", "8px"], ["href", "https://rotopumps.com.au/products/progressive-cavity-pumps/tirrana-agricultural-pump-new/", "target", "blank"], [1, "fas", "fa-hand-point-left", 2, "position", "absolute", "margin-top", "-3px"], ["href", "javascript:void(0)", 2, "text-decoration", "none", 3, "click"]],
        template: function SurfaceAgriComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Surface Agri Pumps ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select a preferred pump type to start:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SurfaceAgriComponent_div_15_Template, 4, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Features:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Low NPSHR, ensure excellent suction lift capability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Reversible, providing flexibility in operation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Minimal variation in flow rates with changes in head");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Non Clogging, can handle high percentage of solids in suspension ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Rotor-Stator");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Improved rotor-stator geometry minimises wear due to lower rubbing velocities ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "CARDAN UNIVERSAL JOINT");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Facilities smoother transmission of angular loads. Ensures compact pump ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Bearing Housing");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Robust bearing housing designed to take axial loads. Facilities easy coupling to various drive options. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Unique Split Stub Shaft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Use of standard IEC frame motor facilities easy replacement of motor. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "You can visit the site for more information:- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Surface Agri Pumps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "i", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.subCategories);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["TitleCasePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N1cmZhY2UtYWdyaS1wdW1wcy9zdXJmYWNlLWFncmkvc3VyZmFjZS1hZ3JpLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurfaceAgriComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-surface-agri',
            templateUrl: './surface-agri.component.html',
            styleUrls: ['./surface-agri.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "UoeR":
    /*!*********************************************************************************!*\
      !*** ./src/app/views/surface-agri-pumps/main-section/main-section.component.ts ***!
      \*********************************************************************************/

    /*! exports provided: MainSectionComponent */

    /***/
    function UoeR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainSectionComponent", function () {
        return MainSectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var MainSectionComponent = /*#__PURE__*/function () {
        function MainSectionComponent() {
          _classCallCheck(this, MainSectionComponent);
        }

        _createClass(MainSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainSectionComponent;
      }();

      MainSectionComponent.ɵfac = function MainSectionComponent_Factory(t) {
        return new (t || MainSectionComponent)();
      };

      MainSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainSectionComponent,
        selectors: [["app-main-section"]],
        decls: 1,
        vars: 0,
        template: function MainSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3N1cmZhY2UtYWdyaS1wdW1wcy9tYWluLXNlY3Rpb24vbWFpbi1zZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainSectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main-section',
            templateUrl: './main-section.component.html',
            styleUrls: ['./main-section.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "cVbr":
    /*!*********************************************************************!*\
      !*** ./src/app/views/surface-agri-pumps/surface-routing.modules.ts ***!
      \*********************************************************************/

    /*! exports provided: SurfaceRoutingModule */

    /***/
    function cVbr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SurfaceRoutingModule", function () {
        return SurfaceRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-lightbox */
      "m3o8");
      /* harmony import */


      var ngx_lightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _bare_shaft_bare_shaft_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../bare-shaft/bare-shaft.component */
      "xJzR");
      /* harmony import */


      var _closed_couple_closed_couple_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../closed-couple/closed-couple.component */
      "cswZ");
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../product-details/product-details.component */
      "N3nS");
      /* harmony import */


      var _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./main-section/main-section.component */
      "UoeR");
      /* harmony import */


      var _surface_agri_surface_agri_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./surface-agri/surface-agri.component */
      "JwTL");

      var routes = [{
        path: '',
        component: _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_6__["MainSectionComponent"],
        children: [{
          path: '',
          component: _surface_agri_surface_agri_component__WEBPACK_IMPORTED_MODULE_7__["SurfaceAgriComponent"]
        }, {
          path: 'closedCouplePump/:id/:parentId',
          component: _closed_couple_closed_couple_component__WEBPACK_IMPORTED_MODULE_4__["ClosedCoupleComponent"]
        }, {
          path: 'closedCouplePump/:id/:parentId/:model/:type',
          component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]
        }, {
          path: 'bareShaftPump/:id/:parentId',
          component: _bare_shaft_bare_shaft_component__WEBPACK_IMPORTED_MODULE_3__["BareShaftComponent"]
        }, {
          path: 'bareShaftPump/:id/:parentId/:model/:type',
          component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]
        }]
      }];

      var SurfaceRoutingModule = function SurfaceRoutingModule() {
        _classCallCheck(this, SurfaceRoutingModule);
      };

      SurfaceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SurfaceRoutingModule
      });
      SurfaceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SurfaceRoutingModule_Factory(t) {
          return new (t || SurfaceRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["LightboxModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SurfaceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["LightboxModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurfaceRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), ngx_lightbox__WEBPACK_IMPORTED_MODULE_2__["LightboxModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "uGD2":
    /*!***********************************************************************!*\
      !*** ./src/app/views/surface-agri-pumps/surface-agri-pumps.module.ts ***!
      \***********************************************************************/

    /*! exports provided: SurfaceAgriPumpsModule */

    /***/
    function uGD2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SurfaceAgriPumpsModule", function () {
        return SurfaceAgriPumpsModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main-section/main-section.component */
      "UoeR");
      /* harmony import */


      var _surface_agri_surface_agri_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./surface-agri/surface-agri.component */
      "JwTL");
      /* harmony import */


      var ng_maphilight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-maphilight */
      "0VB4");
      /* harmony import */


      var _surface_routing_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./surface-routing.modules */
      "cVbr");

      var SurfaceAgriPumpsModule = function SurfaceAgriPumpsModule() {
        _classCallCheck(this, SurfaceAgriPumpsModule);
      };

      SurfaceAgriPumpsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SurfaceAgriPumpsModule
      });
      SurfaceAgriPumpsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SurfaceAgriPumpsModule_Factory(t) {
          return new (t || SurfaceAgriPumpsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_maphilight__WEBPACK_IMPORTED_MODULE_4__["MaphilightModule"], _surface_routing_modules__WEBPACK_IMPORTED_MODULE_5__["SurfaceRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SurfaceAgriPumpsModule, {
          declarations: [_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_2__["MainSectionComponent"], _surface_agri_surface_agri_component__WEBPACK_IMPORTED_MODULE_3__["SurfaceAgriComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_maphilight__WEBPACK_IMPORTED_MODULE_4__["MaphilightModule"], _surface_routing_modules__WEBPACK_IMPORTED_MODULE_5__["SurfaceRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurfaceAgriPumpsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_2__["MainSectionComponent"], _surface_agri_surface_agri_component__WEBPACK_IMPORTED_MODULE_3__["SurfaceAgriComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_maphilight__WEBPACK_IMPORTED_MODULE_4__["MaphilightModule"], _surface_routing_modules__WEBPACK_IMPORTED_MODULE_5__["SurfaceRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=views-surface-agri-pumps-surface-agri-pumps-module-es5.js.map