/**
 * Created by sunjian on 2016/11/11.
 */
var domain=require("domain");
var d=domain.create();


//同步捕捉异常
/*function sync_err(){
    var r=Math.random()*20;
    if(r>10){
        throw new Error("random: "+r+">10");
    }
    console.log("Math: "+r)
};*/
 /*setInterval(function(){
    try{
        sync_err();
    }catch(e){
        console.log(e);
    }
},1000)*/

//异步捕捉异常
function async_err(){
    setTimeout(function(){
        var r=Math.random()*10;
        if(r>5){
            throw new Error("random:   "+r+"   >5")
        }
        console.log("Math:  "+r)
    },1000)
}
setInterval(function(){
    try{
        //d.run(sync_err);
        d.run(async_err)
    }catch(e){
        console.log(e);
    }
},1000);
d.on("error",function(err){
   console.log(err)
})
/*process.on("uncaughtException",function(err){
 console.log(err)
 })*/
