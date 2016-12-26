/**
 * Created by sunjian on 2016/11/17.
 */
var express=require("express");
var router=express.Router();
var Data=require("./conn.js");
router.post("/meth",function(req,res){
    var D=Data.Data()

      if(req.body.userName!= D.name || req.body.password!= D.psd){
            res.redirect("meth")
      }else{
          res.redirect("one")
      }
});
module.exports=router;