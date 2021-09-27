var http = require("http");
var rs = require("fs");

const PORT=5500;

fs.readFile("./index.html" , (err, html)=> {
    if (err)
        throw err;

    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(PORT);
});