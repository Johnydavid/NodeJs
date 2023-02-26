const queryString = require("querystring");

const express = require("express");

const port = process.env.PORT || 9000;

const app = express();

app.get("/", respondTest);
app.get("/json", respondJSON);
app.get("/test", respondInputs);
app.get("*", respondNotFound);

function respondTest(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello Johnson David");
}

function respondJSON(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ name: "johnson", nos: [1, 2, 3, 4] }));
}

function respondNotFound(req, res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
}

function respondInputs(req, res) {
  const { input = "" } = queryString.parse(
    req.url.split("?").slice(1).join("")
  );

  res.setHeader("Content-Type", "application/json");

  res.end(
    JSON.stringify({
      normal: input,
      caps: input.toUpperCase,
      count: input.length,
      reverse: input.split("").reverse().join(""),
    })
  );
}

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
