var http = require('http');

var server = http.createServer(function(request, response) {
	response.writeHead(200, {
		'Content-type': 'text/plain'
	})
	response.end('Hello World');
})

server.listen(8000);

console.log('Listening on http://127:8000');