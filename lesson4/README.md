# Lesson 4. Covering application (our cli tool and express sync server from the previous lesson) with tests

----
## Lecture

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
3. (hard)

----
## Links

1. [Google](https://google.com)
