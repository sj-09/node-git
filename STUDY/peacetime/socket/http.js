/**
 * Created by sunjian on 2016/11/23.
 */
//var socketio=require("socket.io");
var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    fs.readFile("./"+req.url,function(err,data){
        res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})
        res.end(data)
    })
}).listen(3000);
console.log("123")