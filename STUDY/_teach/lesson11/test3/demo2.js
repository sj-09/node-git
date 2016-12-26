/**
 * Created by Nan on 2016/11/10.
 */


//Domain(��) ��װ�˽������û�б���׽���쳣������Ч����Ĺ���
//Domain�� EventEmitter���һ�����ࡣ��������error�¼�����������׽���Ĵ���
//add()
//run()
//create()  ����һ���µ�Domain����

//var d = domain.create();
//d.on('error', function(er) {
//    console.error('Caught error!', er);
//});
//d.run(function() {
//    process.nextTick(function() {
//        setTimeout(function() { // ģ�⼸����ͬ���첽�Ķ���
//            fs.open('non-existent file', 'r', function(er, fd) {
//                if (er) throw er;
//                // ����������
//            });
//        }, 100);
//    });
//});


var Domain = require('domain').create();

var random_aSync = function () {
    setTimeout(function () {
        var num = Math.random() * 100;
        if (num > 50) {
            console.log(num);
            throw new Error('RANDOM NUMBER IS BIGGER THAN 50');
        }
        console.log(num);
    }, 0)
};
console.log('before random_aSync');
setInterval(function () {
    Domain.run(random_aSync);
}, 1000);
console.log('after random_aSync');

Domain.on('error', function(er) {
    console.error('Caught error!', er);
});