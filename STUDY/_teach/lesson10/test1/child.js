/**
 * Created by Nan on 2016/11/8.
 */
var child_process = require('child_process');
var os = require('os');


//child_process.fork 是 spawn() 方法的特殊形式，用于创建进程，语法格式如下：
//child_process.fork(modulePath[, args][, options])
var cpus = os.cpus();
for (var i = 0; i < cpus.length; i++) {
    console.log(i);
    var worker = child_process.fork('master.js', [i]);
    worker.on('exit', function (code) {
        console.log('子进程已退出，退出码: ' + code);
    });
}





