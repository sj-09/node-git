/**
 * Created by sunjian on 2016/11/15.
 */
var express=require("express");
var router=express.Router();
router.get("/",function(req,res,next){
    res.render("a",{
        title:"head",
        data:[
            {name:"zhangsan",age:20},
            {name:"zhangsan1",age:20},
            {name:"zhangsan2",age:20}
        ]
    })
})
module.exports=router;