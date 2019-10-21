import React from 'react'
import '../Styles/GameRoom.css'
import UsernameList from './UsernameList'
import Story from './Story'
import FibButtons from './FibButtons'

class GameRoom extends React.Component {
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