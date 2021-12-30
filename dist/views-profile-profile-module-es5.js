(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-profile-profile-module"], {
    /***/
    "4EUC":
    /*!******************************************************************!*\
      !*** ./src/app/views/profile/my-address/my-address.component.ts ***!
      \******************************************************************/

    /*! exports provided: MyAddressComponent */

    /***/
    function EUC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyAddressComponent", function () {
        return MyAddressComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../directives/number-only/numonly.directive */
      "3iOn");

      var _c0 = function _c0(a0) {
        return {
          "visibility": a0
        };
      };

      function MyAddressComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAddressComponent_div_10_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var eachAddress_r12 = ctx.$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.openModal("update", eachAddress_r12 == null ? null : eachAddress_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Change");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAddressComponent_div_10_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var eachAddress_r12 = ctx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r16.openModal("delete", eachAddress_r12 == null ? null : eachAddress_r12.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eachAddress_r12 = ctx.$implicit;
          var addressCount_r13 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachAddress_r12 == null ? null : eachAddress_r12.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate6"](" ", eachAddress_r12 == null ? null : eachAddress_r12.house_no, " ", eachAddress_r12 == null ? null : eachAddress_r12.city, " ", eachAddress_r12 == null ? null : eachAddress_r12.state, ", ", eachAddress_r12 == null ? null : eachAddress_r12.country, " ", eachAddress_r12 == null ? null : eachAddress_r12.pincode, " ", eachAddress_r12 == null ? null : eachAddress_r12.phone, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, addressCount_r13 === 0 ? "hidden" : "visible"));
        }
      }

      function MyAddressComponent_p_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyAddressComponent_ng_container_45_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "First name is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyAddressComponent_ng_container_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyAddressComponent_ng_container_45_p_1_Template, 2, 0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formControl == null ? null : ctx_r2.formControl.first_name == null ? null : ctx_r2.formControl.first_name.errors.required);
        }
      }

      function MyAddressComponent_ng_container_56_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyAddressComponent_ng_container_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyAddressComponent_ng_container_56_p_1_Template, 2, 0, "p", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formControl == null ? null : ctx_r3.formControl.last_name == null ? null : ctx_r3.formControl.last_name.errors.required);
        }
      }

      function MyAddressComponent_ng_container_63_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Phone number is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyAddressComponent_ng_container_63_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter valid phone number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyAddressComponent_ng_container_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyAddressComponent_ng_container_63_p_1_Template, 2, 0, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyAddressComponent_ng_container_63_p_2_Template, 2, 0, "p", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formControl == null ? null : ctx_r4.formControl.phone == null ? null : ctx_r4.formControl.phone.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formControl == null ? null : ctx_r4.formControl.phone == null ? null : ctx_r4.formControl.phone.errors.pattern);
        }
      }

      function MyAddressComponent_p_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Address Is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyAddressComponent_option_79_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eachCountry_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachCountry_r21 == null ? null : eachCountry_r21.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachCountry_r21.name);
        }
      }

      function MyAddressComponent_option_88_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eachState_r23 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachState_r23 == null ? null : eachState_r23.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachState_r23.name);
        }
      }

      function MyAddressComponent_p_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select state from list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyAddressComponent_option_98_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eachCity_r25 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachCity_r25 == null ? null : eachCity_r25.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachCity_r25.name);
        }
      }

      function MyAddressComponent_p_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select city from list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyAddressComponent_ng_container_106_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Postal code is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyAddressComponent_ng_container_106_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter valid postal code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyAddressComponent_ng_container_106_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyAddressComponent_ng_container_106_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyAddressComponent_ng_container_106_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.formControl == null ? null : ctx_r11.formControl.pincode == null ? null : ctx_r11.formControl.pincode.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.formControl == null ? null : ctx_r11.formControl.pincode == null ? null : ctx_r11.formControl.pincode.errors.pattern);
        }
      }

      var MyAddressComponent = /*#__PURE__*/function () {
        function MyAddressComponent(apiService, toaster, fb) {
          _classCallCheck(this, MyAddressComponent);

          this.apiService = apiService;
          this.toaster = toaster;
          this.fb = fb;
          this.subscribe = []; // subscribe used to store subscription

          this.addressList = []; // used to assign address list of user

          this.cityInfo = ['']; // used to store city data

          this.stateInfo = []; // used to store state data

          this.countryInfo = []; // used to store country data

          this.addNewAddress = false; // use to check to addNew address or not
        }

        _createClass(MyAddressComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (sessionStorage.getItem('id')) {
              this.getAddressList(window.atob(sessionStorage.getItem('id')));
            }

            this.getCountries();
            this.createAddressForm();
          } // function to create addressForm

        }, {
          key: "createAddressForm",
          value: function createAddressForm() {
            this.addressForm = this.fb.group({
              title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              first_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              middle_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
              last_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9 ]{10,12}'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              house_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
              pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9 ]{4}'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Australia')
            });
          } // function to getCountries from getCountryData function

        }, {
          key: "getCountries",
          value: function getCountries() {
            var _this = this;

            this.subscribe.push(this.apiService.getCountryData().subscribe(function (res) {
              if (res) {
                _this.countryInfo = res["countries"]; // assigning response to countryInfo array

                _this.onChangeCountry('Australia');
              }
            }));
          } // function to getAddressList by passing userId to getAllAddress function

        }, {
          key: "getAddressList",
          value: function getAddressList(userId) {
            var _this2 = this;

            var userData = {
              user_id: +userId
            };
            this.subscribe.push(this.apiService.getAllAddress(userData).subscribe(function (res) {
              if (res["code"] === 200) {
                _this2.addressList = res["address"]; // assigning response to addressList array
              }
            }, function (err) {
              var _a;

              _this2.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
            }));
          } // function to get controls of address form

        }, {
          key: "onInputChange",
          value: function onInputChange(validNumber, type) {
            var maxLength = 0;

            if (type === 'phone') {
              maxLength = 12;

              if (validNumber.length >= maxLength) {
                this.addressForm.patchValue({
                  phone: validNumber.substring(0, 12)
                });
              }
            } else if (type === 'zip') {
              maxLength = 4;

              if (validNumber.length >= maxLength) {
                this.addressForm.patchValue({
                  pincode: validNumber.substring(0, 4)
                });
              }
            }
          } // function to get countryName and statesList according to countryValue

        }, {
          key: "onChangeCountry",
          value: function onChangeCountry(countryValue) {
            this.cityInfo = [];
            var countryIndex = this.countryInfo.findIndex(function (res) {
              return res.name === countryValue;
            });
            this.stateInfo = this.countryInfo[countryIndex].states;

            if (this.addressForm.controls["state"].value !== null) {
              this.addressForm.controls["state"].setValue(null, {
                onlySelf: true
              });
              this.addressForm.controls["city"].setValue(null, {
                onlySelf: true
              });
            }
          }
        }, {
          key: "onChangeState",
          value: function onChangeState(stateValue) {
            var stateIndex = this.stateInfo.findIndex(function (res) {
              return res.name === stateValue;
            });
            this.cityInfo = this.stateInfo[stateIndex].cities;
          } // function to open popUp Modal according to modalType

        }, {
          key: "openModal",
          value: function openModal(modalType, addressId) {
            var _this3 = this;

            if (modalType === 'delete') {
              var show = document.getElementById('deleteModal');
              show.classList.add('in');
              show.style.display = 'block';
              this.addressId = addressId;
            } else if (modalType === 'update') {
              this.addressId = addressId;
              this.modalText = 'Edit address';
              this.addressList.forEach(function (eachAddress) {
                if (eachAddress.id === _this3.addressId) {
                  _this3.patchAddressForm(eachAddress);
                }
              });
              this.showModal();
            } else if (modalType === 'add') {
              this.addNewAddress = true;
              this.modalText = 'Add address';
              this.getCountries();
              this.addressForm.reset();
              this.showModal();
            }
          } // function to open modal

        }, {
          key: "showModal",
          value: function showModal() {
            var show = document.getElementById('changeModal');
            show.classList.add('in');
            show.style.display = 'block';
          } // function to close modal

        }, {
          key: "closeModal",
          value: function closeModal(modalType) {
            if (modalType === 'delete') {
              var show = document.getElementById('deleteModal');
              show.classList.remove('in');
              show.style.display = 'none';
            } else if (modalType === 'update') {
              var _show = document.getElementById('changeModal');

              _show.classList.remove('in');

              _show.style.display = 'none';
              this.addNewAddress = false;
            } else if (modalType === 'add') {
              var _show2 = document.getElementById('changeModal');

              _show2.classList.remove('in');

              _show2.style.display = 'none';
              this.addNewAddress = false;
            } else {
              var _show3 = document.getElementById('changeModal');

              _show3.classList.remove('in');

              _show3.style.display = 'none';
            }
          } // assign values from addressList to form fields

        }, {
          key: "patchAddressForm",
          value: function patchAddressForm(addressData) {
            // findIndex() method returns the index of the first element in the array that satisfies the condition
            var countryIndex = this.countryInfo.findIndex(function (res) {
              return res.name === (addressData === null || addressData === void 0 ? void 0 : addressData.country);
            });
            this.stateInfo = this.countryInfo[countryIndex].states; // findIndex() method returns the index of the first element in the array that satisfies the condition

            var stateIndex = this.stateInfo.findIndex(function (res) {
              return res.name === (addressData === null || addressData === void 0 ? void 0 : addressData.state);
            });
            this.cityInfo = this.stateInfo[stateIndex].cities;
            this.addressForm.patchValue({
              title: addressData === null || addressData === void 0 ? void 0 : addressData.title,
              first_name: addressData === null || addressData === void 0 ? void 0 : addressData.first_name,
              middle_name: addressData === null || addressData === void 0 ? void 0 : addressData.middle_name,
              last_name: addressData === null || addressData === void 0 ? void 0 : addressData.last_name,
              phone: addressData === null || addressData === void 0 ? void 0 : addressData.phone,
              house_no: addressData === null || addressData === void 0 ? void 0 : addressData.house_no,
              city: addressData === null || addressData === void 0 ? void 0 : addressData.city,
              state: addressData === null || addressData === void 0 ? void 0 : addressData.state,
              pincode: addressData === null || addressData === void 0 ? void 0 : addressData.pincode,
              country: addressData === null || addressData === void 0 ? void 0 : addressData.country
            });
          } // function to delete address by passing addressId in deleteAddress api

        }, {
          key: "deleteAddress",
          value: function deleteAddress() {
            var _this4 = this;

            this.subscribe.push(this.apiService.deleteAddress(this.addressId).subscribe(function (res) {
              if (res["code"] === 200) {
                _this4.toaster.success(res["message"]); // this.getAddressList(window.atob(localStorage.getItem('id')));


                _this4.getAddressList(window.atob(sessionStorage.getItem('id')));

                _this4.closeModal('delete');
              }
            }));
          } // function to validate all fields according to formType

        }, {
          key: "validateAllFields",
          value: function validateAllFields(formGroup) {
            var _this5 = this;

            Object.keys(this.formControl).forEach(function (field) {
              var control = formGroup.get(field);

              if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                control.markAsTouched({
                  onlySelf: true
                });
              } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                _this5.validateAllFields(control);
              }
            });
          } // function to update and add new address

        }, {
          key: "updateAddress",
          value: function updateAddress(form) {
            var _this6 = this;

            var _a;

            if (form.invalid) {
              this.validateAllFields(form); // if form in invalid then call validateAllfields function
            } else {
              var countryName;

              if (((_a = form === null || form === void 0 ? void 0 : form.value) === null || _a === void 0 ? void 0 : _a.country) === null) {
                this.addressForm.controls["country"].setValue('Australia', {
                  onlySelf: true
                });
                countryName = 'Australia';
              } else {
                countryName = form.value.country;
              }

              var addressUpdateData = {
                user_id: window.atob(sessionStorage.getItem('id')),
                title: form.value.title,
                first_name: form.value.first_name,
                middle_name: form.value.middle_name,
                last_name: form.value.last_name,
                phone: form.value.phone,
                pincode: form.value.pincode,
                city: form.value.city,
                house_no: form.value.house_no,
                state: form.value.state,
                country: countryName
              };

              if (this.addNewAddress) {
                // checking address type is new or not
                this.apiService.addAddress(addressUpdateData).subscribe(function (res) {
                  if (res["code"] === 200) {
                    _this6.toaster.success(res["message"]);

                    _this6.getAddressList(window.atob(sessionStorage.getItem('id')));

                    _this6.closeModal('update');

                    _this6.addNewAddress = false;
                  }
                });
              } else {
                addressUpdateData["id"] = this.addressId;

                if (this.addressForm.dirty) {
                  this.apiService.updateAddress(addressUpdateData).subscribe(function (res) {
                    if (res["code"] === 200) {
                      _this6.toaster.success(res["message"]);

                      _this6.getAddressList(window.atob(sessionStorage.getItem('id')));

                      _this6.closeModal('update');
                    }
                  });
                } else {
                  this.toaster.error('Nothing changed to update');
                }
              }
            }
          } // to unsubscribe the subscriptions

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Called once, before the instance is destroyed.
            // Add 'implements OnDestroy' to the class.
            this.subscribe.forEach(function (sub) {
              if (sub) {
                sub.unsubscribe();
              }
            });
          }
        }, {
          key: "formControl",
          get: function get() {
            return this.addressForm.controls;
          }
        }]);

        return MyAddressComponent;
      }();

      MyAddressComponent.ɵfac = function MyAddressComponent_Factory(t) {
        return new (t || MyAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      MyAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyAddressComponent,
        selectors: [["app-my-address"]],
        decls: 124,
        vars: 26,
        consts: [[1, "nav", "nav-tabs"], [1, "active"], ["data-toggle", "tab", "href", "#personal"], [1, "tab-content"], ["id", "order", 1, "tab-pane", "fade", "in", "active"], [1, "blue-button", 2, "margin-bottom", "2px", 3, "click"], ["class", "order-row address-detail", 4, "ngFor", "ngForOf"], ["id", "changeModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], [1, "modal-body"], [1, "address-row"], [3, "formGroup"], [1, "address-feild"], ["formControlName", "title", "required", "", 3, "ngClass"], ["disabled", "disabled", 3, "ngValue"], ["value", "Mr"], ["value", "Ms"], ["value", " "], ["class", "error-addressMsg", 4, "ngIf"], [1, "name-container"], [1, "address-feild", "address2"], ["type", "text", "placeholder", "First Name", "formControlName", "first_name", "required", "", 3, "ngClass"], [4, "ngIf"], ["type", "text", "placeholder", "Middle Name", "formControlName", "middle_name"], ["type", "text", "placeholder", "Last Name", "formControlName", "last_name", "required", "", 3, "ngClass"], ["type", "text", "placeholder", "Contact Number", "appNumOnly", "", "formControlName", "phone", "required", "", 3, "ngClass", "input"], ["type", "text", "placeholder", "Address", "formControlName", "house_no", "required", "", 3, "ngClass"], ["class", "validation-error", 4, "ngIf"], ["formControlName", "country", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "state", "required", "", 3, "ngClass", "change"], ["formControlName", "city", "required", "", 3, "ngClass"], ["type", "text", "placeholder", "1234", "appNumOnly", "", "formControlName", "pincode", "required", "", 3, "ngClass", "input"], [1, "modal-footer"], ["type", "button", 1, "blue-button", 3, "click"], ["id", "deleteModal", "role", "dialog", 1, "modal", "fade"], [1, "delete-txt"], [1, "remove-sec"], [1, "blue-button", 3, "click"], [1, "order-row", "address-detail"], [1, "order-left"], [1, "order-desc"], [1, "order-status"], [1, "blue-button", 2, "margin-right", "4px", 3, "click"], [1, "white-button", 3, "ngStyle", "click"], [1, "error-addressMsg"], [1, "validation-error"], [3, "value"]],
        template: function MyAddressComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Address Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Manage all the shipping addresses you want (work place, home address ...) This way you won't have to enter the shipping address manually with each order.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAddressComponent_Template_button_click_8_listener() {
              return ctx.openModal("add", "");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MyAddressComponent_div_10_Template, 12, 10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAddressComponent_Template_button_click_17_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\xD7");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact Detail");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "form", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Title ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Select title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Mr.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ms.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "option", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, MyAddressComponent_p_37_Template, 2, 0, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "First Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MyAddressComponent_ng_container_45_Template, 2, 1, "ng-container", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Middle Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Last Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, MyAddressComponent_ng_container_56_Template, 2, 1, "ng-container", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Contact Number ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MyAddressComponent_Template_input_input_62_listener($event) {
              return ctx.onInputChange($event.target.value, "phone");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, MyAddressComponent_ng_container_63_Template, 3, 2, "ng-container", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Address(House No., Building , street)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, MyAddressComponent_p_72_Template, 2, 0, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Country ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "select", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MyAddressComponent_Template_select_change_78_listener($event) {
              return ctx.onChangeCountry($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, MyAddressComponent_option_79_Template, 2, 2, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "State ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "select", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MyAddressComponent_Template_select_change_85_listener($event) {
              return ctx.onChangeState($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Please select state");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](88, MyAddressComponent_option_88_Template, 2, 2, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, MyAddressComponent_p_89_Template, 2, 0, "p", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "City ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "select", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Please select city");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, MyAddressComponent_option_98_Template, 2, 2, "option", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, MyAddressComponent_p_99_Template, 2, 0, "p", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Postal code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MyAddressComponent_Template_input_input_105_listener($event) {
              return ctx.onInputChange($event.target.value, "zip");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, MyAddressComponent_ng_container_106_Template, 3, 2, "ng-container", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAddressComponent_Template_button_click_108_listener() {
              return ctx.updateAddress(ctx.addressForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAddressComponent_Template_button_click_110_listener() {
              return ctx.closeModal("update");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Are you sure to delete this ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAddressComponent_Template_button_click_120_listener() {
              return ctx.deleteAddress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyAddressComponent_Template_button_click_122_listener() {
              return ctx.closeModal("delete");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.addressList);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.modalText);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addressForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.invalid) && ((ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.touched) || (ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.valid) && ((ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.touched) || (ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.dirty)) ? "green" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.invalid) && ((ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.touched) || (ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControl == null ? null : ctx.formControl.first_name == null ? null : ctx.formControl.first_name.errors == null ? null : ctx.formControl.first_name.errors.required) && ((ctx.formControl == null ? null : ctx.formControl.first_name == null ? null : ctx.formControl.first_name.touched) || (ctx.formControl == null ? null : ctx.formControl.first_name == null ? null : ctx.formControl.first_name.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.first_name == null ? null : ctx.formControl.first_name.valid) && ((ctx.formControl == null ? null : ctx.formControl.first_name == null ? null : ctx.formControl.first_name.touched) || (ctx.formControl == null ? null : ctx.formControl.first_name == null ? null : ctx.formControl.first_name.dirty)) ? "green" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.first_name == null ? null : ctx.formControl.first_name.invalid) && ((ctx.formControl == null ? null : ctx.formControl.first_name == null ? null : ctx.formControl.first_name.touched) || (ctx.formControl == null ? null : ctx.formControl.first_name == null ? null : ctx.formControl.first_name.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControl == null ? null : ctx.formControl.last_name == null ? null : ctx.formControl.last_name.errors == null ? null : ctx.formControl.last_name.errors.required) && ((ctx.formControl == null ? null : ctx.formControl.last_name == null ? null : ctx.formControl.last_name.touched) || (ctx.formControl == null ? null : ctx.formControl.last_name == null ? null : ctx.formControl.last_name.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.last_name == null ? null : ctx.formControl.last_name.valid) && ((ctx.formControl == null ? null : ctx.formControl.last_name == null ? null : ctx.formControl.last_name.touched) || (ctx.formControl == null ? null : ctx.formControl.last_name == null ? null : ctx.formControl.last_name.dirty)) ? "green" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.last_name == null ? null : ctx.formControl.last_name.invalid) && ((ctx.formControl == null ? null : ctx.formControl.last_name == null ? null : ctx.formControl.last_name.touched) || (ctx.formControl == null ? null : ctx.formControl.last_name == null ? null : ctx.formControl.last_name.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ((ctx.formControl == null ? null : ctx.formControl.phone == null ? null : ctx.formControl.phone.errors == null ? null : ctx.formControl.phone.errors.required) || (ctx.formControl == null ? null : ctx.formControl.phone == null ? null : ctx.formControl.phone.errors == null ? null : ctx.formControl.phone.errors.pattern)) && ((ctx.formControl == null ? null : ctx.formControl.phone == null ? null : ctx.formControl.phone.touched) || (ctx.formControl == null ? null : ctx.formControl.phone == null ? null : ctx.formControl.phone.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.phone == null ? null : ctx.formControl.phone.valid) && ((ctx.formControl == null ? null : ctx.formControl.phone == null ? null : ctx.formControl.phone.touched) || (ctx.formControl == null ? null : ctx.formControl.phone == null ? null : ctx.formControl.phone.dirty)) ? "green" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.phone == null ? null : ctx.formControl.phone.invalid) && ((ctx.formControl == null ? null : ctx.formControl.phone == null ? null : ctx.formControl.phone.touched) || (ctx.formControl == null ? null : ctx.formControl.phone == null ? null : ctx.formControl.phone.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControl == null ? null : ctx.formControl.house_no == null ? null : ctx.formControl.house_no.invalid) && ((ctx.formControl == null ? null : ctx.formControl.house_no == null ? null : ctx.formControl.house_no.touched) || (ctx.formControl == null ? null : ctx.formControl.house_no == null ? null : ctx.formControl.house_no.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.house_no == null ? null : ctx.formControl.house_no.valid) && ((ctx.formControl == null ? null : ctx.formControl.house_no == null ? null : ctx.formControl.house_no.touched) || (ctx.formControl == null ? null : ctx.formControl.house_no == null ? null : ctx.formControl.house_no.dirty)) ? "green" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.house_no == null ? null : ctx.formControl.house_no.invalid) && ((ctx.formControl == null ? null : ctx.formControl.house_no == null ? null : ctx.formControl.house_no.touched) || (ctx.formControl == null ? null : ctx.formControl.house_no == null ? null : ctx.formControl.house_no.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.invalid) && ((ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.touched) || (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.valid) && ((ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.touched) || (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.dirty)) ? "green" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.invalid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.valid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)) ? "green" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.invalid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.invalid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.valid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)) ? "green" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cityInfo);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.invalid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ((ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.errors == null ? null : ctx.formControl.pincode.errors.required) || (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.errors == null ? null : ctx.formControl.pincode.errors.pattern)) && ((ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.touched) || (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.valid) && ((ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.touched) || (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.dirty)) ? "green" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.invalid) && ((ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.touched) || (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.dirty)));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_5__["NumonlyDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
        styles: [".modal[_ngcontent-%COMP%] {\r\n  overflow-y:auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvZmlsZS9teS1hZGRyZXNzL215LWFkZHJlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wcm9maWxlL215LWFkZHJlc3MvbXktYWRkcmVzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcclxuICBvdmVyZmxvdy15OmF1dG87XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyAddressComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-my-address',
            templateUrl: './my-address.component.html',
            styleUrls: ['./my-address.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "8r/t":
    /*!*************************************************!*\
      !*** ./src/app/views/profile/profile.module.ts ***!
      \*************************************************/

    /*! exports provided: ProfileModule */

    /***/
    function rT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
        return ProfileModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main-section/main-section.component */
      "PXSu");
      /* harmony import */


      var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./my-profile/my-profile.component */
      "Q4C+");
      /* harmony import */


      var _my_address_my_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-address/my-address.component */
      "4EUC");
      /* harmony import */


      var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./my-orders/my-orders.component */
      "mava");
      /* harmony import */


      var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/directives/directives.module */
      "FUS3");
      /* harmony import */


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./profile-routing.module */
      "wuQf");

      var ProfileModule = function ProfileModule() {
        _classCallCheck(this, ProfileModule);
      };

      ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProfileModule
      });
      ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProfileModule_Factory(t) {
          return new (t || ProfileModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfileRoutingModule"], src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
          declarations: [_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_3__["MainSectionComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"], _my_address_my_address_component__WEBPACK_IMPORTED_MODULE_5__["MyAddressComponent"], _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_6__["MyOrdersComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfileRoutingModule"], src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_section_main_section_component__WEBPACK_IMPORTED_MODULE_3__["MainSectionComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_4__["MyProfileComponent"], _my_address_my_address_component__WEBPACK_IMPORTED_MODULE_5__["MyAddressComponent"], _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_6__["MyOrdersComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfileRoutingModule"], src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "PXSu":
    /*!**********************************************************************!*\
      !*** ./src/app/views/profile/main-section/main-section.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MainSectionComponent */

    /***/
    function PXSu(module, __webpack_exports__, __webpack_require__) {
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
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0() {
        return ["/home"];
      };

      function MainSectionComponent_p_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.routePath, " ");
        }
      }

      var _c1 = function _c1() {
        return ["./my-profile"];
      };

      var _c2 = function _c2() {
        return ["./my-address"];
      };

      var _c3 = function _c3() {
        return ["./my-orders"];
      };

      var MainSectionComponent = /*#__PURE__*/function () {
        function MainSectionComponent(route, toaster, authService) {
          _classCallCheck(this, MainSectionComponent);

          this.route = route;
          this.toaster = toaster;
          this.authService = authService;
          this.routePath = 'My Profile'; // default routPath
        }

        _createClass(MainSectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            // if (localStorage.getItem('id')){ // checking userId
            if (sessionStorage.getItem('id')) {
              // checking userId
              this.subscription = this.route.events.subscribe(function (res) {
                if (res instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                  // split() method is used to split a string into an array of substrings and return a new array
                  var url = res.url.split('/');
                  _this7.urlLength = url.length;

                  if (url[2] === 'my-profile') {
                    _this7.routePath = 'My Profile';
                  } else if (url[2] === 'my-address') {
                    _this7.routePath = 'My Address';
                  } else if (url[2] === 'my-orders') {
                    _this7.routePath = 'My Orders';
                  }
                }
              });
            } else {
              this.toaster.success('Please sign-in to continue');
              this.route.navigate(['/sign-in']);
            }
          } // function to open modal

        }, {
          key: "openModal",
          value: function openModal() {
            var show = document.getElementById('logoutModal');
            show.classList.add('in');
            show.style.display = 'block';
          } // function to close modal

        }, {
          key: "closeModal",
          value: function closeModal() {
            var show = document.getElementById('logoutModal');
            show.classList.remove('in');
            show.style.display = 'none';
          } // function to logOut

        }, {
          key: "logout",
          value: function logout() {
            this.authService.logOut();
          } // to unsubscribe the subscriptions

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
        }]);

        return MainSectionComponent;
      }();

      MainSectionComponent.ɵfac = function MainSectionComponent_Factory(t) {
        return new (t || MainSectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      MainSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainSectionComponent,
        selectors: [["app-main-section"]],
        decls: 42,
        vars: 7,
        consts: [[1, "main-container", "profile-container", "addresspage"], [1, "breadcrum"], [1, "container"], [4, "ngIf"], [1, "profile-section"], [1, "account-section"], [1, "account-sidebar"], ["routerLinkActive", "active"], ["href", "javascript:void(0)", 3, "routerLink"], ["href", "javascript:void(0)", 3, "click"], [1, "account-tab"], ["id", "logoutModal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "delete-txt"], [1, "remove-sec"], [1, "blue-button", 3, "click"]],
        template: function MainSectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainSectionComponent_p_3_Template, 6, 3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "My Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Personal Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Address");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Order Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Order History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainSectionComponent_Template_a_click_26_listener() {
              return ctx.openModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Logout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Are you sure to log out ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainSectionComponent_Template_button_click_38_listener() {
              return ctx.logout();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Log Out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainSectionComponent_Template_button_click_40_listener() {
              return ctx.closeModal();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.urlLength === 3 || ctx.routePath == "My Profile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGUvbWFpbi1zZWN0aW9uL21haW4tc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */"]
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
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Q4C+":
    /*!******************************************************************!*\
      !*** ./src/app/views/profile/my-profile/my-profile.component.ts ***!
      \******************************************************************/

    /*! exports provided: MyProfileComponent */

    /***/
    function Q4C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
        return MyProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/api.service */
      "H+bZ");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../directives/text-only.directive */
      "ZSuO");

      function MyProfileComponent_img_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
        }
      }

      function MyProfileComponent_img_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
        }
      }

      function MyProfileComponent_ng_container_22_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name Is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProfileComponent_ng_container_22_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name must not exceed 15 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProfileComponent_ng_container_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyProfileComponent_ng_container_22_p_1_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyProfileComponent_ng_container_22_p_2_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formControl == null ? null : ctx_r2.formControl.name == null ? null : ctx_r2.formControl.name.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formControl == null ? null : ctx_r2.formControl.name == null ? null : ctx_r2.formControl.name.errors.maxlength);
        }
      }

      function MyProfileComponent_img_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
        }
      }

      function MyProfileComponent_img_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
        }
      }

      function MyProfileComponent_ng_container_32_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email Is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProfileComponent_ng_container_32_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter valid email(abc@abc.abc)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProfileComponent_ng_container_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyProfileComponent_ng_container_32_p_1_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyProfileComponent_ng_container_32_p_2_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formControl == null ? null : ctx_r5.formControl.email == null ? null : ctx_r5.formControl.email.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formControl == null ? null : ctx_r5.formControl.email == null ? null : ctx_r5.formControl.email.errors.pattern);
        }
      }

      function MyProfileComponent_img_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
        }
      }

      function MyProfileComponent_img_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
        }
      }

      function MyProfileComponent_ng_container_49_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProfileComponent_ng_container_49_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password Must Be of min 6 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProfileComponent_ng_container_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyProfileComponent_ng_container_49_p_1_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyProfileComponent_ng_container_49_p_2_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.formControls == null ? null : ctx_r8.formControls.oldPassword == null ? null : ctx_r8.formControls.oldPassword.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.formControls == null ? null : ctx_r8.formControls.oldPassword == null ? null : ctx_r8.formControls.oldPassword.errors.minlength);
        }
      }

      function MyProfileComponent_img_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
        }
      }

      function MyProfileComponent_img_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
        }
      }

      function MyProfileComponent_ng_container_60_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Password Is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProfileComponent_ng_container_60_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Password Must Be of min 6 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProfileComponent_ng_container_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyProfileComponent_ng_container_60_p_1_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyProfileComponent_ng_container_60_p_2_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.formControls == null ? null : ctx_r11.formControls.password == null ? null : ctx_r11.formControls.password.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.formControls == null ? null : ctx_r11.formControls.password == null ? null : ctx_r11.formControls.password.errors.minlength);
        }
      }

      function MyProfileComponent_img_68_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
        }
      }

      function MyProfileComponent_img_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
        }
      }

      function MyProfileComponent_ng_container_70_p_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password Is Required");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProfileComponent_ng_container_70_p_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Confirm Password Must Be of min 6 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MyProfileComponent_ng_container_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MyProfileComponent_ng_container_70_p_1_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyProfileComponent_ng_container_70_p_2_Template, 2, 0, "p", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.formControls == null ? null : ctx_r14.formControls.confirmPassword == null ? null : ctx_r14.formControls.confirmPassword.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.formControls == null ? null : ctx_r14.formControls.confirmPassword == null ? null : ctx_r14.formControls.confirmPassword.errors.minlength);
        }
      }

      var MyProfileComponent = /*#__PURE__*/function () {
        function MyProfileComponent(fb, toaster, apiService, authService) {
          _classCallCheck(this, MyProfileComponent);

          this.fb = fb;
          this.toaster = toaster;
          this.apiService = apiService;
          this.authService = authService;
        }

        _createClass(MyProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.createPersonalDataForm();
            this.createPasswordUpdateForm();

            if (sessionStorage.getItem('id')) {
              this.userId = +window.atob(sessionStorage.getItem('id'));
              this.getUserDetails(this.userId);
            }
          } // function to getUSerDetails by calling userDetails api

        }, {
          key: "getUserDetails",
          value: function getUserDetails(userId) {
            var _this8 = this;

            this.apiService.getUserDetails(userId).subscribe(function (res) {
              if (res["code"] === 200) {
                _this8.userData = res["details"];

                _this8.patchPersonalDataForm();
              }
            });
          } // function to create personalDataForm

        }, {
          key: "createPersonalDataForm",
          value: function createPersonalDataForm() {
            this.personalDataForm = this.fb.group({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15)]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
            });
          } // function to create passwordForm

        }, {
          key: "createPasswordUpdateForm",
          value: function createPasswordUpdateForm() {
            this.passwordUpdateForm = this.fb.group({
              oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
            });
          } // function to get controls of personalData form

        }, {
          key: "patchPersonalDataForm",
          // function to set Personal data
          value: function patchPersonalDataForm() {
            this.personalDataForm.patchValue({
              name: this.userData.name,
              email: this.userData.email
            });
          } // function to submit personalData form

        }, {
          key: "submitPersonalDataForm",
          value: function submitPersonalDataForm(form) {
            var _this9 = this;

            if (form.invalid) {
              // condition checking if form is valid or not
              this.validateAllFields(form, 'profileForm'); // if form in invalid then call validateAllfields function
            } else {
              form.value.id = this.userId;
              this.apiService.updatePersonalDetails(form.value).subscribe(function (res) {
                if (res["code"] === 200) {
                  sessionStorage.setItem('currentUser', window.btoa(res["user"][0].name));
                  /* setting username from updateApi to override
                  previous userName in sessionStorage */

                  _this9.authService.getCurrentUser(); // calling authService getCurrentUser function


                  _this9.toaster.success(res["message"]);
                }
              }, function (err) {
                var _a;

                _this9.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
              });
            }
          } // function to submit passwordData form

        }, {
          key: "submitPasswordUpdateForm",
          value: function submitPasswordUpdateForm(form) {
            var _this10 = this;

            if (form.invalid) {
              // condition checking if form is valid or not
              this.validateAllFields(form, 'passwordForm'); // if form in invalid then call validateAllfields function
            } else {
              if (form.value.password === form.value.confirmPassword) {
                // comparing the password and confirmPassword Values
                form.value.user_id = this.userId;
                this.apiService.updatePassword(form.value).subscribe(function (res) {
                  if (res["code"] === 200) {
                    _this10.toaster.success(res["message"]);

                    form.reset(); // function to reset form
                  }
                }, function (err) {
                  _this10.toaster.error('Current Password is incorrect');
                });
              } else {
                this.toaster.error('Password Didn\'t Match...Please Try Again!!!');
              }
            }
          } // function to validate all fields according to formType

        }, {
          key: "validateAllFields",
          value: function validateAllFields(formGroup, formType) {
            var _this11 = this;

            if (formType === 'passwordForm') {
              Object.keys(this.formControls).forEach(function (field) {
                var control = formGroup.get(field);

                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                  control.markAsTouched({
                    onlySelf: true
                  });
                } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                  _this11.validateAllFields(control, formType);
                }
              });
            } else if (formType === 'profileForm') {
              Object.keys(this.formControl).forEach(function (field) {
                var control = formGroup.get(field);

                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]) {
                  control.markAsTouched({
                    onlySelf: true
                  });
                } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]) {
                  _this11.validateAllFields(control, formType);
                }
              });
            }
          }
        }, {
          key: "formControl",
          get: function get() {
            return this.personalDataForm.controls;
          } // function to get controls of passwordUpdate form

        }, {
          key: "formControls",
          get: function get() {
            return this.passwordUpdateForm.controls;
          }
        }]);

        return MyProfileComponent;
      }();

      MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) {
        return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
      };

      MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyProfileComponent,
        selectors: [["app-my-profile"]],
        decls: 73,
        vars: 24,
        consts: [[1, "nav", "nav-tabs"], [1, "active"], ["data-toggle", "tab", "href", "#personal"], ["data-toggle", "tab", "href", "#password"], [1, "tab-content"], ["id", "personal", 1, "tab-pane", "fade", "in", "active"], [1, "sign-up-form"], [3, "formGroup", "ngSubmit"], [1, "sign-field"], [1, "sign-input", 3, "ngClass"], ["type", "text", "appTextOnly", "", "placeholder", "Enter your Name", "formControlName", "name", "appTextOnly", "", "required", ""], ["src", "assets/images/icons/tick.png", 4, "ngIf"], ["src", "assets/images/icons/clear.png", 4, "ngIf"], [4, "ngIf"], ["type", "text", "placeholder", "abc@xyz.com", "formControlName", "email", "required", ""], ["type", "submit", 1, "blue-button", 3, "disabled"], ["id", "password", 1, "tab-pane", "fade"], ["type", "password", "placeholder", "Enter Current Password", "formControlName", "oldPassword", "required", ""], [1, "half-field"], ["type", "password", "placeholder", "Enter New Password", "formControlName", "password", "required", ""], ["type", "password", "placeholder", "Re-Enter Your Password", "formControlName", "confirmPassword", "required", ""], ["type", "submit", 1, "blue-button"], ["src", "assets/images/icons/tick.png"], ["src", "assets/images/icons/clear.png"], ["class", "error-msg", 4, "ngIf"], [1, "error-msg"]],
        template: function MyProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Personal Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Password Change");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Feel free to edit any of your details below so your account is always up to date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MyProfileComponent_Template_form_ngSubmit_12_listener() {
              return ctx.submitPersonalDataForm(ctx.personalDataForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MyProfileComponent_img_20_Template, 1, 0, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, MyProfileComponent_img_21_Template, 1, 0, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MyProfileComponent_ng_container_22_Template, 3, 2, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Email ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MyProfileComponent_img_30_Template, 1, 0, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MyProfileComponent_img_31_Template, 1, 0, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, MyProfileComponent_ng_container_32_Template, 3, 2, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Update personal Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MyProfileComponent_Template_form_ngSubmit_39_listener() {
              return ctx.submitPasswordUpdateForm(ctx.passwordUpdateForm);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Current Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, MyProfileComponent_img_47_Template, 1, 0, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, MyProfileComponent_img_48_Template, 1, 0, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MyProfileComponent_ng_container_49_Template, 3, 2, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "New Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, MyProfileComponent_img_58_Template, 1, 0, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, MyProfileComponent_img_59_Template, 1, 0, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, MyProfileComponent_ng_container_60_Template, 3, 2, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Repeat Password ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, MyProfileComponent_img_68_Template, 1, 0, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, MyProfileComponent_img_69_Template, 1, 0, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, MyProfileComponent_ng_container_70_Template, 3, 2, "ng-container", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Update Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.personalDataForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.invalid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)) ? "error" : (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.valid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)) ? "success" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.valid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.invalid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.invalid) && ((ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.touched) || (ctx.formControl == null ? null : ctx.formControl.name == null ? null : ctx.formControl.name.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.pattern) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.errors == null ? null : ctx.formControl.email.errors.required)) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControls == null ? null : ctx.formControls.email == null ? null : ctx.formControls.email.dirty)) ? "error" : (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.valid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)) ? "success" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.valid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.invalid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.invalid) && ((ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.touched) || (ctx.formControl == null ? null : ctx.formControl.email == null ? null : ctx.formControl.email.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.personalDataForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("If you want to change the password to access your account, enter the folowing information:Your current email address is ", ctx.userData == null ? null : ctx.userData.email, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.passwordUpdateForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.invalid) && ((ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.touched) || (ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.dirty)) ? "error" : (ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.valid) && ((ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.touched) || (ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.dirty)) ? "success" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.valid) && ((ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.touched) || (ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.invalid) && ((ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.touched) || (ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.invalid) && ((ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.touched) || (ctx.formControls == null ? null : ctx.formControls.oldPassword == null ? null : ctx.formControls.oldPassword.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.invalid) && ((ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.touched) || (ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.dirty)) ? "error" : (ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.valid) && ((ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.touched) || (ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.dirty)) ? "success" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.valid) && ((ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.touched) || (ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.invalid) && ((ctx.formControls.password == null ? null : ctx.formControls.password.touched) || (ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.invalid) && ((ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.touched) || (ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.invalid) && ((ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.touched) || (ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.dirty)) ? "error" : (ctx.formControls == null ? null : ctx.formControls.password == null ? null : ctx.formControls.password.valid) && ((ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.touched) || (ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.dirty)) ? "success" : "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.valid) && ((ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.touched) || (ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.invalid) && ((ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.touched) || (ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.dirty)));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.invalid) && ((ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.touched) || (ctx.formControls == null ? null : ctx.formControls.confirmPassword == null ? null : ctx.formControls.confirmPassword.dirty)));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_6__["TextOnlyDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGUvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-my-profile',
            templateUrl: './my-profile.component.html',
            styleUrls: ['./my-profile.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "mava":
    /*!****************************************************************!*\
      !*** ./src/app/views/profile/my-orders/my-orders.component.ts ***!
      \****************************************************************/

    /*! exports provided: MyOrdersComponent */

    /***/
    function mava(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyOrdersComponent", function () {
        return MyOrdersComponent;
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

      function MyOrdersComponent_div_5_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Order ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Placed On:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Items:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Order Amount:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyOrdersComponent_div_5_div_5_Template_a_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var eachOrder_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.navigateToOrderDetails(eachOrder_r4 == null ? null : eachOrder_r4.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "View Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var eachOrder_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachOrder_r4 == null ? null : eachOrder_r4.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 5, eachOrder_r4 == null ? null : eachOrder_r4.created_at, "mediumDate"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachOrder_r4 == null ? null : eachOrder_r4.itemQuantity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", eachOrder_r4 == null ? null : eachOrder_r4.amount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Ordered on, ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 8, eachOrder_r4 == null ? null : eachOrder_r4.updated_at, "mediumDate"), " ");
        }
      }

      function MyOrdersComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Below are the orders booked by you:-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyOrdersComponent_div_5_div_5_Template, 31, 11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.orderHistoryData);
        }
      }

      function MyOrdersComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No orders found.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var MyOrdersComponent = /*#__PURE__*/function () {
        function MyOrdersComponent(router, apiService) {
          _classCallCheck(this, MyOrdersComponent);

          this.router = router;
          this.apiService = apiService;
          this.orderHistoryData = new Array(); // assigning orderHistoryData array of OrderDetails type
        }

        _createClass(MyOrdersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (sessionStorage.getItem('id')) {
              this.getOrderHistory(window.atob(sessionStorage.getItem('id')));
            }
          } // function to getOrderHistory by using userId

        }, {
          key: "getOrderHistory",
          value: function getOrderHistory(userId) {
            var _this12 = this;

            var userData = {
              user_id: +userId
            };
            this.apiService.orderHistory(userData).subscribe(function (res) {
              if (res["code"] === 200) {
                _this12.orderHistoryData = res["orders"]; // assigning response from orderHistory api to orderHistoryData
                // using sort() method to sort details by dates newest date 1st

                _this12.orderHistoryData.sort(function (a, b) {
                  return Date.parse(b.updated_at) - Date.parse(a.updated_at);
                });
              }
            });
          } // function to navigate to order component by passing orderId in router Params

        }, {
          key: "navigateToOrderDetails",
          value: function navigateToOrderDetails(orderId) {
            this.router.navigate(['/orderHistory'], {
              queryParams: {
                orderId: orderId
              }
            });
          }
        }]);

        return MyOrdersComponent;
      }();

      MyOrdersComponent.ɵfac = function MyOrdersComponent_Factory(t) {
        return new (t || MyOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
      };

      MyOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MyOrdersComponent,
        selectors: [["app-my-orders"]],
        decls: 8,
        vars: 2,
        consts: [[1, "nav", "nav-tabs"], [1, "active"], ["data-toggle", "tab", "href", "#personal"], [1, "tab-content"], ["id", "order", "class", "tab-pane fade in active", 4, "ngIf", "ngIfElse"], ["orderHistory", ""], ["id", "order", 1, "tab-pane", "fade", "in", "active"], [1, "row"], [1, "col-md-12", "history"], ["class", "order-list", 4, "ngFor", "ngForOf"], [1, "order-list"], [1, "order-row"], [1, "col-md-3", "col-xs-6"], [1, "bolder"], [1, "col-md-2", "col-xs-6"], [1, "col-md-3", "col-xs-12"], [1, "viewDetails"], ["href", "javascript:void(0)", 3, "click"], [1, "order-status"], ["src", "assets/images/icons/orange-dot.png", 2, "padding-right", "3px"]],
        template: function MyOrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Order History");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyOrdersComponent_div_5_Template, 6, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyOrdersComponent_ng_template_6_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderHistoryData.length)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2ZpbGUvbXktb3JkZXJzL215LW9yZGVycy5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyOrdersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-my-orders',
            templateUrl: './my-orders.component.html',
            styleUrls: ['./my-orders.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wuQf":
    /*!*********************************************************!*\
      !*** ./src/app/views/profile/profile-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ProfileRoutingModule */

    /***/
    function wuQf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
        return ProfileRoutingModule;
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


      var _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main-section/main-section.component */
      "PXSu");
      /* harmony import */


      var _my_address_my_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./my-address/my-address.component */
      "4EUC");
      /* harmony import */


      var _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./my-orders/my-orders.component */
      "mava");
      /* harmony import */


      var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./my-profile/my-profile.component */
      "Q4C+");

      var routes = [{
        path: 'account',
        component: _main_section_main_section_component__WEBPACK_IMPORTED_MODULE_2__["MainSectionComponent"],
        children: [{
          path: '',
          redirectTo: 'my-profile'
        }, {
          path: 'my-profile',
          component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_5__["MyProfileComponent"]
        }, {
          path: 'my-address',
          component: _my_address_my_address_component__WEBPACK_IMPORTED_MODULE_3__["MyAddressComponent"]
        }, {
          path: 'my-orders',
          component: _my_orders_my_orders_component__WEBPACK_IMPORTED_MODULE_4__["MyOrdersComponent"]
        }]
      }];

      var ProfileRoutingModule = function ProfileRoutingModule() {
        _classCallCheck(this, ProfileRoutingModule);
      };

      ProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ProfileRoutingModule
      });
      ProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ProfileRoutingModule_Factory(t) {
          return new (t || ProfileRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=views-profile-profile-module-es5.js.map