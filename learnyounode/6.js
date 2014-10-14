var part2 = require('./6_2');
var dirpath = process.argv[2];
var extFilter = process.argv[3];

part2(dirpath, extFilter, function(err, files) {
    files.forEach(function(file) {
        console.log(file);
    });
})
