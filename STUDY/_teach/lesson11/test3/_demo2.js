/**
 * Created by Nan on 2016/11/9.
 */
var domain = require('domain');
var events = require('events');

var oDomain = domain.create();
//ʹ�� domain ģ����첽������쳣����
//��ĸ��
//һ�������һ��JS���л�������һ�����л����У����һ���쳣û�б����񣬽���Ϊһ��ȫ���쳣���׳�


//var d = domain.create();
//d.on('error', function () {
//    response.writeHead(500);
//    response.end();
//});
//d.run(function () {
//    async(request, function (data) {
//        response.writeHead(200);
//        response.end(data);
//    });
//});


var random_Sync = function () {
    var num = Math.random() * 100;
    if (num > 50) {
        console.log('random num:' + num);
        throw new Error('random number is bigger than 50');
    }
    console.log('random num:' + num);
};

var random_aSync = function () {
    setTimeout(function () {
        var num = Math.random() * 100;
        console.log('random num:' + num);
        if (num > 50) {

            throw new Error('random number is bigger than 50');
        }
        console.log('random num:' + num);
    }, 0);
};

setInterval(function () {
    try {
        //oDomain.run(random_Sync);
        oDomain.run(random_Sync);
    } catch (err) {
        console.log(err);
    }
}, 500);

oDomain.on('error', function (err) {
    console.error(err);
});
