var child_process=require("child_process");
var fork=child_process.fork;
var server=["./http1","./http2"];
var Count=0;
function createWork(server){
	var work=fork(server);	
	work.on("exit",function(){
		Count++;
		if(Count>3){
			process.exit()

		}
		delete works[work.pid];
		//work.kill();
		createWork(server);
		
	})
};

function saveChild(){
	for(var i=0;i<server.length;i++){
		createWork(server[i])
	};
};

process.on("exit",function(code){
	if(code){
		console.log("close!!");
		return;
	};
});

saveChild()


/*var child_process = require('child_process');
var fork = child_process.fork;
var server = ['http1', 'http2'];

function createWork(server) {
    var worker = fork(server);
    var errCount = 0;
    worker.on('exit', function () {
        errCount++;
        if (errCount > 3) {
            process.exit();
        }
        delete works[worker.pid];
        createWork(server);
    });

}
function saveChildProcess() {
    for (var i = 0; i < server.length; i++) {
        createWork(server[i]);
    }
}
process.on('exit', function (code) {
    if (code) {
        console.log('closed!');
        return;
    }
    process.stderr.write('错误次数达到三次，请稍后再试！');
});
saveChildProcess();*/











