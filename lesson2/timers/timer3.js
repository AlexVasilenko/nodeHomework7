var http = require('http');

http.createServer(function(req, res) {

    setTimeout(function () {
        req.on('read', function () {
           // need to work on data
        });
    }, 0);

}).listen(3000);


//     process.nextTick()
//     setImmidiate()
