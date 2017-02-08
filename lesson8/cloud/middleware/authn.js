'use strict';

const co = require('co');
const config = require('config');
const basic = require('basic-auth');
const request = require('request-promise');
const log = require('../log');
const authTokens = {};


module.exports = function create() {
  return function parseParams(context, next) {
    co(function *() {
      const req = context.request;
      const creds = basic(req);
      if (!creds) {
        log.error('Not Authorized', creds.username);
        const err = new Error('Not Authorized');
        err.status = 401;
        throw err;
      } else {
        yield* checkToken(creds);
        log.debug('Authorized', creds.username);
        return next();
      }
    })
    .catch(next);
  };
};

function *checkToken(creds) {
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
}
