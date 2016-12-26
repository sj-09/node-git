/**
 * Created by Nan on 2016/11/12.
 */
var http = require('http');
var fs = require('fs');


//var server = http.createServer(function (req, res) {
//
//});
//
//server.listen(8080, function () {
//    console.log('listen at 8080 prot');
//});
//express 路由封装的基本原理
http.createServer(function (req, res) {
    fs.readFile('index.html', function (err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
}).listen(8080, function () {
    console.log('listen at 8080 prot');
});
