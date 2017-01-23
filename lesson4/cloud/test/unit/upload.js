var expect = require('chai').expect;
var validator = require('../../controllers/upload').validate();

describe('Upload controller', function() {

  it('validator middleware should validate correct request', function() {
    validator({ query: { filePath: 'path/to/file' } }, {}, function(err) {
      expect(err).to.equal(undefined);
    });
  });

  it('validator middleware should give validation error on request with no filePath', function() {
    validator({ query: {} }, {}, function(err) {
      expect(err.code).to.equal(400);
    });
  });

});
