var http = require('http');

var server = http.Server(function(req, res) {
    // some server code
}).listen(3000);

setTimeout(function () {
    server.close();
    // server.close(function () {
    //     process.exit();
    // // clearInterval(timer);
    // });
}, 2500);

// setInterval(function () {
//     console.log(process.memoryUsage());
// }, 1000);

