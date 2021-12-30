(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cart-cart-module"],{

/***/ "5ieR":
/*!*************************************************************************************!*\
  !*** ./node_modules/angular-cc-library/__ivy_ngcc__/fesm2015/angular-cc-library.js ***!
  \*************************************************************************************/
/*! exports provided: CreditCard, CreditCardDirectivesModule, CreditCardFormatDirective, CreditCardValidators, CvcFormatDirective, ExpiryFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCard", function() { return CreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardDirectivesModule", function() { return CreditCardDirectivesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardFormatDirective", function() { return CreditCardFormatDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditCardValidators", function() { return CreditCardValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CvcFormatDirective", function() { return CvcFormatDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpiryFormatDirective", function() { return ExpiryFormatDirective; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");






const defaultFormat = /(\d{1,4})/g;
const cards = [
    {
        type: 'maestro',
        patterns: [5018, 502, 503, 506, 56, 58, 639, 6220, 67],
        format: defaultFormat,
        length: [12, 13, 14, 15, 16, 17, 18, 19],
        cvvLength: [3],
        luhn: true,
    }, {
        type: 'forbrugsforeningen',
        patterns: [600],
        format: defaultFormat,
        length: [16],
        cvvLength: [3],
        luhn: true,
    }, {
        type: 'dankort',
        patterns: [5019],
        format: defaultFormat,
        length: [16],
        cvvLength: [3],
        luhn: true,
    }, {
        type: 'visa',
        patterns: [4],
        format: defaultFormat,
        length: [13, 16, 19],
        cvvLength: [3],
        luhn: true,
    }, {
        type: 'mastercard',
        patterns: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
        format: defaultFormat,
        length: [16],
        cvvLength: [3],
        luhn: true,
    }, {
        type: 'amex',
        patterns: [34, 37],
        format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
        length: [15],
        cvvLength: [3, 4],
        luhn: true,
    }, {
        type: 'dinersclub',
        patterns: [30, 36, 38, 39],
        format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
        length: [14],
        cvvLength: [3],
        luhn: true,
    }, {
        type: 'discover',
        patterns: [60, 64, 65, 622],
        format: defaultFormat,
        length: [16],
        cvvLength: [3],
        luhn: true,
    }, {
        type: 'unionpay',
        patterns: [62, 88],
        format: defaultFormat,
        length: [16, 17, 18, 19],
        cvvLength: [3],
        luhn: false,
    }, {
        type: 'jcb',
        patterns: [35],
        format: defaultFormat,
        length: [16, 19],
        cvvLength: [3],
        luhn: true,
    },
];
// @dynamic
class CreditCard {
    static cards() {
        return cards;
    }
    static cardFromNumber(num) {
        num = (num + '').replace(/\D/g, '');
        for (let i = 0, len = cards.length; i < len; i++) {
            const card = cards[i];
            const ref = card.patterns;
            for (let j = 0, len1 = ref.length; j < len1; j++) {
                const pattern = ref[j];
                const p = pattern + '';
                if (num.substr(0, p.length) === p) {
                    return card;
                }
            }
        }
    }
    static restrictNumeric(e) {
        if (e.metaKey || e.ctrlKey) {
            return true;
        }
        if (e.which === 32) {
            return false;
        }
        if (e.which === 0) {
            return true;
        }
        if (e.which < 33) {
            return true;
        }
        const input = String.fromCharCode(e.which);
        return !!/[\d\s]/.test(input);
    }
    static hasTextSelected(target) {
        return target.selectionStart !== null && target.selectionStart !== target.selectionEnd;
    }
    static cardType(num) {
        if (!num) {
            return num;
        }
        const card = this.cardFromNumber(num);
        if (card !== null && typeof card !== 'undefined') {
            return card.type;
        }
        else {
            return null;
        }
    }
    static formatCardNumber(num) {
        num = num.replace(/\D/g, '');
        const card = this.cardFromNumber(num);
        if (!card) {
            return num;
        }
        const upperLength = card.length[card.length.length - 1];
        num = num.slice(0, upperLength);
        if (card.format.global) {
            const matches = num.match(card.format);
            if (matches != null) {
                return matches.join(' ');
            }
        }
        else {
            const groups = card.format.exec(num);
            if (groups == null) {
                return;
            }
            groups.shift();
            return groups.filter(Boolean).join(' ');
        }
    }
    static safeVal(value, target, updateValue) {
        let cursor = null;
        const last = target.value;
        let result = null;
        try {
            cursor = target.selectionStart;
        }
        catch (error) { }
        updateValue(value);
        if (cursor !== null && target === document.activeElement) {
            if (cursor === last.length) {
                cursor = value.length;
            }
            if (last !== value) {
                const prevPair = last.slice(cursor - 1, +cursor + 1 || 9e9);
                const currPair = value.slice(cursor - 1, +cursor + 1 || 9e9);
                const digit = value[cursor];
                if (/\d/.test(digit) && prevPair === (`${digit} `) && currPair === (` ${digit}`)) {
                    cursor = cursor + 1;
                }
            }
            result = cursor;
        }
        return result;
    }
    static isCardNumber(key, target) {
        const digit = String.fromCharCode(key);
        if (!/^\d+$/.test(digit)) {
            return false;
        }
        if (CreditCard.hasTextSelected(target)) {
            return true;
        }
        const value = (target.value + digit).replace(/\D/g, '');
        const card = CreditCard.cardFromNumber(value);
        if (card) {
            return value.length <= card.length[card.length.length - 1];
        }
        else {
            return value.length <= 16;
        }
    }
    static restrictExpiry(key, target) {
        const digit = String.fromCharCode(key);
        if (!/^\d+$/.test(digit) || this.hasTextSelected(target)) {
            return false;
        }
        const value = `${target.value}${digit}`.replace(/\D/g, '');
        return value.length > 6;
    }
    static replaceFullWidthChars(str) {
        if (str === null) {
            str = '';
        }
        const fullWidth = '\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19';
        const halfWidth = '0123456789';
        let value = '';
        const chars = str.split('');
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < chars.length; i++) {
            let chr = chars[i];
            const idx = fullWidth.indexOf(chr);
            if (idx > -1) {
                chr = halfWidth[idx];
            }
            value += chr;
        }
        return value;
    }
    static formatExpiry(expiry) {
        const parts = expiry.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/);
        if (!parts) {
            return '';
        }
        let mon = parts[1] || '';
        let sep = parts[2] || '';
        const year = parts[3] || '';
        if (year.length > 0) {
            sep = ' / ';
        }
        else if (sep === ' /') {
            mon = mon.substring(0, 1);
            sep = '';
        }
        else if (mon.length === 2 || sep.length > 0) {
            sep = ' / ';
        }
        else if (mon.length === 1 && (mon !== '0' && mon !== '1')) {
            mon = `0${mon}`;
            sep = ' / ';
        }
        return `${mon}${sep}${year}`;
    }
    static restrictCvc(key, target) {
        const digit = String.fromCharCode(key);
        if (!/^\d+$/.test(digit) || this.hasTextSelected(target)) {
            return false;
        }
        const val = `${target.value}${digit}`;
        return val.length <= 4;
    }
    static luhnCheck(num) {
        const digits = num.split('').reverse();
        let odd = true;
        let sum = 0;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < digits.length; i++) {
            let digit = parseInt(digits[i], 10);
            // tslint:disable-next-line:no-conditional-assignment
            if ((odd = !odd)) {
                digit *= 2;
            }
            if (digit > 9) {
                digit -= 9;
            }
            sum += digit;
        }
        return sum % 10 === 0;
    }
}

class CreditCardValidators {
    static validateCCNumber(control) {
        if (_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required(control) !== undefined && _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required(control) !== null) {
            return { ccNumber: true };
        }
        const num = control.value.toString().replace(/\s+|-/g, '');
        if (!/^\d+$/.test(num)) {
            return { ccNumber: true };
        }
        const card = CreditCard.cardFromNumber(num);
        if (!card) {
            return { ccNumber: true };
        }
        if (card.length.includes(num.length) && (card.luhn === false || CreditCard.luhnCheck(num))) {
            return null;
        }
        const upperlength = card.length[card.length.length - 1];
        if (num.length > upperlength) {
            const registeredNum = num.substring(0, upperlength);
            if (CreditCard.luhnCheck(registeredNum)) {
                return null;
            }
        }
        return { ccNumber: true };
    }
    static validateExpDate(control) {
        if (_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required(control) !== undefined && _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required(control) !== null) {
            return { expDate: true };
        }
        if (typeof control.value !== 'undefined' && control.value.length >= 5) {
            let [month, year] = control.value.split(/[\s\/]+/, 2);
            if ((year != null ? year.length : void 0) === 2 && /^\d+$/.test(year)) {
                const prefix = new Date().getFullYear().toString().slice(0, 2);
                year = prefix + year;
            }
            month = parseInt(month, 10).toString();
            year = parseInt(year, 10).toString();
            if (/^\d+$/.test(month) && /^\d+$/.test(year) && (month >= 1 && month <= 12)) {
                const expiry = new Date(year, month);
                const currentTime = new Date();
                expiry.setMonth(expiry.getMonth() - 1);
                expiry.setMonth(expiry.getMonth() + 1, 1);
                if (expiry > currentTime) {
                    return null;
                }
            }
        }
        return { expDate: true };
    }
}

class CreditCardFormatDirective {
    constructor(el, control) {
        this.el = el;
        this.control = control;
        this.cards = CreditCard.cards();
        this.resolvedScheme$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('unknown');
        this.target = this.el.nativeElement;
    }
    /**
     * Updates the value to target element, or FormControl if exists.
     * @param value New input value.
     */
    updateValue(value) {
        if (this.control) {
            this.control.control.setValue(value);
        }
        else {
            this.target.value = value;
        }
    }
    onKeypress(e) {
        if (CreditCard.restrictNumeric(e)) {
            if (CreditCard.isCardNumber(e.which, this.target)) {
                this.formatCardNumber(e);
            }
        }
        else {
            e.preventDefault();
        }
    }
    onKeydown(e) {
        this.formatBackCardNumber(e);
        this.reFormatCardNumber();
    }
    onKeyup() {
        this.setCardType();
    }
    onPaste() {
        this.reFormatCardNumber();
    }
    onChange() {
        this.reFormatCardNumber();
    }
    onInput() {
        this.reFormatCardNumber();
        this.setCardType();
    }
    formatCardNumber(e) {
        const digit = String.fromCharCode(e.which);
        if (!/^\d+$/.test(digit)) {
            return;
        }
        const value = this.target.value;
        const card = CreditCard.cardFromNumber(value + digit);
        const length = (value.replace(/\D/g, '') + digit).length;
        const upperLength = card ? card.length[card.length.length - 1] : 19;
        if (length >= upperLength) {
            return;
        }
    }
    formatBackCardNumber(e) {
        const value = this.target.value;
        const selStart = this.target.selectionStart;
        if (e.which !== 8) {
            return;
        }
        if (selStart != null
            && selStart === this.target.selectionEnd
            && selStart > 0
            && selStart !== value.length
            && value[selStart - 1] === ' ') {
            e.preventDefault();
            if (selStart <= 2) {
                this.updateValue(value.slice(selStart));
                this.target.selectionStart = 0;
                this.target.selectionEnd = 0;
            }
            else {
                this.updateValue(value.slice(0, selStart - 2) + value.slice(selStart));
                this.target.selectionStart = selStart - 2;
                this.target.selectionEnd = selStart - 2;
            }
        }
    }
    setCardType() {
        const cardType = CreditCard.cardType(this.target.value) || 'unknown';
        this.resolvedScheme$.next(cardType);
        if (!this.target.classList.contains(cardType)) {
            this.cards.forEach((card) => {
                this.target.classList.remove(card.type);
            });
            this.target.classList.remove('unknown');
            this.target.classList.add(cardType);
            this.target.classList.toggle('identified', cardType !== 'unknown');
        }
    }
    reFormatCardNumber() {
        const value = CreditCard.formatCardNumber(CreditCard.replaceFullWidthChars(this.target.value));
        const oldValue = this.target.value;
        if (value !== oldValue) {
            this.target.selectionStart = this.target.selectionEnd = CreditCard.safeVal(value, this.target, (safeVal => {
                this.updateValue(safeVal);
            }));
        }
    }
}
CreditCardFormatDirective.ɵfac = function CreditCardFormatDirective_Factory(t) { return new (t || CreditCardFormatDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], 10)); };
CreditCardFormatDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CreditCardFormatDirective, selectors: [["", "ccNumber", ""]], hostBindings: function CreditCardFormatDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CreditCardFormatDirective_keypress_HostBindingHandler($event) { return ctx.onKeypress($event); })("keydown", function CreditCardFormatDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); })("keyup", function CreditCardFormatDirective_keyup_HostBindingHandler() { return ctx.onKeyup(); })("paste", function CreditCardFormatDirective_paste_HostBindingHandler() { return ctx.onPaste(); })("change", function CreditCardFormatDirective_change_HostBindingHandler() { return ctx.onChange(); })("input", function CreditCardFormatDirective_input_HostBindingHandler() { return ctx.onInput(); });
    } }, exportAs: ["ccNumber"] });
CreditCardFormatDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
CreditCardFormatDirective.propDecorators = {
    onKeypress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keypress', ['$event'],] }],
    onKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] }],
    onKeyup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keyup',] }],
    onPaste: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['paste',] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['change',] }],
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreditCardFormatDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[ccNumber]',
                exportAs: 'ccNumber'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { onKeypress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keypress', ['$event']]
        }], onKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keydown', ['$event']]
        }], onKeyup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keyup']
        }], onPaste: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['paste']
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['change']
        }], onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
        }] }); })();

class CvcFormatDirective {
    constructor(el, control) {
        this.el = el;
        this.control = control;
        this.target = this.el.nativeElement;
    }
    /**
     * Updates the value to target element, or FormControl if exists.
     * @param value New input value.
     */
    updateValue(value) {
        if (this.control) {
            this.control.control.setValue(value);
        }
        else {
            this.target.value = value;
        }
    }
    onKeypress(e) {
        if (!CreditCard.restrictNumeric(e) && !CreditCard.restrictCvc(e.which, this.target)) {
            e.preventDefault();
        }
    }
    reformatCvc() {
        const val = CreditCard.replaceFullWidthChars(this.target.value)
            .replace(/\D/g, '')
            .slice(0, 4);
        const oldVal = this.target.value;
        if (val !== oldVal) {
            this.target.selectionStart = this.target.selectionEnd = CreditCard.safeVal(val, this.target, (safeVal => {
                this.updateValue(safeVal);
            }));
        }
    }
}
CvcFormatDirective.ɵfac = function CvcFormatDirective_Factory(t) { return new (t || CvcFormatDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], 10)); };
CvcFormatDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CvcFormatDirective, selectors: [["", "ccCVC", ""]], hostBindings: function CvcFormatDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function CvcFormatDirective_keypress_HostBindingHandler($event) { return ctx.onKeypress($event); })("paste", function CvcFormatDirective_paste_HostBindingHandler() { return ctx.reformatCvc(); })("change", function CvcFormatDirective_change_HostBindingHandler() { return ctx.reformatCvc(); })("input", function CvcFormatDirective_input_HostBindingHandler() { return ctx.reformatCvc(); });
    } } });
CvcFormatDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
CvcFormatDirective.propDecorators = {
    onKeypress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keypress', ['$event'],] }],
    reformatCvc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['paste',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['change',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CvcFormatDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[ccCVC]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { onKeypress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keypress', ['$event']]
        }], reformatCvc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['paste']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['change']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
        }] }); })();

class ExpiryFormatDirective {
    constructor(el, control) {
        this.el = el;
        this.control = control;
        this.target = this.el.nativeElement;
    }
    /**
     * Updates the value to target element, or FormControl if exists.
     * @param value New input value.
     */
    updateValue(value) {
        if (this.control) {
            this.control.control.setValue(value);
        }
        else {
            this.target.value = value;
        }
    }
    onKeypress(e) {
        if (CreditCard.restrictNumeric(e)) {
            if (CreditCard.restrictExpiry(e.which, this.target)) {
                this.formatExpiry(e);
                this.formatForwardSlashAndSpace(e);
                this.formatForwardExpiry(e);
            }
        }
        else {
            e.preventDefault();
            return false;
        }
    }
    onKeydown(e) {
        if (CreditCard.restrictNumeric(e) && CreditCard.restrictExpiry(e.which, this.target)) {
            this.formatBackExpiry(e);
        }
    }
    onChange() {
        this.reformatExpiry();
    }
    onInput() {
        this.reformatExpiry();
    }
    formatExpiry(e) {
        const digit = String.fromCharCode(e.which);
        const val = `${this.target.value}${digit}`;
        if (!/^\d+$/.test(digit)) {
            return;
        }
        if (/^\d$/.test(val) && (val !== '0' && val !== '1')) {
            e.preventDefault();
            this.updateValue(`0${val} / `);
        }
        else if (/^\d\d$/.test(val)) {
            e.preventDefault();
            const m1 = parseInt(val[0], 10);
            const m2 = parseInt(val[1], 10);
            if (m2 > 2 && m1 !== 0) {
                this.updateValue(`0${m1} / ${m2}`);
            }
            else {
                this.updateValue(`${val} / `);
            }
        }
    }
    formatForwardSlashAndSpace(e) {
        const which = String.fromCharCode(e.which);
        const val = this.target.value;
        if (!(which === '/' || which === ' ')) {
            return false;
        }
        if (/^\d$/.test(val) && val !== '0') {
            this.updateValue(`0${val} / `);
        }
    }
    formatForwardExpiry(e) {
        const digit = String.fromCharCode(e.which);
        const val = this.target.value;
        if (!/^\d+$/.test(digit) && /^\d\d$/.test(val)) {
            this.updateValue(this.target.value = `${val} / `);
        }
    }
    formatBackExpiry(e) {
        const val = this.target.valueOf;
        if (e.which !== 8) {
            return;
        }
        if ((this.target.selectionStart != null) && this.target.selectionStart !== val.length) {
            return;
        }
        if (/\d\s\/\s$/.test(val)) {
            e.preventDefault();
            this.updateValue(val.replace(/\d\s\/\s$/, ''));
        }
    }
    reformatExpiry() {
        const val = CreditCard.formatExpiry(CreditCard.replaceFullWidthChars(this.target.value));
        const oldVal = this.target.value;
        if (val !== oldVal) {
            this.target.selectionStart = this.target.selectionEnd = CreditCard.safeVal(val, this.target, (safeVal => {
                this.updateValue(safeVal);
            }));
        }
    }
}
ExpiryFormatDirective.ɵfac = function ExpiryFormatDirective_Factory(t) { return new (t || ExpiryFormatDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], 10)); };
ExpiryFormatDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ExpiryFormatDirective, selectors: [["", "ccExp", ""]], hostBindings: function ExpiryFormatDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function ExpiryFormatDirective_keypress_HostBindingHandler($event) { return ctx.onKeypress($event); })("keydown", function ExpiryFormatDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); })("change", function ExpiryFormatDirective_change_HostBindingHandler() { return ctx.onChange(); })("input", function ExpiryFormatDirective_input_HostBindingHandler() { return ctx.onInput(); });
    } } });
ExpiryFormatDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
ExpiryFormatDirective.propDecorators = {
    onKeypress: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keypress', ['$event'],] }],
    onKeydown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['keydown', ['$event'],] }],
    onChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['change',] }],
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['input',] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExpiryFormatDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[ccExp]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }] }]; }, { onKeypress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keypress', ['$event']]
        }], onKeydown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['keydown', ['$event']]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['change']
        }], onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['input']
        }] }); })();

const CREDIT_CARD_LIBRARY_DIRECTIVES = [
    CreditCardFormatDirective,
    ExpiryFormatDirective,
    CvcFormatDirective,
];
class CreditCardDirectivesModule {
}
CreditCardDirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CreditCardDirectivesModule });
CreditCardDirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CreditCardDirectivesModule_Factory(t) { return new (t || CreditCardDirectivesModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CreditCardDirectivesModule, { declarations: [CreditCardFormatDirective, ExpiryFormatDirective, CvcFormatDirective], exports: [CreditCardFormatDirective, ExpiryFormatDirective, CvcFormatDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreditCardDirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CREDIT_CARD_LIBRARY_DIRECTIVES],
                exports: [CREDIT_CARD_LIBRARY_DIRECTIVES]
            }]
    }], null, null); })();

/*
 * Public API Surface of angular-cc-library
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=angular-cc-library.js.map

/***/ }),

/***/ "Bnhh":
/*!***************************************************!*\
  !*** ./src/app/views/cart/cart-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CartRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartRoutingModule", function() { return CartRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-details/cart-details.component */ "L2lf");
/* harmony import */ var _cart_address_cart_address_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart-address/cart-address.component */ "JfHV");
/* harmony import */ var _cart_payment_cart_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-payment/cart-payment.component */ "ai9U");
/* harmony import */ var src_app_services_route_guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/route-guard.guard */ "KrsS");
/* harmony import */ var _cart_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-resolver.service */ "GEvt");
/* harmony import */ var _deactive_guard_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deactive-guard.guard */ "rW7J");










const routes = [
    { path: '', component: _cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_2__["CartDetailsComponent"], resolve: { cartData: _cart_resolver_service__WEBPACK_IMPORTED_MODULE_6__["CartResolverService"] } },
    { path: 'deliveryAddress', component: _cart_address_cart_address_component__WEBPACK_IMPORTED_MODULE_3__["CartAddressComponent"], canActivate: [src_app_services_route_guard_guard__WEBPACK_IMPORTED_MODULE_5__["RouteGuard"]], canDeactivate: [_deactive_guard_guard__WEBPACK_IMPORTED_MODULE_7__["DeactiveGuard"]] },
    { path: 'payment/:id1/:id2', component: _cart_payment_cart_payment_component__WEBPACK_IMPORTED_MODULE_4__["CartPaymentComponent"], canActivate: [src_app_services_route_guard_guard__WEBPACK_IMPORTED_MODULE_5__["RouteGuard"]], canDeactivate: [_deactive_guard_guard__WEBPACK_IMPORTED_MODULE_7__["DeactiveGuard"]] }
];
class CartRoutingModule {
}
CartRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CartRoutingModule });
CartRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CartRoutingModule_Factory(t) { return new (t || CartRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CartRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "GEvt":
/*!*****************************************************!*\
  !*** ./src/app/views/cart/cart-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: CartResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartResolverService", function() { return CartResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");




class CartResolverService {
    constructor(apiService) {
        this.apiService = apiService;
    }
    resolve(route, state) {
        if (sessionStorage.getItem('cartId')) {
            return this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((data) => {
                if (+data[`code`] === 200) {
                    return JSON.parse(data[`details`].cart);
                }
                else {
                    return [];
                }
            }));
        }
    }
}
CartResolverService.ɵfac = function CartResolverService_Factory(t) { return new (t || CartResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
CartResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartResolverService, factory: CartResolverService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartResolverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "JfHV":
/*!*******************************************************************!*\
  !*** ./src/app/views/cart/cart-address/cart-address.component.ts ***!
  \*******************************************************************/
/*! exports provided: CartAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartAddressComponent", function() { return CartAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dataModels/cart-details */ "1UKJ");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../directives/text-only.directive */ "ZSuO");
/* harmony import */ var _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../directives/number-only/numonly.directive */ "3iOn");












function CartAddressComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartAddressComponent_div_41_Template_input_change_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const eachAddress_r14 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.getSelectedAddress(eachAddress_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachAddress_r14 = ctx.$implicit;
    const addressCount_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", "address-" + addressCount_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", addressCount_r15 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", "address-" + addressCount_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate5"]("", eachAddress_r14 == null ? null : eachAddress_r14.house_no, " ", eachAddress_r14 == null ? null : eachAddress_r14.city, " ", eachAddress_r14 == null ? null : eachAddress_r14.state, " ", eachAddress_r14 == null ? null : eachAddress_r14.country, " ", eachAddress_r14 == null ? null : eachAddress_r14.pincode, "");
} }
function CartAddressComponent_p_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_ng_container_71_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_ng_container_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartAddressComponent_ng_container_71_p_1_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formControl == null ? null : ctx_r2.formControl.first_name == null ? null : ctx_r2.formControl.first_name.errors.required);
} }
function CartAddressComponent_ng_container_82_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_ng_container_82_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartAddressComponent_ng_container_82_p_1_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formControl == null ? null : ctx_r3.formControl.last_name == null ? null : ctx_r3.formControl.last_name.errors.required);
} }
function CartAddressComponent_ng_container_89_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Phone number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_ng_container_89_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid phone number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_ng_container_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartAddressComponent_ng_container_89_p_1_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartAddressComponent_ng_container_89_p_2_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formControl == null ? null : ctx_r4.formControl.phone == null ? null : ctx_r4.formControl.phone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formControl == null ? null : ctx_r4.formControl.phone == null ? null : ctx_r4.formControl.phone.errors.pattern);
} }
function CartAddressComponent_p_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_option_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachCountry_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachCountry_r22 == null ? null : eachCountry_r22.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachCountry_r22.name, " ");
} }
function CartAddressComponent_p_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select country from list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_option_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachState_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachState_r24 == null ? null : eachState_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachState_r24.name, " ");
} }
function CartAddressComponent_p_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select state from list ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_option_125_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachCity_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", eachCity_r26 == null ? null : eachCity_r26.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachCity_r26.name, " ");
} }
function CartAddressComponent_p_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Select city ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_ng_container_133_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Postal code is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_ng_container_133_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid postal code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_ng_container_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartAddressComponent_ng_container_133_p_1_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartAddressComponent_ng_container_133_p_2_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.formControl == null ? null : ctx_r12.formControl.pincode == null ? null : ctx_r12.formControl.pincode.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.formControl == null ? null : ctx_r12.formControl.pincode == null ? null : ctx_r12.formControl.pincode.errors.pattern);
} }
function CartAddressComponent_div_136_div_3_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", eachProduct_r34 == null ? null : eachProduct_r34.driveType, ") ");
} }
function CartAddressComponent_div_136_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartAddressComponent_div_136_div_3_div_1_p_3_Template, 2, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachProduct_r34 == null ? null : eachProduct_r34.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachProduct_r34 == null ? null : eachProduct_r34.driveType) !== "");
} }
function CartAddressComponent_div_136_div_3_ng_template_2_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", eachProduct_r34 == null ? null : eachProduct_r34.description, ") ");
} }
function CartAddressComponent_div_136_div_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartAddressComponent_div_136_div_3_ng_template_2_p_3_Template, 2, 1, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachProduct_r34 == null ? null : eachProduct_r34.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachProduct_r34 == null ? null : eachProduct_r34.description) !== "");
} }
function CartAddressComponent_div_136_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartAddressComponent_div_136_div_3_div_1_Template, 4, 2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartAddressComponent_div_136_div_3_ng_template_2_Template, 4, 2, "ng-template", null, 57, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r34 = ctx.$implicit;
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachProduct_r34 == null ? null : eachProduct_r34.type) !== "spare")("ngIfElse", _r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", (eachProduct_r34 == null ? null : eachProduct_r34.productQuantity) * ((eachProduct_r34 == null ? null : eachProduct_r34.discountPrice) > 0 ? eachProduct_r34 == null ? null : eachProduct_r34.discountPrice : eachProduct_r34 == null ? null : eachProduct_r34.price), " ");
} }
function CartAddressComponent_div_136_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Dealer Discount (10%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " (In AUD) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r31.finalPrice + ctx_r31.gstPrice - ctx_r31.dealerDiscountAmount, "");
} }
function CartAddressComponent_div_136_button_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Checkout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please enter your address to continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_div_136_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartAddressComponent_div_136_button_24_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.checkOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartAddressComponent_div_136_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Price Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartAddressComponent_div_136_div_3_Template, 7, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sub Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Shipping & Handling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Total (including GST@10%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "(In AUD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CartAddressComponent_div_136_div_22_Template, 7, 1, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CartAddressComponent_div_136_button_23_Template, 5, 0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CartAddressComponent_div_136_button_24_Template, 3, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r13.grandTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r13.shippingCharges, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r13.finalPrice + ctx_r13.gstPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.applyDealerDiscount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.emptyAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r13.emptyAddress);
} }
const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/cart"]; };
const _c2 = function (a0) { return { display: a0 }; };
class CartAddressComponent {
    constructor(apiService, fb, toaster, route, spinner) {
        this.apiService = apiService;
        this.fb = fb;
        this.toaster = toaster;
        this.route = route;
        this.spinner = spinner;
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
        this.applyDealerDiscount = false; // used to apply for dealer discount
        this.dealerDiscountAmount = 0; // initial dealer discount
    }
    ngOnInit() {
        this.spinner.show();
        if (sessionStorage.getItem('id')) { // checking if userId is present or not
            this.userId = window.atob(sessionStorage.getItem('id')); // assigning userId from sessionStorage Id
            this.getAddressList(window.atob(sessionStorage.getItem('id')));
        }
        if (window.atob(sessionStorage.getItem('userType')) ===
            'Dealer' &&
            window.atob(sessionStorage.getItem('userStatus')) === 'D') {
            this.applyDealerDiscount = true;
            if (window.atob(sessionStorage.getItem('userDiscount')) === null) {
                this.apiService.dealerDiscount().subscribe(res => {
                    if (res[`return`] === true) {
                        this.dealerDiscountPercentage = res[`dealer_discount`];
                        this.dealerDiscountPercentage = this.dealerDiscountPercentage * 0.01;
                    }
                });
            }
            else {
                let userDiscount = window.atob(sessionStorage.getItem('userDiscount'));
                this.dealerDiscountPercentage = +userDiscount * 0.01;
            }
        }
        if (sessionStorage.getItem('buyNow')) { // checking if buyNow value is present or not
            this.getCartItems();
            const cartData = {
                // user_id: window.atob(localStorage.getItem('id')),
                user_id: window.atob(sessionStorage.getItem('id')),
                cart: JSON.stringify(this.products)
            };
            // calling addToCart api to add data in cart
            this.apiService.addToCart(cartData).subscribe(res => {
                if (res[`code`] === 200) {
                    this.buyNowCartId = res[`cart_details`].id; // assigning buyNowCartId with response cart value id
                }
            });
        }
        else {
            // calling getCartById api to get CartDetails by cartId
            // this.subscribe.push(this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
            this.subscribe.push(this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
                if (res[`code`] === 200) {
                    this.products = JSON.parse(res[`details`].cart); // assigning response to products
                    this.findGrandTotal();
                }
            }, err => {
                var _a;
                this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
            }));
        }
        this.getCountries();
        this.createAddressForm();
    }
    // function to getSelectedAddress according to addressId
    getSelectedAddress(address) {
        if (address !== 'newAddress') { // checking if address is newAddress or not
            this.selectedAddress = address;
            this.toggleAddress = '';
            this.emptyAddress = false;
        }
        else {
            this.toggleAddress = 'newAddress';
            this.emptyAddress = true;
            this.getUserDetails(this.userId);
        }
    }
    // function to getCartItems from sessionStorage
    getCartItems() {
        this.products = JSON.parse(window.atob(sessionStorage.getItem('buyNow')));
        this.findGrandTotal();
    }
    // function to findGrandTotal
    findGrandTotal() {
        let productPrice = 0; // default product price
        // calculating eachProduct price using forEach loop for products array
        this.products.forEach((ele) => {
            if (ele.productQuantity) { // checking if productQuantity is greater than 0
                // multiplying eachProduct price with eachProduct quantity and adding the result with productPrice
                productPrice = ((ele.discountPrice > 0 ? ele.discountPrice : ele.price) * ele.productQuantity) + productPrice;
            }
        });
        this.grandTotal = productPrice;
        this.shippingCharges = Math.round(+(0.05 * this.grandTotal).toFixed(3)); // 5% of totalCharges
        this.finalPrice = Math.round(this.grandTotal + this.shippingCharges); // adding price with shippingCharges and assigning to total
        this.gstPrice = Math.round(+(0.10 * this.finalPrice).toFixed(3));
        this.dealerDiscountAmount = Math.round(+(this.dealerDiscountPercentage * (this.finalPrice + this.gstPrice)).toFixed(3));
        const additionalPaymentDetails = window.btoa(JSON.stringify({
            subtotal_amount: this.grandTotal,
            shipping_amount: this.shippingCharges,
            gst_amount: this.gstPrice
        }));
        sessionStorage.setItem('additionalPaymentDetails', additionalPaymentDetails);
    }
    // function to getCountries from getCountryData function
    getCountries() {
        this.subscribe.push(this.apiService.getCountryData().subscribe(res => {
            if (res) {
                this.countryInfo = res[`countries`];
                this.onChangeCountry('Australia');
            }
        }));
    }
    // function to getAddressList according to userId
    getAddressList(userId) {
        const userData = {
            user_id: +userId
        };
        this.subscribe.push(this.apiService.getAllAddress(userData).subscribe(res => {
            if (res[`code`] === 200) {
                this.addressList = res[`address`]; // assigning address response to addressList
                this.spinner.hide();
                if (this.addressList.length > 0) {
                    this.selectedAddress = res[`address`][0];
                    this.emptyAddress = false;
                }
                else {
                    this.emptyAddress = true;
                    this.getSelectedAddress('newAddress');
                }
            }
        }, err => {
            this.toaster.error('No address found');
            this.spinner.hide();
        }));
    }
    getUserDetails(userId) {
        this.apiService.getUserDetails(userId).subscribe(res => {
            if (res[`code`]) {
                // console.log('userDetails', res[`details`])
                this.patchAddressForm(res[`details`].name);
            }
        });
    }
    patchAddressForm(userName) {
        const name = userName.split(" ");
        if (name.length === 3) {
            this.addressForm.patchValue({
                first_name: name[0],
                middle_name: name[1],
                last_name: name[2]
            });
        }
        else if (name.length > 1 && name.length <= 2) {
            this.addressForm.patchValue({
                first_name: name[0],
                last_name: name[1]
            });
        }
        else if (name.length === 1) {
            this.addressForm.patchValue({
                first_name: name[0]
            });
        }
    }
    // function to get countryName and statesList according to countryValue
    onChangeCountry(countryValue) {
        this.cityInfo = [];
        const countryIndex = this.countryInfo.findIndex(res => res.name === countryValue);
        this.stateInfo = this.countryInfo[countryIndex].states;
    }
    // function to get stateName and cityList according to stateValue
    onChangeState(stateValue) {
        const stateIndex = this.stateInfo.findIndex(res => res.name === stateValue);
        this.cityInfo = this.stateInfo[stateIndex].cities;
    }
    // function to create addressForm
    createAddressForm() {
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
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Australia', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    // function to get controls of address form
    get formControl() {
        return this.addressForm.controls;
    }
    onInputChange(validNumber, type) {
        let maxLength = 0;
        if (type === 'phone') {
            maxLength = 12;
            if (validNumber.length >= maxLength) {
                this.addressForm.patchValue({
                    phone: validNumber.substring(0, 12)
                });
            }
        }
        else if (type === 'zip') {
            maxLength = 4;
            if (validNumber.length >= maxLength) {
                this.addressForm.patchValue({
                    pincode: validNumber.substring(0, 4)
                });
            }
        }
    }
    // function to validate all fields according to formType
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
    // function to save address
    saveAddress(form) {
        if (form.invalid) {
            this.validateAllFields(form); // if form in invalid then call validateAllfields function
        }
        else {
            form.value.user_id = +this.userId;
            this.subscribe.push(this.apiService.addAddress(form.value).subscribe(res => {
                if (res[`code`] === 200) {
                    this.toaster.success(res[`message`]);
                    this.getAddressList(this.userId);
                    this.toggleAddress = '';
                    form.reset();
                }
            }, err => {
                var _a;
                this.toaster.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
            }));
        }
    }
    updateCart() {
        const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('buyNow'))); // assigning buyNow value to cartLocalData
        let cart;
        console.log(cartLocalData, 'cartLocal');
        const accessoriesToAdd = []; // accessoriesToAdd[] to add accessory
        const sparesToAdd = []; // sparesToAdd[] to add spare
        if (cartLocalData !== null) { // checking if cartLocalData is not null
            cartLocalData.forEach(cartData => {
                if (cartData.type === 'product') {
                    // assigning value in cart
                    cart = new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_2__["CartDetails"](cartData.productId, cartData.code, cartData.description, cartData.price, cartData.discountPrice, cartData.type, cartData.pole, cartData.flow, cartData.head, cartData.speed, cartData.power, cartData.engineSpeed, cartData.enginekW, cartData.driveType, cartData.productQuantity);
                }
                else if (cartData.type === 'accessory') {
                    accessoriesToAdd.push(cartData); // pushing cartData of type accessory in accessoriesToAdd array
                }
                else if (cartData.type === 'spare') {
                    sparesToAdd.push(cartData); // pushing cartData of type spare in sparesToAdd array
                }
            });
        }
        // this.subscribe.push(this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
        this.subscribe.push(this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
            if (res[`code`] === 200) {
                let cartDetails = [];
                cartDetails = JSON.parse(res[`details`].cart); // assigning response value to cartDetails
                console.log(cartDetails, 'cartDetails');
                if (cartDetails.length <= 0) { // checking cartDetails length is smaller or equal to 0
                    // (...)spread operator takes in an iterable (e.g an array) and expands it into individual elements.
                    cartDetails.push(cart); // pushing cart value in cartDetails
                    cartDetails.push(...accessoriesToAdd); // pushing each accessoriesToAdd value in cartDetails
                    cartDetails.push(...sparesToAdd); // pushing each sparesToAdd value in cartDetails
                }
                else {
                    const cartAccessoryDataSet = new Array(); // creating new accessoryArray
                    const cartSpareDataSet = new Array(); // creating new spareArray
                    let cartProductDataSet; // variable to set productData
                    let spareNotExist = true; // check if spare type is present in cartLocalData
                    let accessoryNotExist = true; // check if accessory type is present in cartLocalData
                    for (let i = 0; i < cartDetails.length; i++) {
                        if (cartDetails[i].type === 'product') { // checking type of product
                            // checking cartDetails(got by getCartDetails api) with buyNow cartDetails(from sessionStorage)
                            if ((cartDetails[i].driveType === cart.driveType) && (cartDetails[i].code === cart.code) &&
                                (cartDetails[i].pole === cart.pole)) {
                                cartDetails[i].productQuantity++;
                            }
                            else {
                                cartProductDataSet = cart;
                            }
                        }
                        else if (cartDetails[i].type === 'accessory') {
                            accessoryNotExist = false;
                            for (let j = 0; j < accessoriesToAdd.length; j++) {
                                if (accessoriesToAdd[j].description === cartDetails[i].description
                                    && accessoriesToAdd[j].pole === cartDetails[i].pole
                                    && accessoriesToAdd[j].driveType === cartDetails[i].driveType) {
                                    cartDetails[i].productQuantity++;
                                }
                                else {
                                    /* some() is used to checks whether at least one of the elements of the array satisfies
                                        the condition then returns true (and does not check the remaining values) otherwise return false*/
                                    if (!cartDetails.some(res => (res.description === accessoriesToAdd[j].description)
                                        && (res.pole === accessoriesToAdd[j].pole) && (res.driveType === accessoriesToAdd[j].driveType)) &&
                                        (!cartAccessoryDataSet.some(res => (res.description === accessoriesToAdd[j].description)
                                            && (res.pole === accessoriesToAdd[j].pole) && (res.driveType === accessoriesToAdd[j].driveType)))) {
                                        cartAccessoryDataSet.push(accessoriesToAdd[j]);
                                    }
                                }
                            }
                        }
                        else if (cartDetails[i].type === 'spare') {
                            spareNotExist = false;
                            for (let j = 0; j < sparesToAdd.length; j++) {
                                if (sparesToAdd[j].description === cartDetails[i].description
                                    && sparesToAdd[j].pole === cartDetails[i].pole
                                    && sparesToAdd[j].driveType === cartDetails[i].driveType) {
                                    cartDetails[i].productQuantity++;
                                }
                                else {
                                    /* some() is used to checks whether at least one of the elements of the array satisfies
                                        the condition then returns true (and does not check the remaining values) otherwise return false*/
                                    if ((!cartDetails.some(res => (res.description === sparesToAdd[j].description)
                                        && (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j].driveType))) &&
                                        (!cartSpareDataSet.some(res => (res.description === sparesToAdd[j].description) &&
                                            (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j].driveType)))) {
                                        cartSpareDataSet.push(sparesToAdd[j]);
                                    }
                                }
                            }
                        }
                    }
                    // checking to push if cartAccessoryDataSet length is greater than 0
                    if (cartAccessoryDataSet.length > 0) {
                        cartDetails.push(...cartAccessoryDataSet);
                    }
                    // checking to push if cartSpareDataSet length is greater than 0
                    if (cartSpareDataSet.length > 0) {
                        cartDetails.push(...cartSpareDataSet);
                    }
                    // checking to push if cartProductDataSet is not undefined
                    if (cartProductDataSet.length > 0) {
                        cartDetails.push(cartProductDataSet);
                        console.log(cartDetails, 'push');
                    }
                    // checking to push if accessory exist
                    if (accessoryNotExist) {
                        cartDetails.push(...accessoriesToAdd);
                    }
                    // checking to push if spare exist
                    if (spareNotExist) {
                        cartDetails.push(...sparesToAdd);
                    }
                }
                const updateCart = {
                    // id: window.atob(localStorage.getItem('cartId')),
                    // user_id: window.atob(localStorage.getItem('id')),
                    id: window.atob(sessionStorage.getItem('cartId')),
                    user_id: window.atob(sessionStorage.getItem('id')),
                    cart: JSON.stringify(cartDetails)
                };
                // calling updateCart api
                return this.subscribe.push(this.apiService.updateCart(updateCart).subscribe(response => {
                    if (response[`code`] === 200) {
                        this.buyNowCartId = updateCart.id;
                        sessionStorage.removeItem('buyNow');
                        this.apiService.totalItemsInCart();
                    }
                }));
            }
        }));
    }
    // checkOut function to check whether any address is selected or not
    checkOut() {
        var _a, _b;
        if (this.toggleAddress === '') {
            this.toggleCanDeactivate = false;
            if (this.buyNowCartId !== '') {
                this.route.navigate(['/cart/payment', (_a = this.selectedAddress) === null || _a === void 0 ? void 0 : _a.id, this.buyNowCartId]);
            }
            else {
                this.route.navigate(['/cart/payment', (_b = this.selectedAddress) === null || _b === void 0 ? void 0 : _b.id, window.atob(sessionStorage.getItem('cartId'))]);
            }
        }
        else {
            this.toaster.success('Please add and select one address to continue');
        }
    }
    // canDeactivate router function to  check is navigation allowed or not
    canDeactivate() {
        if (this.toggleCanDeactivate) { // checking toggleCanDeactivate value
            // if (localStorage.getItem('cartId')) { // checking cartId is present or not
            if (sessionStorage.getItem('cartId')) { // checking cartId is present or not
                if (sessionStorage.getItem('buyNow')) { // checking buyNow is present or not
                    // tslint:disable-next-line: max-line-length
                    const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('buyNow'))); // assigning buyNow value to cartLocalData
                    const accessoriesToAdd = []; // accessoriesToAdd[] to add accessory
                    const sparesToAdd = []; // sparesToAdd[] to add spare;
                    let cart;
                    if (cartLocalData !== null) { // checking if cartLocalData is not null
                        cartLocalData.forEach(cartData => {
                            if (cartData.type === 'product') {
                                // assigning value in cart
                                cart = new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_2__["CartDetails"](cartData.productId, cartData.code, cartData.description, cartData.price, cartData.discountPrice, cartData.type, cartData.pole, cartData.flow, cartData.head, cartData.speed, cartData.power, cartData.engineSpeed, cartData.enginekW, cartData.driveType, cartData.productQuantity);
                            }
                            else if (cartData.type === 'accessory') {
                                accessoriesToAdd.push(cartData); // pushing cartData of type accessory in accessoriesToAdd array
                            }
                            else if (cartData.type === 'spare') {
                                sparesToAdd.push(cartData); // pushing cartData of type spare in sparesToAdd array
                            }
                        });
                    }
                    // creating Promise to get return value
                    return new Promise((resolve) => {
                        // this.subscribe.push(this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
                        this.subscribe.push(this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
                            if (res[`code`] === 200) {
                                let cartDetails = [];
                                cartDetails = JSON.parse(res[`details`].cart); // assigning response value to cartDetails
                                console.log('cartDetails', cartDetails);
                                if (cartDetails.length <= 0) { // checking cartDetails length is smaller or equal to 0
                                    // (...)spread operator takes in an iterable (e.g an array) and expands it into individual elements.
                                    cartDetails.push(Object.assign({}, cart)); // pushing cart value in cartDetails
                                    cartDetails.push(...accessoriesToAdd); // pushing each accessoriesToAdd value in cartDetails
                                    cartDetails.push(...sparesToAdd); // pushing each sparesToAdd value in cartDetails
                                }
                                else {
                                    const cartAccessoryDataSet = new Array(); // creating new accessoryArray
                                    const cartSpareDataSet = new Array(); // creating new spareArray
                                    let cartProductDataSet = {}; // variable to set productData
                                    let spareNotExist = true; // check if spare type is present in cartLocalData
                                    let accessoryNotExist = true; // check if accessory type is present in cartLocalData
                                    let cartNotExist = true;
                                    for (let i = 0; i < cartDetails.length; i++) {
                                        if (cartDetails[i].type === 'product') { // checking type of product
                                            // checking cartDetails(got by getCartDetails api) with buyNow cartDetails(from sessionStorage)
                                            cartNotExist = false;
                                            if (((cartDetails[i].driveType === '' || cartDetails[i].driveType)
                                                === (cart.driveType === '' || cart.driveType))
                                                && (cartDetails[i].code === cart.code) &&
                                                (cartDetails[i].pole === cart.pole)) {
                                                cartDetails[i].productQuantity++;
                                            }
                                            else {
                                                cartProductDataSet = cart;
                                            }
                                        }
                                        else if (cartDetails[i].type === 'accessory') {
                                            accessoryNotExist = false;
                                            for (let j = 0; j < accessoriesToAdd.length; j++) {
                                                if (accessoriesToAdd[j].description === cartDetails[i].description
                                                    && accessoriesToAdd[j].pole === cartDetails[i].pole
                                                    && accessoriesToAdd[j].driveType === cartDetails[i].driveType) {
                                                    cartDetails[i].productQuantity++;
                                                }
                                                else {
                                                    /* some() is used to checks whether at least one of the elements of the array satisfies
                                                        the condition then returns true (and does not check the remaining values) otherwise return false*/
                                                    if (!cartDetails.some(res => (res.description === accessoriesToAdd[j].description)
                                                        && (res.pole === accessoriesToAdd[j].pole) && (res.driveType === accessoriesToAdd[j].driveType)) &&
                                                        (!cartAccessoryDataSet.some(res => (res.description === accessoriesToAdd[j].description)
                                                            && (res.pole === accessoriesToAdd[j].pole) && (res.driveType === accessoriesToAdd[j].driveType)))) {
                                                        cartAccessoryDataSet.push(accessoriesToAdd[j]);
                                                    }
                                                }
                                            }
                                        }
                                        else if (cartDetails[i].type === 'spare') {
                                            spareNotExist = false;
                                            for (let j = 0; j < sparesToAdd.length; j++) {
                                                if (sparesToAdd[j].description === cartDetails[i].description
                                                    && sparesToAdd[j].pole === cartDetails[i].pole
                                                    && sparesToAdd[j].driveType === cartDetails[i].driveType) {
                                                    cartDetails[i].productQuantity++;
                                                }
                                                else {
                                                    /* some() is used to checks whether at least one of the elements of the array satisfies
                                                        the condition then returns true (and does not check the remaining values) otherwise return false*/
                                                    if ((!cartDetails.some(res => (res.description === sparesToAdd[j].description)
                                                        && (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j].driveType))) &&
                                                        (!cartSpareDataSet.some(res => (res.description === sparesToAdd[j].description) &&
                                                            (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j].driveType)))) {
                                                        cartSpareDataSet.push(sparesToAdd[j]);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    // checking to push if cartAccessoryDataSet length is greater than 0
                                    if (cartAccessoryDataSet.length > 0) {
                                        cartDetails.push(...cartAccessoryDataSet);
                                    }
                                    // checking to push if cartSpareDataSet length is greater than 0
                                    if (cartSpareDataSet.length > 0) {
                                        cartDetails.push(...cartSpareDataSet);
                                    }
                                    // checking to push if cartProductDataSet is not undefined
                                    if (Object.keys(cartProductDataSet).length > 0) {
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
                                const updateCart = {
                                    // id: window.atob(localStorage.getItem('cartId')),
                                    // user_id: window.atob(localStorage.getItem('id')),
                                    id: window.atob(sessionStorage.getItem('cartId')),
                                    user_id: window.atob(sessionStorage.getItem('id')),
                                    cart: JSON.stringify(cartDetails)
                                };
                                // calling updateCart api
                                console.log(cartDetails, 'ooo');
                                return this.subscribe.push(this.apiService.updateCart(updateCart).subscribe(response => {
                                    if (response[`code`] === 200) {
                                        sessionStorage.removeItem('buyNow');
                                        this.apiService.totalItemsInCart();
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
                // localStorage.setItem('cartId', window.btoa(this.buyNowCartId)); // setting buyNowCartId as cartId in localStorage
                sessionStorage.setItem('cartId', window.btoa(this.buyNowCartId)); // setting buyNowCartId as cartId in sessionStorage
                this.apiService.totalItemsInCart(); // calling totalItemsInCart function to update cartQuantity'
                sessionStorage.removeItem('buyNow');
                return true;
            }
        }
        else {
            return true;
        }
    }
    // used to unsubscribe the subscription
    ngOnDestroy() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscribe.forEach(s => {
            if (s) {
                s.unsubscribe();
            }
        });
    }
}
CartAddressComponent.ɵfac = function CartAddressComponent_Factory(t) { return new (t || CartAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"])); };
CartAddressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartAddressComponent, selectors: [["app-cart-address"]], decls: 137, vars: 33, consts: [["bdColor", "rgb(0,0,0)", "size", "medium", "color", "#2e94ef", "type", "ball-newton-cradle", 3, "fullScreen"], [2, "color", "white"], [1, "main-container", "cartpage", "addresspage"], [1, "breadcrum"], [1, "container"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "cart-scale"], [1, "cart-scale-inner"], [1, "scale-no", "active-scale"], [2, "pointer-events", "none"], [1, "scale-no"], [1, "cart-section"], [1, "cart-inner"], [1, "cart"], [1, "address-row", "same-add-row"], [1, "same-address"], ["class", "address-box", 4, "ngFor", "ngForOf"], [1, "address-box"], ["type", "radio", "name", "address", "id", "address", 3, "checked", "change"], ["for", "address"], [1, "address-row", 3, "ngStyle"], [3, "formGroup"], [1, "address-feild"], ["formControlName", "title", "required", "", 3, "ngClass"], ["value", "", "selected", "", "disabled", ""], ["value", "Mr"], ["value", "Ms"], ["value", " "], ["class", "error-addressMsg", 4, "ngIf"], [1, "name-container"], [1, "address-feild", "address2"], ["type", "text", "placeholder", "First Name", "formControlName", "first_name", "appTextOnly", "", "required", "", 3, "ngClass"], [4, "ngIf"], ["type", "text", "placeholder", "Middle Name", "appTextOnly", "", "formControlName", "middle_name"], ["type", "text", "placeholder", "Last Name", "formControlName", "last_name", "appTextOnly", "", "required", "", 3, "ngClass"], ["type", "text", "placeholder", "Contact Number", "appNumOnly", "", "formControlName", "phone", "required", "", 3, "ngClass", "input"], ["type", "text", "placeholder", "Address", "formControlName", "house_no", "required", "", 3, "ngClass"], ["formControlName", "country", "required", "", 3, "ngClass", "change"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "state", "required", "", 3, "ngClass", "change"], ["formControlName", "city", "required", "", 3, "ngClass"], ["type", "text", "placeholder", "1234", "appNumOnly", "", "formControlName", "pincode", "required", "", 3, "ngClass", "input"], [1, "blue-button", 3, "click"], ["class", "price-detail", 4, "ngIf"], ["type", "radio", "name", "address", 3, "id", "checked", "change"], [3, "for"], [1, "error-addressMsg"], [3, "value"], [1, "price-detail"], [1, "price-title"], ["class", "price-row", 4, "ngFor", "ngForOf"], [1, "price-row", "total-price"], [1, "left-price-spare"], ["class", "left-price-spare", 4, "ngIf"], ["disabled", "", 4, "ngIf"], [1, "price-row"], ["class", "left-price", 4, "ngIf", "ngIfElse"], ["productSpare", ""], [1, "right-price"], [1, "left-price"], ["disabled", ""], [1, "tooltip"], [1, "tooltiptext"], [1, "tooltip", 3, "click"]], template: function CartAddressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Use saved addresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CartAddressComponent_div_41_Template, 4, 8, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartAddressComponent_Template_input_change_43_listener() { return ctx.getSelectedAddress("newAddress"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "New Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Contact Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "form", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "select", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Select title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Mr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Ms.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, CartAddressComponent_p_63_Template, 2, 0, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](71, CartAddressComponent_ng_container_71_Template, 2, 1, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Middle Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, CartAddressComponent_ng_container_82_Template, 2, 1, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Contact Number ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CartAddressComponent_Template_input_input_88_listener($event) { return ctx.onInputChange($event.target.value, "phone"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](89, CartAddressComponent_ng_container_89_Template, 3, 2, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Address (House No., Building , Street, Area) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](98, CartAddressComponent_p_98_Template, 2, 0, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Country ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "select", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartAddressComponent_Template_select_change_104_listener($event) { return ctx.onChangeCountry($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, CartAddressComponent_option_105_Template, 2, 2, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, CartAddressComponent_p_106_Template, 2, 0, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "State ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CartAddressComponent_Template_select_change_112_listener($event) { return ctx.onChangeState($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Please select state ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](115, CartAddressComponent_option_115_Template, 2, 2, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](116, CartAddressComponent_p_116_Template, 2, 0, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "City ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "select", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " Please select state first ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, CartAddressComponent_option_125_Template, 2, 2, "option", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, CartAddressComponent_p_126_Template, 2, 0, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Postal code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function CartAddressComponent_Template_input_input_132_listener($event) { return ctx.onInputChange($event.target.value, "zip"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](133, CartAddressComponent_ng_container_133_Template, 3, 2, "ng-container", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartAddressComponent_Template_div_click_134_listener() { return ctx.saveAddress(ctx.addressForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Save this address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](136, CartAddressComponent_div_136_Template, 25, 7, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.addressList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.emptyAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c2, ctx.toggleAddress === "newAddress" ? "flex" : "none"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addressForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.invalid) && ((ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.touched) || (ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.valid) && ((ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.touched) || (ctx.formControl == null ? null : ctx.formControl.title == null ? null : ctx.formControl.title.dirty)) ? "green" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.invalid) && ((ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.touched) || (ctx.formControl == null ? null : ctx.formControl.country == null ? null : ctx.formControl.country.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.invalid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.valid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)) ? "green" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.stateInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.invalid) && ((ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.touched) || (ctx.formControl == null ? null : ctx.formControl.state == null ? null : ctx.formControl.state.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.invalid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.valid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)) ? "green" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cityInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.invalid) && ((ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.touched) || (ctx.formControl == null ? null : ctx.formControl.city == null ? null : ctx.formControl.city.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ((ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.errors == null ? null : ctx.formControl.pincode.errors.required) || (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.errors == null ? null : ctx.formControl.pincode.errors.pattern)) && ((ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.touched) || (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.valid) && ((ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.touched) || (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.dirty)) ? "green" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.invalid) && ((ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.touched) || (ctx.formControl == null ? null : ctx.formControl.pincode == null ? null : ctx.formControl.pincode.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length > 0);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _directives_text_only_directive__WEBPACK_IMPORTED_MODULE_8__["TextOnlyDirective"], _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_9__["NumonlyDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhcnQvY2FydC1hZGRyZXNzL2NhcnQtYWRkcmVzcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartAddressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-address',
                templateUrl: './cart-address.component.html',
                styleUrls: ['./cart-address.component.css']
            }]
    }], function () { return [{ type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "KrsS":
/*!***********************************************!*\
  !*** ./src/app/services/route-guard.guard.ts ***!
  \***********************************************/
/*! exports provided: RouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuard", function() { return RouteGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class RouteGuard {
    constructor(toaster, router) {
        this.toaster = toaster;
        this.router = router;
    }
    canActivate(route, state) {
        // to guard the route if user-id present the allow entry to particular component otherwise navigate to sign-in.
        if (sessionStorage.getItem('id')) {
            return true;
        }
        else {
            this.toaster.success('Please sign-in to continue');
            this.router.navigate(['/sign-in']);
        }
    }
}
RouteGuard.ɵfac = function RouteGuard_Factory(t) { return new (t || RouteGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RouteGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouteGuard, factory: RouteGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouteGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "L2lf":
/*!*******************************************************************!*\
  !*** ./src/app/views/cart/cart-details/cart-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: CartDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailsComponent", function() { return CartDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dataModels/cart-details */ "1UKJ");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../directives/number-only/numonly.directive */ "3iOn");







const _c0 = ["input"];
function CartDetailsComponent_ng_container_9_div_25_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", eachProduct_r8 == null ? null : eachProduct_r8.description, "");
} }
function CartDetailsComponent_ng_container_9_div_25_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachProduct_r8 == null ? null : eachProduct_r8.driveType);
} }
function CartDetailsComponent_ng_container_9_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CartDetailsComponent_ng_container_9_div_25_p_8_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartDetailsComponent_ng_container_9_div_25_p_9_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailsComponent_ng_container_9_div_25_Template_span_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const productCount_r9 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.decrementProductQuantity(productCount_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailsComponent_ng_container_9_div_25_Template_span_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const productCount_r9 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.incrementProductQuantity(productCount_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", eachProduct_r8.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachProduct_r8 == null ? null : eachProduct_r8.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachProduct_r8 == null ? null : eachProduct_r8.description) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachProduct_r8 == null ? null : eachProduct_r8.driveType) !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", eachProduct_r8 == null ? null : eachProduct_r8.productQuantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", (eachProduct_r8 == null ? null : eachProduct_r8.discountPrice) > 0 ? eachProduct_r8 == null ? null : eachProduct_r8.discountPrice : eachProduct_r8 == null ? null : eachProduct_r8.price, "");
} }
function CartDetailsComponent_ng_container_9_div_29_div_1_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", eachProduct_r17 == null ? null : eachProduct_r17.driveType, ")");
} }
function CartDetailsComponent_ng_container_9_div_29_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartDetailsComponent_ng_container_9_div_29_div_1_p_3_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachProduct_r17 == null ? null : eachProduct_r17.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachProduct_r17 == null ? null : eachProduct_r17.driveType) !== "");
} }
function CartDetailsComponent_ng_container_9_div_29_ng_template_2_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", eachProduct_r17 == null ? null : eachProduct_r17.description, ")");
} }
function CartDetailsComponent_ng_container_9_div_29_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartDetailsComponent_ng_container_9_div_29_ng_template_2_p_3_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](eachProduct_r17 == null ? null : eachProduct_r17.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachProduct_r17 == null ? null : eachProduct_r17.description) !== "");
} }
function CartDetailsComponent_ng_container_9_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartDetailsComponent_ng_container_9_div_29_div_1_Template, 4, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CartDetailsComponent_ng_container_9_div_29_ng_template_2_Template, 4, 2, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const eachProduct_r17 = ctx.$implicit;
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (eachProduct_r17 == null ? null : eachProduct_r17.type) !== "spare")("ngIfElse", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", (eachProduct_r17 == null ? null : eachProduct_r17.productQuantity) * ((eachProduct_r17 == null ? null : eachProduct_r17.discountPrice) > 0 ? eachProduct_r17 == null ? null : eachProduct_r17.discountPrice : eachProduct_r17 == null ? null : eachProduct_r17.price), "");
} }
function CartDetailsComponent_ng_container_9_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Dealer Discount (10%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " (In AUD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r5.finalPrice + ctx_r5.gstPrice - ctx_r5.dealerDiscountAmount, "");
} }
function CartDetailsComponent_ng_container_9_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailsComponent_ng_container_9_div_50_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.onContinue("sign-in"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Click here to sign-in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartDetailsComponent_ng_container_9_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailsComponent_ng_container_9_ng_container_51_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.onContinue("continue"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Continue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CartDetailsComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CartDetailsComponent_ng_container_9_div_25_Template, 19, 6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h3", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Price Detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CartDetailsComponent_ng_container_9_div_29_Template, 7, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Sub Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Shipping & Handling");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Total (including GST@10%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " (In AUD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, CartDetailsComponent_ng_container_9_div_49_Template, 7, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, CartDetailsComponent_ng_container_9_div_50_Template, 6, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, CartDetailsComponent_ng_container_9_ng_container_51_Template, 4, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.products);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r0.grandTotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r0.shippingCharges, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx_r0.finalPrice + ctx_r0.gstPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.applyDealerDiscount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.toggleBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.toggleBtn);
} }
function CartDetailsComponent_ng_container_10_p_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your cart is currently empty. Please ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailsComponent_ng_container_10_p_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.redirect("sign-in"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sign-in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailsComponent_ng_container_10_p_3_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.redirect("sign-up"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign-up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartDetailsComponent_ng_container_10_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Your cart is currently empty. Please select a pump or spare part to purchase.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartDetailsComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartDetailsComponent_ng_container_10_p_3_Template, 8, 0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CartDetailsComponent_ng_container_10_p_4_Template, 2, 0, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.toggleBtn);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.toggleBtn);
} }
function CartDetailsComponent_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "If you remove this, then accessories related to this will be removed and spares will be charged as per original price.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/home"]; };
class CartDetailsComponent {
    constructor(apiService, router, activatedRoute) {
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
        this.showDeleteMsg = false; // used to show/hide delete popup content
        this.applyDealerDiscount = false; // used to apply for dealer discount
        this.dealerDiscountAmount = 0; // initial dealer discount
    }
    ngOnInit() {
        // if (localStorage.getItem('id')) { // checking if userId is present or not
        if (sessionStorage.getItem('id')) {
            // checking if userId is present or not
            // console.log('My iD', window.atob(sessionStorage.getItem('id')))
            this.toggleBtn = true; // assign toggleBtn to true
            // if (localStorage.getItem('cartId')) { // checking cartId is present or not
            if (sessionStorage.getItem('cartId')) {
                // checking cartId is present or not
                if (window.atob(sessionStorage.getItem('userType')) ===
                    'Dealer' &&
                    window.atob(sessionStorage.getItem('userStatus')) === 'D') {
                    this.applyDealerDiscount = true;
                    if (window.atob(sessionStorage.getItem('userDiscount')) === null) {
                        this.apiService.dealerDiscount().subscribe(res => {
                            if (res[`return`] === true) {
                                this.dealerDiscountPercentage = res[`dealer_discount`];
                                this.dealerDiscountPercentage = this.dealerDiscountPercentage * 0.01;
                            }
                        });
                    }
                    else {
                        let userDiscount = window.atob(sessionStorage.getItem('userDiscount'));
                        this.dealerDiscountPercentage = +userDiscount * 0.01;
                    }
                }
                if (sessionStorage.getItem('cart')) {
                    // checking cart data is present or not
                    // console.log('my cart', window.atob(sessionStorage.getItem('cart')))
                    // console.log('my cartId', window.atob(sessionStorage.getItem('cartId')))
                    // console.log('userId', window.atob(sessionStorage.getItem('id')))
                    this.updateCartDetails(window.atob(sessionStorage.getItem('cart')), 'session');
                }
                else {
                    // getting data from cartResolver
                    this.subscribe.push(this.activatedRoute.data.subscribe((res) => {
                        this.products = res[`cartData`];
                        this.insertImages(this.products);
                        console.log('products', this.products);
                        this.getProductQuantity();
                        this.findGrandTotal();
                    }));
                }
            }
            else {
                this.getCartItems();
                if (this.products.length > 0) {
                    const cartData = {
                        // user_id: window.atob(localStorage.getItem('id')),
                        user_id: window.atob(sessionStorage.getItem('id')),
                        cart: JSON.stringify(this.products),
                    };
                    // calling addToCart api to add items to cart
                    this.subscribe.push(this.apiService.addToCart(cartData).subscribe((res) => {
                        if (res[`code`] === 200) {
                            sessionStorage.removeItem('cart');
                            // localStorage.setItem('cartId', window.btoa(res[`cart_details`].id));
                            sessionStorage.setItem('cartId', window.btoa(res[`cart_details`].id));
                            this.products = JSON.parse(res[`cart_details`].cart);
                            this.getProductQuantity();
                            this.findGrandTotal();
                            this.apiService.totalItemsInCart();
                        }
                    }));
                }
            }
        }
        else {
            // if (localStorage.getItem('cardId') === null) {
            if (sessionStorage.getItem('cardId') === null) {
                this.getCartItems();
                this.getProductQuantity();
                this.toggleBtn = false;
            }
        }
    }
    insertImages(products) {
        let pumpModel;
        products.forEach((element) => {
            if (element.type === 'product') {
                pumpModel = element.description.split(' ');
            }
            else {
                pumpModel = '';
            }
            if (pumpModel[0] === 'Surface' &&
                (pumpModel[2] === 'Close' || pumpModel[2] === 'Bare')) {
                element[`img`] = 'assets/images/AGCACC/AGCApumpcopy.png';
                // this.productImages = 'assets/images/banner/SAP-AG-Home.jpg';
            }
            else if (pumpModel[0] === 'Multipurpose' &&
                (pumpModel[1] === 'Close' || pumpModel[1] === 'Bare')) {
                element[`img`] = 'assets/images/banner/DC.png';
                // this.productImages = 'assets/images/banner/DC.png';
            }
            else if (element.type === 'accessory' || element.type === 'spare') {
                switch (element.code) {
                    case 'Baseplate':
                        element[`img`] = 'assets/images/SparesImg/Baseplate_pic.png';
                        break;
                    case 'DRP':
                        element[`img`] = 'assets/images/SparesImg/DRP_pic.png';
                        break;
                    case 'Rotor':
                        element[`img`] = 'assets/images/SparesImg/rotor.jpg';
                        break;
                    case 'Stator':
                        element[`img`] = 'assets/images/icons/stator.png';
                        break;
                    case 'Mech Seal':
                        element[`img`] = 'assets/images/SparesImg/Mech_seal.jpeg';
                        break;
                    case 'UJ M Kit':
                        element[`img`] = 'assets/images/SparesImg/UJ_KIT.jpg';
                        break;
                    case 'Pump Lantern':
                        element[`img`] = 'assets/images/SparesImg/PUMPLANTERN.BMP';
                        break;
                    case 'Foot':
                        element[`img`] = 'assets/images/SparesImg/FOOT.BMP';
                        break;
                    case 'Tie Rod':
                        element[`img`] = 'assets/images/SparesImg/TIEROD.BMP';
                        break;
                    case 'Pump Housing':
                        element[`img`] = 'assets/images/SparesImg/PUMPHOUSING.BMP';
                        break;
                    case 'End Cover':
                        element[`img`] = 'assets/images/SparesImg/END_COVER.BMP';
                        break;
                    case 'Seal Plate':
                        element[`img`] = 'assets/images/SparesImg/SEAL_PLATE.BMP';
                        break;
                    case 'Mech Seal Housing':
                        element[`img`] = 'assets/images/SparesImg/MECHSEALHOUSING.BMP';
                        break;
                    case 'Shaft Stub Price':
                        element[`img`] = 'assets/images/SparesImg/SHAFT.BMP';
                        break;
                    case 'Coupling Rod':
                        element[`img`] = 'assets/images/SparesImg/COUPLINGROD.BMP';
                        break;
                    case 'B.S.R. Retaining Ring':
                        element[`img`] = 'assets/images/SparesImg/BOOTSEALRETAINER.BMP'; // will change
                        break;
                    case 'Boot Seal Reatainer':
                        element[`img`] = 'assets/images/SparesImg/BOOTSEALRETAINER.BMP';
                        break;
                    case 'Boot Seal Support Ring':
                        element[`img`] =
                            'assets/images/SparesImg/Boot_Seal_Support_Ring.bmp';
                        break;
                    case 'Boot Seal':
                        element[`img`] = 'assets/images/SparesImg/BOOT_SEAL.BMP';
                        break;
                    case 'Foot And Face Mounted Motor 240v 4Pole':
                        element[`img`] =
                            'assets/images/SparesImg/Foot_face_mounted_motor.jpg';
                        break;
                    case 'Foot And Face Mounted Motor 240v 6Pole':
                        element[`img`] =
                            'assets/images/SparesImg/Foot_face_mounted_motor.jpg';
                        break;
                    case 'Bearing Cover':
                        element[`img`] = 'assets/images/SparesImg/BEARINGCOVER.BMP';
                        break;
                    case 'Bearing Spacer External':
                        element[`img`] = 'assets/images/SparesImg/BEARINGSPACER.BMP';
                        break;
                    case 'Mechanical Seal':
                        element[`img`] =
                            'assets/images/SparesImg/Mechanical-Seal_image.jpg';
                        break;
                    case 'Ball_Bearing':
                        element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP';
                        break;
                    case 'Foot Support For Stator Housing':
                        element[`img`] =
                            'assets/images/SparesImg/FOOT_FOR_STATOR_HOUSING.BMP';
                        break;
                    case 'Foot Support For Bearing Housing':
                        element[`img`] =
                            'assets/images/SparesImg/FOOTFORBEARINGHOUSING.BMP';
                        break;
                    case 'Stator Housing':
                        element[`img`] = 'assets/images/SparesImg/STATORHOUSING.BMP';
                        break;
                    case 'Bonded Bush':
                        element[`img`] = 'assets/images/SparesImg/BONDEDBUSH.BMP';
                        break;
                    case 'Bearning Housing':
                        element[`img`] = 'assets/images/SparesImg/BEARINGHOUSING.BMP';
                        break;
                    case 'Ball Bearing Small':
                        element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP';
                        break;
                    case 'Ball Bearing Large':
                        element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP';
                        break;
                    case 'Mech Seal Retainer':
                        element[`img`] =
                            'assets/images/SparesImg/MECHANICHALSEALRETAINER.BMP';
                        break;
                    case 'Stator Support Ring':
                        element[`img`] = 'assets/images/SparesImg/STATOR_SUPPORT_RING.jpg';
                        break;
                    case 'Drive Shaft':
                        element[`img`] = 'assets/images/SparesImg/SHAFT.BMP.BMP';
                        break;
                    case 'Abutment Ring':
                        element[`img`] = 'assets/images/SparesImg/ABUTMENT_RING.jpg';
                        break;
                    case 'Bearing':
                        element[`img`] = 'assets/images/SparesImg/BALLBEARING.BMP';
                        break;
                    default:
                        element[`img`] = 'assets/images/icons/accessories2.png';
                }
                // this.productImages = 'assets/images/icons/accessories.png';
            }
        });
    }
    // function to getProductQuantity of total products in cart
    getProductQuantity() {
        this.productQuantity = 0;
        this.products.forEach((product) => {
            this.productQuantity = product.productQuantity + this.productQuantity;
        });
    }
    // function to update cart according to type
    updateCartDetails(cartArray, type) {
        if (type === 'session') {
            // checking if cart data is present in sessionStorage or not
            // console.log('session');
            const cartLocalData = JSON.parse(cartArray); // assigning sessionStoraege cart value to cartLocalData
            let cart = [];
            const accessoriesToAdd = []; // accessoriesToAdd[] to add accessory
            const sparesToAdd = []; // sparesToAdd[] to add spare
            if (cartLocalData !== null) {
                // checking if cartLocalData is not null
                cartLocalData.forEach((cartData) => {
                    if (cartData.type === 'product') {
                        // assigning value in cart
                        cart.push(new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_1__["CartDetails"](cartData.productId, cartData.code, cartData.description, cartData.price, cartData.discountPrice, cartData.type, cartData.pole, cartData.flow, cartData.head, cartData.speed, cartData.power, cartData.engineSpeed, cartData.enginekW, cartData.driveType, cartData.productQuantity));
                    }
                    else if (cartData.type === 'accessory') {
                        accessoriesToAdd.push(cartData); // pushing cartData of type accessory in accessoriesToAdd array
                    }
                    else if (cartData.type === 'spare') {
                        sparesToAdd.push(cartData); // pushing cartData of type spare in sparesToAdd array
                    }
                });
                this.subscribe.push(this.activatedRoute.data.subscribe((res) => {
                    let cartDetails = [];
                    cartDetails = res[`cartData`]; // assigning data from cartResolver to cartDetails
                    if (cartDetails.length <= 0) {
                        // checking cartDetails length is smaller or equal to 0
                        // (...)spread operator takes in an iterable (e.g an array) and expands it into individual elements.
                        if (cart.length) {
                            cartDetails.push(...cart); // pushing cart value in cartDetails
                        }
                        if (accessoriesToAdd.length) {
                            cartDetails.push(...accessoriesToAdd); // pushing each accessoriesToAdd value in cartDetails
                        }
                        if (sparesToAdd.length) {
                            cartDetails.push(...sparesToAdd); // pushing each sparesToAdd value in cartDetails
                        }
                        const updateCartData = {
                            // id: window.atob(localStorage.getItem('cartId')),
                            // user_id: window.atob(localStorage.getItem('id')),
                            id: window.atob(sessionStorage.getItem('cartId')),
                            user_id: window.atob(sessionStorage.getItem('id')),
                            cart: JSON.stringify(cartDetails),
                        };
                        // calling updateCart api
                        this.apiService
                            .updateCart(updateCartData)
                            .subscribe((response) => {
                            if (response[`code`] === 200) {
                                sessionStorage.removeItem('cart');
                                this.apiService
                                    .getCartById(updateCartData.id)
                                    .subscribe((response) => {
                                    if (response[`code`] === 200) {
                                        this.products = JSON.parse(response[`details`].cart);
                                        this.insertImages(this.products);
                                        this.getProductQuantity();
                                        this.findGrandTotal();
                                        this.apiService.totalItemsInCart();
                                    }
                                });
                            }
                        });
                    }
                    else {
                        const cartAccessoryDataSet = new Array(); // creating new accessoryArray
                        const cartSpareDataSet = new Array(); // creating new spareArray
                        let cartProductDataSet; // variable to set productData
                        let spareNotExist = true; // check if spare type is present in cartLocalData
                        let accessoryNotExist = true; // check if accessory type is present in cartLocalData
                        let cartNotExist = true; // check if cart type is present in cartLocalData
                        // cartDetails.filter(eachData => {
                        //   if (eachData.motor === null){
                        //     return eachData.motor = {volt: 0};
                        //   }
                        // });
                        // for loop starts
                        for (let i = 0; i < cartDetails.length; i++) {
                            if (cartDetails[i].type === 'product') {
                                // checking productType
                                cartNotExist = false;
                                for (let j = 0; j < cart.length; j++) {
                                    if ((cartDetails[i].driveType === '' ||
                                        cartDetails[i].driveType) ===
                                        (cart[j].driveType === '' || cart[j].driveType) &&
                                        cartDetails[i].code === cart[j].code &&
                                        cartDetails[i].pole === cart[j].pole) {
                                        cartDetails[i].productQuantity++;
                                    }
                                    else {
                                        cartProductDataSet = cart;
                                    }
                                }
                            }
                            else if (cartDetails[i].type === 'accessory') {
                                accessoryNotExist = false;
                                for (let j = 0; j < accessoriesToAdd.length; j++) {
                                    if (accessoriesToAdd[j].description ===
                                        cartDetails[i].description &&
                                        accessoriesToAdd[j].driveType ===
                                            cartDetails[i].driveType &&
                                        accessoriesToAdd[j].pole === cartDetails[i].pole) {
                                        // checking productType
                                        cartDetails[i].productQuantity++;
                                    }
                                    else {
                                        /* some() is used to checks whether at least one of the elements of the array satisfies
                                        the condition then returns true (and does not check the remaining values) otherwise return false*/
                                        if (!cartDetails.some((res) => res.description ===
                                            accessoriesToAdd[j].description &&
                                            res.pole === accessoriesToAdd[j].pole &&
                                            res.driveType === accessoriesToAdd[j].driveType) &&
                                            !cartAccessoryDataSet.some((res) => res.description ===
                                                accessoriesToAdd[j].description &&
                                                res.pole === accessoriesToAdd[j].pole &&
                                                res.driveType === accessoriesToAdd[j].driveType)) {
                                            cartAccessoryDataSet.push(accessoriesToAdd[j]);
                                        }
                                    }
                                }
                            }
                            else if (cartDetails[i].type === 'spare') {
                                // checking productType
                                spareNotExist = false;
                                // console.log(cartDetails)
                                // console.log(sparesToAdd)
                                for (let j = 0; j < sparesToAdd.length; j++) {
                                    if (sparesToAdd[j].description ===
                                        cartDetails[i].description &&
                                        sparesToAdd[j].pole === cartDetails[i].pole &&
                                        sparesToAdd[j].driveType === cartDetails[i].driveType) {
                                        cartDetails[i].productQuantity++;
                                    }
                                    else {
                                        /* some() is used to checks whether at least one of the elements of the array satisfies
                                        the condition then returns true (and does not check the remaining values) otherwise return false*/
                                        if (!cartDetails.some((res) => {
                                            var _a;
                                            return res.description === sparesToAdd[j].description &&
                                                res.pole === sparesToAdd[j].pole &&
                                                res.driveType === ((_a = sparesToAdd[j]) === null || _a === void 0 ? void 0 : _a.driveType);
                                        }) &&
                                            !cartSpareDataSet.some((res) => {
                                                var _a;
                                                return res.description === sparesToAdd[j].description &&
                                                    res.pole === sparesToAdd[j].pole &&
                                                    res.driveType === ((_a = sparesToAdd[j]) === null || _a === void 0 ? void 0 : _a.driveType);
                                            })) {
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
                        if (cartProductDataSet !== undefined || (cartProductDataSet === null || cartProductDataSet === void 0 ? void 0 : cartProductDataSet.length)) {
                            cartDetails.push(...cartProductDataSet);
                        }
                        // checking to push if accessory exist
                        if (accessoryNotExist) {
                            cartDetails.push(...accessoriesToAdd);
                        }
                        // checking to push if spare exist
                        if (spareNotExist) {
                            cartDetails.push(...sparesToAdd);
                        }
                        // checking to push if cart exist
                        if (cartNotExist) {
                            cartDetails.push(...cart);
                        }
                        const updateCartData = {
                            // id: window.atob(localStorage.getItem('cartId')),
                            // user_id: window.atob(localStorage.getItem('id')),
                            id: window.atob(sessionStorage.getItem('cartId')),
                            user_id: window.atob(sessionStorage.getItem('id')),
                            cart: JSON.stringify(cartDetails),
                        };
                        // calling updateCart api
                        this.apiService
                            .updateCart(updateCartData)
                            .subscribe((response) => {
                            if (response[`code`] === 200) {
                                sessionStorage.removeItem('cart');
                                this.apiService
                                    .getCartById(updateCartData.id)
                                    .subscribe((response) => {
                                    if (response[`code`] === 200) {
                                        // console.log(res, 'output')
                                        this.products = JSON.parse(response[`details`].cart);
                                        this.insertImages(this.products);
                                        this.getProductQuantity();
                                        this.findGrandTotal();
                                        this.apiService.totalItemsInCart();
                                    }
                                });
                            }
                        });
                    }
                }));
            }
        }
        else if (type === 'cart') {
            const updateCart = {
                // id: window.atob(localStorage.getItem('cartId')),
                // user_id: window.atob(localStorage.getItem('id')),
                id: window.atob(sessionStorage.getItem('cartId')),
                user_id: window.atob(sessionStorage.getItem('id')),
                cart: JSON.stringify(cartArray),
            };
            this.subscribe.push(this.apiService.updateCart(updateCart).subscribe((res) => {
                if (res[`code`] === 200) {
                    this.apiService.totalItemsInCart();
                }
            }));
        }
    }
    // function to getCartItems from sessionStorage
    getCartItems() {
        if (sessionStorage.getItem('cart')) {
            this.products = JSON.parse(window.atob(sessionStorage.getItem('cart')));
            // console.log(this.products, 'products')
            this.insertImages(this.products);
            // this.sparePriceChange(this.products);
            this.findGrandTotal();
        }
        else {
            this.products = [];
        }
    }
    // sparePriceChange(products: CartDetails[]): void{
    //   products.filter(eachProduct => {
    //     if (eachProduct.type === 'spare'){
    //       eachProduct.price = eachProduct.discountPrice;
    //     }
    //   });
    // }
    // function to findGrandTotal
    findGrandTotal() {
        let productPrice = 0; // default product price
        // calculating eachProduct price using forEach loop for products array
        this.products.forEach((ele) => {
            if (ele.productQuantity) {
                // checking if productQuantity is greater than 0
                // multiplying eachProduct price with eachProduct quantity and adding the result with productPrice
                productPrice =
                    (ele.discountPrice > 0 ? ele.discountPrice : ele.price) *
                        ele.productQuantity +
                        productPrice;
            }
        });
        this.grandTotal = productPrice;
        this.shippingCharges = Math.round(+(0.05 * this.grandTotal).toFixed(3)); // 5% of totalCharges
        this.finalPrice = Math.round(this.grandTotal + this.shippingCharges); // adding price with shippingCharges and assigning to total
        this.gstPrice = Math.round(+(0.1 * this.finalPrice).toFixed(3));
        this.dealerDiscountAmount = Math.round(+(this.dealerDiscountPercentage * (this.finalPrice + this.gstPrice)).toFixed(3));
    }
    // function to decrease productQuantity
    decrementProductQuantity(productCount) {
        let productItemQuantity = this.products[productCount].productQuantity; // assign particular productQuantity according to index number
        productItemQuantity = productItemQuantity - 1; // decrementing productQuantity by 1
        if (productItemQuantity < 1) {
            // checking if productQuantity is less than 1 or not to open delete popup
            const show = document.getElementById('cartdeletemodal');
            show.classList.add('in');
            show.style.display = 'block';
            this.deleteItemIndex = productCount;
            const productId = this.products[this.deleteItemIndex].productId;
            const productType = this.products[this.deleteItemIndex].type;
            if (productType === 'product') {
                const productData = this.products.some((eachProduct) => {
                    return (eachProduct.type === 'accessory' &&
                        eachProduct.productId === productId);
                });
                if (productData) {
                    this.showDeleteMsg = true;
                }
                else {
                    this.showDeleteMsg = false;
                }
            }
            else {
                this.showDeleteMsg = false;
            }
        }
        else {
            // if greater than 1 then adding the decremented productQuantity
            this.products[productCount].productQuantity = productItemQuantity;
            // if (localStorage.getItem('id') === null) { // checking if userId is present or not
            if (sessionStorage.getItem('id') === null) {
                // checking if userId is present or not
                sessionStorage.setItem('cart', window.btoa(JSON.stringify(this.products))); // setting the product value in sessionStorage
            }
            else {
                this.updateCartDetails(this.products, 'cart');
            }
            this.getProductQuantity();
        }
        this.findGrandTotal();
    }
    // function to remove item from cart
    removeItemFromCart() {
        let productIndex;
        if (this.deleteItemIndex > -1) {
            // checking deleteItemIndex i.e. product Index is greater than -1 or not
            const productId = this.products[this.deleteItemIndex].productId;
            const productType = this.products[this.deleteItemIndex].type;
            if (productType === 'product') {
                //this.products = this.products.filter( eachProduct => eachProduct.type === 'accessory' && eachProduct.productId !== productId );
                this.products = this.products.filter((eachProduct) => {
                    return !(eachProduct.type === 'accessory' &&
                        eachProduct.productId === productId);
                });
                productIndex = this.products.findIndex((eachProduct) => eachProduct.productId === productId &&
                    eachProduct.type === 'product');
            }
            if (productIndex !== undefined && productIndex !== -1) {
                // splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
                this.products.splice(productIndex, 1); // removing the particular product from array
                this.products.forEach((eachProduct) => {
                    if (eachProduct.type === 'spare' &&
                        eachProduct.productId === productId) {
                        eachProduct.discountPrice = 0;
                    }
                });
            }
            else {
                this.products.splice(this.deleteItemIndex, 1); // removing the particular product from array
                this.products.forEach((eachProduct) => {
                    if (eachProduct.type === 'spare' &&
                        eachProduct.productId === productId) {
                        eachProduct.discountPrice = 0;
                    }
                });
            }
        }
        // if (localStorage.getItem('id') === null) { // checking if userId is present or not
        if (sessionStorage.getItem('id') === null) {
            // checking if userId is present or not
            sessionStorage.setItem('cart', window.btoa(JSON.stringify(this.products))); // setting products in sessionStorage
        }
        else {
            this.updateCartDetails(this.products, 'cart');
        }
        // hiding delete Modal after delete is done.
        const show = document.getElementById('cartdeletemodal');
        show.classList.remove('in');
        show.style.display = 'none';
        this.findGrandTotal();
        this.apiService.totalItemsInCart();
    }
    // function to hide delete Modal
    closeDeleteModal() {
        const show = document.getElementById('cartdeletemodal');
        show.classList.remove('in');
        show.style.display = 'none';
    }
    // function to increment productQuantity
    incrementProductQuantity(productCount) {
        let productTotal = this.products[productCount].productQuantity; // assign particular productQuantity
        productTotal++; // incrementing productQuantity by 1
        this.products[productCount].productQuantity = productTotal; // assigning the incremented productQuantity to productArray
        // if (localStorage.getItem('id') === null) { // checking if userID present or not
        if (sessionStorage.getItem('id') === null) {
            // checking if userID present or not
            sessionStorage.setItem('cart', window.btoa(JSON.stringify(this.products)));
        }
        else {
            this.updateCartDetails(this.products, 'cart');
        }
        this.getProductQuantity();
        this.findGrandTotal();
    }
    // function to navigate after continue or sin-in/sign-up
    onContinue(type) {
        // if (localStorage.getItem('id') && type === 'continue') {
        if (sessionStorage.getItem('id') && type === 'continue') {
            // if (localStorage.getItem('cartId')) {
            if (sessionStorage.getItem('cartId')) {
                this.router.navigate(['./deliveryAddress'], {
                    relativeTo: this.activatedRoute,
                });
            }
        }
        else {
            sessionStorage.setItem('cart', window.btoa(JSON.stringify(this.products)));
            // if (type === 'sign-up') {
            //   this.router.navigate(['/sign-up'], { queryParams: { origin: 'cart' } });
            // } else if (type === 'sign-in') {
            //   this.router.navigate(['/sign-in'], { queryParams: { origin: 'cart' } });
            // }
            if (type === 'sign-in') {
                this.router.navigate(['/sign-in'], { queryParams: { origin: 'cart' } });
            }
        }
    }
    // function to navigate according to type
    redirect(type) {
        if (type === 'sign-up') {
            this.router.navigate(['/sign-up'], { queryParams: { origin: 'cart' } });
        }
        else if (type === 'sign-in') {
            this.router.navigate(['/sign-in'], { queryParams: { origin: 'cart' } });
        }
    }
    // used to unsubscribe the subscription
    ngOnDestroy() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscribe.forEach((sub) => {
            if (sub) {
                sub.unsubscribe();
            }
        });
    }
}
CartDetailsComponent.ɵfac = function CartDetailsComponent_Factory(t) { return new (t || CartDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
CartDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartDetailsComponent, selectors: [["app-cart-details"]], viewQuery: function CartDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.inputList = _t.first);
    } }, decls: 23, vars: 5, consts: [[1, "main-container", "cartpage"], [1, "breadcrum"], [1, "container"], ["href", "javascript:void(0)", 3, "routerLink"], [4, "ngIf"], ["id", "cartdeletemodal", "role", "dialog", 1, "modal", "fade"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-body"], [1, "delete-txt"], [1, "remove-sec"], ["style", "color: darkred;", 4, "ngIf"], [1, "blue-button", 3, "click"], [1, "cart-scale"], [1, "cart-scale-inner"], [1, "scale-no", "active-scale"], [2, "pointer-events", "none"], [1, "scale-no"], [1, "cart-section"], [1, "cart-inner"], [1, "cart"], [1, "price-title"], ["class", "cart-row cart-row-products", 4, "ngFor", "ngForOf"], [1, "price-detail"], ["class", "price-row", 4, "ngFor", "ngForOf"], [1, "price-row", "total-price"], [1, "left-price-spare"], ["class", "left-price-spare", 4, "ngIf"], ["class", "sign-button-sec", 4, "ngIf"], [1, "cart-row", "cart-row-products"], [1, "left-cart"], [1, "cart-pic"], ["height", "40px", "width", "40px", 3, "src"], [1, "right-cart"], [1, "mid-cart"], [1, "number"], [1, "minus", 3, "click"], ["type", "text", "appNumOnly", "", "disabled", "", 3, "value"], [1, "plus", 3, "click"], [1, "price-row"], ["class", "left-price", 4, "ngIf", "ngIfElse"], ["productSpare", ""], [1, "right-price"], [1, "left-price"], [1, "sign-button-sec"], [1, "tooltip", 3, "click"], [1, "tooltiptext"], ["href", "javascript:void(0)", 3, "click"], [1, "epmtyCartImg"], ["src", "assets/images/icons/EmptyCart.svg"], ["class", "emptyCartMsg", 4, "ngIf"], [1, "emptyCartMsg"], [3, "click"], [2, "color", "darkred"]], template: function CartDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CartDetailsComponent_ng_container_9_Template, 52, 8, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CartDetailsComponent_ng_container_10_Template, 5, 2, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Are you sure to remove this item? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CartDetailsComponent_p_18_Template, 2, 0, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailsComponent_Template_button_click_19_listener() { return ctx.removeItemFromCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartDetailsComponent_Template_button_click_21_listener() { return ctx.closeDeleteModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.products.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDeleteMsg);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _directives_number_only_numonly_directive__WEBPACK_IMPORTED_MODULE_5__["NumonlyDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cart-details',
                templateUrl: './cart-details.component.html',
                styleUrls: ['./cart-details.component.css'],
            }]
    }], function () { return [{ type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { inputList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input']
        }] }); })();


/***/ }),

/***/ "Uwhj":
/*!*****************************************!*\
  !*** ./src/app/dataModels/cardError.ts ***!
  \*****************************************/
/*! exports provided: CardError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardError", function() { return CardError; });
class CardError {
}


/***/ }),

/***/ "ai9U":
/*!*******************************************************************!*\
  !*** ./src/app/views/cart/cart-payment/cart-payment.component.ts ***!
  \*******************************************************************/
/*! exports provided: CartPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPaymentComponent", function() { return CartPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dataModels/cart-details */ "1UKJ");
/* harmony import */ var src_app_dataModels_cardError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dataModels/cardError */ "Uwhj");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");













const _c0 = ["cardInfo"];
function CartPaymentComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total Price(AUD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx_r0.total, "");
} }
function CartPaymentComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Total Price(AUD)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("$", ctx_r2.total - ctx_r2.dealerDiscountAmount, "");
} }
function CartPaymentComponent_p_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.cardNumberError, " ");
} }
function CartPaymentComponent_p_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r4.cardMonthError, " ");
} }
function CartPaymentComponent_p_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.cardCvvError, " ");
} }
function CartPaymentComponent_p_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name should be of minimum 5 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CartPaymentComponent_button_71_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CartPaymentComponent_button_71_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.submitPaymentForm(ctx_r9.paymentForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Pay $", ctx_r7.total, "");
} }
function CartPaymentComponent_button_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Payment Processing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/home"]; };
const _c2 = function () { return ["/cart"]; };
class CartPaymentComponent {
    constructor(fb, apiService, router, toastr, ngZone, activatedRoute, zone, spinner) {
        this.fb = fb;
        this.apiService = apiService;
        this.router = router;
        this.toastr = toastr;
        this.ngZone = ngZone;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.spinner = spinner;
        this.paymentLoading = false;
        this.cardErrors = new src_app_dataModels_cardError__WEBPACK_IMPORTED_MODULE_5__["CardError"](); // assigning cardErrors of cartError type
        this.cardHandler = this.onChange.bind(this); // used to get cardField validations
        this.subscribe = []; // used to store subscription
        this.total = 0; // used to store totalPrice
        this.toggleCanDeactivate = true; // change CanDeactivate resolve according to condition
        this.countryList = []; // used to store countryList
        this.products = []; // to store cartDetails.
        this.toggleCardNumberError = false;
        this.toggleCardMonthError = false;
        this.toggleCardCvvError = false;
        this.dealerDiscountAmount = 0;
        this.applyDealerDiscount = false; // used to apply for dealer discount
    }
    ngOnInit() {
        // assigning addressId and buyNow id from route params
        this.subscribe.push(this.activatedRoute.params.subscribe(res => {
            if (res.id1) {
                this.addressId = res.id1;
                this.buyNowCartId = res.id2;
                this.getAddress(res.id1);
            }
        }));
        if (window.atob(sessionStorage.getItem('userType')) ===
            'Dealer' &&
            window.atob(sessionStorage.getItem('userStatus')) === 'D') {
            this.applyDealerDiscount = true;
            if (window.atob(sessionStorage.getItem('userDiscount')) === null) {
                this.apiService.dealerDiscount().subscribe(res => {
                    if (res[`return`] === true) {
                        this.dealerDiscountPercentage = res[`dealer_discount`];
                        this.dealerDiscountPercentage = this.dealerDiscountPercentage * 0.01;
                    }
                });
            }
            else {
                let userDiscount = window.atob(sessionStorage.getItem('userDiscount'));
                this.dealerDiscountPercentage = +userDiscount * 0.01;
            }
        }
        if (this.buyNowCartId.length === 0) { // checking buyNow cartId is present or not
            // this.subscribe.push(this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
            this.subscribe.push(this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
                if (res[`code`] === 200) {
                    this.products = JSON.parse(res[`details`].cart); // assigning cartDetails from response to products
                    this.findGrandTotal();
                }
            }, err => {
                var _a;
                this.toastr.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
            }));
        }
        else { // if buyNow cartId is present
            this.subscribe.push(this.apiService.getCartById(this.buyNowCartId).subscribe(res => {
                if (res[`code`] === 200) {
                    this.products = JSON.parse(res[`details`].cart); // assigning cartDetails from response to products
                    this.findGrandTotal();
                }
            }, err => {
                var _a;
                this.toastr.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
            }));
        }
        // calling getCountryData function to getCountryList
        this.subscribe.push(this.apiService.getCountryData().subscribe(res => {
            if (res) {
                this.countryList = res[`countries`]; // assigning countryList in countryList Array
            }
        }));
        this.createPaymentForm();
    }
    // used afterviewinit lifecyclehook to load card after view get initialized
    ngAfterViewInit() {
        // Giving a base style here, but most of the style is in scss file
        this.spinner.show();
        const cardStyle = {
            base: {
                iconColor: '#1586ad',
                color: '#32325d',
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '20px',
                '::placeholder': {
                    color: 'rgba(190, 193, 197, 0.9)',
                    fontSize: '0.9em',
                    fontFamily: '"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif'
                },
            },
            invalid: {
                color: 'red',
                iconColor: '#fa755a',
            },
        };
        // assign stripe publish key to stripe variable
        this.stripe = Stripe(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].stripeTestKey);
        const elements = this.stripe.elements();
        this.cardNumber = elements.create('cardNumber', { showIcon: true, placeholder: 'Enter your card number', style: cardStyle });
        this.cardNumber.mount('#cc-number');
        this.cardNumber.on('change', (error) => {
            if (error.error === undefined || error) {
                if (error.error !== undefined) {
                    this.toggleCardNumberError = true;
                    this.cardNumberError = error.error.message;
                }
                else {
                    this.toggleCardNumberError = false;
                }
            }
        });
        this.cardExpiry = elements.create('cardExpiry', { placeholder: 'MM / YY', style: cardStyle });
        this.cardExpiry.mount('#cc-exp-date');
        this.cardExpiry.on('change', (error) => {
            if (error.error === undefined || error) {
                if (error.error !== undefined) {
                    this.toggleCardMonthError = true;
                    this.cardMonthError = error.error.message;
                }
                else {
                    this.toggleCardMonthError = false;
                }
            }
        });
        this.cardCvc = elements.create('cardCvc', { placeholder: 'Enter CVC', style: cardStyle });
        this.cardCvc.mount('#cc-cvc');
        this.cardCvc.on('change', (error) => {
            if (error.error === undefined || error) {
                if (error.error !== undefined) {
                    this.toggleCardCvvError = true;
                    this.cardCvvError = error.error.message;
                }
                else {
                    this.toggleCardCvvError = false;
                }
            }
        });
        this.spinner.hide();
    }
    // function to findGrandTotal
    findGrandTotal() {
        let price;
        let gstPrice;
        let subPrice = 0;
        let shippingCharges = 0; // default shipping charges
        let productPrice = 0; // default product price
        // calculating eachProduct price using forEach loop for products array
        this.products.forEach((ele) => {
            if (ele.productQuantity) { // checking if productQuantity is greater than 0
                // multiplying eachProduct price with eachProduct quantity and adding the result with productPrice
                productPrice = ((ele.discountPrice > 0 ? ele.discountPrice : ele.price) * ele.productQuantity) + productPrice;
            }
        });
        price = productPrice;
        shippingCharges = 0.05 * price; // 5% of totalCharges
        subPrice = price + shippingCharges; // adding price with shippingCharges and assigning to total
        gstPrice = 0.10 * subPrice;
        this.total = Math.round(gstPrice + subPrice); // adding price with shippingCharges and assigning to total
        this.dealerDiscountAmount = Math.round(this.dealerDiscountPercentage * this.total);
    }
    // function to getAddress using addressId
    getAddress(addressId) {
        this.subscribe.push(this.apiService.getAddressById(addressId).subscribe(res => {
            if (res[`address`].length > 0) {
                this.addressDetails = res[`address`][0]; // assigning response of address to addressDetails
            }
        }));
    }
    // function to loadStripe
    loadStripe() {
        if (!window.document.getElementById('stripe-custom-form-script')) {
            const s = window.document.createElement('script');
            s.id = 'stripe-custom-form-script';
            s.type = 'text/javascript';
            s.src = 'https://js.stripe.com/v2/';
            s.onload = () => {
                window.Stripe.setPublishableKey(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].stripeTestKey);
            };
            window.document.body.appendChild(s);
        }
    }
    // function to create payment form
    createPaymentForm() {
        this.paymentForm = this.fb.group({
            cardUserName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    // function to get controls of payment form
    get formControl() {
        return this.paymentForm.controls;
    }
    // function to validate all fields of payment form
    validateAllFields(formGroup) {
        Object.keys(this.formControl).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                this.validateAllFields(control);
            }
        });
    }
    onChange({ error }) {
        if (error) {
            this.cardErrors = error;
        }
        else {
            this.cardErrors = null;
        }
    }
    // function to submit signUp form
    submitPaymentForm(form) {
        var _a, _b, _c, _d, _e;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.spinner.show('sp3');
            if (form.invalid) { // condition checking if form is valid or not
                this.validateAllFields(form); // if form in invalid then call validateAllfields function
            }
            else {
                this.paymentLoading = true;
                // this.spinner.show('spinner-2');
                this.toggleCanDeactivate = false; // changing toggleCanDeactivate to false
                const { token, error } = yield this.stripe.createToken(this.cardNumber, {
                    name: form.value.cardUserName,
                    address_city: (_a = this.addressDetails) === null || _a === void 0 ? void 0 : _a.city,
                    address_country: (_b = this.addressDetails) === null || _b === void 0 ? void 0 : _b.country,
                    address_line1: (_c = this.addressDetails) === null || _c === void 0 ? void 0 : _c.house_no,
                    address_state: (_d = this.addressDetails) === null || _d === void 0 ? void 0 : _d.state,
                    address_zip: (_e = this.addressDetails) === null || _e === void 0 ? void 0 : _e.pincode
                });
                if (token) {
                    // console.log('address', this.addressDetails, token);
                    // this.spinner.hide('sp3');
                    this.onSuccess(token);
                }
                else {
                    // console.log('address', this.addressDetails, token);
                    this.spinner.hide('sp3');
                    this.onError(error);
                }
            }
        });
    }
    // function to call payment if token is generated
    onSuccess(token) {
        this.paymentLoading = false;
        const paymentData = {
            token: token.id,
            amount: Math.round(this.total)
        };
        this.subscribe.push(this.apiService.payment(paymentData).subscribe(res => {
            if (res[`code`] === 200) {
                this.createOrder(paymentData.token);
            }
        }, err => {
            var _a;
            this.paymentLoading = false;
            this.toastr.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
        }));
    }
    // function to show error if token is not generated
    onError(error) {
        this.paymentLoading = false;
        if (error.message) {
            this.toastr.error(error.message);
        }
    }
    // function to createOrder
    createOrder(token) {
        const additionalDetails = JSON.parse(window.atob(sessionStorage.getItem('additionalPaymentDetails')));
        const orderData = Object.assign({ address_id: this.addressId, 
            // user_id: +window.atob(localStorage.getItem('id')),
            user_id: +window.atob(sessionStorage.getItem('id')), amount: (this.total).toString(), transaction_id: token, purchase_details: this.products, 
            // cart_id: +window.atob(localStorage.getItem('cartId'))
            cart_id: +window.atob(sessionStorage.getItem('cartId')) }, additionalDetails);
        // api function to addOrder using addOrder api
        this.subscribe.push(this.apiService.addOrders(orderData).subscribe(res => {
            if (res[`code`] === 200) {
                this.orderId = res[`details`].id;
                sessionStorage.removeItem('buyNow');
                this.apiService.totalItemsInCart();
                this.router.navigate(['/payment-successful'], { queryParams: { orderId: this.orderId } });
            }
        }, err => {
            var _a;
            this.toastr.error(((_a = err === null || err === void 0 ? void 0 : err.error) === null || _a === void 0 ? void 0 : _a.message) || (err === null || err === void 0 ? void 0 : err.message));
        }));
    }
    // function to updateCart
    updateCart() {
        const updateCart = {
            // id: window.atob(localStorage.getItem('cartId')),
            // user_id: window.atob(localStorage.getItem('id')),
            id: window.atob(sessionStorage.getItem('cartId')),
            user_id: window.atob(sessionStorage.getItem('id')),
            cart: '[]'
        };
        // console.log('update', updateCart);
        // this.subscribe.push(this.apiService.updateCart(updateCart).subscribe(res => {
        //   if (res[`code`] === 200) {
        //     this.apiService.totalItemsInCart(); // calling totalItemsInCart function to update cartQuantity Value.
        //     this.router.navigate(['/payment-successful'], { queryParams: { orderId: this.orderId } });
        //   }
        // }, err => {
        //   this.toastr.error(err?.error?.message || err?.message);
        // }));
    }
    // canDeactivate router function to  check is navigation allowed or not
    canDeactivate() {
        if (this.toggleCanDeactivate) { // checking toggleCanDeactivate value
            // if (localStorage.getItem('cartId')) { // checking cartId is present or not
            if (sessionStorage.getItem('cartId')) { // checking cartId is present or not
                if (sessionStorage.getItem('buyNow')) { // checking buyNow is present or not
                    // tslint:disable-next-line: max-line-length
                    const cartLocalData = JSON.parse(window.atob(sessionStorage.getItem('buyNow'))); // assigning buyNow value to cartLocalData
                    const accessoriesToAdd = []; // accessoriesToAdd[] to add accessory
                    const sparesToAdd = []; // sparesToAdd[] to add spare;
                    let cart;
                    if (cartLocalData !== null) { // checking if cartLocalData is not null
                        cartLocalData.forEach(cartData => {
                            if (cartData.type === 'product') {
                                // assigning value in cart
                                cart = new src_app_dataModels_cart_details__WEBPACK_IMPORTED_MODULE_4__["CartDetails"](cartData.productId, cartData.code, cartData.description, cartData.price, cartData.discountPrice, cartData.type, cartData.pole, cartData.flow, cartData.head, cartData.speed, cartData.power, cartData.engineSpeed, cartData.enginekW, cartData.driveType, cartData.productQuantity);
                            }
                            else if (cartData.type === 'accessory') {
                                accessoriesToAdd.push(cartData); // pushing cartData of type accessory in accessoriesToAdd array
                            }
                            else if (cartData.type === 'spare') {
                                sparesToAdd.push(cartData); // pushing cartData of type spare in sparesToAdd array
                            }
                        });
                    }
                    // creating Promise to get return value
                    return new Promise((resolve) => {
                        // this.subscribe.push(this.apiService.getCartById(window.atob(localStorage.getItem('cartId'))).subscribe(res => {
                        this.subscribe.push(this.apiService.getCartById(window.atob(sessionStorage.getItem('cartId'))).subscribe(res => {
                            if (res[`code`] === 200) {
                                let cartDetails = [];
                                cartDetails = JSON.parse(res[`details`].cart); // assigning response value to cartDetails
                                if (cartDetails.length <= 0) { // checking cartDetails length is smaller or equal to 0
                                    // (...)spread operator takes in an iterable (e.g an array) and expands it into individual elements.
                                    cartDetails.push(Object.assign({}, cart)); // pushing cart value in cartDetails
                                    cartDetails.push(...accessoriesToAdd); // pushing each accessoriesToAdd value in cartDetails
                                    cartDetails.push(...sparesToAdd); // pushing each sparesToAdd value in cartDetails
                                }
                                else {
                                    const cartAccessoryDataSet = new Array(); // creating new accessoryArray
                                    const cartSpareDataSet = new Array(); // creating new spareArray
                                    let cartProductDataSet = {}; // variable to set productData
                                    let spareNotExist = true; // check if spare type is present in cartLocalData
                                    let accessoryNotExist = true; // check if accessory type is present in cartLocalData
                                    let cartNotExist = true;
                                    console.log(cart, 'cart');
                                    console.log(cartDetails, 'cart1');
                                    for (let i = 0; i < cartDetails.length; i++) {
                                        if (cartDetails[i].type === 'product') { // checking type of product
                                            // checking cartDetails(got by getCartDetails api) with buyNow cartDetails(from sessionStorage)
                                            cartNotExist = false;
                                            if (((cartDetails[i].driveType === '' || cartDetails[i].driveType)
                                                === (cart.driveType === '' || cart.driveType))
                                                && (cartDetails[i].code === cart.code) &&
                                                (cartDetails[i].pole === cart.pole)) {
                                                cartDetails[i].productQuantity++;
                                            }
                                            else {
                                                cartProductDataSet = cart;
                                            }
                                        }
                                        else if (cartDetails[i].type === 'accessory') {
                                            accessoryNotExist = false;
                                            for (let j = 0; j < accessoriesToAdd.length; j++) {
                                                if (accessoriesToAdd[j].description === cartDetails[i].description
                                                    && accessoriesToAdd[j].pole === cartDetails[i].pole
                                                    && accessoriesToAdd[j].driveType === cartDetails[i].driveType) {
                                                    cartDetails[i].productQuantity++;
                                                }
                                                else {
                                                    /* some() is used to checks whether at least one of the elements of the array satisfies
                                                        the condition then returns true (and does not check the remaining values) otherwise return false*/
                                                    if (!cartDetails.some(res => (res.description === accessoriesToAdd[j].description)
                                                        && (res.pole === accessoriesToAdd[j].pole) && (res.driveType === accessoriesToAdd[j].driveType)) &&
                                                        (!cartAccessoryDataSet.some(res => (res.description === accessoriesToAdd[j].description)
                                                            && (res.pole === accessoriesToAdd[j].pole) && (res.driveType === accessoriesToAdd[j].driveType)))) {
                                                        cartAccessoryDataSet.push(accessoriesToAdd[j]);
                                                    }
                                                }
                                            }
                                        }
                                        else if (cartDetails[i].type === 'spare') {
                                            spareNotExist = false;
                                            for (let j = 0; j < sparesToAdd.length; j++) {
                                                if (sparesToAdd[j].description === cartDetails[i].description
                                                    && sparesToAdd[j].pole === cartDetails[i].pole
                                                    && sparesToAdd[j].driveType === cartDetails[i].driveType) {
                                                    cartDetails[i].productQuantity++;
                                                }
                                                else {
                                                    /* some() is used to checks whether at least one of the elements of the array satisfies
                                                        the condition then returns true (and does not check the remaining values) otherwise return false*/
                                                    if ((!cartDetails.some(res => (res.description === sparesToAdd[j].description)
                                                        && (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j].driveType))) &&
                                                        (!cartSpareDataSet.some(res => (res.description === sparesToAdd[j].description) &&
                                                            (res.pole === sparesToAdd[j].pole) && (res.driveType === sparesToAdd[j].driveType)))) {
                                                        cartSpareDataSet.push(sparesToAdd[j]);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    // checking to push if cartAccessoryDataSet length is greater than 0
                                    if (cartAccessoryDataSet.length > 0) {
                                        cartDetails.push(...cartAccessoryDataSet);
                                    }
                                    // checking to push if cartSpareDataSet length is greater than 0
                                    if (cartSpareDataSet.length > 0) {
                                        cartDetails.push(...cartSpareDataSet);
                                    }
                                    // checking to push if cartProductDataSet is not undefined
                                    if (Object.keys(cartProductDataSet).length > 0) {
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
                                        cartDetails.push(...cart);
                                    }
                                }
                                const updateCart = {
                                    // id: window.atob(localStorage.getItem('cartId')),
                                    // user_id: window.atob(localStorage.getItem('id')),
                                    id: window.atob(sessionStorage.getItem('cartId')),
                                    user_id: window.atob(sessionStorage.getItem('id')),
                                    cart: JSON.stringify(cartDetails)
                                };
                                // calling updateCart api
                                return this.subscribe.push(this.apiService.updateCart(updateCart).subscribe(response => {
                                    if (response[`code`] === 200) {
                                        sessionStorage.removeItem('buyNow');
                                        this.apiService.totalItemsInCart();
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
                // localStorage.setItem('cartId', window.btoa(this.buyNowCartId)); // setting buyNowCartId as cartId in localStorage
                sessionStorage.setItem('cartId', window.btoa(this.buyNowCartId)); // setting buyNowCartId as cartId in sessionStorage
                this.apiService.totalItemsInCart(); // calling totalItemsInCart function to update cartQuantity'
                sessionStorage.removeItem('buyNow');
                return true;
            }
        }
        else {
            return true;
        }
    }
    // used to unsubscribe the subscription
    ngOnDestroy() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        this.subscribe.forEach(s => {
            if (s) {
                s.unsubscribe();
            }
        });
        // this.card.destroy();
        this.cardNumber.destroy();
        this.cardExpiry.destroy();
        this.cardCvc.destroy();
    }
}
CartPaymentComponent.ɵfac = function CartPaymentComponent_Factory(t) { return new (t || CartPaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"])); };
CartPaymentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartPaymentComponent, selectors: [["app-cart-payment"]], viewQuery: function CartPaymentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cardElement = _t.first);
    } }, decls: 73, vars: 18, consts: [["bdColor", "rgb(0,0,0)", "size", "medium", "color", "#2e94ef", "type", "ball-newton-cradle", 3, "fullScreen"], [2, "color", "white"], [1, "main-container", "cartpage", "addresspage", "paymentpage"], [1, "breadcrum"], [1, "container"], ["href", "javascript:void(0)", 3, "routerLink"], [1, "cart-scale"], [1, "cart-scale-inner"], [1, "scale-no", "active-scale"], [2, "pointer-events", "none"], [1, "scale-no"], [1, "cart-section"], [1, "cart-inner"], [1, "price-detail"], [1, "price-row", "total-price", 2, "border-top", "none"], ["class", "left-price-spare", 4, "ngIf", "ngIfElse"], ["elsePart", ""], [1, "cart"], [1, "address-row", "full-address-row"], [3, "formGroup"], [1, "address-feild"], ["id", "cc-number", 3, "ngClass"], ["style", "color: red !important", 4, "ngIf"], [1, "address-feild", "half-field"], [2, "width", "50%"], ["id", "cc-exp-date", 3, "ngClass"], ["id", "cc-cvc", 3, "ngClass"], ["type", "text", "formControlName", "cardUserName", "placeholder", "Navodita Aggarwal", "required", "", 3, "ngClass"], ["style", "color: red", 4, "ngIf"], [4, "ngIf"], [1, "left-price-spare"], [2, "color", "red !important"], [2, "color", "red"], ["href", "javascript:void(0)", 3, "click"], ["href", "javascript:void(0)"], ["role", "status", "aria-hidden", "true", 1, "spinner-border", "spinner-border-sm"], [1, "fas", "fa-spinner", "fa-spin"]], template: function CartPaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " / Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Payment");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, CartPaymentComponent_div_36_Template, 5, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CartPaymentComponent_ng_template_37_Template, 5, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Card Information ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, CartPaymentComponent_p_48_Template, 2, 1, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Exp. Month & Year ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, CartPaymentComponent_p_56_Template, 2, 1, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " CVV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, CartPaymentComponent_p_63_Template, 2, 1, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Name on Card ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, CartPaymentComponent_p_70_Template, 2, 0, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, CartPaymentComponent_button_71_Template, 3, 1, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, CartPaymentComponent_button_72_Template, 5, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fullScreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.applyDealerDiscount)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.paymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.toggleCardNumberError ? "cardErr" : "address-feildCard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toggleCardNumberError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.toggleCardMonthError ? "cardErr" : "address-feildCard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toggleCardMonthError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.toggleCardCvvError ? "cardErr" : "address-feildCard");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.toggleCardCvvError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ((ctx.formControl == null ? null : ctx.formControl.cardUserName == null ? null : ctx.formControl.cardUserName.errors == null ? null : ctx.formControl.cardUserName.errors.minlength) || (ctx.formControl == null ? null : ctx.formControl.cardUserName == null ? null : ctx.formControl.cardUserName.errors == null ? null : ctx.formControl.cardUserName.errors.required)) && ((ctx.formControl == null ? null : ctx.formControl.cardUserName == null ? null : ctx.formControl.cardUserName.touched) || (ctx.formControl == null ? null : ctx.formControl.cardUserName == null ? null : ctx.formControl.cardUserName.dirty)) ? "red" : (ctx.formControl == null ? null : ctx.formControl.cardUserName == null ? null : ctx.formControl.cardUserName.valid) && ((ctx.formControl == null ? null : ctx.formControl.cardUserName == null ? null : ctx.formControl.cardUserName.touched) || (ctx.formControl == null ? null : ctx.formControl.cardUserName == null ? null : ctx.formControl.cardUserName.dirty)) ? "green" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((ctx.formControl == null ? null : ctx.formControl.cardUserName == null ? null : ctx.formControl.cardUserName.errors == null ? null : ctx.formControl.cardUserName.errors.minlength) || (ctx.formControl == null ? null : ctx.formControl.cardUserName == null ? null : ctx.formControl.cardUserName.errors == null ? null : ctx.formControl.cardUserName.errors.required)) && ((ctx.formControl == null ? null : ctx.formControl.cardUserName == null ? null : ctx.formControl.cardUserName.touched) || (ctx.formControl == null ? null : ctx.formControl.cardUserName == null ? null : ctx.formControl.cardUserName.dirty)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.paymentLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.paymentLoading);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["#card-info[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  height: 48px;\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 2px;\r\n  background: rgba(0, 0, 0, 0.05);\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.cardErr[_ngcontent-%COMP%]{\r\n  border: 1px solid red !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2FydC9jYXJ0LXBheW1lbnQvY2FydC1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY2FydC9jYXJ0LXBheW1lbnQvY2FydC1wYXltZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FyZC1pbmZvIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcblxyXG4uY2FyZEVycntcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CartPaymentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-cart-payment',
                templateUrl: './cart-payment.component.html',
                styleUrls: ['./cart-payment.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerService"] }]; }, { cardElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['cardInfo', { static: true }]
        }] }); })();


/***/ }),

/***/ "e/Ek":
/*!*******************************************!*\
  !*** ./src/app/views/cart/cart.module.ts ***!
  \*******************************************/
/*! exports provided: CartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_route_guard_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/route-guard.guard */ "KrsS");
/* harmony import */ var _cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart-details/cart-details.component */ "L2lf");
/* harmony import */ var _cart_address_cart_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-address/cart-address.component */ "JfHV");
/* harmony import */ var _cart_payment_cart_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cart-payment/cart-payment.component */ "ai9U");
/* harmony import */ var _cart_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart-routing.module */ "Bnhh");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/directives/directives.module */ "FUS3");
/* harmony import */ var angular_cc_library__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-cc-library */ "5ieR");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _deactive_guard_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./deactive-guard.guard */ "rW7J");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");














class CartModule {
}
CartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CartModule });
CartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CartModule_Factory(t) { return new (t || CartModule)(); }, providers: [src_app_services_route_guard_guard__WEBPACK_IMPORTED_MODULE_3__["RouteGuard"], _deactive_guard_guard__WEBPACK_IMPORTED_MODULE_11__["DeactiveGuard"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _cart_routing_module__WEBPACK_IMPORTED_MODULE_7__["CartRoutingModule"],
            src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"],
            angular_cc_library__WEBPACK_IMPORTED_MODULE_9__["CreditCardDirectivesModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CartModule, { declarations: [_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_4__["CartDetailsComponent"], _cart_address_cart_address_component__WEBPACK_IMPORTED_MODULE_5__["CartAddressComponent"], _cart_payment_cart_payment_component__WEBPACK_IMPORTED_MODULE_6__["CartPaymentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _cart_routing_module__WEBPACK_IMPORTED_MODULE_7__["CartRoutingModule"],
        src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"],
        angular_cc_library__WEBPACK_IMPORTED_MODULE_9__["CreditCardDirectivesModule"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_cart_details_cart_details_component__WEBPACK_IMPORTED_MODULE_4__["CartDetailsComponent"], _cart_address_cart_address_component__WEBPACK_IMPORTED_MODULE_5__["CartAddressComponent"], _cart_payment_cart_payment_component__WEBPACK_IMPORTED_MODULE_6__["CartPaymentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _cart_routing_module__WEBPACK_IMPORTED_MODULE_7__["CartRoutingModule"],
                    src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_8__["DirectivesModule"],
                    angular_cc_library__WEBPACK_IMPORTED_MODULE_9__["CreditCardDirectivesModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"]
                ],
                providers: [src_app_services_route_guard_guard__WEBPACK_IMPORTED_MODULE_3__["RouteGuard"], _deactive_guard_guard__WEBPACK_IMPORTED_MODULE_11__["DeactiveGuard"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rW7J":
/*!****************************************************!*\
  !*** ./src/app/views/cart/deactive-guard.guard.ts ***!
  \****************************************************/
/*! exports provided: DeactiveGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactiveGuard", function() { return DeactiveGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DeactiveGuard {
    canDeactivate(component, currentRoute, currentState, nextState) {
        return component.canDeactivate();
    }
}
DeactiveGuard.ɵfac = function DeactiveGuard_Factory(t) { return new (t || DeactiveGuard)(); };
DeactiveGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DeactiveGuard, factory: DeactiveGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeactiveGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=views-cart-cart-module-es2015.js.map