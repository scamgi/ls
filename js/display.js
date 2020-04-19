"use strict";
exports.__esModule = true;
var colors_1 = require("colors");
var lodash_1 = require("lodash");
/**
 * it default displays the compact view
 */
function display(files) {
    var filesLengths = lodash_1.map(files, function (file) { return file.length + 2; }); // array of filenames lengths
    /* table properties */
    //    cols = Math.floor(actual console width / the max filelangth)
    var table = { cols: 0, rows: 0 };
    table.cols = Math.floor(process.stdout.columns / lodash_1.max(filesLengths));
    table.rows = Math.ceil(files.length / table.cols);
    // initialization of padding values
    var paddings = [];
    for (var col = 0; col < table.cols; col++) {
        if (col < table.cols - 1)
            paddings.push(lodash_1.max(filesLengths.slice(col * table.rows, (col + 1) * table.rows)));
        else
            paddings.push(lodash_1.max(filesLengths.slice(col * table.rows)));
    }
    // print all
    for (var row = 0; row < table.rows; row++) {
        for (var col = 0; col < table.cols; col++) {
            var i = (col * table.rows) + row;
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
            if (col == table.cols - 1) {
                process.stdout.write('\n');
            }
        }
    }
}
exports["default"] = display;
