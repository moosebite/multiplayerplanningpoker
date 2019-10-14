// Variable Instantiations
const io = require('socket.io')();

var PORT = 8080;
    //This Map contains objects with usernames, votes and whether or not the user is a Game Master and the object's key is the socket.id
var userMap = {}

// on Connection
io.sockets.on('connection', function(socket) {

    socket.on('addUser', function(username) {
        userMap[socket.id] = {
            username : username, 
            GM : Object.keys(userMap).length ? false : true, 
            vote : null
        };
        upDate();
    });

    socket.on('updateVote', (vote) => {
        userMap[socket.id].vote = vote;
        upDate();
    })
    
    socket.on('clearVotes', function(){ 
        io.emit('toggleVotes');
        Object.keys(userMap).map((key) => userMap[key].vote = null);
        upDate();
    });
    
    socket.on('disconnect', function () {
        if(userMap[socket.id].GM)
        {
            var keys = Object.keys(userMap)
            if(keys.length < 1)
                userMap[keys[1]].GM = true;
        }
        delete userMap[socket.id]
        upDate();
    });
    
    function upDate() {
        io.emit('updateUserList', userMap);
        var allVotesIn = true;

        Object.keys(userMap).map((key) => {
        if(userMap[key].vote === null)
            allVotesIn = false;
        })
        if (allVotesIn) {
            io.emit('toggleVotes');
        }        
    };
});
    // listening on port 8080
io.listen(PORT)
console.log(`Listening on port ${PORT}.`);