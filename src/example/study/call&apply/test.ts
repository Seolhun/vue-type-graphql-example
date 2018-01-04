class CallAndApply {
  call(param1) {
    console.log('call param1 : ', ...param1);
  }

  apply(param1, param2) {
    console.log('apply param1 : ', param1);
    console.log('apply param2 : ', param2);
  }

  apply2(...param1) {
    console.log('apply2 param1 : ', param1);
  }

  run() {
    const numbers = [5, 6, 2, 3, 7];
    this.call.call(null, numbers);
    console.log('----------------------------');
    this.apply.apply(null, numbers);
    console.log('----------------------------');
    this.apply2.apply(null, numbers);
  }
}

export default CallAndApply;
