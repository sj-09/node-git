/**
 * Created by sunjian on 2016/11/20.
 */
module.exports=function(app){
    app.get("/login",function(req,res){
        res.render("login")
    });
    app.get("/index",function(req,res){
        res.render("index")
    });
    app.get("/list",function(req,res){
        res.render("list")
    });
    app.get("/about",function(req,res){
        res.render("about")
    });
    app.post("/login",function(req,res){
        var name=req.body.username;
        var psd=req.body.password;
       if(name=='bawei' && psd=='123456'){
           res.redirect("index")
       }else{
           res.redirect("login")
       }
    })
}