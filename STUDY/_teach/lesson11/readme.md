同步和异步
举例说明：发短信
异步IO和事件驱动
为什么需要异步
为了提高办事的效率，CPU计算速度和磁盘的读写速度差太远了，磁盘供不应求，因此有了计算机的存储系统的分层设计，平衡了效率和成本。

异步函数是回调函数，回调函数不一定是异步


Node.js事件编程
出发事件 执行的回调函数

陷阱:



无论是通过process对象的uncaughtException事件捕获到全局异常，
还是通过子域对象的error事件捕获到了子域异常，
在NodeJS官方文档里都强烈建议处理完异常后立即重启程序，而不是让程序继续运行。

按照官方文档的说法，发生异常后的程序处于一个不确定的运行状态，如果不立即退出的话，程序可能会发生严重内存泄漏，也可能表现得很奇怪。
但这里需要澄清一些事实。


JS本身的throw..try..catch异常处理机制并不会导致内存泄漏，也不会让程序的执行结果出乎意料，但NodeJS并不是存粹的JS。
NodeJS里大量的API内部是用C/C++实现的，
因此NodeJS程序的运行过程中，代码执行路径穿梭于JS引擎内部和外部，
而JS的异常抛出机制可能会打断正常的代码执行流程，导致C/C++部分的代码表现异常，进而导致内存泄漏等问题。
因此，使用uncaughtException或domain捕获异常，
代码执行路径里涉及到了C/C++部分的代码时，
如果不能确定是否会导致内存泄漏等问题，最好在处理完异常后重启程序比较妥当。
而使用try语句捕获异常时一般捕获到的都是JS本身的异常，不用担心上诉问题。

Nodejs 内存泄漏

　1.也许你不在乎不断增长的内存占用，但V8在乎(V8是Node运行时的引擎)。随着内存泄漏的增长，V8对垃圾收集器越来越具有攻击性，这会使你的应用运行速度变慢。所以，在Node上，内存泄漏会损害程序性能。
　2.内存泄漏可能触发其他类型的失败。内存泄漏的代码可能会持续的引用有限的资源。你可能会耗尽文件描述符;你还可能会突然不能建立新的数据库连接。这类问题可能在你的应用耗尽内存前很早就会暴露出来，但它仍然会是你陷入困境。
　3.最后，你的应用迟早会崩溃，并且在你的应用受到欢迎时肯定会发生。所有人都会在Hacker　News上嘲笑你，讽刺你，这样你就悲剧了。



无限制增长的数组：
var leakArray = [];   
exports.leak = function () {  
  leakArray.push("leak" + Math.random());  
};
这个大概是最常见的内存泄漏案例。只要变量leakArray不被回收，内存就有可能无限上涨，且不被回收。


任何模块内的私有变量和方法均是永驻内存的：
(function (exports, require, module, __filename, __dirname) {
    var circle = require('./circle.js');
    console.log('The area of a circle of radius 4 is ' + circle.area(4));
    exports.get = function () {
       return circle();
    };
});

任意编写的模块文件中，均会在头和尾部上添加字符串，以形成闭包，然后在require的过程中被调用一次，并且将exports对象存储在内存中，直到进程退出才会回收。

这个案例中，只是内存不会回收，但一般不会造成内存泄漏。需要注意的是私有变量不要通过exports上的方法为其添加内存占用。


内存泄露定位工具
https://github.com/lloyd/node-memwatch    node install memwatch||node install memwatch-next

Jimb Esser的node-mtrace，它使用了GCC的mtrace工具来分析堆的使用。

Dave Pacheco的node-heap-dump对V8的堆抓取了一张快照并把所有的东西序列化进一个巨大的JSON文件。它还包含了一些分析研究快照结果的JavaScript工具。

Danny Coates的v8-profiler和node-inspector提供了绑定在Node中的V8分析器和一个基于WebKit Web Inspector的debug界面。







