#!/usr/bin/env node

/*
  The shebang (#!) at the start means execute the script with what follows.
  /bin/env looks at your current node environment.
  Any argument to it not in a 'name=value' format is a command to execute.
*/

var command = require('commander');
var promptly = require('promptly');
var cloud = require('./cloudClient');

var PASSWORD_MIN_LENGTH = 6;

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
      cloud.upload(file, command.username, password, function(err, res) {
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

function validator (value) {
  if (value.length < PASSWORD_MIN_LENGTH) {
    throw new Error('Password should have length more than ' + PASSWORD_MIN_LENGTH);
  }
  return value;
};
