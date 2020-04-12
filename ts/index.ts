import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";
import * as glob from "glob";

// initialization of args
var args = _.slice(process.argv, 2);

// initialization of pattern
var pattern = "";
if (args.length == 0)
  pattern = "*";
else 
  pattern = args[0];

// glob call
glob(pattern, (err, files) => {
  if (err) {
    console.log('Error: ' + err.message);
    return;
  }

  _.forEach(files, (f) => {
    console.log(f);
  });
});

// args = _.slice(args, 2);
// console.log('Args length is: ' + args.length.toString());
// _.forEach(args, (item, index) => {
//   console.log(index.toString() + ": " + item);
// });