/**
 * Created by sunjian on 2016/11/14.
 */
    //�����ӽ���
var child_process=require("child_process");
var fork=child_process.fork;
var server=["http1","http2"];


function createWork(server){
    //�����ӽ���
    var work=fork(server);

    work.on("exit",function(){

        //ɾ����ǰ�������ӽ���
        delete  work;
        //����
          createWork(server)
    })
}
function saveChild(){
    //�����ӽ���
    for(var i=0;i<server.length;i++){
        //�ֱ𴴽��ӽ���
        createWork(server[i])
    }
}
process.on("exit",function(code){
    if(code){
        console.log("close");
        return;
    }
    process.stderr.write(code)
})
saveChild()