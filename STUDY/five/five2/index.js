var fs=require('fs');

var a=function(){
	return fs.readFileSync("a.txt")
}
var b=function(){
	fs.writeFile("bb.txt",a(),function(){
		console.log("over")
	})
}
b()