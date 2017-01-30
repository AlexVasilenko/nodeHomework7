'use strict';

var authConf = require('../config/config');

var ejs = require('ejs');
var fs = require('fs');
var express = require('express');
var nodeMailer = require('nodemailer');

var liqpay = require('./liqpay');

var config = {
    infoMail: 'info@frontend-science.com',
    fsPhone: '+38 068 867—32—23',
    host: 'http://frontend-science.com'
};

var courses = {
    'ADV_FE': {
        subject: 'Ура! Мы получили твою заявку на курс Advanced Front-end',
        clientMail: './views/order-client-advfe.ejs',
        attachments: {
            filename: 'happy.gif',
            path: './mail-static/happy.gif',
            cid: 'mail@happy.gif'
        }
    },
    'REACT': {
        subject: 'Ура! Мы получили твою заявку на курс React.js',
        clientMail: './views/order-client-react.ejs',
        testSubject: 'Стартовый скрининг знаний для курса React.js',
        testMail: './views/order-test-react.ejs',
        testLink: 'https://goo.gl/11es6M',
        attachments: {
            filename: 'happy.gif',
            path: './mail-static/happy.gif',
            cid: 'mail@happy.gif'
        }
    },
    'NODE_START1': {
        subject: 'Ура! Мы получили твою заявку на курс Node.js Start',
        clientMail: './views/order-client-nodestart.ejs',
        attachments: {
            filename: 'happy.gif',
            path: './mail-static/happy.gif',
            cid: 'mail@happy.gif'
        }
    },
    'QAA1': {
        subject: 'Ура! Мы получили твою заявку на курс QA Automation',
        clientMail: './views/order-client-qaa.ejs',
        attachments: {
            filename: 'happy.gif',
            path: './mail-static/happy.gif',
            cid: 'mail@happy.gif'
        }
    },
    'BEMup': {
        subject: 'Ваша заявка на видеозапись в BEMup',
        clientMail: './views/order-client-bemup.ejs',
        attachments: {}
    },
    'LAB': {
        subject: 'Ваша заявка на видеозапись Front-end Лаборатории',
        clientMail: './views/order-client-lab.ejs',
        attachments: {}
    },
    'Intensive': {
        subject: 'Ваша заявка на Front-end Intensive',
        clientMail: './views/order-client-intensive.ejs',
        attachments: {}
    }
};

function validatePhone(phone) {
    var regExp = /^((8|\+\d)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return phone.match(regExp);
}

function validateEmail(mail) {
    var regExp = /.+@.+\..+/i;
    return mail.match(regExp);
}

function generateOrderId() {
    var date = new Date(),
        orderId = date.getDate() + date.getMonth() + '-';

    for (var i = 0; i < 4; i++) {
        orderId += Math.floor(Math.random() * 10);
    }

    return orderId;
}

app.post('/', function(req, res) {
    var data = req.body,
        orderId = generateOrderId(),
        paymentLink;

    console.log('-------------' + new Date() + '----------------');
    console.log(req.headers);
    console.log(req.body);

    // Забанил спамера
    if(!data || req.headers['postman-token'] || req.headers['x-real-ip'] === '46.164.135.76') {
        return res.json({ status: 'error' });
    }

    if(!data.phone || !validatePhone(data.phone)) {
        return res.json({ status: 'error', message: 'wrongPhone' });
    }

    if(!data.email || !validateEmail(data.email)) {
        return res.json({ status: 'error', message: 'wrongEmail' });
    }

    // Sending Mail
    var transporter = nodeMailer.createTransport({
        service: 'yandex',
        auth: authConf.mail
    });

    var clientMailOptions = {
        from: 'Front-end Science <info@frontend-science.com>', // sender address
        to: data.email, // receiver
        subject: courses[data.course].subject, // Subject line
        html: ejs.render(fs.readFileSync(courses[data.course].clientMail).toString(),
            {
                name: data.name,
                fsPhone: config.fsPhone,
                host: config.host,
                price: data.price,
                paymentLink: paymentLink
            }
        ),
        attachments: [
            {
                filename: 'logo.png',
                path: './mail-static/logo.png',
                cid: 'mail@logo.png'
            },
            {
                filename: 'footer.png',
                path: './mail-static/footer.png',
                cid: 'mail@footer.png'
            }
        ]
    };

    var infoMailOptions = {
        from: 'Front-end Science <info@frontend-science.com>', // sender address
        to: config.infoMail,
        bcc: config.infoMail,
        subject: 'Заявка ' + data.course + ': ' + data.sname + ' ' + data.name,

        forceEmbeddedImages: false,

        html: ejs.render(fs.readFileSync('./views/order-info.ejs').toString(),
            {
                name: data.name,
                sname: data.sname,
                email: data.email,
                phone: data.phone,

                type: data.type,
                pack: data.pack,
                price: data.price,

                course: data.course,
                fsPhone: config.fsPhone,
                host: config.host,
                orderId: orderId
            }
        ),
        attachments: [
            {
                filename: 'footer.png',
                path: './mail-static/footer.png',
                cid: 'advancedfrontned@footer.png'
            }
        ]
    };

    clientMailOptions.attachments = clientMailOptions.attachments.concat(courses[data.course].attachments);

    transporter.sendMail(clientMailOptions, function(error) {
        if (error) {
            console.log(error.message);
        }
    });

    if (courses[data.course].testSubject) {
        var clientTestOptions = {
            from: 'Front-end Science <info@frontend-science.com>', // sender address
            to: data.email, // receiver
            subject: courses[data.course].testSubject, // Subject line
            html: ejs.render(fs.readFileSync(courses[data.course].testMail).toString(),
                {
                    name: data.name,
                    fsPhone: config.fsPhone,
                    host: config.host,
                    testLink: courses[data.course].testLink
                }
            ),
            attachments: [
                {
                    filename: 'logo.png',
                    path: './mail-static/logo.png',
                    cid: 'mail@logo.png'
                },
                {
                    filename: 'footer.png',
                    path: './mail-static/footer.png',
                    cid: 'mail@footer.png'
                }
            ]
        };

        transporter.sendMail(clientTestOptions, function(error) {
            if (error) {
                console.log(error.message);
            }
        });
    }

    transporter.sendMail(infoMailOptions, function(error) {
        if (error) {
            console.log(error.message);

            res.json({ status: 'error' });
            return;
        }

        res.json({ status: 'ok', link: paymentLink });

        transporter.close(); // close the connection pool
    });

});

module.exports = router;

