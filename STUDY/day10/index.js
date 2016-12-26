/**
 * Created by sunjian on 2016/11/9.
 */
var cluster=require("cluster");
var child_process=require("child_process");


/*if(cluster.isMaster){
    //var work=child_process.spawn('node',["./mast.js"]);
    cluster.fork();
}else{
     var work=child_process.spawn("node",["./mast.js"]);
      work.stdout.on("data",function(data){
              console.log(data.toString())
              work.stdout.emit("end")
      })
  //  work.stdin.on("end")
        work.stdout.on("end",function(){
              console.log("exit success")
              process.exit()
    })
}*/





if(cluster.isMaster){
 var work=cluster.fork()
 }else{
 var worker=child_process.fork("mast.js");

    process.on('exit',function(code){
        console.log("�子进程已退出，退出码:"+code)
    })

 }



/*process.stdin.on("data",function(data){
    process.stdout.write("您输入的参数是："+data.toString())
    process.exit()
});
process.on("exit",function(code){
    if(code){
        console.log("输入完成！异常退出 exitCode是"+code)
    }else{
        console.log("输入完成！正常退出 exitCode是"+code)
    }
})*/


