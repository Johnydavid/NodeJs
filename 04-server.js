const queryString = require('querystring');

const http = require("http");

const port = process.env.PORT || 9000;

const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    return respondTest(req, res);
  }
  if (req.url === "/json") {
    return respondJSON(req, res);
  } else {
    return respondNotFound(req, res);
  }
});

 respondTest=((req, res)=> {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Johnson David");
})

function respondJSON(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name: "johnson", nos: [1, 2, 3, 4] }));
}

function respondNotFound(req, res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
}


function respondInputs(req, res){
    
}


server.listen(port);

console.log(`server is running on ${port}`)
