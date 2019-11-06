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

    changeGM() {
        this.socket.emit('changeGM');
    }

    displayVotes() {
        this.socket.emit('displayVotes');
    }

    updateUserList(callback) {
        this.socket.on('updateUserList', (newUserList) => {
            callback(newUserList);
            // eslint-disable-next-line no-console
            console.log('Received new userList.');
        });
    }

    userIsGM(callback) {
        this.socket.on('updateUserList', (userMap) => {
            const socketid = this.socket.id;
            const gm = userMap[socketid].GM;
            callback(gm);
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
}

export default DataService;
