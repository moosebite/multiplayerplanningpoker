/* eslint-disable react/jsx-filename-extension */
import React from "react";

import "../Styles/GameRoom.css";
import { withRouter } from "react-router-dom";
import UsernameList from "./UsernameList";
import Story from "./Story";
import FibButtons from "./FibButtons";
import DataService from "../Utils/DataService";
import ToggleVotesButton from "./ToggleVotesButton";
import ClearVotesButton from "../Components/ClearVotesButton";
import StoryToggle from "../Components/StoryToggle";

class GameRoom extends React.Component {
  state = {
    isGM: false
  };

  constructor(props) {
    super(props);
    if (!localStorage.getItem("username")) {
      this.props.history.push("./LoginPage");
    } else {
      this.username = localStorage.getItem("username");
      this.dataService = new DataService(this.username);
      this.dataService.userIsGM(gm => {
        this.setState({
          isGM: gm
        });
      });
      const GM = localStorage.getItem("GM");
      if (GM) {
        this.dataService.changeGM();
        localStorage.removeItem("GM");
      }
      this.dataService.requestUpdate();
    }
  }

  render() {
    const GameRoomElements = (
      <div className="gameroomBackground">
        <Story dataService={this.dataService} />
        <br />
        <UsernameList dataService={this.dataService} />
        <FibButtons dataService={this.dataService} />
      </div>
    );

    const GMGameRoomElements = (
      <div className="gameroomBackground">
        <Story dataService={this.dataService} />
        <br />
        <StoryToggle dataService={this.dataService} />
        <UsernameList dataService={this.dataService} />
        <FibButtons dataService={this.dataService} />
        <ToggleVotesButton dataService={this.dataService} />
        <ClearVotesButton dataService={this.dataService} />
      </div>
    );

    const redirect = <p>Redirecting to login...</p>;

    return this.dataService
      ? this.state.isGM
        ? GMGameRoomElements
        : GameRoomElements
      : redirect;
  }
}

export default withRouter(GameRoom);
