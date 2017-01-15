var multer  = require('multer');
var config = require('config');
var router = require('express').Router();

var uploadMiddleware = multer({ dest: config.uploadDestination });

router.post('/upload', uploadMiddleware.single('syncfile'), function(req, res) {
  console.log('uploaded syncfile', req.file);
  res.status(200).end();
});

module.exports = router;
