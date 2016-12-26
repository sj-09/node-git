/**
 * Created by sunjian on 2016/11/23.
 */
console.log("child");

process.on("message",function(msg){
    console.log(msg.one+msg.two)
});

process.send("this child");