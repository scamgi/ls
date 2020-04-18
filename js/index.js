"use strict";
exports.__esModule = true;
var _ = require("lodash");
var glob = require("glob");
var variables_1 = require("./variables");
var colors_1 = require("colors");
var fs_1 = require("fs");
var path = require("path");
var p = variables_1.pattern;
if (fs_1.existsSync(p) && fs_1.lstatSync(p).isDirectory()) {
    variables_1.glob_options.cwd = path.resolve(p);
    p = "*";
}
// glob call
glob(p, variables_1.glob_options, function (err, files) {
    if (err) {
        console.log(colors_1.red('Error: ' + err.message));
        return;
    }
    _.forEach(files, function (f) {
        // this checks if f is a directory
        if (_.endsWith(f, '/')) // if yes
            f = colors_1.green(f);
        console.log(f);
    });
});
