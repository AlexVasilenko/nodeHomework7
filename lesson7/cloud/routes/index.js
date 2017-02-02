const config = require('config');
const basic = require('basic-auth');
const request = require('request-promise');
const wrap = require('co-express');
const router = require('express').Router();
const uploadCtrl = require('../controllers/upload');
const log = require('../log');
const authTokens = {};

router.post('/upload',
  basicAuth(),
  uploadCtrl.validate(),
  uploadCtrl.parse.single('syncfile'),
  function(req, res) {
    log.verbose(req.file ? 'Uploaded' : 'Duplicate', req.query.filePath);
    res.status(200).json({ duplicate: !req.file });
  }
);

function basicAuth() {
  return wrap(function *(req, res, next) {
    var creds = basic(req);
    if (!creds) {
      log.error('Not Authorized', creds.username);
      throw new Error('Not Authorized', 401);
    } else {
      const {name: username, pass: password} = creds;
      const session = username + password;
      const token = authTokens[session];
      if (token) {
        yield request.get(`${config.services.authN.host}/sessions/${token}`);
      } else {
        authTokens[session] = yield request.post(
          `${config.services.authN.host}/token`,
          { json: { username, password } }
        );
      }
      log.debug('Authorized', username);
      return next();
    }
  });
}


module.exports = router;
