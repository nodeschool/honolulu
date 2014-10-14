var fs = require('fs');
var filePath = process.argv[2];

var file = fs.readFileSync(filePath).toString();
var fileArray = file.split('\n');

console.log(fileArray.length-1);
