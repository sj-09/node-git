var child_process=require("child_process");
var util=require("util");

function copy(source,target){
	var cmds=util.format("copy",source,target);
	child_process.exec(cmds,function(err){
		if(err){
			console.log(err)
		}
		console.log("copy success")
	})
}
copy("a.txt","b.txt")