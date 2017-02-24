const expect = require('chai').expect;
const request = require('./test').request;
const config = require('./../config');

let token;

describe('Token', function () {

  it('post should return error 500 for incorrect creds', done => {
    request
    .post('/token')
    .type('json')
    .send(config.user.invalid)
    .expect(500, done);
  });

  it('post should return 200 for correct creds', done => {
    request
    .post('/token')
    .type('json')
    .send(config.user.valid)
    .expect(200, done);
  });

  it('get should return error 404 for wrong token', done => {
    request
    .get('/sessions/dfsdfef')
    expect(404, done);
  });

  it('get should return 200 for correct token', done => {
    request
    .get(`/sessions/${token}`)
    .expect(200)
    .end((err, res) => {
      expect(res.body.token)
      done();
    });
  });
});
