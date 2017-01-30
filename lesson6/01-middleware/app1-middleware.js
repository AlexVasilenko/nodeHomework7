var express = require('express');

var app = express();
//
// app.use(function (req, res, next) {
//     console.log('Time:', Date.now());
//     next();
// });

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.listen(5000, function () {
    console.log('listening on http://localhost:5000');
});
