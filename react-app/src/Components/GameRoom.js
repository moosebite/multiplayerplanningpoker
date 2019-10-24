import React from 'react'
import '../Styles/GameRoom.css'
import UsernameList from './UsernameList'
import Story from './Story'
import FibButtons from './FibButtons'
import DataService from '../Utils/DataService'

class GameRoom extends React.Component {
    DataObject = () => {
        this.username = localStorage.getItem('username');
        var data = new DataService(this.username);
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