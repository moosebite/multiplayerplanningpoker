import React from 'react'
import './GameRoom.css'

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
            <body className='body1'>
                <button className="myButton" id="0">0</button>
                <button className="myButton" id="1">1</button>
                <button className="myButton" id="2">2</button>
                <button className="myButton" id="3">3</button>
                <button className="myButton" id="5">5</button>
                <button className="myButton" id="8">8</button>
                <button className="myButton" id="13">13</button>
                <button className="myButton" id="21">21</button>
                <button className="myButton" id="?">?</button>
                <br />
            </body>
        </div>
    );
}

export default GameRoom;