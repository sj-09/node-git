var fs=require("fs");
var path=require("path");

var sourcefile=path.join(__dirname,"aaa.txt")
var targetfile=path.join(__dirname,"last","bbb.txt")

var reader=fs.createReadStream(sourcefile);
var writer=fs.createWriteStream(targetfile);

reader.on("data",function(chunk){
	writer.write(chunk)
})
reader.on("end",function(){
	writer.end()
})