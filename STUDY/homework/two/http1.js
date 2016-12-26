var http=require("http");
http.createServer(function(req,res){
	res.send("123456");
}).listen(3001,function(){
	console.log("listen http1 ....")
})