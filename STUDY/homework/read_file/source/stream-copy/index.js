var path = require('path');
var fs = require('fs');

var sourcePath = path.join(__dirname, "source.txt");
var targetPath = path.join(__dirname, "copy", "target.txt");

var readStream = fs.createReadStream(sourcePath);
var writeStream = fs.createWriteStream(targetPath);

readStream.on("data", function(chunk) {
	if (writeStream.write(chunk) === false) {
		readStream.pause();
	}
})

writeStream.on("drain", function() {
	readStream.resume();
})

readStream.on("end", function() {
	writeStream.end();
})