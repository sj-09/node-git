process.stdin.on("data",function(data){
	process.stdin.resume();
    var cut=data.slice(0,data.length-2)
    process.stdout.write(cut+"你好")
    if(cut ==  1){
   	 process.stdin.emit("end");	
    }
});
process.stdin.on("end",function(data){
	process.stdout.write("结束")
});

/*
process.stdin.on("data",function(data){
    var cut=data.slice(0,data.length-2)
    console.log(cut+"您好")
});
console.log("下一句");*/
