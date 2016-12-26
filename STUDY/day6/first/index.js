var fs=require("fs");
var path=require("path");

/*var readdir=function(_dir){
    fs.readdir(_dir,function(err,files){
        if(err){
            console.error(err)
        }

        for(i=0;i<files.length;i++){
            (function(i){
                var filesname=path.normalize(_dir+"/"+files[i]);
                fs.stat(filesname,function(err,stats){
                    if(err){
                        console.error(err)
                    }
                    if(stats.isDirectory()){
                        readdir(filesname)
                    }else{
                        console.log(filesname.slice(6))
                    }
                })
            })(i)
        }
    })
}
readdir("../../")*/





/*var read=function(_dir){
    fs.readdir(_dir,function(err,files){
        if(err){
            return console.error(err)
        }
        files.forEach(function(_filename){
            var fileName=path.normalize(_dir+"/"+_filename);
            fs.stat(fileName,function(error,stats){
                if(stats.isDirectory()){
                    read(fileName);
                }else{
                    console.log(fileName)
                }
            })
        })
    })
}
read("../")*/







//异步遍历目录文件
var read=function(_dir){
    fs.readdir(_dir,function(err,files){
        if(err){
            console.error(err)
        }
        var len=files.length;

        for(var i=0;i<len;i++){
            var nor=path.normalize(_dir+"///"+files[i])
            var stats=fs.statSync(nor)
            if(stats.isDirectory()){
               read(nor)
            }else {
                console.log(files[i])
            }
        }
    })
}
read("../../")


//同步遍历目录文件
/*var readFileSync=function(_dir){

    var files=fs.readdirSync(_dir);
    for(var i in files){
        var fileN=path.normalize(_dir+"/"+files[i]);
        var stats=fs.statSync(fileN);

        if(stats.isDirectory()){
            readFileSync(fileN);
        }else{
            console.log(fileN)
        }
    }
}*/
