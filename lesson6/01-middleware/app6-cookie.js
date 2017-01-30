var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');

// load the cookie-parsing middleware
app.use(cookieParser());


app.get('/', function(req, res) {
    console.log('Cookies: ', req.cookies)
});

app.listen(5000, function () {
    console.log('listening on http://localhost:5000');
});
