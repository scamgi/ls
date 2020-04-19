"use strict";
exports.__esModule = true;
var glob = require("glob");
var variables_1 = require("./variables");
var display_1 = require("./display");
// glob call
glob(variables_1.pattern, variables_1.glob_options, function (err, files) {
    if (err) {
        console.error('Error: ' + err.message);
        return;
    }
    display_1["default"](files);
});
