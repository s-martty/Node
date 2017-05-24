var http = require('http');

var debug = require('debug')('server');

var  server= new http.Server(require('./request'));


server.listen(1888,'127.0.0.1');
debug('Server started...');

/*var emit = server.emit;
server.emit = function(event){;//
    console.log(event);
//    emit.apply(server,arguments);
}*/


/*var counter = 0;
server.on('request', function(req,res){
    res.end("Привет мир!" + ++counter);
})*/

