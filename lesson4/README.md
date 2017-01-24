# Lesson 4. Covering application (our cli tool and express sync server from the previous lesson) with tests

----
## Lecture

**Video Link** [Webinar Video 4](https://youtu.be/rGu5gNR4BhE)

* Unit tests
* Integration tests
* Spies, Mocks, Stubs
* Test coverage

----
## Installation

1. Go to *./cloud* folder, run *npm install*.
2. Go to *./filesync* folder, run *npm install -g*, then *npm link*.

----
## Usage

1. Go to *./cloud* folder, run *npm start*.
2. Go to any folder, run *filesync -u qwe <file>* where *<file>* is relative path to the tile you want to sync. Password is *securepass*.

----
## Testing

Go to *./cloud* or *./filesync* folder, and run *npm test*.

----
## Homework

1. (easy) Добавить в filsync tool integration тесты, которые будут проверять работоспособность приложения с запущенным сервером при разных тест-кейсах.
2. (medium) Написать моковый сервер, который будет подниматься рядом вместе с запуском integration тестов filsync.

----
## Links

1. [Spawn](https://docs.nodejitsu.com/articles/child-processes/how-to-spawn-a-child-process/)
2. [Mocha](https://mochajs.org/)
3. [Chai](http://chaijs.com/)
4. [Supertest](https://www.npmjs.com/package/supertest)
5. [Sinon](http://sinonjs.org/)
6. [Istanbul](https://www.npmjs.com/package/istanbul)
