var url = require('url');
//var debug = require('debug')('server:request');
var log = require('./log')(module);

module.exports=function(req,res){
//    console.log(req.headers);
//    console.log(req.method, req.url);
    var urlParsed = url.parse(req.url,true);

    log.info(urlParsed);

    if (urlParsed.path="/echo" && urlParsed.query.message) {
//        res.writeHeader(403,"Forbitten",{'Cache-control':'no-cache'});
        log.debug(urlParsed.query.message);

        res.setHeader('Cache-control','no-cache'); //, no-store, must-revalidate
        res.end(urlParsed.query.message);
    } else {
        //debug('UNknown URL');
        log.error('UNknown URL!');
        res.statusCode = 404;
        res.end("Page not found");
    }
};