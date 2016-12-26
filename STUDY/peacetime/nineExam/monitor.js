/**
 * Created by sunjian on 2016/11/10.
 */
process.stdin.setEncoding("utf-8")
process.stdin.on("data",function(data){
    console.log(data)
    console.log("兰怡馨你是个好人")
    process.stdin.emit("end")
})
process.stdin.on("end",function(){
    console.log("finished")
})