const express = require("express");
const server = express();
const PORT = process.env.PORT || 8080;

server.use(express.static("public"));

server.get("/", function (req, res) {
  res.sendFile(dirPath("/pages/index.html"));
});

server.get("/other", function (req, res) {
  res.sendFile(dirPath("/pages/other.html"));
});

server.get("/test", function (req, res) {
  res.send("TEST");
});

server.listen(PORT);

console.log(`Server is listening on port: ${PORT}`);

function dirPath(localPath) {
  return `${__dirname}/${localPath}`;
}
