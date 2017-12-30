interface Math {
  add(a: number, b:number): number;

  multiply(a: number, b:number): number;
}

export class Calculator implements Math {
  /**
   * Adds numbers.
   * @param {number} number
   * @param {string} locale
   * @return {string}
   */
  add(a: number, b: number) : number{
    return a+b;
  }
  /**
   * Multiply numbers
   * @param {number} number
   * @param {string} locale
   * @return {string}
   */
  multiply(a: number, b: number): number {
    return a*b;
  }
}
