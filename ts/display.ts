import { green } from "colors";
import { forEach, endsWith } from "lodash";

export default function display(files: string[]) {
  const maxWidth = process.stdout.columns; // max width of the console
  const tabLength = 8; // tab length (which is 8)
  var line = "";
  forEach(files, (f) => {
    var fileLength = Math.ceil((f.length + 2) / tabLength) * tabLength;

    // initialize file
    var file = "";
    if (endsWith(f, "/"))
      file = green(f.padEnd(fileLength));
    else
      file = f.padEnd(fileLength);

    if (line.length + fileLength <= maxWidth) { // if this filename can be displayed, then insert it
      line = line + file;
    }
    else { // else log this line and create a new one
      console.log(line);
      line = file;
    }
  });
  // if you execute the code, you see that the last line is never printed.
  // in order to avoid that, i added a last console.log.
  console.log(line);
}