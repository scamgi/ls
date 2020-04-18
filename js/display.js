"use strict";
exports.__esModule = true;
var colors_1 = require("colors");
var lodash_1 = require("lodash");
function display(files) {
    var maxWidth = 80; // max width of the console
    var tabLength = 8; // tab length (which is 8)
    var line = "";
    lodash_1.forEach(files, function (f) {
        var fileLength = Math.ceil((f.length + 2) / tabLength) * tabLength;
        // initialize file
        var file = "";
        if (lodash_1.endsWith(f, "/"))
            file = colors_1.green(f.padEnd(fileLength));
        else
            file = f.padEnd(fileLength);
        if (line.length + fileLength <= maxWidth) { // if this filename can be displayed, then insert it
            line = line + file;
        }
        else { // else log this line and create a new one
            console.log(line);
            line = file;
        }
    });
    // if you execute the code, you see that the last line is never printed.
    // in order to avoid that, i added a last console.log.
    console.log(line);
}
exports["default"] = display;
