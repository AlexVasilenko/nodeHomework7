var http = require('http');

var server = http.Server(function(req, res) {
    // some server code
}).listen(3000);

setTimeout(function () {
    server.close();
}, 2500);

var timer = setInterval(function () {
    console.log(process.memoryUsage());
}, 1000);

timer.unref();

// timer.ref();

//Server has unref too
