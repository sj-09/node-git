/**
 * Created by sunjian on 2016/11/17.
 */
var express=require("express");
var router=express.Router();

router.get("/meth",function(req,res,next){
    res.render("meth",{title:"method"})
})
module.exports=router;