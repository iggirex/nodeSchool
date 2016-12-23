var fs = require("fs");

console.log(process.argv[3]);
var files = fs.readdir(process.argv[2], function(err, data) {
	if(err) throw err;
	for(var i=2; i<data.length; i++){
		if(data[i].substring(data[i].length - 3, data[i].length) === ".md" && data[i].contains(".")) console.log(data[i]);
		//if(data[i].substring(data[i].length - 3, data[i].length) === ".md"){
		//	console.log(data[i])
		//}
	}
});
