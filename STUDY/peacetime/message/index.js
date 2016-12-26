/**
 * Created by sunjian on 2016/11/23.
 */
var fork=require("child_process").fork;

var p=fork("./child");

p.send({one:"this index",two:process.pid});

p.on("message",function(d){
    console.log(d)
})