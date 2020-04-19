import { IOptions } from "glob";
import * as _ from "lodash";
import { existsSync, lstatSync } from "fs";

// initialization of args
var args = _.slice(process.argv, 2);

// initialization of glob_options
var glob_options: IOptions = {
  dot: true,
  mark: true
};

// initialization of pattern
var pattern = "";
if (args.length == 0) // if there are no arguments
  pattern = "*";
else if (existsSync(args[0]) && lstatSync(args[0]).isDirectory()) { // if the first argument is a folder-name
  glob_options.cwd = args[0];
  pattern = "*";
}
else
  pattern = args[0];

export { args, pattern, glob_options };