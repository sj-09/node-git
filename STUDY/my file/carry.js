/**
 * Created by sunjian on 2016/11/18.
 */
var fs=require("fs");
var http=require("http");

http.createServer(function(req,res){
    var url=req.url.slice(1);
    var Arr=url.split(",");
    var C="";

    Arr.forEach(function(val,index){
        fs.readFile(val,function(err,data){
            C+=data+"\n";
            if(index==Arr.length-1){
                res.end(C)
            }

        })
    })
}).listen(3000,function(){
    console.log("..........................................")
});












