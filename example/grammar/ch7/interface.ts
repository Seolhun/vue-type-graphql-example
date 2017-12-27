interface NamedParson {
  firstName: string;
}

function initName(person: NamedParson) {
  console.log('Hello, ' + person.firstName);
}

function changeName(person: NamedParson) {
  person.firstName = 'Anna'
}

const person = {
  firstName: 'Seol',
  age: 27
}

// interface에 age가 존재하지 않아 compile error 발생
// initName({firstName: 'Seol', age: 27});
changeName(person);
initName(person);
