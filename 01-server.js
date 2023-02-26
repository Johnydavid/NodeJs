const http = require('http'); //This loads core http module and stores it in http variable

// require() is a globally accessible function in Node.js and is always available.

const port = process.env.PORT || 9000

const server = http.createServer((req, res)=>{
    res.end("Hello GUVI members")
})

server.listen(port);
console.log(`server listening on port ${port}`);






