var fs = require("fs") 
var path = require("path") 

fs.readFile('hello.txt',function(err,data){
	for(i in files){
	if(i<=files.length){
		
		var pathName= path.normalize(dir + path.sep + files[i]);
		var fileStats = fs.statSync(pathName);
		
		if(fileStats.isDirectory()){
			i++;
			travel(pathName);
		}
		else{
			console.log(pathName);
			i++;
		}
	}
}
});                                                       