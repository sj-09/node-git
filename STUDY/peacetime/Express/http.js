/**
 * Created by sunjian on 2016/11/15.
 */
/*
var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    fs.readFile("./index.html",function(err,data){
        res.end(data)
    })
}).listen(8002);*/







var express=require("express");
var app=express();
var conf=require("./expr.js")


app.use("/lll",conf);


var server=app.listen(3001,function(req,res){
    console.log("listen.....3001")
})