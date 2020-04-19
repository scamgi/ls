import { green } from "colors";
import { map, max, forEach, endsWith } from "lodash";

/**
 * it default displays the compact view
 */
export default function display(files: string[]) {
  const filesLengths = map(files, (file) => file.length + 2); // array of filenames lengths

  /* table properties */
  //    cols = Math.floor(actual console width / the max filelangth)
  const cols = Math.floor(process.stdout.columns / max(filesLengths));
  const rows = Math.ceil(files.length / cols);

  // initialization of padding values
  var paddings: number[] = [];
  for (var col = 0; col < cols; col++) {
    if (col < cols - 1)
      paddings.push(max(filesLengths.slice(col * rows, (col + 1) * rows)))
    else
      paddings.push(max(filesLengths.slice(col * rows)));
  }

  // print all
  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {

      var i = (col * rows) + row;
      // if this cell must be empty, then break the line and continue
      if (i >= files.length) {
        process.stdout.write("\n");
        continue;
      }

      // print the filename
      var file = files[i];
      if (endsWith(file, "/"))
        process.stdout.write(green(file.padEnd(paddings[col])));
      else
        process.stdout.write(file.padEnd(paddings[col]));

      // if this is the last column of this row, insert a breakline
      if (col == cols - 1) {
        process.stdout.write('\n');
      }

    }
  }

}