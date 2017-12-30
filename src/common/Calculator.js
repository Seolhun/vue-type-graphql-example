"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    /**
     * Adds numbers.
     * @param {number} number
     * @param {string} locale
     * @return {string}
     */
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    /**
     * Multiply numbers
     * @param {number} number
     * @param {string} locale
     * @return {string}
     */
    Calculator.prototype.multiply = function (a, b) {
        return a * b;
    };
    return Calculator;
}());
exports.Calculator = Calculator;
