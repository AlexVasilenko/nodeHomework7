var express = require('express');

var app = express();

app.use(function(req, res, next){
    console.log('processing request for ' + req.url );
    next();
});

app.use(function(req, res, next){
    console.log('terminating request');
    res.send('thanks for playing!');
// note that we do NOT call next() here...this terminates the request
//     next();
});

app.use(function(req, res, next){
    console.log('whoops, i\'ll never get called!');
});

app.listen(5000, function () {
    console.log('listening on http://localhost:5000');
});

