"use strict";
exports.__esModule = true;
var colors_1 = require("colors");
var lodash_1 = require("lodash");
/**
 * it default displays the compact view
 */
function display(files) {
    // const maxWidth = process.stdout.columns; // max width of the console
    // const tabLength = 8; // tab length (which is 8)
    // var lineLength = 0;
    // forEach(files, (f) => {
    //   var fileLength = Math.ceil((f.length + 2) / tabLength) * tabLength;
    //   // initialize file
    //   var file = "";
    //   if (endsWith(f, "/"))
    //     file = green(f.padEnd(fileLength));
    //   else
    //     file = f.padEnd(fileLength);
    //   if (lineLength + fileLength <= maxWidth) { // if this filename can be displayed, then insert it
    //     process.stdout.write(file);
    //     lineLength += fileLength;
    //   }
    //   else { // else log this line and create a new one
    //     process.stdout.write('\n' + file);
    //     lineLength = fileLength;
    //   }
    // });
    var filesLengths = lodash_1.map(files, function (file) { return file.length + 2; }); // array of filenames lengths
    /* table properties */
    //    cols = Math.floor(actual console width / the max filelangth)
    var cols = Math.floor(process.stdout.columns / lodash_1.max(filesLengths));
    var rows = Math.ceil(files.length / cols);
    // initialization of padding values
    var paddings = [];
    for (var col = 0; col < cols; col++) {
        if (col < cols - 1)
            paddings.push(lodash_1.max(filesLengths.slice(col * rows, (col + 1) * rows)));
        else
            paddings.push(lodash_1.max(filesLengths.slice(col * rows)));
    }
    // print all
    for (var row = 0; row < rows; row++) {
        for (var col = 0; col < cols; col++) {
            var i = (col * rows) + row;
            // if this cell must be empty, then break the line and continue
            if (i >= files.length) {
                process.stdout.write("\n");
                continue;
            }
            // print the filename
            var file = files[i];
            if (lodash_1.endsWith(file, "/"))
                process.stdout.write(colors_1.green(file.padEnd(paddings[col])));
            else
                process.stdout.write(file.padEnd(paddings[col]));
            // if this is the last column of this row, insert a breakline
            if (col == cols - 1) {
                process.stdout.write('\n');
            }
        }
    }
}
exports["default"] = display;
