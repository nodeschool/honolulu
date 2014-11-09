var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(response) {
  response.pipe(bl(function (err, data) {
    var content = data.toString();
    console.log(content.length);
    console.log(content);
  }));
});