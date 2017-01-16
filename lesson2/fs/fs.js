var fs = require('fs');

fs.readFile(__filename, function (err, data) {
   if (err) {
       console.log(err);
   }

    console.log(data);

    // console.log(data.toString('utf-8'));
});


// fs.readFile('kolbasa', { encoding: 'utf-8' }, function (err, data) {
//     if (err) {
//         if (err.code === 'ENOENT') {
//             console.log(err.message);
//         }
//
//         console.log(err);
//
//     }
//
//     console.log(data);
// });
