var fs = require('fs');

fs.stat(__filename, function (err, stats) {
    if (err) {
        console.log(err);
    }

    console.log(stats);
    console.log(stats.isFile());
});


