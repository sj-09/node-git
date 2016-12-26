var fs = require("fs");
var str = "\n你好我是hello.txt";  
var url_path = 'hello.txt'


copyFile();

function hasFile(){
	
	fs.exists('hello.txt',function(flag){
		console.log(flag);
	});
}
function readFile(path){
	console.log('--------开始读取文件--------');
	fs.readFile(path,'utf-8',function(err,data){
		if(err){
			return console.error(err);
		}else{
			writeFile('input.txt',data);
			return data;
		}
	})
	 console.log('--------读取结束--------');
}
function writeFile(path,str){  
    fs.appendFile(path, str, function(err){  
        if(err){
			return console.error(err);
		}
		console.log("写入文件ok");
    });  
}

function copyFile(){
	// console.log(process.argv.slice(2));
	var data = readFile(url_path);

}