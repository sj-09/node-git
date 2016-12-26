/**
 * Created by sunjian on 2016/11/15.
 */
var express=require("express");
var router=express.Router();
router.get("/b",function(req,res,next){
    res.render("b",{
        title:"head",
        data:[
            {name:"zhangsan",age:20},
            {name:"zhangsan1",age:20},
            {name:"zhangsan2",age:20}
        ]
    })
})
module.exports=router;