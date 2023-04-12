const express = require("express");
const server = express();
const PORT = process.env.PORT || 8080;

server.get("/", function (req, res) {
  res.send("WORKS");
});

server.get("/test", function (req, res) {
  res.send("TEST");
});

server.listen(PORT);

console.log(`Server is listening on port: ${PORT}`);
