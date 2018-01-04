"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CallAndApply = /** @class */ (function () {
    function CallAndApply() {
    }
    CallAndApply.prototype.call = function (param1) {
        console.log.apply(console, ['call param1 : '].concat(param1));
    };
    CallAndApply.prototype.apply = function (param1, param2) {
        console.log('apply param1 : ', param1);
        console.log('apply param2 : ', param2);
    };
    CallAndApply.prototype.apply2 = function () {
        var param1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param1[_i] = arguments[_i];
        }
        console.log('apply2 param1 : ', param1);
    };
    CallAndApply.prototype.run = function () {
        var numbers = [5, 6, 2, 3, 7];
        this.call.call(null, numbers);
        console.log('----------------------------');
        this.apply.apply(null, numbers);
        console.log('----------------------------');
        this.apply2.apply(null, numbers);
    };
    return CallAndApply;
}());
exports.default = CallAndApply;
