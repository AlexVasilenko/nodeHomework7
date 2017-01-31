var express = require('express');
var requestMw = require('./request-mw');

var app = express();

function requestTime(req, res, next) {
    req.requestTime = Date.now();
    next();
}

app.use(requestTime);

app.get('/', function (req, res) {
    res.send('Hello World! Requested at: ' + req.requestTime);
});

app.use('/user/:id', requestMw.getReqUrl, requestMw.getReqMethod);

app.use(function (req, res) {
    res.send('Hi!');
});

app.listen(5000, function () {
    console.log('listening on http://localhost:5000');
});

