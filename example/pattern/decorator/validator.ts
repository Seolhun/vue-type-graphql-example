class Validator {
  html: HTMLElement | null;
  validator = new Validator(html);
  validatingForm = {};
  ruleSet= {};

  constructor(form) {
    this.validatingForm = form;
    this.html = document.getElementById('tst');
  }

  decorate (ruleName: string, ruleFunction: Function) {
    this.ruleSet[ruleName] = ruleFunction;
  }

  validate (form) {
    let validatingForm = form || this.va;

  }
}
