/**
 * Created by sunjian on 2016/11/24.
 */
var express=require("express");
var app=express();
var ejs=require("ejs");
var path=require("path");
var bodyParser=require("body-parser");

app.set("views",path.join(__dirname,"/views"));
app.set("view engine","html");
app.engine('html', ejs.__express);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));

var rout=require("./config")(app);

app.listen(3000,function(){
    console.log("listen success")
});