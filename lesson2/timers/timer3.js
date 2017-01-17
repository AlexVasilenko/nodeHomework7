var http = require('http');

http.createServer(function(req, res) {

    console.log('Hi');
    
    setTimeout(function () {
        req.on('read', function () {
           // need to work on data
        });
    }, 0);
    
    console.log('Ho ho ho!');
        
}).listen(3000);


//     process.nextTick()
//     setImmidiate()
