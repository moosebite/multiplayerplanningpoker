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
      <StoryDescription />
      <br />
      <ListRender />
      <FibButtons />
    </div>
  );
}

export default GameRoom;
