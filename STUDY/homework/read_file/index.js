// * 在线读取文件
// 多进程
// fs
// http
// 



var fs = require('fs');
var path = require('path');
var http = require('http');
var cluster = require("cluster");

if (cluster.isMaster) {
	var worker = cluster.fork();
	readDir("./source");
}else{
	var html = "";
	process.on("message",function(data){
		var data = data.replace("source","")
		html += `<a href="/source${data}">source${data}</a><br />`;
	})
	var httpServer = http.createServer(function(req,res){
		var reqPath = req.url;
		if (reqPath != "/favicon.ico") {
			res.writeHead(200,{"Content-type":"text/html;charset='utf-8'"})
			if (reqPath == "\/") {
				res.end(html);
			}else{
				fs.readFile(__dirname + reqPath,function(err,data){
					if (err) return console.error(err);
					res.end(data);
				})
			}
		}	
	}).listen(3000)
}




function readDir (_dir) {
	fs.readdir(_dir,function(err,files){
		if (err) return console.error(err);
		files.forEach(function(file){
			var pathname = path.join(_dir,file);
			fs.stat(pathname,function(err,stats){
				if (err) return console.error(err);
				if (stats.isDirectory()) {
					readDir(pathname);
				}else{
					worker.send(pathname);
					//console.log(pathname);
				}
			})

		})
		
	})
}







