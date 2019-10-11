// Variable Instantiations
const io = require('socket.io')();

var PORT = 8080;

var userList = new Map();

var gmChosen = false;

// on Connection
io.sockets.on('connection', function(socket) {

    socket.on('addUser', function(username) {
        userList[socket.id] = {username : username, GM : false, vote : null};
        if(!gmChosen)
        {
            userList[socket.id].GM = true;
            gmChosen = true;
        }
        upDate();
    });

    socket.on('updateVote', (vote) => {
        userList[socket.id].vote = vote;
        upDate();
    })
    
    socket.on('clearVotes', function(){ 
        io.emit('toggleVotes');
        Object.keys(userList).map((key) => userList[key].vote = null);
        upDate();
    });
    
    socket.on('disconnect', function () {
        userList[socket.id] = null;
        upDate();
    });
    
    function upDate() {
        io.emit('updateUserList', userList);
        var allVotesIn = true;

        Object.keys(userList).map((key) => {
        if(userList[key].vote === null)
            allVotesIn = false;
        })
        allVotesIn ? io.emit('toggleVotes') : null;
    };
});
    // listening on port 8080
io.listen(PORT)
console.log(`Listening on port ${PORT}.`);