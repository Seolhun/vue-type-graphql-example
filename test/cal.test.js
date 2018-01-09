"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TestCalculator = require("@seolhun/typescript-example");
describe('#Calculator.ts', function () {
    var calculator = new TestCalculator();
    test('should return 10 when value (3, 7)', function () {
        expect(calculator.add(3, 7)).toBe(10);
    });
    test('should return 25 when value (20, 5)', function () {
        expect(calculator.multiply(20, 5)).toBe(100);
    });
});
