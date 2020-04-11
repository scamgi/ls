import * as fs from "fs";
import * as path from "path";

var dirPath = "";
process.argv ? dirPath = path.join(__dirname, process.argv[0]) : dirPath = __dirname;

// var dirPath = path.join(__dirname, process.argv[0]);

fs.readdir(dirPath, (err, files) => {
  if (err) console.log('Error: ' + err);

  for (const file of files) {
    console.log(file);
  }
});