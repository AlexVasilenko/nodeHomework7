var express = require('express');
var path = require('path');
var fs = require('fs');
var url = require('url');

var apiVersion = require('./package').version;

console.log(apiVersion);


var app = express();

app.set('port', 5000);

app.listen(app.get('port'), function() {
    console.log('Node app is running on http://localhost:' + app.get('port') );
});

app.get('/', function (req, res) {
    res.send('<html><body><h1>My web app http API! Version ' + apiVersion + '</h1></body></html>');
});


app.post('/post', function (req, res) {
    res.send('<html><body><h1>Post body' + req + '</h1></body></html>');
});


app.all('/test/', function (req, res) {
    res.json('{ test: "Hello test" }');
});


app.all('/api/:apiVersion/*', function (req, res) {

    var filePath = req.path + req.method.toLowerCase() + '.json';

    filePath = filePath.replace('/' + apiVersion, '');


    filePath = path.join(__dirname, filePath);


    console.log(filePath);

    fs.stat(filePath, function (err) {
        res.type('json');

        if (err) {
            return res.json({ success: false, error: 'no such file' });
        }

        fs.createReadStream(filePath).pipe(res);

    });
});


//app.get('/api/1.0/users', function (req, res) {
//    res.send(users);
//});


//app.get('/api/1.0/users/:userId', function (req, res) {
//
//    console.log(req.query);
//
//    res.send(user);
//});

