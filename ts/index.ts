import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";
import * as glob from "glob";
import { options, pattern } from "./variables";
import { red, bold, green } from "colors";

// glob call
glob(pattern, options, (err, files) => {
  if (err) {
    console.log(red('Error: ' + err.message));
    return;
  }

  _.forEach(files, (f) => {
    // this checks if f is a directory
    if (_.endsWith(f, '/')) // if yes
      f = green(f);

    console.log(f);
  });
});