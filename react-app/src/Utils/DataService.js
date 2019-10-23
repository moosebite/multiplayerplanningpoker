class DataService {
    
    constructor(newSocket) {
        this.socket = newSocket;
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

    showVotes(callback) {
        this.socket.on('showVotes', () => callback());
    }

    hideVotes(callback) {
        this.socket.on('hideVotes', () => callback());
    }
}

export default DataService