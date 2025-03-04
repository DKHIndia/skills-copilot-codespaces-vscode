// Create web server and listen on port 3000
// Use the 'comments' module to handle requests

var comments = require('./comments.js');
var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/comments') {
    comments.add(req, res);
  } else if (req.method === 'GET' && req.url === '/comments') {
    comments.get(req, res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000);