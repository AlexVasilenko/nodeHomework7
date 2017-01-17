var fs = require('fs');

console.log('1. hi');

fs.open(__filename, 'r', function (err, file) {
    console.log('2. I/O');
});

setImmediate(function () {
   console.log('3. immediate');
});

process.nextTick(function () {
    console.log('4. nextTick');
});

console.log('5. ho ho ho');
