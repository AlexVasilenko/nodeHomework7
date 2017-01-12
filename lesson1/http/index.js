var http = require('http');

http.createServer(function (req, res) {
    console.log(res);
    res.writeHead(200);
    res.end('Hello Node.js');
}).listen(3000);

console.log('Node started on http://localhost:3000');
