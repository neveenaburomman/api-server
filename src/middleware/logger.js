'use strict';

function logger(req,res,next) {

    console.log(`The Method = ${req.method} The Path =${req.path}`);

    next();
}


module.exports = logger;