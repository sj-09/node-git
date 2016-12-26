/**
 * Created by sunjian on 2016/11/21.
 */
//引入express模块
var express=require("express");
//实例化
var app=express();
//引入ejs模块
var ejs=require("ejs");
//引入path模块
var path=require("path");
//引入body-parser中间件
var bodyparser=require("body-parser");

//设置ejs
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
//设置bodyparser编码
app.use(bodyparser.urlencoded({extended:false}));
//设置静态模块路劲
app.use(express.static(path.join(__dirname,"public")));

//引入外部config模块，传参
var rout=require("./config/config")(app);

app.listen(3000,function(){
    console.log("listen 3000 success...")
})