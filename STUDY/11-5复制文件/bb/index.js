/**
 * Created by sunjian on 2016/11/5.
 */
var fs=require("fs");
var path=require("path");

var readDir=function(_dir){
    fs.readdir(_dir,function(err,files){
        if(err){
            console.error(err)
        }
        var len=files.length;
        for(i=0;i<len;i++){
              var filename = path.normalize(_dir + "/" + files[i])
              var stats = fs.statSync(filename);
              if (stats.isDirectory()) {
                  readDir(filename)
              } else {
                  console.log(filename)
              }
        }
    })
}
readDir("../")

fs.writeFile("3.txt",readDir("../"),function(data){
    writeStream.write(data)
    console.log("ok")
})
