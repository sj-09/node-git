 var zlib=require("zlib")
var fs=require("fs");
// var source=fs.createReadStream("./zlib.txt");  
// var target=fs.createWriteStream("new.zip");
// source.pipe(zlib.createGzip()).pipe(target);


var source=fs.createReadStream("./new.zip");  
var target=fs.createWriteStream("zlib2.txt");
source.pipe(zlib.createGunzip()).pipe(target);