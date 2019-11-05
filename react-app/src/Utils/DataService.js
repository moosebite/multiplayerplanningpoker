import io from 'socket.io-client';

class DataService {
    constructor(username) {
        this.socket = io('http://localhost:8080');
        this.addUser(username);
    }

    updateVote(vote) {
        this.socket.emit('updateVote', vote);
    }

    clearVotes() {
        this.socket.emit('clearVotes');
    }

    addUser(username) {
        this.socket.emit('addUser', username);
    }

    updateUserList(callback) {
        this.socket.on('updateUserList', (newUserList) => {
            callback(newUserList);
            // eslint-disable-next-line no-console
            console.log('Received new userList.');
        });
    }

    requestUpdate() {
        this.socket.emit('requestUpdate');
    }

    showVotes(callback) {
        this.socket.on('showVotes', () => callback());
    }

    hideVotes(callback) {
        this.socket.on('hideVotes', () => callback());
    }

    userIsGM(callback) {
        this.socket.on('userIsGM', (gmMap) => {
            const socketid = this.socket.id;
            const gm = gmMap[socketid];
            callback(gm);
        });
    }
}

export default DataService;
