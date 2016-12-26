/**
 * Created by sunjian on 2016/11/7.
 */
var fs=require("fs");
var path=require("path");
r
var http=require("http");

var server=http.createServer(function(req,res){
      res.write("shagua")
      res.end()
})
server.listen(3000,function(){
    console.log("listen to.....")
});
   /* process.stdout.write("zhangsan");
    process.stderr.write("zhangsan-err");*/