var child_process=require("child_process");
var util=require("util");

function copy(source,target,callback) {
    var cmds=util.format("copy",source,target);
    child_process.exec(cmds,function(err){
        if(err){
            return console.error(err);
        }
        console.log("copy success")
    })
}
copy("source","newSou")

