var fs=require("fs");
var path=require("path");

var sourceFile=path.join(__dirname,"hello.txt");

function readFile(){
	return fs.readFileSync("hello.txt",{encoding:'utf8'});
}

var writeFile=function(){
	var data=readFile();
	fs.writeFile("copy.txt",data,function(err){
		if(err){
			return console.error(err)
		};
		console.log("writeFile finished");
	})
}
writeFile();