var express = require('express');

var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// app.engine('.hbs', exphbs({extname: '.hbs'}));
// app.set('view engine', '.hbs');

// app.set('views', 'some/path/');

app.get('/', function (req, res) {
    res.render('home');
});

app.listen(5000, function () {
    console.log('listening on http://localhost:5000');
});
