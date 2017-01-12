
function User(name) {
    this.name = name;

    this.setAge = function (age) {
        this.age = age;
        console.log(this.age);
    };

    this.printName = function () {
        console.log(this.name);
    }
}


if (module.parent) {
    module.exports = User;
} else {
    var user1 = new User('Vitalik');
    var user2 = new User('Sergey');

    user1.printName();
    user2.setAge(20);
}


