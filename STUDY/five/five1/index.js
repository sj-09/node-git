var fs=require("fs");

fs.readFile("a.txt",function(err,dat){
    if(err){
    	return console.error(err)
    }   
    console.log(dat.toString())
  
  fs.writeFile("ab.txt",dat,function(err){
     if(err){
     	return console.error(err)
     }
     console.log("end")
  })

})