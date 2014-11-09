var bl = require('bl');
var http = require('http');

var urls = process.argv.slice(2);

var responses = ['', '', ''];
var responseCount = 0;

urls.forEach(function(url, index) {
  http.get(url, function(response) {
    response.pipe(bl(function (err, data) {
      responses[index] = data.toString();
      responseCount++;

      if (responseCount === 3) {
        responses.forEach(function(res) {
          console.log(res);
        });
      }
    }));
  });
});