// let & const
console.log('----LET & CONST----');
var variable = 'Test';
console.log(variable);
variable = 'Another value';
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// it is a constant or a read-only property.
// maxLevels = 99 // Won't work
// Block Scope
console.log('----Block Scope----');
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log('after reset', variable);
// Arrow Functions
console.log('----Arrow Functions----');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 + number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log('Hello');
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('Michael');
// Default Parameter
console.log('----Default Parameter----');
var countdown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countdown();
