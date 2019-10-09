import React from 'react'
import '../Styles/GameRoom.css'
import UsernameList from './UsernameList'
import StoryDescription from './StoryDescription'
import StoryTitle from './StoryTitle'
import FibButtons from './FibButtons'


function GameRoom() {
    return(
        <div>
            <StoryTitle />
            <StoryDescription />
            <br />
            <UsernameList />
            <FibButtons />
        </div>
    );
}

export default GameRoom;