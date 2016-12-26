/**
 * Created by sunjian on 2016/11/5.
 */
var http=require("http");
var url=require("url");

var server=http.createServer(function(request,responce){
   // responce.writeHead(200,{"content-type":"text/html","Access-Contorl-Allow-Origin":"localhost"})
   // responce.writeHead(200,{"content-type":"text/html;charset='utf-8"})
    responce.write("hello pipe")
    responce.end()
   console.log(request.url)

})
server.listen(4000,function(){
  console.log("over")
})