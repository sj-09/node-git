/**
 * Created by sunjian on 2016/11/22.
 */

//����С�ļ�
/*var child_process=require("child_process");

var util=require("util");

function copy(source,target){
    var cmds=util.format("copy",source,target);
    child_process.exec(cmds,function(err){
        if(err){
            console.log(err);
        }
        console.log("copy success")
    })
}
copy("a.txt","b.txt");*/


//�������ļ�
var fs=require("fs");
var path=require("path");

var source=path.join(__dirname,"new","smalla");
var target=path.join(__dirname,"new","b.txt");

console.log(target)
var readStream=fs.createReadStream(source);
var writeStream=fs.createWriteStream(target);
//������������
readStream.on("data",function(chunk){
    //������û��д��
    if(writeStream.write(chunk)===false){
        //ֹͣ��ȡ
        readStream.pause()
    }
});
//������д�����
writeStream.on("drain",function(){
    //������ȡ
    readStream.resume();
});
//�����ݶ�ȡ���
readStream.on("end",function(){
    //����д��
    writeStream.end()
})