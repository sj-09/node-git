var domain=require("domain");
var d=domain.create();

function async_err(){

      var m=Math.random()*10;
      if(m>5){
          throw new Error("random :"+m+">5")
      }
      console.log("random   :"+m)

};
setInterval(function(){
    try{
        //d.run(async_err)
        async_err()
    }catch(e){
        console.log(e)
    }
},1000);

/*d.on("error",function(){
    console.log("error")
})*/
process.on("uncaughtException",function(err){
    console.log(err)
})
