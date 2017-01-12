var User = require('./user');
var l10n = require('./l10n/en');

console.log(l10n);


var user1 = new User('Vitalik');
var user2 = new User('Sergey');

console.log(l10n.hello + user1.printName());
user1.printName();
user2.setAge(20);



