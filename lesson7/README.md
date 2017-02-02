# Lesson 7. Redis. AuthN service.
----
## Lecture

**Video Link** [Webinar Video 7](https://youtu.be/QO-A2rOT97c)

----
## Homework

1. Покрыть authN сервис тестами, можно использовать при этом [fakeredis](https://github.com/guilleiguaran/fakeredis). В каждом тесте после основного действия, кроме ответа сервиса, надо проверить значения, которые у нас появились в самом редисе. В случае использования настоящего редиса - не забываем *чистить за собой* :)
2. Переделать **cloud** сервис, чтобы он хранил данные о синхронизированных файлах не в файле *filesList*, а в редисе.
3. Хорошо разобраться в [типах данных](https://redis.io/topics/data-types-intro), [Паб/Саб механизме](https://code.tutsplus.com/tutorials/multi-instance-nodejs-app-in-paas-using-redis-pubsub--cms-22239) и [keyspace-notifications](https://redis.io/topics/notifications), [TTL](http://www.giantflyingsaucer.com/blog/?p=3635), [transactions](https://www.javacodegeeks.com/2016/02/redis-transactions.html).

----
## Links

1. [uuid](https://www.npmjs.com/package/uuid)
2. [Маленькая книга о Redis](http://www.bazhukov.net/little-redis-book/)
3. [Redis download](https://redis.io/download)
4. [Redis documentation](https://redis.io/documentation)
5. [npm redis](https://www.npmjs.com/package/redis)
