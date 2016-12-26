/*console.log("准备开始");
process.stdin.on("data",function(data){
	console.log("您好"+data)
})
console.log("下一句")*/
setInterval(function(){
	process.stdout.write('\033[2f')
    var dat=new Date();
	var time=dat.getHours()+":"+dat.getMinutes()+":"+dat.getSeconds()
	console.log(time)
},1000)

