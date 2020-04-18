import * as _ from "lodash";
import * as glob from "glob";
import { glob_options, pattern } from "./variables";
import { red, bold, green } from "colors";
import { existsSync, lstatSync } from "fs";

var p = pattern;
if (existsSync(p) && lstatSync(p).isDirectory()) {
  glob_options.cwd = p;
  p = "*";
}

// glob call
glob(p, glob_options, (err, files) => {
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