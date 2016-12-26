/**
 * Created by Nan on 2016/11/8.
 */
var child_process = require('child_process');
var cluster = require('cluster');
var os = require('os');

//实现了进程间的通讯  使用sned()
var cpus = os.cpus();
var msgs = [];
if (cluster.isMaster) {
    var worker = cluster.fork('../test/master.js');
    worker.send({'name': 'haonan'});
    worker.on('message', function (data) {
        console.log(data.chat);
        console.log(data.cId);
    });
} else {
    process.on('message', function (data) {
        console.log(data.name);
    });
    var msg = {
        'cId': cluster.worker.id,
        'chat': '请问有什么可以帮您？'
    };
    process.send(msg);
}
