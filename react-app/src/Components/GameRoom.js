import React, { Component } from 'react'
import '../Styles/GameRoom.css'
import UsernameList from './UsernameList'
import Story from './Story'
import FibButtons from './FibButtons'


class GameRoom extends Component {
    render() {
        return(
            <div>
                <Story />
                <br />
                <UsernameList />
                <FibButtons />
            </div>
        );
    }
}

export default GameRoom;