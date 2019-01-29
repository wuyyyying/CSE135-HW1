#!/usr/bin/env nodejs
var http = require('http'),
    fs = require('fs');

const hostname = '157.230.57.144';
const port = 8083;

fs.readFile('/var/www/html/index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port, hostname, () => {
      console.log(`server running`);
    });
});
