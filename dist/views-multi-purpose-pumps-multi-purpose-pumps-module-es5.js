(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-multi-purpose-pumps-multi-purpose-pumps-module"], {
    /***/
    "5lkt":
    /*!***************************************************************************!*\
      !*** ./src/app/views/multi-purpose-pumps/mutliPurpose-routing.modules.ts ***!
      \***************************************************************************/

    /*! exports provided: MultiPurposeRoutingModule */

    /***/
    function lkt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiPurposeRoutingModule", function () {
        return MultiPurposeRoutingModule;
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


      var _bare_shaft_bare_shaft_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../bare-shaft/bare-shaft.component */
      "xJzR");
      /* harmony import */


      var _closed_couple_closed_couple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../closed-couple/closed-couple.component */
      "cswZ");
      /* harmony import */


      var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../product-details/product-details.component */
      "N3nS");
      /* harmony import */


      var _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./main-section/main-section.component */
      "Pekl");
      /* harmony import */


      var _multi_purpose_multi_purpose_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./multi-purpose/multi-purpose.component */
      "sVH2");

      var routes = [{
        path: '',
        component: _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_5__["MainSectionComponent"],
        children: [{
          path: '',
          component: _multi_purpose_multi_purpose_component__WEBPACK_IMPORTED_MODULE_6__["MultiPurposeComponent"]
        }, {
          path: 'closedCouplePump/:id/:parentId',
          component: _closed_couple_closed_couple_component__WEBPACK_IMPORTED_MODULE_3__["ClosedCoupleComponent"]
        }, {
          path: 'closedCouplePump/:id/:parentId/:model/:type',
          component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"]
        }, {
          path: 'bareShaftPump/:id/:parentId',
          component: _bare_shaft_bare_shaft_component__WEBPACK_IMPORTED_MODULE_2__["BareShaftComponent"]
        }, {
          path: 'bareShaftPump/:id/:parentId/:model/:type',
          component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"]
        }]
      }];

      var MultiPurposeRoutingModule = function MultiPurposeRoutingModule() {
        _classCallCheck(this, MultiPurposeRoutingModule);
      };

      MultiPurposeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MultiPurposeRoutingModule
      });
      MultiPurposeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MultiPurposeRoutingModule_Factory(t) {
          return new (t || MultiPurposeRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultiPurposeRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiPurposeRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Pekl":
    /*!**********************************************************************************!*\
      !*** ./src/app/views/multi-purpose-pumps/main-section/main-section.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: MainSectionComponent */

    /***/
    function Pekl(module, __webpack_exports__, __webpack_require__) {
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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL211bHRpLXB1cnBvc2UtcHVtcHMvbWFpbi1zZWN0aW9uL21haW4tc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
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
    "sVH2":
    /*!************************************************************************************!*\
      !*** ./src/app/views/multi-purpose-pumps/multi-purpose/multi-purpose.component.ts ***!
      \************************************************************************************/

    /*! exports provided: MultiPurposeComponent */

    /***/
    function sVH2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiPurposeComponent", function () {
        return MultiPurposeComponent;
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

      function MultiPurposeComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiPurposeComponent_div_15_Template_a_click_1_listener() {
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

      var MultiPurposeComponent = /*#__PURE__*/function () {
        function MultiPurposeComponent(activatedRoute, route, apiService) {
          _classCallCheck(this, MultiPurposeComponent);

          this.activatedRoute = activatedRoute;
          this.route = route;
          this.apiService = apiService;
          this.subCategories = new Array(); // assigning subCategories array of SubProductCategories type

          this.subscription = []; // used to store subscription
        }

        _createClass(MultiPurposeComponent, [{
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
            if (categoryTitle === 'Closed Couple Pump') {
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

        return MultiPurposeComponent;
      }();

      MultiPurposeComponent.ɵfac = function MultiPurposeComponent_Factory(t) {
        return new (t || MultiPurposeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
      };

      MultiPurposeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MultiPurposeComponent,
        selectors: [["app-multi-purpose"]],
        decls: 46,
        vars: 3,
        consts: [[1, "main-container", "surface-page"], [1, "container"], [1, "breadcrum"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "pumps-sel-sec"], [1, "pumps-sel"], [1, "pumps-sec"], ["class", "pumps-sec", 4, "ngFor", "ngForOf"], [1, "surface-banner-sec"], [1, "surface-banner-inner"], [1, "row"], [1, "col-md-6", "section-1"], ["src", "assets/images/card-images/multi-pump.png"], [1, "col-md-6", "multi-feature-sec"], [2, "margin", "8px"], ["href", "https://rotopumps.com.au/tirrana-general-pump", "target", "blank"], [1, "fas", "fa-hand-point-left", 2, "position", "absolute", "margin-top", "-3px"], ["href", "javascript:void(0)", 2, "text-decoration", "none", 3, "click"]],
        template: function MultiPurposeComponent_Template(rf, ctx) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Multi Purpose Pumps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select a preferred pump type to start:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MultiPurposeComponent_div_15_Template, 4, 3, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Features");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pressure upto 6m*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Low shear and linear flow");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Excellent suction lift capabilities");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Can handle liquid with fine solids");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Can handle liquid with varying viscosity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Flow is directly porpotional to the speed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Minimum impact on efficiencies with varying heads");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "You can visit the site for more information:- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Multipurpose Pumps");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 16);

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
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL211bHRpLXB1cnBvc2UtcHVtcHMvbXVsdGktcHVycG9zZS9tdWx0aS1wdXJwb3NlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiPurposeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-multi-purpose',
            templateUrl: './multi-purpose.component.html',
            styleUrls: ['./multi-purpose.component.css']
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
    "x1qI":
    /*!*************************************************************************!*\
      !*** ./src/app/views/multi-purpose-pumps/multi-purpose-pumps.module.ts ***!
      \*************************************************************************/

    /*! exports provided: MultiPurposePumpsModule */

    /***/
    function x1qI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiPurposePumpsModule", function () {
        return MultiPurposePumpsModule;
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


      var ng_maphilight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-maphilight */
      "0VB4");
      /* harmony import */


      var _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main-section/main-section.component */
      "Pekl");
      /* harmony import */


      var _multi_purpose_multi_purpose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./multi-purpose/multi-purpose.component */
      "sVH2");
      /* harmony import */


      var _mutliPurpose_routing_modules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mutliPurpose-routing.modules */
      "5lkt");

      var MultiPurposePumpsModule = function MultiPurposePumpsModule() {
        _classCallCheck(this, MultiPurposePumpsModule);
      };

      MultiPurposePumpsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MultiPurposePumpsModule
      });
      MultiPurposePumpsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MultiPurposePumpsModule_Factory(t) {
          return new (t || MultiPurposePumpsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_maphilight__WEBPACK_IMPORTED_MODULE_2__["MaphilightModule"], _mutliPurpose_routing_modules__WEBPACK_IMPORTED_MODULE_5__["MultiPurposeRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MultiPurposePumpsModule, {
          declarations: [_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_3__["MainSectionComponent"], _multi_purpose_multi_purpose_component__WEBPACK_IMPORTED_MODULE_4__["MultiPurposeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_maphilight__WEBPACK_IMPORTED_MODULE_2__["MaphilightModule"], _mutliPurpose_routing_modules__WEBPACK_IMPORTED_MODULE_5__["MultiPurposeRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiPurposePumpsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_3__["MainSectionComponent"], _multi_purpose_multi_purpose_component__WEBPACK_IMPORTED_MODULE_4__["MultiPurposeComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng_maphilight__WEBPACK_IMPORTED_MODULE_2__["MaphilightModule"], _mutliPurpose_routing_modules__WEBPACK_IMPORTED_MODULE_5__["MultiPurposeRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=views-multi-purpose-pumps-multi-purpose-pumps-module-es5.js.map