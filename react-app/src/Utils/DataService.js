import io from 'socket.io-client';

const socket = io('http://localhost:8080');

function updateVote(vote) {
    io.emit('updateVote', vote);
}

function clearVotes() {
    io.emit('clearVotes');
}

function addUser(username) {
    io.emit('addUser', username);
}

function updateUserList(callback) {
    socket.on('updateUserList', (newUserList) => {
        callback(newUserList);
        // eslint-disable-next-line no-console
        console.log('Received new userList.');
    });
}

function showVotes(callback) {
    socket.on('showVotes', () => callback());
}

function hideVotes(callback) {
    socket.on('hideVotes', () => callback());
}

export { updateVote, clearVotes, addUser, updateUserList, showVotes, hideVotes }