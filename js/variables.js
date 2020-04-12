"use strict";
exports.__esModule = true;
var _ = require("lodash");
// initialization of args
var args = _.slice(process.argv, 2);
exports.args = args;
// initialization of pattern
var pattern = "";
exports.pattern = pattern;
if (args.length == 0)
    exports.pattern = pattern = "*";
else
    exports.pattern = pattern = args[0];
// initialization of options
var options = {
    dot: true,
    mark: true
};
exports.options = options;