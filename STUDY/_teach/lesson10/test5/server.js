/**
 * Created by Nan on 2016/11/8.
 */
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/html'});
    res.write('server1');
    res.end();
    res.on('end', function (err) {
        console.log('response is end!')
    });
}).listen(8080, function () {
    process.stdout.write('server1 is run at 8080 port'+'\n')
});

aa();