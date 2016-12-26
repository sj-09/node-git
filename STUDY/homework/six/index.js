/**
 * Created by sunjian on 2016/11/22.
 */
/*
循环遍历文件夹读取文件
创建http服务
将读取的文件内容在页面中显示
地址栏的参数操作
地址http://172.0.0.1:8080/index?name='bawei'&pswd='123456'
*/


var fs=require("fs");
var path=require("path");
var express=require("express");
var app=express();
var http=require("http");
var fork=require("child_process").fork;
var C='';

function read(dir){
    fs.readdir(dir,function(err,f){
        f.forEach(function(filename){
            var stats=path.join(dir,filename);
            fs.stat(stats,function(err,data){
                if(data.isDirectory()){
                    read(stats)
                }else{
                    fs.readFile(stats,function(err,chunk){
                        if(err) return console.error("error");
                        return C+=chunk.toString()+"\n"
                    })
                }
            })
        })
    })
}
read("./direct");
http.createServer(function(req,res){
    res.end(C)
}).listen(3000,function(){
    console.log("listen 3000....")
});



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




var zlib=require("zlib")
var fs=require("fs");
//压缩
 var source=fs.createReadStream("./zlib.txt");
 var target=fs.createWriteStream("new.zip");
 source.pipe(zlib.createGzip()).pipe(target);
//解压
var source=fs.createReadStream("./new.zip");
var target=fs.createWriteStream("zlib2.txt");
source.pipe(zlib.createGunzip()).pipe(target);


//判断cpus个数创建子进程
var os=require("os");
var cluster=require("cluster");
var len=os.cpus().length;
var mast=require("./master.js");
console.time("time")
if(cluster.isMaster){
    for(var i=0;i<len;i++){
        cluster.fork()
        console.log("this is cluster"+i)
    }
}else{
    // console.log("this is child_process")
    mast()
    process.exit()
}
console.timeEnd("time");


//同步捕捉异常
function sync_err(){
 var r=Math.random()*20;
 if(r>10){
 throw new Error("random: "+r+">10");
 }
 console.log("Math: "+r)
 };
setInterval(function(){
 try{
 sync_err();
 }catch(e){
 console.log(e);
 }
 },1000)

//异步捕捉异常
function async_err(){
    setTimeout(function(){
        var r=Math.random()*10;
        if(r>5){
            throw new Error("random:   "+r+"   >5")
        }
        console.log("Math:  "+r)
    },1000)
}
setInterval(function(){
    try{
        //d.run(sync_err);
        d.run(async_err)
    }catch(e){
        console.log(e);
    }
},1000);
d.on("error",function(err){
    console.log(err)
})
/*process.on("uncaughtException",function(err){
 console.log(err)
 })*/



var child_process=require("child_process");
var util=require("util");

function copy(source,target,callback) {
    var cmds=util.format("copy",source,target);
    child_process.exec(cmds,function(err){
        if(err){
            return console.error(err);
        }
        console.log("copy success")
    })
}
copy("source","newSou")


//xxxx
//
//var dir=path.join(__dirname,"./direct");
//fs.readdir(dir,function(err,file){
//   var filename=file.toString().split(",");
//   /*filename.forEach(function(data){
//      console.log(data);
//       app.get("/",function(req,res){
//           res.render("a.txt")
//       });
//       app.get(data,function(req,res){
//           res.render(data)
//       })
//   })*/
//    for(i=0;i<filename.length;i++){
//        app.get("/",function(req,res){
//            res.render("a.txt")
//        });
//        app.get(filename[i],function(req,res){
//            res.render(filename[i])
//        })
//    }
//});
//
//app.listen(8080);






//地址栏的参数操作
//地址http://172.0.0.1:8080/index?name='bawei'&pswd='123456'
var url=require("url");
var p=url.parse("http://172.0.0.1:8000/index?name='nihao'&pwd='123'",true);
console.log(p.query.name);
