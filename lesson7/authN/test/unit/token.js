const expect = require('chai').expect;
const tokenCtrl = require('../../controllers/token');
const config = require('./../config');

let token;

describe('Token controller', function () {

  it('login should give error on wrong creds', done => {
    const invUser = config.user.invalid;
    tokenCtrl.login(invUser.username, invUser.password)
    .catch(err => {
      done();
    });
  });

  it('login return token on correct creds', done => {
    const user = config.user.valid;
    tokenCtrl.login(user.username, user.password)
    .then(response => {
      done();
    });
  });

  it ('check returns null on unknown token', done => {
    tokenCtrl.check('fdfsdfds')
    then((res) => {
      done();
    });
  });

  it('check returns user on existing token', done => {
    tokenCtrl.check(token)
    .then((res) => {
      done();
    }
  });
})
