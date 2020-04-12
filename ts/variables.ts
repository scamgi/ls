import { IOptions } from "glob";
import * as _ from "lodash";

// initialization of args
var args = _.slice(process.argv, 2);

// initialization of pattern
var pattern = "";
if (args.length == 0)
  pattern = "*";
else 
  pattern = args[0];

// initialization of options
var options: IOptions = {
  dot: true,
  mark: true
};

export { args, pattern, options };