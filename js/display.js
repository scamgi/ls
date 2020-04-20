"use strict";
exports.__esModule = true;
var colors_1 = require("colors");
var lodash_1 = require("lodash");
var utilities_1 = require("./utilities");
function print(file, padEnd) {
    var output = file.padEnd(padEnd);
    if (lodash_1.endsWith(file, "/"))
        output = colors_1.green(output);
    process.stdout.write(output);
}
/**
 * it default displays the compact view
 */
function display(files) {
    /* table properties */
    var maxFileLength = lodash_1.max(lodash_1.map(files, function (file) { return file.length + 2; })); // array of filenames lengths
    var table = { cols: 0, rows: 0 };
    //    cols = Math.floor(actual console width / the max filelangth)
    table.cols = Math.floor(process.stdout.columns / maxFileLength);
    table.rows = Math.ceil(files.length / table.cols);
    // add empty spaces in order to adjust the columns
    var emptySpaces = (table.cols * table.rows) - files.length;
    for (var i = 0; i < emptySpaces; i++) {
        var index = (files.length) - (i * table.rows);
        utilities_1.insertAt(files, index, "");
    }
    // initialization of padding values
    var filesLengths = lodash_1.map(files, function (file) { return file.length + 2; }); // array of filenames lengths
    var paddings = [];
    for (var col = 0; col < table.cols; col++) {
        paddings.push(lodash_1.max(filesLengths.slice(col * table.rows, (col + 1) * table.rows)));
    }
    // print all
    for (var row = 0; row < table.rows; row++) {
        for (var col = 0; col < table.cols; col++) {
            var i = (col * table.rows) + row;
            var file = files[i];
            if (file == "")
                continue;
            // print the filename
            print(file, paddings[col]);
        }
        process.stdout.write("\n");
    }
}
exports["default"] = display;
