// Server for the multiplayer planning poker

// Variable Instantiations
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
	res.render('server.ejs');
});
// Create server
io.sockets.on('connection', function(socket) {
    socket.on('username', function(username) {
        socket.username = username;
        io.emit('is_online', socket.username);
    });

});

const server = http.listen(8080, '10.82.64.65' || 'localhost', function() {
    console.log('listening on *:8080');
});