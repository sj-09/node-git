
/*console.time("start")
console.log("开始");
process.nextTick(function(){
    console.log("nextTick �回调")
})
console.log("��结尾");
console.timeEnd("start")*/

process.stdin.on("data",function(data){
    console.log(data.toString())

})
process.exit("end")