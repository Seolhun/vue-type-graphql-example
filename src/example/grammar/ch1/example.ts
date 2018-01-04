// Type
let myName: string = 'SeolHun';

// enum
enum Color {
  'Blue',
  'Orange',
  'Red',
}
let myColor: Color = Color.Blue;
console.log(Color.Blue);

// function
function greeter(person: string) {
  return 'Hello, ' + person;
}

let user: number[] = [0, 1, 2];

// functions
function returnMyName(): string {
  return myName;
}

// void
function sayHello(): void {
  console.log('Hello');
}

// Argument types
function multiply(value1: number, value2: number): number {
  return value1 * value2;
}

// console.log(multiply(2, 'Shooney'));
console.log(multiply(10, 2));

// function types
let myMultiply: (a: number, b: number) => number;
myMultiply = multiply;
console.log(myMultiply(2, 5));

// objects
let userData: { name: string, age: number } = {
  name: 'SeolHun',
  age: 28,
};
// Must be set Types
// userData = {
// 	a: 'Hello',
// 	b: 22
// };

// complex object
let complex: { data: number[], output: (all: boolean) => number[] } = {
  data: [100, 3.99, 10],

  output(all: boolean): number[] {
    return this.data;
  },
};

// Type alias
interface Complex {
  data: number[];
  output: (all: boolean) => number[];
}

let complex2: Complex = {
  data: [100, 3.99, 10],

  output(all: boolean): number[] {
    return this.data;
  },
};

// union types
let myRealRealAge: number | string = 28;
myRealRealAge = '27';
