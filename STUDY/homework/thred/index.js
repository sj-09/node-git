/**
 * Created by sunjian on 2016/11/22.
 */

//拷贝小文件
/*var child_process=require("child_process");

var util=require("util");

function copy(source,target){
    var cmds=util.format("copy",source,target);
    child_process.exec(cmds,function(err){
        if(err){
            console.log(err);
        }
        console.log("copy success")
    })
}
copy("a.txt","b.txt");*/


//拷贝大文件
var fs=require("fs");
var path=require("path");

var source=path.join(__dirname,"new","smalla");
var target=path.join(__dirname,"new","b.txt");

console.log(target)
var readStream=fs.createReadStream(source);
var writeStream=fs.createWriteStream(target);
//当有数据流出
readStream.on("data",function(chunk){
    //当数据没有写完
    if(writeStream.write(chunk)===false){
        //停止读取
        readStream.pause()
    }
});
//当数据写入完成
writeStream.on("drain",function(){
    //继续读取
    readStream.resume();
});
//当数据读取完成
readStream.on("end",function(){
    //结束写入
    writeStream.end()
})