var path = require('path');
var fs = require('fs');

var sourceFile = path.join(__dirname,'hello.txt');
var targetFile = path.join(__dirname,'target','hello.txt');

var readStream = fs.createReadStream(sourceFile);
var	writeStream = fs.createWriteStream(targetFile);

//当有数据流出
// readStream.on('data',function(data){
	// writeStream.write(data);
// });
// readStream.on('end',function(){
	// writeStream.end();
// });

//当有数据流出
readStream.on('data',function(chunk){
	//当数据写入没有完成
	if(writeStream.write(chunk)===false){
		readStream.pause();
	}
});
//当数据写入完成
writeStream.on('drain',function(){
	readStream.resume();
});
//当数据读取完成
readStream.on('end',function(){
	//结束写入数据
	writeStream.end();
});