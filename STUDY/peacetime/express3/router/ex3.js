/**
 * Created by sunjian on 2016/11/16.
 */
var express=require("express");
var router=express.Router();

router.get("/c",function(req,res,next) {
    //render ‰÷»æ
    res.render("c", {
        title: "c",
        data: [
            {name: "my name"},
            {name: "my work"}
        ]
    })
});
module.exports=router;