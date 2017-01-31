var express = require('express');

var app = express();

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.use(function (req, res, next) {
    console.log('REQUEST!!!!');
    next();
});

app.get('/', function (req, res) {
    console.log('Hello World!');
    res.send('Hello World!');
});

app.listen(5000, function () {
    console.log('listening on http://localhost:5000');
});
