import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";
import * as glob from "glob";
import { options, pattern } from "./variables";

// glob call
glob(pattern, options, (err, files) => {
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