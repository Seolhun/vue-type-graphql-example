"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD:client/test/cal.test.js
var TestCalculator = require("@seolhun/typescript-example");
describe('#Calculator.ts', function () {
    var calculator = new TestCalculator();
=======
var typescript_example_1 = require("@seolhun/typescript-example");
describe('#Calculator.ts', function () {
    var calculator = new typescript_example_1.TestCalculator();
>>>>>>> a00aad4899378b4d77bf778f44640812041287aa:test/cal.test.js
    test('should return 10 when value (3, 7)', function () {
        expect(calculator.add(3, 7)).toBe(10);
    });
    test('should return 25 when value (20, 5)', function () {
        expect(calculator.multiply(20, 5)).toBe(100);
    });
});
