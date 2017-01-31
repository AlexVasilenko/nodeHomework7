module.exports =  {
    getReqUrl: function(req, res, next) {
        console.log('Request URL:', req.originalUrl);
        next();
    },
    getReqMethod: function (req, res, next) {
        console.log('Request Type:', req.method);
        next();
    }
};
