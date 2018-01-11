"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CallAndApply = /** @class */ (function () {
    function CallAndApply() {
        this.numbers = [6, 7, 8, 9, 10];
    }
    CallAndApply.prototype.call = function (param1) {
        console.log('CallAndApply call param1 : ', param1);
    };
    CallAndApply.prototype.apply = function () {
        var param1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param1[_i] = arguments[_i];
        }
        console.log('CallAndApply apply param1 : ', param1);
    };
    CallAndApply.prototype.apply2 = function (param1, param2) {
        console.log('CallAndApply apply2 param1 : ', param1);
        console.log('CallAndApply apply param2 : ', param2);
    };
    CallAndApply.prototype.bind = function (param1) {
        console.log('CallAndApply bind pram1 : ', param1);
    };
    CallAndApply.prototype.run = function () {
        this.call.call(null, this.numbers);
        console.log('----------------------------');
        this.apply.apply(null, this.numbers);
        console.log('----------------------------');
        this.apply2.apply(null, this.numbers);
        console.log('----------------------------');
        this.bind.bind(null, this.numbers).call();
        this.bind.bind(null, this.numbers).apply();
        console.log('======================================================');
        console.log('======================================================');
        var ca2 = new CallAndApply2();
        this.call.call(null, ca2.numbers);
        console.log('----------------------------');
        this.apply.apply(null, ca2.numbers);
        console.log('----------------------------');
        this.apply2.apply(null, ca2.numbers);
        console.log('----------------------------');
        this.bind.bind(null, ca2.numbers).call();
        this.bind.bind(null, ca2.numbers).apply();
    };
    return CallAndApply;
}());
var CallAndApply2 = /** @class */ (function () {
    function CallAndApply2() {
        this.numbers = [1, 2, 3, 4, 5];
    }
    CallAndApply2.prototype.call = function (param1) {
        console.log('CallAndApply2 call param1 : ', param1);
    };
    CallAndApply2.prototype.apply = function () {
        var param1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param1[_i] = arguments[_i];
        }
        console.log('CallAndApply2 apply param1 : ', param1);
    };
    CallAndApply2.prototype.apply2 = function (param1, param2) {
        console.log('CallAndApply2 apply2 param1 : ', param1);
        console.log('CallAndApply2 apply param2 : ', param2);
    };
    CallAndApply2.prototype.bind = function (param1) {
        console.log('CallAndApply2 bind pram1 : ', param1);
    };
    return CallAndApply2;
}());
exports.default = CallAndApply;
