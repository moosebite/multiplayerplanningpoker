import React from 'react'
import '../Styles/GameRoom.css'
import GameRoom from './GameRoom'
import UsernameList from './UsernameList'
import StoryDescription from './StoryDescription'
import StoryTitle from './StoryTitle'


function GameRoom() {
    return(
        <div>
            <StoryTitle />
            <StoryDescription />
            <br />
            <UsernameList />
            <GameRoom />
        </div>
    );
}

export default GameRoom;