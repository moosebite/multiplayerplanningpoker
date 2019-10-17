<<<<<<< HEAD
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
=======
import React from "react";
import "../Styles/GameRoom.css";
//import UsernameList from './UsernameList'
import ListRender from "./listRender";
import StoryDescription from "./StoryDescription";
import StoryTitle from "./StoryTitle";
import FibButtons from "./FibButtons";

function GameRoom() {
  return (
    <div>
      <StoryTitle />
      <StoryDescription  />
      <br />
      <ListRender />
      <FibButtons />
    </div>
  );
}

export default GameRoom;
>>>>>>> c8b18a090828e02f9106ccb1b2aa21ee1fdb3c5a
