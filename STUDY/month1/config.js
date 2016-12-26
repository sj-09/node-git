/**
 * Created by sunjian on 2016/11/24.
 */

var sq=require("./routes/conn");

module.exports=function(app){

    app.get("/sel",function(req,res){
        res.render("sel",{title:'查询'})
    });

    app.post("/sel",function(req,res){

        var D=sq.D();

        var N=req.body.uName;

        console.log(N)


    });
};