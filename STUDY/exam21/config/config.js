/**
 * Created by sunjian on 2016/11/21.
 */
//…Ë÷√¬∑”…
module.exports=function(app){

    app.get("/",function(req,res){
        res.render("login")
    });
    app.get("/login",function(req,res){
        res.render("login")
    });
    app.get("/loginout",function(req,res){
        res.render("loginout")
    });
    app.get("/index",function(req,res){
        res.render("index")
    });
    app.get("/home",function(req,res){
        res.render("home")
    });
    app.post("/home",function(req,res){
        res.redirect("/index")
    })
    app.post("/login",function(req,res){
        var name=req.body.username;
        var psd=req.body.password;
        if(name=="admin" && psd=="admin123"){
            res.redirect("/home");
        }else{
            res.redirect("/login")
        }
    })
};