var ejs = require('ejs');
var read = require('fs').readFileSync;
var join = require('path').join;
var str = read(join(__dirname, '/list.ejs'), 'utf8');

var compiled = ejs.compile(str);

var ret  = compiled({
    names: ['foo', 'bar', 'baz']
});

var ret2  = compiled({
    names: ['111', '222', '3333']
});


console.log(ret);
console.log(ret2);
