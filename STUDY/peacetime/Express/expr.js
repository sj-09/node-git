/**
 * Created by sunjian on 2016/11/12.
 */
/*
var express=require("express");
var exp=express();

exp.get("/",function(request,response){
    response.send("hello world");
});
exp.get("/hh",function(request,response){
    response.send("you are beautiful")
})
exp.listen(9000)*/
/*
var express=require("express");
var app=express();
var ejs=require("ejs");
var server=app.listen(3001,function(){
    console.log("listen success...")
})
app.post("/userList",function(req,res){
   res.send("987654321")
    /!*var json={code:0,msg:"success"}
    res.json(json)*!/
})

app.get("/",function(req,res){
    res.send("12345679" )
})*/









var express=require("express");
var router=express.Router();

router.get("/main",function(req,res){
    res.send("this is.....")
})
router.get("/zoo",function(req,res){
    res.send("thsa is....")
})

module.exports=router;