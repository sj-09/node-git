/**
 * Created by Nan on 2016/11/8.
 */
var child_process = require('child_process');
var cluster = require('cluster');
var os = require('os');

process.stdin.on('data', function (data) {
    process.stdout.write('您输入的参数是：' + data.toString());
    process.exit();
});
process.on('exit', function (code) {
    if(!code){
        console.log('输入完成！正常退出 exitCode 是:'+code);
    }else{
        process.stderr.write('输入完成！异常退出 exitCode 是:' + code);
    }
});

//child_process.fork 是 spawn() 方法的特殊形式，用于创建进程，语法格式如下：
//child_process.fork(modulePath[, args][, options])



//var cpus = os.cpus();
//for (var i = 0; i < cpus.length; i++){
//    console.log(i);
//    var worker = child_process.fork('master.js',[i]);
//    worker.on('exit', function (code) {
//        console.log('子进程已退出，退出码: ' + code);
//    });
//};

//if(cluster.isMaster){
//    var worker = cluster.fork('./master.js');
//    //console.log(worker)
//    worker.send({'name':'haonan'});
//
//}else{
//    console.log(cluster.worker.id);
//    process.on('message', function (data) {
//        console.log(data.name);
//    });
//}
