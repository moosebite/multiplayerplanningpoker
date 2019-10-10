// Server for the multiplayer planning poker

// Variable Instantiations
const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
var userCount = 0;

var usernameList = [];

// Create server
io.sockets.on("connection", function(socket) {
  socket.on("username", function(username) {
    socket.username = username;
    usernameList.push(username);
    console.log(usernameList[userCount]);
    io.emit("currentUsernames", usernameList);
  });
});

const server = http.listen(8080, "71.228.203.39" || "localhost", function() {
  //This has to be YOUR IP address for now in order to work
  console.log("listening on *:8080");
});
