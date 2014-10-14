var path = require('path');
var fs = require('fs');

var dirpath = process.argv[2];
var extFilter = process.argv[3];

fs.readdir(dirpath, function(err, list) {
    list.filter(function(filename) {
        var parts = filename.split('.');
        if (parts.length > 2)
            var ext = parts[parts.length - 1];
        else
            var ext = parts[1];

        return ext === extFilter;
    }).forEach(function(filename) {
        console.log(filename);
    });
});
