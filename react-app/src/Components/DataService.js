
import io from 'socket.io'

const socket = io.connect('http://localhost:8080')

function updateVote(vote) {
    
}

function clearVote() {
    
}

function username(user) {
    io.emit('username', user);
}

function updateUserList(callback) {
    socket.on('current', newUserList => {
        callback(newUserList);
        console.log('Received new userList.');
    });

}

export { updateVote, clearVote, username, updateUserList }
