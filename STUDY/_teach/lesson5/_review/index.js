var path = require('path');
var fs = require('fs');

// console.log(__dirname);
// console.log(__filename);


//����һ��
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


//��������

// ���ַ�ʽ�ǰ��ļ�����ȫ�������ڴ棬Ȼ����д���ļ�������С�͵��ı��ļ�����û�ж�����⣬����grunt-file-copy��������ʵ�ֵġ�
//���Ƕ�������ϴ�Ķ������ļ���������Ƶ����Ƶ�ļ�����������GB��С�����ʹ�����ַ�����������ʹ�ڴ桰���֡�������ķ���Ӧ���Ƕ�һ���֣�дһ���֣������ļ��ж��ֻҪʱ�������ܻᴦ����ɣ��������Ҫ�õ����ĸ��
// var data  = fs.readFileSync('hello.txt',{encoding:'utf-8'});
// fs.writeFile('input.txt',data);

//��������
// var sourceFile = path.join(__dirname,'hello.txt');
// var newSourcePath = path.join(__dirname,'dest','hello.txt');

// var readStream = fs.createReadStream(sourceFile);
// var writeStream = fs.createWriteStream(newSourcePath);

// readStream.pipe(writeStream);

//�����ģ�

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


//�����壺

// var sourceFile = path.join(__dirname,'hello.txt');
// var newSourcePath = path.join(__dirname,'dest','hello.txt');
// var readStream = fs.createReadStream(sourceFile);
// var writeStream = fs.createWriteStream(newSourcePath);

// //��������������д������
// readStream.on('data',function(data){
	// //���û��д�꣬��ͣ
	// if(writeStream.write(data)===false){
		// readStream.pause();
		// console.log('��ͣ');
	// }
// });
// //������д��󣬼�����ȡ
// writeStream.on('drain',function(){
	// readStream.resume();
	// console.log('������ȡ');
// });
// //�����ݶ��꣬�ر�������
// readStream.on('end',function(){
	// writeStream.end();
	// console.log('д��ɹ���');
// });

// ɾ��ԭ�����ļ�
// fs.unlink('hello.txt',function(){
	// console.log('delete finished look at it');
// });

