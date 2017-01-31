var express = require('express');

var app = express();

// var ejs = require('ejs');
// var fs = require('fs');
var config = require('./config');

var nodeMailer = require('nodemailer');

app.get('/mail/', function (req, res) {

    var transporter = nodeMailer.createTransport({
        service: 'yandex',
        auth: config.mailAuthN
    });

    var mailOptions = {
        from: 'Front-end Science <test@frontend-science.com>', // sender address
        to: 'puzankov-sd@ya.ru', // receiver
        subject: 'Subject Node.js', // Subject line
        html: '<b>hello</b>'
    };

    transporter.sendMail(mailOptions, function(error) {
        if (error) {
            console.log(error.message);
            return res.send('Error!');
        }

        console.log('Mail sent!');
        res.send('Mail sent!');
    });

});

app.listen(5000, function () {
    console.log('listening on http://localhost:5000');
});


//     ejs.render(fs.readFileSync(courses[data.course].clientMail).toString(),
//     {
//         name: data.name,
//         fsPhone: config.fsPhone,
//         host: config.host,
//         price: data.price,
//         paymentLink: paymentLink
//     }
// )
// attachments: [
//     {
//         filename: 'logo.png',
//         path: './mail-static/logo.png',
//         cid: 'mail@logo.png'
//     },
//     {
//         filename: 'footer.png',
//         path: './mail-static/footer.png',
//         cid: 'mail@footer.png'
//     }
// ]




