/**
 * Created by Nan on 2016/11/10.
 */

//�׳�һ���쳣
//throw new Error(String);
//try catch ֻ�ܼ���ͬ������

var random_Sync = function () {
    //�������0-100��һ����
    var num = Math.random() * 100;
    if (num > 50) {
        console.log(num);
        throw new Error('RANDOM NUMBER IS BIGGER THAN 50');
    }
    console.log(num);
};


//var random_aSync = function () {
//    //�������0-100��һ����
//    setTimeout(function () {
//       try{
//           var num = Math.random() * 100;
//           if (num > 50) {
//               console.log(num);
//               throw new Error('RANDOM NUMBER IS BIGGER THAN 50');
//           }
//           console.log(num);
//       }catch (e){
//           console.error('THROW ERROR IS e:' + e);
//       }
//    },0)
//};
//
//setInterval(function () {
//    try {
//        random_aSync();
//    } catch (err) {
//        console.error('THROW ERROR IS:' + err);
//    }
//}, 1000);




//uncaughtException  ����ȫ���쳣
//�����¼�
//process.on('uncaughtException', function (err) {
//    console.log('Caught exception: ' + err);
//});
var random_aSync = function () {
    //�������0-100��һ����
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
    try {
        random_aSync();
    } catch (err) {
        console.error('THROW ERROR IS:' + err);
    }
    random_Sync();
}, 1000);

console.log('after random_aSync');

process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});



