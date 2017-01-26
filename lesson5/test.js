'use strict';

class Human {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  run(){
    console.log('OK, I am running!');
  }
}

class Hero extends Human {
  constructor(firstName, lastName) {
    // this здесь пока-что не доступен
    super(firstName, lastName);
    this.privileges = 5; // теперь доступен
  }
  get fullName() { // геттер
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(newValue) { // сеттер
    [this.firstName, this.lastName] = newValue.split(' ');
  }
  run() {
    super.run();
    console.log('And Im not tired!');
  }
  ["test".toUpperCase()]() { // вычисляемое название метода
    console.log('TEST passed!');
  }
  static createAdmin() {
    return new Hero("Thomas", "Anderson");
  }
};

let neo = Hero.createAdmin();
neo.TEST(); // TEST passed!
neo.fullName = 'Chosen One';
console.log(neo.fullName); // 'Chosen One'
neo.run(); // OK, I am running! And Im not tired!
