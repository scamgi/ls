"use strict";
exports.__esModule = true;
var fs = require("fs");
var path = require("path");
var dirPath = "";
if (process.argv.length > 0)
    dirPath = path.join(__dirname, process.argv[0]);
else
    dirPath = __dirname;
console.log("dirpath: " + dirPath);
console.log("process.argv[0]: " + process.argv[0]);
// process.argv ? dirPath = path.join(__dirname, process.argv[0]) : dirPath = __dirname;
// var dirPath = path.join(__dirname, process.argv[0]);
fs.readdir(dirPath, function (err, files) {
    if (err)
        console.log('Error: ' + err);
    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
        var file = files_1[_i];
        console.log(file);
    }
});
