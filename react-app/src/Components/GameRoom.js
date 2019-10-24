import React from 'react'
import '../Styles/GameRoom.css'
import UsernameList from './UsernameList'
import Story from './Story'
import FibButtons from './FibButtons'
import DataService from '../Utils/DataService'
import io from 'socket.io-client';

class GameRoom extends React.Component {
    DataObject = () => {
        const socket = io('http://localhost:8080');
        this.username = localStorage.getItem('username');
        var data = new DataService(socket, this.username);
        return data;
    }
    data = this.DataObject();
    render() {
        return(
            <div>
                <Story />
                <br />
                <UsernameList data = {this.data} />
                <FibButtons data = {this.data} />
            </div>
        );
    }
}

export default GameRoom;