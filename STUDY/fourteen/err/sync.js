/**
 * Created by sunjian on 2016/11/14.
 */
function sync_err(){
    var m=Math.random()*10;

    if(m>5){
        throw new Error("random :"+m+">5")
    }
    console.log("random   :"+m)
};
setInterval(function(){
    try{
        sync_err()
    }catch(e){
        console.log(e)
    }
},1000)