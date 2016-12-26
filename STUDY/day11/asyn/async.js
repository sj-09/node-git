/**
 * Created by sunjian on 2016/11/10.
 */
console.log("befors num")

var i= 0,c=3;
function num(){
    for(i;i<c;i++){
        console.log("name"+i)
    };
};
setInterval(function(){
    num()
},0)
/*var arr=[1,2,3,4];

    (function auto(i,len){
        if(i<len){
            setTimeout(function(){
                console.log(arr[i]);
                auto(++i,len)
            },0)
        }
    })(0,arr.length)*/
console.log("after num");





