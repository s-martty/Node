var http = require('http');

var debug = require('debug')('server');

var  server= new http.Server(require('./request'));


server.listen(8080, 'localhost');
debug('Server get started...');

/*var emit = server.emit;
server.emit = function(event){;//
    console.log(event);
//    emit.apply(server,arguments);
}*/


/*var counter = 0;
server.on('request', function(req,res){
    res.end("Привет мир!" + ++counter);
})*/

