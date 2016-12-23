var fs = require("fs");

var file = fs.readFileSync(process.argv[2]);
var str = file.toString();
var arr = str.split('\n');
console.log(arr.length - 1);

//var stringOfFile = fs.readFileSync(process.argv[2].toString());
//var arr = stringOfFile.split("\n");

//console.log(arr);
