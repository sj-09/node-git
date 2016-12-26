var path = require('path');
var fs = require('fs');

// console.log(__dirname);
// console.log(__filename);


//方法一：
// var readFile = function(){
	// fs.readFile('hello.txt',function(err,data){
		// if(err){
			// return console.error(err);
		// }
		// console.log(data);
		// console.log(data.toString());
		// writeFile(data);
		// //return data;
	// });
// }
// var writeFile = function(data){
	
	// fs.writeFile('hello_copy.txt',data,function(err){
	// if(err){
		// return console.error(err);
	// }
	
	// console.log('writeFile finished!');
// });
// }
// readFile();


//方法二：

// 这种方式是把文件内容全部读入内存，然后再写入文件，对于小型的文本文件，这没有多大问题，比如grunt-file-copy就是这样实现的。
//但是对于体积较大的二进制文件，比如音频、视频文件，动辄几个GB大小，如果使用这种方法，很容易使内存“爆仓”。理想的方法应该是读一部分，写一部分，不管文件有多大，只要时间允许，总会处理完成，这里就需要用到流的概念。
// var data  = fs.readFileSync('hello.txt',{encoding:'utf-8'});
// fs.writeFile('input.txt',data);

//方法三：
// var sourceFile = path.join(__dirname,'hello.txt');
// var newSourcePath = path.join(__dirname,'dest','hello.txt');

// var readStream = fs.createReadStream(sourceFile);
// var writeStream = fs.createWriteStream(newSourcePath);

// readStream.pipe(writeStream);

//方法四：

// var sourceFile = path.join(__dirname,'hello.txt');
// var newSourcePath = path.join(__dirname,'dest','hello.txt');
// var readStream = fs.createReadStream(sourceFile);
// var writeStream = fs.createWriteStream(newSourcePath);

// readStream.on('data',function(chunk){
	// console.log(chunk);
	// console.log(writeStream);
	// writeStream.write(chunk);
// });
// readStream.on('end',function(chunk){
	// writeStream.end();
// });


//方法五：

// var sourceFile = path.join(__dirname,'hello.txt');
// var newSourcePath = path.join(__dirname,'dest','hello.txt');
// var readStream = fs.createReadStream(sourceFile);
// var writeStream = fs.createWriteStream(newSourcePath);

// //当有数据流出，写入输入
// readStream.on('data',function(data){
	// //如果没有写完，暂停
	// if(writeStream.write(data)===false){
		// readStream.pause();
		// console.log('暂停');
	// }
// });
// //当数据写完后，继续读取
// writeStream.on('drain',function(){
	// readStream.resume();
	// console.log('继续读取');
// });
// //当数据读完，关闭数据流
// readStream.on('end',function(){
	// writeStream.end();
	// console.log('写入成功！');
// });

// 删除原拷贝文件
// fs.unlink('hello.txt',function(){
	// console.log('delete finished look at it');
// });

