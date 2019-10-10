// Server for the multiplayer planning poker

// Variable Instantiations
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var users = [];

// on Connection
io.sockets.on('connection', function(socket) {
        // When the user object is given adding it to the users array and updating the clients
    socket.on('username', function(username) {
        users.push({username : username, GM = false, vote : 0, socketId : socket.Id});
        users.length == 1 ? users[0].GM = true : null
        UpDate(users);
    });
        // Remove user from array when they disconnect
        // Removing the user that has disconnected
        // Updating the clients
    socket.on('disconnect', function () {
        usersNew = users.filter((user) => user.socketId != socket.Id);
        UpDate(usersNew);
     });

});
    // Calling the update function when a clint requests it
    // The function that updates the clients when there has been a change to the users array
    // Moving the updated array to the users array
    // Emitting the updated users array to the clients
    // Checking if all votes are in if so showing votes on the clients
io.sockets.on('update', UpDate);

function UpDate(usersUpdate) {
    users = usersUpdate;
    io.emit('current', users);
    !users.some((current) => current.vote === null) ? io.emit('showVotes') : null;
};
    //when the game master requests the votes to be cleared 
    //removing the votes off the clients screens
    //resetting all votes to null
    //calling the update function to give the updated array to the clients
io.sockets.on('clearVotes', function(){ 
    io.emit('hideVotes');
    users.forEach((current) => current.vote = null);
    UpDate(users);
});
    // listening on port 8080
const server = http.listen(8080, function() {
    console.log('listening on *:8080');
});