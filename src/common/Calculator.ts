interface Math {
  add(a: number, b:number): number;

  multiply(a: number, b:number): number;
}


export class Calculator implements Math {
  add(a: number, b: number) : number{
    return a+b;
  }

  multiply(a: number, b: number): number {
    return a*b;
  }
}
