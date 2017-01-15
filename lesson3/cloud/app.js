var express = require('express');
var routes = require('./routes');

var app = express();

app.use(routes);

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json(err.message);
});

app.listen(3000, function() {
  console.log('app listening 3000 port');
});
