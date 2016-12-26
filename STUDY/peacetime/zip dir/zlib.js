/**
 * Created by sunjian on 2016/11/8.
 */
var fs=require("fs");
var zlib=require("zlib");

var sourse=fs.createReadStream("./look");
var target=fs.createWriteStream("new.zip");

sourse.pipe(zlib.createGzip()).pipe(target)