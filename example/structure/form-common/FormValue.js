"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Stream = require("mithril/stream");
function getCloneData(value) {
    if (value instanceof File) {
        return value;
    }
    return _.cloneDeep(value);
}
function FormValue(initial) {
    var stream = Stream(getCloneData(initial));
    // check modified
    stream.is_modified = stream.map(function (value) { return !_.isEqual(initial, value); });
    // check validation
    stream.error_message = Stream('');
    stream.validation_state = Stream.merge([stream.error_message, stream.is_modified])
        .map(function (_a) {
        var error_message = _a[0], is_modified = _a[1];
        return error_message ? 'has-error' : (is_modified ? 'has-success' : '');
    });
    stream.reset = function () { return stream(getCloneData(initial)); };
    stream.save = function () {
        initial = stream();
        stream(initial);
    };
    stream.toValue = function () { return stream(); };
    return stream;
}
exports.default = FormValue;
