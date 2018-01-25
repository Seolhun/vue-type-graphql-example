class CallAndApply {
  numbers: number[];

  constructor() {
    this.numbers = [6, 7, 8, 9, 10];
  }

  call(param1) {
    console.log('CallAndApply call param1 : ', param1);
  }

  apply(...param1) {
    console.log('CallAndApply apply param1 : ', param1);
  }

  apply2(param1, param2) {
    console.log('CallAndApply apply2 param1 : ', param1);
    console.log('CallAndApply apply param2 : ', param2);
  }

  bind(param1) {
    console.log('CallAndApply bind pram1 : ', param1);
  }

  run() {
    this.call.call(null, this.numbers);
    console.log('----------------------------');
    this.apply.apply(null, this.numbers);
    console.log('----------------------------');
    this.apply2.apply(null, this.numbers);
    console.log('----------------------------');
    this.bind.bind(null, this.numbers).call();
    this.bind.bind(null, this.numbers).apply();

    console.log('======================================================');
    console.log('======================================================');

    const ca2 = new CallAndApply2();
    this.call.call(null, ca2.numbers);
    console.log('----------------------------');
    this.apply.apply(null, ca2.numbers);
    console.log('----------------------------');
    this.apply2.apply(null, ca2.numbers);
    console.log('----------------------------');
    this.bind.bind(null, ca2.numbers).call();
    this.bind.bind(null, ca2.numbers).apply();
  }
}

class CallAndApply2 {
  numbers: number[];

  constructor() {
    this.numbers = [1, 2, 3, 4, 5];
  }

  call(param1) {
    console.log('CallAndApply2 call param1 : ', param1);
  }

  apply(...param1) {
    console.log('CallAndApply2 apply param1 : ', param1);
  }

  apply2(param1, param2) {
    console.log('CallAndApply2 apply2 param1 : ', param1);
    console.log('CallAndApply2 apply param2 : ', param2);
  }

  bind(param1) {
    console.log('CallAndApply2 bind pram1 : ', param1);
  }
}

export default CallAndApply;
