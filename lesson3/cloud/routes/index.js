var multer  = require('multer');
var config = require('../config');//TO-DO: switch to config module
var basic = require('basic-auth');
var router = require('express').Router();

var uploadMiddleware = multer({ dest: config.uploadDestination });

router.post('/upload', basicAuth(), uploadMiddleware.single('syncfile'), function(req, res) {
  console.log('uploaded syncfile', req.file.originalname);
  res.status(200).end();
});

function basicAuth() {
  return function(req, res, next) {
    var creds = basic(req);
    if (!creds || creds.name !== config.username || creds.pass !== config.password) {
      console.error('Not Authorized', creds);
      res.status(401).send('Not Authorized');
    } else {
      console.log('Authorized', creds);
      next();
    }
  };
}

module.exports = router;
