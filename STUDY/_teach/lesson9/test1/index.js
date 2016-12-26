/**
 * Created by Nan on 2016/11/7.
 */
var util = require('util');
var util = require('http');
var util = require('fs');
var util = require('url');
var util = require('os');
var util = require('child_process');
var util = require('path');
var util = require('cluster');
var util = require('net');
var util = require('zlib');





//process 是一个全局对象，可以在任何地方访问到它
//process.version
//process.title

//返回进程当前的工作目录
//process.cwd()

//一个包含命令行参数的数组。
// 第一个元素会是 'node'， 第二个元素将是 .Js 文件的名称。接下来的元素依次是命令行传入的参数。
//可以通过slice截取
//process.argv
//process.argv.slice(2)


//个指向标准输出流(stdout)的 可写的流(Writable Stream)
//process.stdout
//process.stderr
//process.stdin
//isTTY 文件描述符

//指向 标准输入流
//process.stdin
//标准输入流默认是暂停 (pause) 的，所以必须要调用 process.stdin.resume() 来恢复 (resume) 接收。
//console.log(process.stderr.write('error msg'));


// var getInput = function () {
   // // process.stdin.resume();
   // process.stdin.on('data', function (chunk) {
	   
	   // //将data 转为 字符串，然后用trim方法 去除空格。
	   // chunk = chunk.toString().trim();
       // // chunk = chunk.slice(0, -2);
	   // console.log(chunk);
       // if (chunk != null && chunk != "") {
           // console.log('output data is:' + chunk.toString('UTF8'))
           // return;
       // }

       // process.stdin.emit('end');
   // });
   // process.stdin.on('end', function () {
       // console.log('process end');
   // });
// };

// getInput();




//console.log(process.cwd());
//try {
//    process.chdir('../');
//
//    console.log('open parent dir:' + process.cwd());
//} catch (err) {
//    console.log(err);
//}

//console.log(process.platform);
//console.log(util.inspect(process.memoryUsage()));
//console.log(process.uptime());
//console.log(process.hrtime());

//在下一个进程执行回掉函数
//process.nextTick(funcName)

// var a = function(){
    // console.log('123123213123');
    // console.log('123123213123');
    // console.log('123123213123');
    // console.log('123123213123');
    // console.log('123123213123');
// }
// console.time('one');
// a();
// console.timeEnd('one');
// console.time('two');
// process.nextTick(function () {
    // console.log('123123213123');
    // console.log('123123213123');
    // console.log('123123213123');
    // console.log('123123213123');
    // console.log('123123213123');
// });
// console.timeEnd('two');