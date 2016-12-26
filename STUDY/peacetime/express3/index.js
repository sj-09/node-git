/**
 * Created by sunjian on 2016/11/16.
 */
var express=require("express");
var app=express();
var ejs=require("ejs");
var bodyParser=require("body-parser");

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.set("views",__dirname+"/views/");
app.set("view engine","ejs");

//下面的这些写入confige文件夹中，传入此文件；
var head=require("./router/ex1.js");
var bod=require("./router/ex2.js");
var foot=require("./router/ex3.js");
var foot1=require("./router/ex4.js");
app.get("/a",head);
app.get("/b",bod);
app.get("/c",foot);
app.post("/c",foot1);

require("./router/conn.js");

var server=app.listen(3000,function(req,res){
    console.log("listen......")
});