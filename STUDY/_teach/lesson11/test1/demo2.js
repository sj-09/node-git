/**
 * Created by Nan on 2016/11/10.
 */


//函数返回值
//var names = "haonan";
//var readName = function () {
//    return names;
//};
//
//var writeName = function () {
//    console.log(readName());
//    //...
//    console.log('write name fun');
//};
//writeName();

//同步循环
//var names = ['name1', 'name2', 'name3'];
//console.log('before sum');
//function eachName(){
//    for (var i = 0; i < names.length; i++){
//        console.log(names[i]);
//    }
//}
//eachName();
//console.log('after sum');

//异步循环
//var names = ['name1', 'name2', 'name3'];
//console.log('before sum');
//function eachName(){
//    for (var i = 0; i < names.length; i++){
//        console.log(names[i]);
//    }
//}
//setTimeout(function () {
//    eachName();
//},0);
//console.log('after sum');

//异步循环
var names = ['name1', 'name2', 'name3'];
console.log('after sum');
(function eachName(i,len) {
    if(i<len){
       setTimeout(function () {
           console.log(names[i]);
           eachName(++i,len);
       },0)
    }
})(0,names.length);
console.log('after sum');