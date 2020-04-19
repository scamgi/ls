import { green } from "colors";
import { map, max, forEach, endsWith } from "lodash";

/**
 * it default displays the compact view
 */
export default function display(files: string[]) {
  const filesLengths = map(files, (file) => file.length + 2); // array of filenames lengths

  /* table properties */
  //    cols = Math.floor(actual console width / the max filelangth)
  var table = { cols: 0, rows: 0 };
  table.cols = Math.floor(process.stdout.columns / max(filesLengths));
  table.rows = Math.ceil(files.length / table.cols);

  // initialization of padding values
  var paddings: number[] = [];
  for (var col = 0; col < table.cols; col++) {
    if (col < table.cols - 1)
      paddings.push(max(filesLengths.slice(col * table.rows, (col + 1) * table.rows)))
    else
      paddings.push(max(filesLengths.slice(col * table.rows)));
  }

  // print all
  for (var row = 0; row < table.rows; row++) {
    for (var col = 0; col < table.cols; col++) {

      var i = (col * table.rows) + row;
      // if this cell must be empty, then break the line and continue
      if (i >= files.length) {
        continue;
      }

      // print the filename
      var file = files[i];
      if (endsWith(file, "/"))
        process.stdout.write(green(file.padEnd(paddings[col])));
      else
        process.stdout.write(file.padEnd(paddings[col]));

    }
    process.stdout.write("\n");
  }

}