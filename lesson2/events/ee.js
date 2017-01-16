var events = require('events');

var EventEmitter = events.EventEmitter;

var server = new EventEmitter();

server.on('request', function (req) {
    req.approved = true;
});

server.on('request', function (req) {
    console.log(req);
});

server.emit('request', { from: 'Sergey', type: 'new' });

server.emit('request', { from: 'Dima' });

// console.log(server.listenerCount('request'));

// console.log(server.listeners('request'));
