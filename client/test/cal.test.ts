<<<<<<< HEAD:client/test/cal.test.ts
import * as TestCalculator from '@seolhun/typescript-example';
=======
import { TestCalculator } from '@seolhun/typescript-example';
import * as _ from 'lodash';
>>>>>>> a00aad4899378b4d77bf778f44640812041287aa:test/cal.test.ts

describe('#Calculator.ts', () => {
  const calculator = new TestCalculator();
  test('should return 10 when value (3, 7)', () => {
    expect(calculator.add(3, 7)).toBe(10);
  });

  test('should return 25 when value (20, 5)', () => {
    expect(calculator.multiply(20, 5)).toBe(100);
  });
});
