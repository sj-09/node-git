var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request,response){
	
	var pathname = url.parse(request.url).pathname.slice(1);
	console.log(request.url);
	console.log(pathname);
	var arg = url.parse(request.url).query;
	var arg1 = url.parse(request.url,true).query;
	console.log(arg);
	console.log(arg1);
});
var buf = new Buffer(1024);
fs.open('input.txt','r+',function(error,fd){
	if (error) {
       return console.error(error);
   }
  fs.read(fd,buf ,0,buf.length,0,function(error, bytes){
		if(error){
			return console.error(error);
		};
		console.log(bytes);
		if(bytes>0){
			// console.log(buf.slice(0,bytes).toString());
			console.log(buf.slice(0,bytes).toString());
		}
	});
});

server.listen(3000);
console.log("listen 3000 prots");