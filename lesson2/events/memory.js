// Step1
function Request() {
    this.bigData = new Array(1e6).join('-');

    this.send = function (data) {
        console.log(data);
    }

}

//Step 2
// var EventEmitter = require('events').EventEmitter;
//
// var db = new EventEmitter();
// //db.setMaxListeners(0);
//
// function Request() {
//     var self = this;
//
//     this.bigData = new Array(1e6).join('-');
//
//     this.send = function (data) {
//         console.log(data);
//     };
//
// //this.end = function () {
// //    db.removeListener('data', onData);
// //};
//
//     db.on('data', function (info) {
//         self.send(info)
//     })
// }

// --------------------------

setInterval(function () {
    var req = new Request();
    console.log(process.memoryUsage().heapUsed);
    // console.log(db);
}, 200);
