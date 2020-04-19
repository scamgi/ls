"use strict";
exports.__esModule = true;
var _ = require("lodash");
var fs_1 = require("fs");
// initialization of args
var args = _.slice(process.argv, 2);
exports.args = args;
// initialization of glob_options
var glob_options = {
    dot: true,
    mark: true
};
exports.glob_options = glob_options;
// initialization of pattern
var pattern = "";
exports.pattern = pattern;
if (args.length == 0) // if there are no arguments
    exports.pattern = pattern = "*";
else if (fs_1.existsSync(args[0]) && fs_1.lstatSync(args[0]).isDirectory()) { // if the first argument is a folder-name
    glob_options.cwd = args[0];
    exports.pattern = pattern = "*";
}
else
    exports.pattern = pattern = args[0];
