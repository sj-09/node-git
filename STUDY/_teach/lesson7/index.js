/**
 * Created by Nan on 2016/11/5.
 */
var http = require('http');
var url = require('url');

// localhost 等价于 127.0。0.1
var http_server= http.createServer(function (request, response) {
    //response.writeHead(200,{"Content-Type":"text/html","Access-Control-Allow-Origin": '*'});
    response.writeHead(200,{"Content-Type":"text/html","Access-Control-Allow-Origin": 'localhost'});
    response.write('hello world');
    response.end();
});
http_server.listen(3000, function () {
    console.log('listen port at 3000');
});