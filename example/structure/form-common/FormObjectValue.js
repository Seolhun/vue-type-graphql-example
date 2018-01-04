"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Stream = require("mithril/stream");
var FormObjectArrayValue_1 = require("./FormObjectArrayValue");
var FormValue_1 = require("./FormValue");
function getFormValue(data) {
    if (_.isArray(data)) {
        return FormObjectArrayValue_1.default(_.clone(data));
    }
    else if (_.isObject(data)) {
        return FormObjectValue(_.clone(data));
    }
    else {
        return FormValue_1.default(data);
    }
}
function FormObjectValue(initial) {
    var form_values = [];
    var formed_initial = {};
    for (var _i = 0, _a = Object.keys(initial); _i < _a.length; _i++) {
        var key = _a[_i];
        var value = getFormValue(initial[key]);
        form_values.push(value);
        formed_initial[key] = value;
    }
    var stream = Stream(formed_initial);
    // func
    stream.reset = function () { return Object.keys(stream()).forEach(function (key) { return stream()[key].reset(); }); };
    stream.save = function () {
        initial = stream.toValue();
        Object.keys(stream()).forEach(function (key) { return stream()[key].save(); });
    };
    stream.toValue = function () {
        var value = {};
        Object.keys(stream()).forEach(function (key) { return value[key] = stream()[key].toValue(); });
        return value;
    };
    // map
    Stream.merge(form_values).map(function () { return stream(stream()); });
    // check modified
    stream.is_modified = stream.map(function () { return !_.isEqual(initial, stream.toValue()); });
    // check validation
    stream.error_message = Stream.merge(_.map(form_values, 'error_message')).map(function (error_message_list) {
        var error_index = _.findIndex(error_message_list, function (error_message) { return error_message.length > 0; });
        return error_index >= 0 ? error_message_list[error_index] : '';
    });
    stream.validation_state = Stream.merge([stream.error_message, stream.is_modified])
        .map(function (_a) {
        var error_message = _a[0], is_modified = _a[1];
        return error_message ? 'has-error' : (is_modified ? 'has-success' : '');
    });
    return stream;
}
exports.default = FormObjectValue;
