var fs=require("fs");
var path=require("path");

var sourcefile=path.join(__dirname,"a.txt")
var targetfile=path.join(__dirname,"first","nema.txt")

var read=fs.createReadStream(sourcefile);
var write=fs.createWriteStream(targetfile);

//当数据流出
read.on("data",function(chunk){
	if(write.write(chunk)===false){
		read.pause()
	}
})
//当数据写入完成
write.on("drain",function(){
	read.resume()
})
//当数据读取完成
read.on("end",function(){
	write.end()
})