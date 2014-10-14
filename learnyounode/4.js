var fs = require('fs');
var filePath = process.argv[2];

fs.readFile(filePath, {encoding: 'utf8'}, function (err, data) {
    var lines = data.split('\n');
    console.log(lines.length-1);
});
