/**
 * Created by sunjian on 2016/11/11.
 */
var http=require("http");
process.stdin.setEncoding("utf-8");
var h=http.createServer(function(request,response){
    response.write("123789 ");
    response.end()
})
h.listen(3000,function(){
    console.log("listen success")
})