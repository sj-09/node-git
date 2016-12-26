var fs=require("fs");

//拷贝小文件
//读取文件内容 复制新文件
/*fs.readFile("hello.txt",function(err,data){
   if(err){
   	return console.error(err)
   }
   console.log(data.toString())
   fs.writeFile("he.txt",data,function(err){
   	if(err){
   	return console.error(err)
   }
   console.log("end")
   })
})*/

//sync 同步
/*var data=function(){
	return fs.readFileSync("he.txt")
}
var o=function(){
	fs.writeFile("haha.txt",data(),function(){
	  console.log("over")
    })
}
o()*/

var path=require("path");
var p=path.join(__dirname,"hello.txt")
console.log(p)