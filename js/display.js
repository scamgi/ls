"use strict";
exports.__esModule = true;
var colors_1 = require("colors");
var lodash_1 = require("lodash");
/**
 * it default displays the compact view
 */
function display(files) {
    var maxWidth = process.stdout.columns; // max width of the console
    var tabLength = 8; // tab length (which is 8)
    var lineLength = 0;
    lodash_1.forEach(files, function (f) {
        var fileLength = Math.ceil((f.length + 2) / tabLength) * tabLength;
        // initialize file
        var file = "";
        if (lodash_1.endsWith(f, "/"))
            file = colors_1.green(f.padEnd(fileLength));
        else
            file = f.padEnd(fileLength);
        if (lineLength + fileLength <= maxWidth) { // if this filename can be displayed, then insert it
            process.stdout.write(file);
            lineLength += fileLength;
        }
        else { // else log this line and create a new one
            process.stdout.write('\n' + file);
            lineLength = fileLength;
        }
    });
}
exports["default"] = display;
