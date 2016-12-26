var path = require('path');
var fs = require('fs');

//获取当前路径
// console.log(__dirname);
//获取当前文件路径
// console.log(__filename);

//源文件路径
var sourceFile = path.join(__dirname,'hello.txt');
//目标文件路径
var destFile = path.join(__dirname,'dest','hello_copy.txt');

// 创建一个读取的流
var readStream = fs.createReadStream(sourceFile);
var wirteStream = fs.createWriteStream(destFile);

readStream.pipe(wirteStream);
