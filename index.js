"use strict";
exports.__esModule = true;
var _ = require("lodash");
// var dirPath = "";
// process.argv ? dirPath = path.join(__dirname, process.argv[0]) : dirPath = __dirname;
// // var dirPath = path.join(__dirname, process.argv[0]);
// fs.readdir(dirPath, (err, files) => {
//   if (err) console.log('Error: ' + err);
//   for (const file of files) {
//     console.log(file);
//   }
// });
var args = process.argv;
_.forEach(args, function (item, index) {
    console.log(index.toString() + ": " + item);
});
