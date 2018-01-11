function initName(person) {
    console.log('Hello, ' + person.firstName);
}
function changeName(person) {
    person.firstName = 'Anna';
}
var person = {
    firstName: 'Seol',
    age: 27,
};
// interface에 age가 존재하지 않아 compile error 발생
// initName({firstName: 'Seol', age: 27});
changeName(person);
initName(person);
