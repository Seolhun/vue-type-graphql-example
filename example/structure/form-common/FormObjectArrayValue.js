"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Stream = require("mithril/stream");
var FormObjectValue_1 = require("./FormObjectValue");
function updateErrorMessage(value) {
    var error_message_list = value().map(function (attribute) { return attribute.error_message(); });
    var error_index = _.findIndex(error_message_list, function (error_message) { return error_message.length > 0; });
    value.error_message(error_index >= 0 ? error_message_list[error_index] : '');
}
function onValueChanged(stream, initial) {
    stream.is_modified(!_.isEqual(initial, stream.toValue()));
    stream(stream());
}
function FormObjectArrayValue(initial) {
    var formed_initial = initial.map(function (data) { return FormObjectValue_1.default(data); });
    var stream = Stream(formed_initial);
    stream.toValue = function () { return stream().map(function (v) { return v.toValue(); }); };
    // check modified
    stream.is_modified = Stream(false);
    // check validation
    stream.error_message = Stream('');
    stream.validation_state = Stream.merge([stream.error_message, stream.is_modified])
        .map(function (_a) {
        var error_message = _a[0], is_modified = _a[1];
        return error_message ? 'has-error' : (is_modified ? 'has-success' : '');
    });
    // data changed
    stream().forEach(function (value) {
        value.map(function () { return onValueChanged(stream, initial); });
        value.error_message.map(function () { return updateErrorMessage(stream); });
    });
    // push
    stream.push = function (value) {
        var form_value = FormObjectValue_1.default(value);
        stream().push(form_value);
        form_value.map(function () { return onValueChanged(stream, initial); });
        form_value.error_message.map(function () { return updateErrorMessage(stream); });
    };
    // splice
    stream.splice = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        stream().splice.apply(stream(), args);
        stream(stream());
    };
    // func
    stream.reset = function () { return stream().forEach(function (v) { return v.reset(); }); };
    stream.save = function () {
        initial = stream.toValue();
        stream().forEach(function (v) { return v.save(); });
    };
    return stream;
}
exports.default = FormObjectArrayValue;
