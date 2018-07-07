//let me use network acces
const http = require('http');
//files system access
const fs = require('fs');
//sets up server
http.createServer(function (req, res) {
  //use fs file to read html file
  fs.readFile('index.html', function(err, data) {
  //return back html to send backa 200 response
    res.writeHead(200, {'Content-Type': 'text/html'});
  //take request to send data we receive as a response
    res.write(data);
  //end response
    res.end();
  });
}).listen(8000);
