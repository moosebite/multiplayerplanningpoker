/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-indent */
import React from "react";

import "../Styles/Story.css";

class Story extends React.Component {
  state = {
    activeStory: {}
  };

  constructor(props) {
    super(props);

    this.props.dataService.updateActiveStory(newActiveStory => {
      this.setState({
        activeStory: newActiveStory
      });
      console.table(this.state.playerList);
    });

    this.props.dataService.requestUpdate();
    //this.storyMap = this.props.dataService.getStory();
    //console.log(this.storyMap[0].description);
  }

  render() {
    if (this.state.activeStory) {
      return (
        <div>
          <h1 className="Story">{this.state.activeStory.title}</h1>
          <h2 className="Story">
            <center>{this.state.activeStory.description}</center>
          </h2>
        </div>
      );
    } else return <h1>Story here</h1>;
  }
}

export default Story;
