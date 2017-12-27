var Validator = /** @class */ (function () {
    function Validator(form) {
        this.validator = new Validator(html);
        this.validatingForm = {};
        this.ruleSet = {};
        this.validatingForm = form;
        this.html = document.getElementById('tst');
    }
    Validator.prototype.decorate = function (ruleName, ruleFunction) {
        this.ruleSet[ruleName] = ruleFunction;
    };
    Validator.prototype.validate = function (form) {
        var validatingForm = form || this.va;
    };
    return Validator;
}());
