/**
 * Created by sunjian on 2016/11/9.
 */
process.stdin.setEncoding('utf8');
process.stdin.on("data",function(da){
    //1����תΪ�ַ���������ȥ��ǰ��ո�
    var da=da.toString().trim();
    if(da!=""){
       console.log(da);
    }else{
        process.stdin.emit('end')
    }
})
process.stdin.on('end',function(){
    console.log("exit success")
})

