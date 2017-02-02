const VALID_USER = 'qwe';
const VALID_PASS = 'securepass';

module.exports = {
  check: checkCredentials
};

function checkCredentials(username, password) {
  return username === VALID_USER && password === VALID_PASS;
}
