
const express = require("express");
const path = require("path");
require("dotenv").config();
// app express
const app = express() 

// node server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);

// path
const publicPath = path.resolve(__dirname, "public");

// sockets
require('./sokets/sokets')

// cargar inicio html
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
  if (err) throw new Error(err);

  console.log(`corriendo en puertos ${process.env.PORT}`);
});
