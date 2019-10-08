import React from 'react'
import '../Styles/GameRoom.css'

function GameRoom() {
    return(
        <div>
            <h1>
                Hello Jokers' Wild! (Story Title goes here)
            </h1>
            <p1>
                This is a test of the game room. <br />
                The story description will go here.
            </p1>
            <br />
            <p2>
                (Usernames go here.)
            </p2>
            <GameRoom />
        </div>
    );
}

export default GameRoom;