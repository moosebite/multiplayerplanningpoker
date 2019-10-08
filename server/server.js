// Server for the multiplayer planning poker

// Variable Instantiations
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

var users = [];

// on Connection
io.sockets.on('connection', function(socket) {
        // when the user opject is given adding it to the users array and updating the clints
    socket.on('username', function(username) {
        users.push({username : username, GM = false, vote : 0, socketid : socket.id});
        users.length == 1 ? users[0].GM = true : null
        UpDate(users);
    });
        // remove user from array when they disconnect
        // removing the user that has disconneced
        //updating the clints
    socket.on('disconnect', function () {
        usersnew = users.filter((user) => user.socketid != socket.id);
        UpDate(usersnew);
     });

});
    //calling the update function when a clint requsts it
    //The function that updates the clints when there has been a change to the users array
    //moving the updated array to the users array
    //emiting the updated users array to the clints
    //checking if all votes are in if so showing votes on the clints
io.sockets.on('update', UpDate);

function UpDate(usersupdate) {
    users = usersupdate;
    io.emit('current', users);
    !users.some((current) => current.vote === null) ? io.emit('showVotes') : null;
};
    //when the game master requsts the votes to be cleared 
    //removing the votes off the clints screens
    //resetting all votes to null
    //calling the update function to give the updated array to the clints
io.sockets.on('clearvotes', function(){ 
    io.emit('hidevotes');
    users.forEach((current) => current.vote = null);
    UpDate(users);
});
    // listening on port 8080
const server = http.listen(8080, function() {
    console.log('listening on *:8080');
});