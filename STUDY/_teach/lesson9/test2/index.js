/**
 * Created by Nan on 2016/11/7.
 */

//子进程
//child_process

//child_process模块提供了四个创建子进程的函数，分别是spawn，exec，execFile和fork。
// spawn是最原始的创建子进程的函数，其他三个都是对spawn不同程度的封装。

//child_process.spawn(command, [args], [options])
//child_process.exec(command, [options], callback)

//var util = require('util');
//var child_process = require('child_process');


//var copy = function (cmd, source, target) {
//    var cmds = util.format(cmd,source, target);
//    child_process.exec(cmds, function (err) {
//        if(err){
//            console.log(err);
//        }
//        console.log('copy success');
//    });
//};
//copy('copy', 'a', 'b');


//运行一个node test.js 的子进程
//var  runNode = child_process.spawn('node',['test.js']);
//runNode.stdout.on('data', function (data) {
//    console.log('stdout:'+data);
//});
//runNode.stdout.on('end', function (data) {
//    console.log('stdout run end');
//});
//runNode.on('exit', function (code) {
//    console.log('child_process is run end: '+code);
//});
