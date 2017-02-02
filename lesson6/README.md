# Lesson 6. Middleware. Templates. Mail.

----
## Lecture

**Video Link** [Webinar Video 6]()

***Video timing***


----
## Homework

Неодбходимо создать приложение на express.js (или koa).

### 1. Home page html

Форма должна содердать такие поля:
* Имя `[type=text]`
* Телефон `[type=tel]`
* Email `[type=email]`
* Продукт `[type=select]`
    * Молоко
    * Хлеб
    * Картошка
    * Курица
    * Соль
* Заказать `[type=submit]`

При сабмите формы отправлеям запрос `POST /order/`.

### 2. Шаблонизировать home page

При запросе `GET /` — должна отдаваться html страница  `home page` с формой.
Ее необходимо отдавать через шаблонизатор (handlebars, ejs, jade — на ваш выбор).

### 3. Form Submit

Необходимо создать обработчик на `POST /order/`.
 
При получении запроса необходимо  
 
 

1. Добавить к обработке формы валидацию email.
2. Добавить к обработке формы валидацию телефона.
3. В форме сделать `select` с выбором продукта.
4. Добавить разные шаблоны на разные продукты.
5. Создать конфиг товаров: заголовок письма, адрес шаблона письма.
6. Создать отправку письма менеджеру со всеми деталями заказа.

----
## Links

1. [Writing middleware (ru)](http://expressjs.com/ru/guide/writing-middleware.html)
2. [Using middleware (ru)](http://expressjs.com/ru/guide/using-middleware.html)
3. [Middleware list](http://expressjs.com/ru/resources/middleware.html)
4. [CORS](https://www.npmjs.com/package/cors)
5. [Routing](http://expressjs.com/ru/guide/routing.html)
6. [ejs](http://www.embeddedjs.com)
7. [Handlebars](http://handlebarsjs.com)
8. [npm express-handlebars](https://www.npmjs.com/package/express-handlebars)
9. [Nodemailer](https://nodemailer.com)
