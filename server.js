/* Load the HTTP library */
var http = require("http");
var fs = require('fs');

/* Create an HTTP server to handle responses */
fs.readFile('./index.html', function (err, html) {
  if(err) {
    throw err;
  }

  var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
  }).listen(8888, '127.0.0.1', function() {
    // Console
    console.log("Server running at http://localhost:8000");
  });
});