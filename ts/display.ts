import { green } from "colors";
import { forEach, endsWith } from "lodash";

/**
 * it default displays the compact view
 */
export default function display(files: string[]) {
  const maxWidth = process.stdout.columns; // max width of the console
  const tabLength = 8; // tab length (which is 8)
  var lineLength = 0;
  forEach(files, (f) => {
    var fileLength = Math.ceil((f.length + 2) / tabLength) * tabLength;

    // initialize file
    var file = "";
    if (endsWith(f, "/"))
      file = green(f.padEnd(fileLength));
    else
      file = f.padEnd(fileLength);

    if (lineLength + fileLength <= maxWidth) { // if this filename can be displayed, then insert it
      process.stdout.write(file);
      lineLength += fileLength;
    }
    else { // else log this line and create a new one
      process.stdout.write('\n' + file);
      lineLength = fileLength;
    }
  });
}