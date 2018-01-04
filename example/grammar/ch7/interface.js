var Example7 = /** @class */ (function () {
    function Example7() {
    }
    Example7.prototype.initName = function (person) {
        console.log('Hello, ' + person.firstName);
    };
    Example7.prototype.changeName = function (person) {
        person.firstName = 'Anna';
    };
    return Example7;
}());
var person = {
    firstName: 'Seol',
    age: 27,
};
// interface에 age가 존재하지 않아 compile error 발생
// initName({firstName: 'Seol', age: 27});
var ex7 = new Example7();
ex7.changeName(person);
ex7.initName(person);
