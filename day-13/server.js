const http = require("http");

// config server
const hostname = "127.0.0.1";
const port = 8080;

// import module
let Render = require("./module/render");
const data = require("./data/club");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  let pathView = "Home";

  const path = req.url;

  if (path === "/") {
    Render.index(req, res, pathView, data);
  } else {
    res.statusCode = 404;
    res.end("404 Not Found");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
