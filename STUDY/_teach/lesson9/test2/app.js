/**
 * Created by Nan on 2016/11/8.
 */

var child_process = require('child_process');
var util = require('util');


//通过子进程模块的exec 来实现copy 功能
//function copy(source, target) {
//    var cmds = util.format('copy', source, target);
//
//    child_process.exec(cmds,function(err){
//        if(err){
//            return console.error(err);
//        }
//        console.log('copy success!');
//    });
//}
//copy('f1', 'f2');



//运行一个node test.js 的子进程
var runnode =  child_process.spawn('node',['test.js']);

runnode.stdout.on('data', function (chunk) {
    console.log(chunk.toString());
});
runnode.on('exit', function () {
    console.log('exit finishd');
});