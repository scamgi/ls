import * as _ from "lodash";
import * as glob from "glob";
import { glob_options, pattern } from "./variables";
import display from "./display";

// glob call
glob(pattern, glob_options, (err, files) => {
  if (err) {
    console.error('Error: ' + err.message);
    return;
  }

  display(files);
});