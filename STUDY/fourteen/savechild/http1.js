/**
 * Created by sunjian on 2016/11/14.
 */
var http=require("http");

http.createServer(function(request,response){
    response.write("this is one......")
    response.end();
}).listen(8001,function(){
    console.log("listen http1 success....")
})