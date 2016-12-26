/**
 * Created by Nan on 2016/11/9.
 */

//函数的返回值
//var myName = 'haonan';
//
//var getMyName = function () {
//    return myName;
//};
//
//function readMyName() {
//    var myName = getMyName();
//    console.log(myName);
//}
//readMyName();


//循环数组
//var myName = ['name1', 'name2', 'name3'];

//同步方法：
//console.log('before myName');
//var i = 0;
//for (; i < myName.length; i++) {
//    console.log(myName[i]);
//}
//console.log('after myName');

//异步方法：
//通过闭包来传递参数，方法内执行一个异步方法，输出name
//(function readName(i, len) {
//    if (i < len) {
//        setTimeout(function () {
//            console.log(myName[i]);
//            readName(++i, len);
//        }, 0)
//    }
//})(0, myName.length);
//console.log('after myName');