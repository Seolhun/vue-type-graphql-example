//Type
var myName = "SeolHun";
//enum
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Orange"] = 1] = "Orange";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
;
var myColor = Color.Blue;
console.log(Color.Blue);
//function
function greeter(person) {
    return "Hello, " + person;
}
var user = [0, 1, 2];
//functions
function returnMyName() {
    return myName;
}
//void 
function sayHello() {
    console.log("Hello");
}
//Argument types
function multiply(value1, value2) {
    return value1 * value2;
}
//console.log(multiply(2, 'Shooney'));
console.log(multiply(10, 2));
//function types
var myMultiply;
myMultiply = multiply;
console.log(myMultiply(2, 5));
// objects
var userData = {
    name: "SeolHun",
    age: 28
};
// Must be set Types
// userData = {
// 	a: "Hello",
// 	b: 22
// };
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 28;
myRealRealAge = "27";
