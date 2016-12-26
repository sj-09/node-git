var http = require('http');
var url = require('url');


//Url {
//    protocol: null,
//        slashes: null,
//        auth: null,
//        host: null,
//        port: null,
//        hostname: null,
//        hash: null,
//        search: '?username=haonan&password=123',
//        query: 'username=haonan&password=123',
//        pathname: '/home/index.html',
//        path: '/home/index.html?username=haonan&password=123',
//        href: '/home/index.html?username=haonan&password=123'
//}



var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    console.log(pathname.substr(1));

    res.writeHead(200, {'Content-Type': 'text/plain;charset:"UTF8"'});
    res.write('hello world!')
    res.end();
});
server.listen(3000, function () {
    console.log('listening at port 3000!');
});