var sio=require("socket.io");
var http=require("http");
var fs=require("fs");
var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(fs.readFileSync("./index.html"));

}).listen(1337);

var socket=sio.listen(server);
socket.on("connection",function(socket){
    socket.emit("news",{hello:"���"});
    socket.on("my other event",function(data){
        console.log("�������˽��յ���Ϣ%j",data);
    });
});