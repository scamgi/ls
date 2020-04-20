import { green } from "colors";
import { map, max, endsWith } from "lodash";
import { insertAt } from "./utilities";

function print(file: string, padEnd: number) {
  var output = file.padEnd(padEnd);

  if (endsWith(file, "/"))
    output = green(output);

  process.stdout.write(output);
}

/**
 * it default displays the compact view
 */
export default function display(files: string[]) {
  
  /* table properties */
  const maxFileLength = max(map(files, (file) => file.length + 2)); // array of filenames lengths
  var table = { cols: 0, rows: 0 };
  //    cols = Math.floor(actual console width / the max filelangth)
  table.cols = Math.floor(process.stdout.columns / maxFileLength);
  table.rows = Math.ceil(files.length / table.cols);

  // add empty spaces in order to adjust the columns
  var emptySpaces = (table.cols * table.rows) - files.length;
  for (var i = 0; i < emptySpaces; i++) {
    var index = (files.length) - (i * table.rows);
    insertAt(files, index, "");
  }

  // initialization of padding values
  const filesLengths = map(files, (file) => file.length + 2); // array of filenames lengths
  var paddings: number[] = [];
  for (var col = 0; col < table.cols; col++) {
    paddings.push(max(filesLengths.slice(col * table.rows, (col + 1) * table.rows)))
  }

  // print all
  for (var row = 0; row < table.rows; row++) {
    for (var col = 0; col < table.cols; col++) {

      var i = (col * table.rows) + row;
      var file = files[i];
      
      if (file == "")
        continue;

      // print the filename
      print(file, paddings[col]);
    }
    process.stdout.write("\n");
  }

}