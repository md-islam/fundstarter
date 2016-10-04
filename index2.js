var http = require("http");
var fs = require("fs");
//web server object



// // Non blocking code example 
// fs.readFile('public/index.html', function(err, html){
// 	if(err){
// 		throw err;
// 	}else{
// 		console.log("app started");
// 	}

// 	http.createServer(function (request, response) {
// 		response.writeHead(200, {
// 			'Content-Type': 'text/html'
// 		});
// 		response.write(html)
// 		response.end();
// 	}).listen(8080);
// });




// Blocking code example

var htmlSync = fs.readFileSync('public/index.html');
require("http").createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
  	res.end(htmlSync);
}).listen(8081);




