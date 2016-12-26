/**
 * Created by sunjian on 2016/11/17.
 */
var express=require("express");
var router=express.Router();

router.get("/one",function(req,res,next){
    res.render("one",{
        title:"one",
        data:[
            {name:"zhang"},
            {name:"wang"},
            {name:"zhao"}
        ]
    })

})
module.exports=router;