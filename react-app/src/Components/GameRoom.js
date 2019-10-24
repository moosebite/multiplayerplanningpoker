import React from 'react'

import '../Styles/GameRoom.css'

import UsernameList from './UsernameList'
import Story from './Story'
import FibButtons from './FibButtons'
import DataService from '../Utils/DataService'

class GameRoom extends React.Component {
    username = localStorage.getItem('username');
    dataService = new DataService(this.username);
    render() {
        return(
            <div className='loginBackground'>
                <Story />
                <br />
                <UsernameList dataService = {this.dataService} />
                <FibButtons dataService = {this.dataService} />
            </div>
        );
    }
}

export default GameRoom;