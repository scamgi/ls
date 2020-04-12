"use strict";
exports.__esModule = true;
var _ = require("lodash");
var glob = require("glob");
// initialization of args
var args = _.slice(process.argv, 2);
// initialization of pattern
var pattern = "";
if (args.length == 0)
    pattern = "*";
else
    pattern = args[0];
// initialization of options
var options = {
    dot: true
};
// glob call
glob(pattern, options, function (err, files) {
    if (err) {
        console.log('Error: ' + err.message);
        return;
    }
    _.forEach(files, function (f) {
        console.log(f);
    });
});
// args = _.slice(args, 2);
// console.log('Args length is: ' + args.length.toString());
// _.forEach(args, (item, index) => {
//   console.log(index.toString() + ": " + item);
// });
