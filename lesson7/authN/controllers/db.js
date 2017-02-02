const VALID_USER = 'qwe';
const VALID_PASS = 'securepass';

module.exports = {
  check: checkCredentials
};

function checkCredentials(username, password) {
  // let's imagine that we go to oracle DB here, so this is a 'heavy' operation
  return username === VALID_USER && password === VALID_PASS;
}
