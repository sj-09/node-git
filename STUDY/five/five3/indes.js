var fs=require("fs");
var path=require("path");

var sourcefile=path.join(__dirname,"a.txt");
var goalfile=path.join(__dirname,"lit","new.txt");

var read=fs.createReadStream(sourcefile);
var write=fs.createWriteStream(goalfile);

read.pipe(write)
