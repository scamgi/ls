import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";
import * as glob from "glob";

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

_.forEach(args, (item, index) => {
  console.log(index.toString() + ": " + item);
});