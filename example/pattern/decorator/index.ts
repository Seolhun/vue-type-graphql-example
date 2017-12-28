function methodA() {
  console.log("methodA(): evaluated");
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("methodA(): target", target);
    console.log("methodA(): propertyKey", propertyKey);
    console.log("methodA(): descriptor", descriptor.value = 3);
    console.log("methodA(): called");
  }
}

function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Demo {
    property = "property";
    hello: string;

    constructor(m: string) {
        this.hello = m;
    }

    @methodA()
    show(args: string) {
      console.log('hello', args);
    }
}

console.log(new Demo("world"));
