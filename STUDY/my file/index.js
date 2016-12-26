/**
 * Created by sunjian on 2016/11/17.
 */
var fs=require("fs");
var http=require("http");
//合并文件
var server=http.createServer(function(req,res){
    var url=req.url.slice(1);
    var Arr=url.split(",");
    var count="";

    Arr.forEach(function(val,index){
         fs.readFile(val,function(err,data){
                    count+=data+"\n";
                if(index==Arr.length-1){
                    res.end(count)
                 }
         })
    })

}).listen(1111,function(){
    console.log("listen 1111.......")
});




/*var buf=new Buffer(1024);
console.log("打开存在的文件");

fs.open("once.txt","r+",function(err,f){
    if(err){
        return console.error(err);
    }
    console.log("打开成功")
    console.log("准备读取文件");
    fs.read(f,buf,0,buf.length,0,function(err,bytes){
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString())
        }
    })
    fs.close(f,function(err){
        console.log("关闭成功")
    })

})*/



/*setInterval(function(){
 var d=new Date();
 process.stdout.write("\033[0f")
 process.stdout.write("\033[2j")
 console.log(d.getHours()+ ":"+d.getMinutes()+":"+d.getSeconds())
 },1000)*/



