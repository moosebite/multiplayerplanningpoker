// Server for the multiplayer planning poker

// Variable Instantiations
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var userCount = 0;

var usernameList = [];

// Create server
io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        usernameList.push(username);
        console.log(usernameList[userCount]);
        io.emit('currentUsernames', usernameList);
    });

});

const server = http.listen(8080, '10.82.79.188' || 'localhost', function() {
    console.log('listening on *:8080');
});
