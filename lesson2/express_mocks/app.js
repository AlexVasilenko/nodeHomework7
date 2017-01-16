var express = require( 'express' );
var path = require( 'path' );
var fs = require( 'fs' );
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


// app.post('/post/', function (req, res) {
//         res.send('<html><body><h1>Post body' + req.body.param1 + '</h1></body></html>');
// });


// app.all('/test/', function (req, res) {
//     res.json('{ test: 'Hello test'}');
// });

// app.all('/api/' + apiVersion + '/*', function (req, res) {
//     // console.log(req);
//
//     render(req, res);
// });
//

// app.all('/api/:apiVersion/*', function (req, res) {
//     var filePath = req.path + req.method.toLowerCase() + '.json';
//
//     filePath = filePath.replace('/' + apiVersion +  '/', '/');
//
//     filePath = path.join(__dirname, filePath);
//
//     fs.stat(filePath, function (err) {
//         res.setHeader('content-type', 'application/json');
//
//         if (err) {
//             return res.send({ success: false });
//         }
//
//         fs.createReadStream(filePath).pipe(res);
//     });
// });

















function render(req, res) {

    var fileName = req.path + '/' + req.method.toLowerCase() + '.json';
    //   /api/1.0.1/users/get.json
    fileName = fileName.replace('/' + apiVersion + '/', '/');
    //   /api/users/get.json
    var filePath = path.join(__dirname, fileName);
    console.log(req.method, filePath);
    // /Users/puzankov/work/fs/node-js-getting-started/api/users/get.json

    if (fs.statSync(filePath)) {

        res.setHeader('content-type', 'application/json');

        fs.createReadStream(filePath).pipe(res);
    }
    else {
        console.log('no such file', filePath);

        res
            .status(404)
            .json([
                {
                    "info": {
                        "success": false,
                        "code": 12345
                    }
                }
            ])
            .end();
    }
}

//
//app.get('/api/1.0/users', function (req, res) {
//    res.send(users);
//});
//
//app.get('/api/1.0/users/:userId', function (req, res) {
//
//    console.log(req.query);
//
//    res.send(user);
//});


