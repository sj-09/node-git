var express=require("express");
var router=express.Router();

router.get("/b",function(req,res,next) {
    //render ��Ⱦ
    res.render("b", {
        title: "head",
        data: [
            {name: "my name"},
            {name: "my work"}
        ]
    })
});
module.exports=router;