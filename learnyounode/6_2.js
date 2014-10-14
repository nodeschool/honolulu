var fs = require('fs');

module.exports = function(dirPath, extFilter, cb) {
    fs.readdir(dirPath, function(err, list) {
        if (!err) {
            var files = list.filter(function(filename) {
                var parts = filename.split('.');
                if (parts.length > 2)
                    var ext = parts[parts.length - 1];
                else
                    var ext = parts[1];

                return ext === extFilter;
            });
        }

        return cb(err, files);
    });
};
