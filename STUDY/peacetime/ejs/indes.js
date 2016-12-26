/**
 * Created by sunjian on 2016/11/15.
 */
var express=require("express");
var app=express();


var server=app.listen(3000,function(req,req){
    console.log("listen....")
})



/*app.use("/user/:name",function(req,res,next){
    console.log("123456")
    next()
})*/




/*
app.get("/user/:id",function(req,res,next){
    //如果params.id==0 执行下一个路由，否则执行下一个callback
   //params 是在地址上输入的user后的值
    if(req.params.id==0) next("route")
    res.send("123")
    next()
},function(req,res){
   console.log("000")
})
app.get("/user/:id",function(req,res){
    console.log("1111")
})*/
