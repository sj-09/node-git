/**
 * Created by sunjian on 2016/11/11.
 */
var express=require("express");
var hold=express();

hold.get("/",function(req,res){
    res.send("hello world");
});
hold.listen(1234,function(){
    console.log("listen")
})