var express = require('express');
var app = express();

app.use(express.static('static'));

// var options = {
//     dotfiles: 'ignore',
//     etag: false,
//     extensions: ['png', 'jpg', 'gif'],
//     index: false,
//     maxAge: '1d',
//     redirect: false,
//     setHeaders: function (res, path, stat) {
//         res.set('x-timestamp', Date.now());
//     }
// };
//
// app.use(express.static('static', options));


app.get('/a', function (req, res) {
    console.log('/a: route terminated');
    res.send('a');
});

app.listen(5000, function () {
    console.log('listening on http://localhost:5000');
});
