var express=require("express");
var ejs=require("ejs");
var bodyParser=require("body-parser");
var app=express();

//设置静态文件加载
app.use(express.static("./public"));
//设置ejs 模板引擎
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({ extended: false }));

//引入配置路由文件
require("./config/config.js")(app);
//监听的端口
app.listen(3000,function(){
	console.log("listen success")
});