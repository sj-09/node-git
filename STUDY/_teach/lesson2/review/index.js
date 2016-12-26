var fs = require('fs');

// fs.readFile('input.txt',function(error,fd){
	// if(error){
		// return console.error(error);
	// }
	// console.log("open file success");
// });
var buf = new Buffer(1024)
fs.open('input.txt','r+',function(error,fd){
	if(error){
		return console.error(error);
	}
	console.log("open file success");
	fs.read(fd,buf,0,buf.length,0,function(error,bytes){
		if(error){
			console.log(error);
		}
		console.log("read success");
		if(bytes>0){
			console.log(buf.slice(1,bytes).toString());
		};
	});
});