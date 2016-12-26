var fs   = require('fs');
var path = require('path');

var readPath  = path.join(__dirname, "source.txt");
var writePath = path.join(__dirname, "newFolder","target.txt");

var readStream  = fs.createReadStream(readPath);
var writeStream = fs.createWriteStream(writePath);


// 管
readStream.pipe(writeStream);