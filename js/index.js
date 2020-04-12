"use strict";
exports.__esModule = true;
var _ = require("lodash");
var glob = require("glob");
var variables_1 = require("./variables");
// glob call
glob(variables_1.pattern, variables_1.options, function (err, files) {
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
