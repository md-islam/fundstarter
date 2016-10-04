	var http = require("http");
	var fs = require("fs");
	//web server object



	// Non blocking code example 
	fs.readFile('public/index.html', function(err, html) {
	    if (err) {
	        throw err;
	    } else {
	        console.log("app started");
	    }

	    http.createServer(function(request, response) {
	        response.writeHead(200, {
	            'Content-Type': 'text/html'
	        });
	        response.write(html)
	        response.end();
	    }).listen(process.env.PORT||8080);
	});


	//Blocking code example
	// var htmlSync = fs.readFileSync('public/index.html');
	// require("http").createServer(function(req, res){
	// 	res.writeHead(200, {'Content-Type': 'text/html'});
	//   	res.end(htmlSync);
	// }).listen(8080);




	// Part 2: Modify  index.js again, except this time have it read 
	// using open() and read() callback functions of fs (Links to an external site.) , 
	// Buffer.toString (Links to an external site.), and this article (Links to an external site.). 
	// For the most part, fs simply provides a wrapper for the standard file operations. 
	// The second part you will use the file system module such fs.stat, fs.open, fs.read, and not 
	// fs.readfile. Also check for if the file exists or not!

	//fs.stat
	//fs.open
	//fs.read

	//fs.stat section



	fs.access('public/index.html', fs.F_OK, function(err) {
	    if (!err) {
	        // Do something


	        //fs.stat section to get file info --[START]
	        console.log("Going to get file info!");
	        fs.stat('public/index.html', function(err, stats) {
	            if (err) {
	                return console.error(err);
	            }
	            console.log(stats);
	            console.log("Got file info successfully!");

	            // Check file type
	            console.log("isFile ? " + stats.isFile());
	            console.log("isDirectory ? " + stats.isDirectory());
	        });

	        //fs.stat section to get file info --[END]
	    } else {
	        // It isn't accessible
	        return console.error(err);
	    }
	});


	fs.access('public/index.html', fs.F_OK, function(err) {
	    if (!err) {
	        // Do something


	       
	        //fs.open() followed by fs.read() section -- [START]
	        var buf = new Buffer(1024);

	        console.log("Going to open an existing file");
	        fs.open('public/index.html', 'r+', function(err, fd) {
	            if (err) {
	                return console.error(err);
	            }
	            console.log("File opened successfully!");
	            console.log("Going to read the file");

	            fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
	                if (err) {
	                    console.log(err);
	                }

	                // Print only read bytes to avoid junk.
	                if (bytes > 0) {
	                    console.log(buf.slice(0, bytes).toString());
	                }

	                // Close the opened file.
	                fs.close(fd, function(err) {
	                    if (err) {
	                        console.log(err);
	                    }
	                    console.log("File closed successfully.");
	                });
	            });
	        });

	        //fs.open() followed by fs.read() section -- [end]
	    } else {
	        // It isn't accessible
	        return console.error(err);
	    }
	});












	//fs.open and fs.read section