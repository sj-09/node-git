var http = require('http');
var url = require('url');
var util = require('util');
var querystring = require('querystring');





//http.createServer(function (request, response) {
//    var body = [];
//    console.log(request.method) ;
//    console.log(request.headers) ;
//    request.on('data', function (chunk) {
//        body.push(chunk);
//    }) ;
//    request.on('end', function () {
//        body = Buffer.concat(body) ;
//        console.log(body.toString()) ;
//    });
//}).listen(3000) ;

http.createServer(function(req, res){
    var post = [];
    res.writeHead(200, {
        "Content-Type": "text/html;charset='utf-8'",
        "Access-Control-Allow-Origin": 'http://localhost:63342'
    });
    req.on('data', function(chunk){    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        console.log(req.url);
        post.push(chunk)
    });

    req.on('end', function(){    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        var posts = querystring.parse(post);
        console.log(posts);
        res.end(util.inspect(post));

        //res.write(util.inspect(post));
        //res.end();
    });
}).listen(3000, function () {
    console.log('3000');
});





//http.createServer(function(req, res){
//    console.log(util.hostname)
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end(util.inspect(url.parse(req.url, true,null,true)));
//}).listen(3000);