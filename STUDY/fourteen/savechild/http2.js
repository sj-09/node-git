/**
 * Created by sunjian on 2016/11/14.
 */
var http=require("http");

var h=http.createServer(function(req,res){
    res.write("this is two.....");
    res.end();
})
h.listen(8002,function(){
    console.log("listen http2 success.....")
})
a