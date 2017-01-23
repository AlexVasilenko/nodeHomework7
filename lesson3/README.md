# Lesson 3. Making cli tool and express sync server

----
## Lecture

**Video Link** [Webinar Video 3](https://youtu.be/nd6T0ZJQSG0)

* Writing console tools
* Configs
* Data streams
* Logging, debug
* Promisifying callback methods

***Video timing***

1.	[Модуль commander]( https://youtu.be/nd6T0ZJQSG0#t=42m03s) 
2.	[Использование библиотеки promptly]( https://youtu.be/nd6T0ZJQSG0#t=48m59s) 
3.	[Использование библиотеки asci-progress]( https://youtu.be/nd6T0ZJQSG0#t=65m45s) 
4.	[Использование библиотеки agent]( https://youtu.be/nd6T0ZJQSG0#t=72m47s) 
5.	[Модуль stats]( https://youtu.be/nd6T0ZJQSG0#t=92m41s) 
6.	[Logging]( https://youtu.be/nd6T0ZJQSG0#t=107m28s) 
7.	[Routes]( https://youtu.be/nd6T0ZJQSG0#t=109m58s) 
8.	[Конфигурация в приложении]( https://youtu.be/nd6T0ZJQSG0#t=110m37s) 
9.	[Использование библиотеки multer]( https://youtu.be/nd6T0ZJQSG0?t=7294) 

----
## Installation

1. Go to *./cloud* folder, run *npm install*.
2. Go to *./filesync* folder, run *npm install -g*, then *npm link*.

----
## Usage

1. Go to *./cloud* folder, run *npm start*.
2. Go to any folder, run *filesync -u qwe <file>* where *<file>* is relative path to the tile you want to sync. Password is *securepass*.

----
## Homework

1. (easy) Сделать так, чтобы сервер сравнивал размер загружаемого файла и последнюю дату изменения, и если файл не совпадает с тем, что у нас уже есть - заменил его. Подсказка: при этом придётся записывать настоящие названия файлов (после переименования) в файл с нашим списком файлов, чтобы иметь потом возможность обратиться к этим файлам. Формат записи можно менять ;)
2. (medium) Заменить основные модули так, чтобы всё дальше работало. На стороне клиента можно заменить *commander* на *minimist*, *promptly* на *inquirer*, *superagent* на *request*, на стороне сервера *multer* на *multyparty*, *winston* на *bunyan*. Можно выбрать другие аналоги, главное - чтобы сохранился функционал.
3. (hard) Сделать ещё одну комманду на клиенте, которая позволит получить из нашего клауда все ранее загруженные файлы дериктории, из которой была вызвана комманда, при этом перезаписывая их при необходимости по тому же принципу что и в 1 задании.

----
## Links

1. [Streams](https://www.sitepoint.com/basics-node-js-streams/)
2. [Streams 2](https://www.tutorialspoint.com/nodejs/nodejs_streams.htm)
3. [Streams 3](https://github.com/substack/stream-handbook)
4. [Logging](https://blog.risingstack.com/node-js-logging-tutorial/)
5. [Debug](http://www.100percentjs.com/best-way-debug-node-js/)
