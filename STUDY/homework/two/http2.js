var http=require("http");
http.createServer(function(req,res){
	res.send("123");
}).listen(3002,function(){
	console.log("listen http2 ....")
})