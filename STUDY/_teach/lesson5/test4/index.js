var path = require('path');
var fs = require('fs');

var sourceFile = path.join(__dirname,'hello.txt');
var targetFile = path.join(__dirname,'target','hello.txt');

var readStream = fs.createReadStream(sourceFile);
var	writeStream = fs.createWriteStream(targetFile);

//������������
// readStream.on('data',function(data){
	// writeStream.write(data);
// });
// readStream.on('end',function(){
	// writeStream.end();
// });

//������������
readStream.on('data',function(chunk){
	//������д��û�����
	if(writeStream.write(chunk)===false){
		readStream.pause();
	}
});
//������д�����
writeStream.on('drain',function(){
	readStream.resume();
});
//�����ݶ�ȡ���
readStream.on('end',function(){
	//����д������
	writeStream.end();
});