var multer  = require('multer');
var config = require('../config');//TO-DO: switch to config module
var basic = require('basic-auth');
var fs = require('fs');
var router = require('express').Router();

var uploadMiddleware = multer({
  dest: config.uploadDestination,
  fileFilter: fileFilter
});

var FILES_LIST_PATH = config.filesListPath;
var FILERECORDSPLITTER = config.filesRecordSplitter;
var filesList = [];

try {
  filesList = fs.readFileSync(FILES_LIST_PATH, 'utf8').split(FILERECORDSPLITTER);
  console.log('FileList loaded at start');
} catch (err) {
  console.log('No fileList found at start');
}

router.post('/upload',
  basicAuth(),
  validateRequest(),
  uploadMiddleware.single('syncfile'),
  saveToFileList(),
  function(req, res) {
    console.log(req.file ? 'Uploaded' : 'Duplicate', req.query.filePath);
    res.status(200).end();
  }
);

function basicAuth() {
  return function(req, res, next) {
    var creds = basic(req);
    if (!creds || creds.name !== config.username || creds.pass !== config.password) {
      console.error('Not Authorized', creds);
      res.status(401).send('Not Authorized');
    } else {
      console.log('Authorized', creds);
      return next();
    }
  };
}

function fileFilter(req, file, cb) {
  var filePath = req.query.filePath;
  if (filesList.includes(filePath)) {
    console.log('Duplicate', filePath);
    cb(null, false);
  } else {
    console.log('New file', filePath);
    cb(null, true);
  }
}

function validateRequest() {
  return function(req, res, next) {
    var filePath = req.query.filePath;
    if (!filePath) {
      var err = new Error('Validation error: filePath parameter is missing');
      err.code = 400;
      return next(err);
    }
    next();
  }
}

function saveToFileList() {
  return function(req, res, next) {
    var filePath = req.query.filePath;
    try {
      filesList.push(filePath)
      var fileRecord = filePath + FILERECORDSPLITTER;
      fs.appendFileSync(FILES_LIST_PATH, fileRecord);
    } catch (err) {
      return next(err);
    }
    console.log('File saved to list', filePath);
    return next();
  }
}

module.exports = router;
