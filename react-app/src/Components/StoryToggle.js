import React from "react";
import "../Styles/UsernameList.css";

class StoryToggle extends React.Component {
  state = {
    storyQueue: ["apple ", "banana ", "grape "], //This eventually will hold the story queue
    showStoryQueue: false
  };

  constructor(props) {
    super(props);
    //Here, eventually, can have the queue component be created with items pulled in through dataservices, which is used as a prop.

    this.toggleQueue = this.toggleQueue.bind(this); //May not be necessary?
  }

  toggleQueue() {
    //console.log("beep");

    //Maybe put the logic in here to update the storyQueue contents from the server here.
    this.setState({
      showStoryQueue: !this.state.showStoryQueue
    });
  }

  render() {
    //If showStoryQueue is true, can use similar logic to map the stories from the server and display them in the new element.
    if (this.state.showStoryQueue) {
      return (
        <div>
          <font color="white">
            <center>{this.state.storyQueue}</center>
          </font>
          <button onClick={this.toggleQueue}>Story Queue</button>
        </div>
      );
    } else {
      return (
        <div>
          <font color="white">
            <center>Click the button for the story queue</center>
          </font>
          <button onClick={this.toggleQueue}>Story Queue</button>
        </div>
      );
    }
  }
}

export default StoryToggle;
