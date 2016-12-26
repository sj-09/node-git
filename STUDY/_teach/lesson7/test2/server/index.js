var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    //如果请求的地址 不是favicon.ico
    if (req.url !== "/favicon.ico") {

        //判断请求头状态
        //console.log(res.headersSent);
        //if (res.headersSent) {
        //    console.log("响应头已发送");
        //} else {
        //    console.log("响应头未发送");
        //}
        res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'", "Access-Control-Allow-Origin": 'http://localhost:63342'});
        //设置状态码
        //res.statusCode = 200;
        //res.sendDate = false;

        fs.readFile('../readme.txt',function (err,data) {
            if(err){
                console.log(err);
            }

            res.write("郝楠先生！"+data);
            res.end();
        });
    }

});

server.listen(1337, "localhost", function () {
    console.log("开始监听...");
});