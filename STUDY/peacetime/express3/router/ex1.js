var express=require("express");
var router=express.Router();

router.get("/a",function(req,res,next) {
    //render ��Ⱦ
    res.render("a", {
        title: "head",
        data: [
            {name: "my name"},
            {name: "my work"}
        ]
    })
});
module.exports=router;
