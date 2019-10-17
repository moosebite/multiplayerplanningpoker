/* eslint-disable no-use-before-define */
// Variable Instantiations
<<<<<<< HEAD
const io = require('socket.io')();

const PORT = 8080;
// This Map contains objects with usernames, votes and whether or not the user is a Game Master and
// the object's key is the socket.id
// eslint-disable-next-line prefer-const
let userMap = {};

// on Connection
io.sockets.on('connection', (socket) => {
    socket.on('addUser', (newUsername) => {
        userMap[socket.id] = {
            username: newUsername,
            GM: !Object.keys(userMap).length,
            vote: null,
        };
        upDate();
    });

    socket.on('updateVote', (vote) => {
        userMap[socket.id].vote = vote;
        upDate();
    });

    socket.on('clearVotes', () => {
        io.emit('hideVotes');
        Object.keys(userMap).forEach((key) => { userMap[key].vote = null; });
        upDate();
    });

    socket.on('disconnect', () => {
        const userWasGM = userMap[socket.id].GM;

        delete userMap[socket.id];
        // If the deleted user was a Game Master then set new Game Master
        if (userWasGM) {
            const keys = Object.keys(userMap);
            if (keys.length) {
                userMap[keys[0]].GM = true;
            }
        }
        upDate();
    });

    function upDate() {
        io.emit('updateUserList', userMap);
        let allVotesIn = true;

        Object.keys(userMap).forEach((key) => {
            if (userMap[key].vote === null) {
                allVotesIn = false;
            }
        });
        if (allVotesIn) {
            io.emit('showVotes');
        }
    }
=======
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
>>>>>>> c8b18a090828e02f9106ccb1b2aa21ee1fdb3c5a
});
// listening on port 8080
io.listen(PORT);
// eslint-disable-next-line no-console
console.log(`Listening on port ${PORT}.`);
