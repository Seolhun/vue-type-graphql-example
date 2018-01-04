"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Stream = require("mithril/stream");
var FormValueGroup = /** @class */ (function () {
    function FormValueGroup(original) {
        var _this = this;
        this.initFormValues(original);
        var form_value_list = this.getFormValueList();
        Stream.merge(form_value_list).map(function () { return _this.checkValidateAll(); });
        this.is_modified = Stream.merge(_.map(form_value_list, 'is_modified')).map(function (modified_list) { return modified_list.indexOf(true) >= 0; });
        this.is_valid = Stream.merge(_.map(form_value_list, 'error_message')).map(function (error_message_list) { return error_message_list.join('').trim().length === 0; });
        this.reset = function () { return form_value_list.map(function (stream) { return stream.reset(); }); };
        this.save = function () { return form_value_list.map(function (stream) { return stream.save(); }); };
    }
    FormValueGroup.prototype.initFormValues = function (original) {
        // TODO: set form value
    };
    FormValueGroup.prototype.getFormValueList = function () {
        return [];
    };
    FormValueGroup.prototype.checkValidateAll = function () {
        // TODO check validate and set error message...
    };
    FormValueGroup.prototype.toFormData = function () {
        return new FormData();
    };
    FormValueGroup.prototype.toObject = function () {
        return {};
    };
    return FormValueGroup;
}());
exports.default = FormValueGroup;
