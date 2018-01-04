interface NamedParson {
  firstName: string;
}

class Example7 {
  initName(person: NamedParson) {
    console.log('Hello, ' + person.firstName);
  }

  changeName(person: NamedParson) {
    person.firstName = 'Anna'
  }
}

const person = {
  firstName: 'Seol',
  age: 27,
}

// interface에 age가 존재하지 않아 compile error 발생
// initName({firstName: 'Seol', age: 27});
const ex7 = new Example7();
ex7.changeName(person);
ex7.initName(person);
