import io from 'socket.io'

const socket = io.connect('http://localhost:8080')

function UpdateVote(vote) {
    
}

function ClearVote() {
    
}

function Username(user) {
    io.emit('username', user);
}

function UpdateUserList(callback) {
    socket.on('current', newUserList => {
        callback(newUserList);
        console.log('Received new userList.');
    });

}

export { UpdateVote, ClearVote, Username, UpdateUserList }