/**
 * Created by sunjian on 2016/11/15.
 */
var express=require("express");
var app=express();
var ejs=require("ejs");

app.set("views",__dirname+"/views/");
app.set("view engine","ejs");

var con=require("./routers/ex1.js");
var con1=require("./routers/ex2.js");
app.get("/",con);
app.get("/b",con1);

app.listen(3000,function(){
    console.log("listen.......")
})