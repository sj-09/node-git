var fs = require('fs');
var path = require('path');
// console.log(__dirname);
// console.log(__filename);
var sourceFile= path.join(__dirname,'hello.txt');
// var readFile = function(){
	// return fs.readFileSync('hello.txt',{encoding:'utf8'});
// }
function readFile(){
	return fs.readFileSync('hello.txt',{encoding:'utf8'});
}
/*var writeFile = function(){
	var data = readFile();
	fs.writeFile('hello_copy.txt',data,function(err){
	if(err){
		return console.error(err);
	};
	console.log('writeFile finished');
	});
}

writeFile();*/


 fs.readFile('hello.txt',function(err,data){
	 if(err){
		 return console.error(err);
	 };
	 // console.log(data);
	 // console.log(data.toString());
	 console.log('readFile finished');
	 fs.writeFile('hello_copy.txt',data,function(err){
	 if(err){
		 return console.error(err);
	 };
	 console.log('writeFile finished');
	 });
 });

