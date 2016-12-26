/**
 * Created by sunjian on 2016/11/14.
 */
    //创建子进程
var child_process=require("child_process");
var fork=child_process.fork;
var server=["http1","http2"];


function createWork(server){
    //创建子进程
    var work=fork(server);

    work.on("exit",function(){

        //删除当前创建的子进程
        delete  work;
        //重启
          createWork(server)
    })
}
function saveChild(){
    //遍历子进程
    for(var i=0;i<server.length;i++){
        //分别创建子进程
        createWork(server[i])
    }
}
process.on("exit",function(code){
    if(code){
        console.log("close");
        return;
    }
    process.stderr.write(code)
})
saveChild()