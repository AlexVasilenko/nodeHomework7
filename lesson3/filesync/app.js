#!/usr/bin/env node

/*
  The shebang (#!) at the start means execute the script with what follows.
  /bin/env looks at your current node environment.
  Any argument to it not in a 'name=value' format is a command to execute.
*/

var fs = require('fs');
var command = require('commander');
var promptly = require('promptly');
var agent = require('superagent');

var PASSWORD_MIN_LENGTH = 6;
var CLOUD_URL = 'localhost:3000/upload';

var userArgs = process.argv.slice(2);
//console.log('command started with args:', process.argv, ', so userArgs are:', userArgs);

command
  .arguments('<file>')
  .option('-u, --username <username>', 'Enter username:')
  .action(function(file) {
    promptly.prompt('Enter password:', { validator: validator, silent: true }, function (err, password) {
      if (err) {
        return exitWithError(err);
      }
      postFileToCloud(file, command.username, password, function(err, res) {
        if (err) {
          return exitWithError(err);
        }
        console.log('File synced', file);
        process.exit(0);
      });
    });
  })
  .parse(process.argv);

function exitWithError(err) {
  console.error(err.message);
  process.exit(1);
}

function postFileToCloud(file, username, password, cb) {
  fs.stat(file, function(err, stats){
    if (err) {
      return exitWithError(err);
    }
    console.log('Trying to sync file', file, 'with size', stats.size);
    agent
      .post(CLOUD_URL)
      .auth(username, password)
      .type('form')
      .on('progress', function(e) {
         console.log('Percentage done: ', e.percent);
       })
      .attach('syncfile', file)
      .set('Accept', 'application/json')
      .end(cb);
  });
}

function validator (value) {
  if (value.length < PASSWORD_MIN_LENGTH) {
    throw new Error('Password should have length more than ' + PASSWORD_MIN_LENGTH);
  }
  return value;
};
