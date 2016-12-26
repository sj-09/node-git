/**
 * Created by sunjian on 2016/11/16.
 */

var express=require("express");
var router=express.Router();
var conn=require("./conn.js");

router.post("/c",function(req,res,next) {
    var user=req.body.userName;
    var pwd=req.body.passWord;

    //  res.send("123456789")
    //render ‰÷»æ
    var loginDate=conn.loginDate();
    if(user!=loginDate.name &&  pwd!=loginDate.pwd){

        res.redirect("/c")
    }else{
        res.redirect("/a")
    }
});
module.exports=router;