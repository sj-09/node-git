
//拷贝大文件
//fs path内置模块
var fs=require("fs");
var path=require("path");
//拼接文件夹  
var sourcefile=path.join(__dirname,"new.txt")
var goalfile=path.join(__dirname,"result","nn.txt")
//读取文件  新建文件
//source 源
//var source=fs.createReadStream(sourcefile)
//goal 目标
//var goal=fs.createWriteStream(goalfile);
//pipe 管
//将源里的流入目标文件中
//source.pipe(goal)
/*console.log(sourcefile)
console.log(goalfile)*/



//readStream读取的文件   writeStream写入的文件    
var readStream=fs.createReadStream(sourcefile)
var writeStream=fs.createWriteStream(goalfile);
//当有数据流出
readStream.on("data",function(chunk){
	//当数据没有写完
	if(writeStream.write(chunk)===false){
		readStream.pause()
	}
})
//当数据写入完成
writeStream.on("drain",function(){
	readStream.resume()
})
//当数据读取完成
readStream.on("end",function(){
	//结束写入数据
	writeStream.end()
})