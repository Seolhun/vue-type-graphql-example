import { Calculator } from '../src/common/Calculator'

describe('#Calculator.ts', function() {
    const calculator = new Calculator();
    test('should return 10 when value (3, 7)', () => {
      expect(calculator.add(3, 7)).toBe(10);
    });

    test('should return 25 when value (20, 5)', () => {
      expect(calculator.multiply(20, 5)).toBe(100);
    });
});

