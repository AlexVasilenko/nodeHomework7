var fs = require('fs');

fs.writeFile('old.txt', 'data',  function (err) {
    if (err) { return console.log(err); }

    fs.rename('old.txt', 'new.txt', function (err) {
        if (err) { return console.log(err); }

        fs.unlink('new.txt', function (err) {
            if (err) { return console.log(err); }

            console.log('removed');
        })
    })

});


