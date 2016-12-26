/**
 * Created by sunjian on 2016/11/10.
 */
var num;

function play(){
     num=Math.random()*100;
    if(num>50){
        throw new Error("lanyixin is a pig");
    }
    console.log(num)
}

setInterval(function(){
    try{
        play();
    }catch(err){
       console.log(num);
        console.log("lanyixin is a pig");
    }
},1000)
