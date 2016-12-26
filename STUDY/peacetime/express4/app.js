
/**
 * Module dependencies.
 */

var express = require('express');
var path=require("path");
var bodyParser=require("body-parser");
var app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));


app.use(express.static(path.join(__dirname, 'public')));

var One=require("./routes/one.js");
var Meth=require("./routes/meth.js");
var Meth1=require("./routes/meth1.js");

app.get("/one",One);
app.get("/meth",Meth);
app.post("/meth",Meth1);



app.listen(3000,function(req,res){
     console.log("listen.........");
});