# Lesson 7. Redis. AuthN service.
----
## Lecture

**Video Link** [Webinar Video 7](https://youtu.be/QO-A2rOT97c)

***Video timing***

1.	[Redis]( https://youtu.be/QO-A2rOT97c#t=3m35s)
2.	[Типы данных которые поддерживает Redis]( https://youtu.be/QO-A2rOT97c#t=7m57s)
3.	[Strings]( https://youtu.be/QO-A2rOT97c#t=11m19s)
4.	[Key]( https://youtu.be/QO-A2rOT97c#t=19m50s)
5.	[List]( https://youtu.be/QO-A2rOT97c#t=24m20s)
6.	[Lrange]( https://youtu.be/QO-A2rOT97c#t=26m15s)
7.	[Lpop]( https://youtu.be/QO-A2rOT97c#t=27m43s)
8.	[Sets]( https://youtu.be/QO-A2rOT97c#t=28m39s)
9.	[Hashes]( https://youtu.be/QO-A2rOT97c#t=30m04s)
10.	[Sorted sets]( https://youtu.be/QO-A2rOT97c#t=34m20s)
11.	[Bitmaps and HyperLogLogs]( https://youtu.be/QO-A2rOT97c#t=35m44s)
12.	[Библиотека uuid]( https://youtu.be/QO-A2rOT97c#t=57m58s)
13.	[Библиотека redis]( https://youtu.be/QO-A2rOT97c#t=61m00s)
14.	[Publish/Subscribe]( https://youtu.be/QO-A2rOT97c#t=66m011s)

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
