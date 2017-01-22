var config = require('../config');//TO-DO: switch to config module
var basic = require('basic-auth');
var router = require('express').Router();
var uploadCtrl = require('../controllers/upload');
var log = require('../log');

router.post('/upload',
  basicAuth(),
  uploadCtrl.validate(),
  uploadCtrl.parse.single('syncfile'),
  function(req, res) {
    log.verbose(req.file ? 'Uploaded' : 'Duplicate', req.query.filePath);
    res.status(200).end();
  }
);

function basicAuth() {
  return function(req, res, next) {
    var creds = basic(req);
    if (!creds || creds.name !== config.username || creds.pass !== config.password) {
      log.error('Not Authorized', creds);
      res.status(401).send('Not Authorized');
    } else {
      log.debug('Authorized', creds.username);
      return next();
    }
  };
}


module.exports = router;
