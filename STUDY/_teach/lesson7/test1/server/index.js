var http = require('http');

var server = http.createServer(function (req, res) {

    if (req.url !== "/favicon.ico") {
        //res.writeHead(200,{"Content-Type":"text/plain","Access-Control-Allow-Origin": '*'});
        //res.writeHead(200, {"Content-Type": "text/plain", "Access-Control-Allow-Origin": 'http://localhost:63342'});
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader("Content-Type", "text/plain");
        res.statusCode = 200;
        res.sendDate = false;
        res.write("郝楠先生！");
    }
    res.end();
});
server.listen(1337, "localhost", function () {
    console.log("开始监听...");
});