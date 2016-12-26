/**
 * Created by sunjian on 2016/11/10.
 */
var os=require("os");
var cluster=require("cluster");
var len=os.cpus().length;
var mast=require("./master.js");
console.time("time")
if(cluster.isMaster){
    for(var i=0;i<len;i++){
        cluster.fork()
        console.log("this is cluster"+i)
    }
}else{
   // console.log("this is child_process")
    mast()
    process.exit()
}
console.timeEnd("time")
