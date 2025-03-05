"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValuePair = void 0;
exports.defaultToString = defaultToString;
function defaultToString(item) {
    if (item === null) {
        return "NULL";
    }
    else if (item === undefined) {
        return "UNDEFINED";
    }
    else if (typeof item === "string" || item instanceof String) {
        return "".concat(item);
    }
    return item.toString();
}
var ValuePair = /** @class */ (function () {
    function ValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    ValuePair.prototype.toString = function () {
        return "[#".concat(this.key, ": ").concat(this.value, "]");
    };
    return ValuePair;
}());
exports.ValuePair = ValuePair;
