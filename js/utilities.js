"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
function insertAt(array, index) {
    var elementsArray = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        elementsArray[_i - 2] = arguments[_i];
    }
    array.splice.apply(array, __spreadArrays([index, 0], elementsArray));
}
exports.insertAt = insertAt;
