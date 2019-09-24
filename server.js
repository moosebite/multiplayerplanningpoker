// Server for the multiplayer planning poker

// Variable Instantiations
const express = require('express');
const app = express();
const http = require("http");
const io = require('socket.io')(http)

// Create server
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.end('This should prompt for your username.');
}).listen(8080,10,82,67,214)

// Socket implementation
io.sockets.on('connect', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit(socket.username);
    })
})


console.log('Listening on :8080');