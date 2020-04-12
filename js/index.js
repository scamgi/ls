"use strict";
exports.__esModule = true;
var _ = require("lodash");
var glob = require("glob");
var variables_1 = require("./variables");
var colors_1 = require("colors");
// glob call
glob(variables_1.pattern, variables_1.options, function (err, files) {
    if (err) {
        console.log(colors_1.red('Error: ' + err.message));
        return;
    }
    _.forEach(files, function (f) {
        // this checks if f is a directory
        if (_.endsWith(f, '/')) // if yes
            console.log(colors_1.green(f));
        else // if no
            console.log(f);
    });
});
