import React from "react";
import "../Styles/Story.css";

class StoryToggle extends React.Component {
  state = {
    showStoryQueue: false
  };

  constructor(props) {
    super(props);

    this.storyList = this.props.dataService.getStory(); //Successfully makes variable to hold the story queue. Doesn't need to be a state

    //This binding is necessary
    this.handleStorySelect = this.handleStorySelect.bind(this);
    this.makeStoryButton = this.makeStoryButton.bind(this);
    this.toggleQueue = this.toggleQueue.bind(this);
  }

  toggleQueue() {
    //Sets the state for if the story queue needs to be visible or not
    this.setState({
      showStoryQueue: !this.state.showStoryQueue
    });
  }

  handleStorySelect = event => {
    //Gives this handle access to the story for each button and its attributes
    console.log("testing select");
    console.log(JSON.stringify(event)); //Stringifyies the object and outputs it to the console
  };

  //This works
  makeStoryButton(props) {
    //'Event' is important. Makes the button doe it on click.
    return (
      <button
        className="StoryButton"
        onClick={event => this.handleStorySelect(props)}
      >
        {props.title}
        <br />
        {props.description}
      </button>
    );
  }

  render() {
    if (this.state.showStoryQueue) {
      this.storyDisplay = (
        <div>
          {this.storyList.map(story => this.makeStoryButton(story))}
          <button onClick={this.toggleQueue}>Story Queue</button>
        </div>
      );
    } else {
      this.storyDisplay = (
        <div>
          <font color="white">
            <center>Click the button for the story queue</center>
          </font>
          <button onClick={this.toggleQueue}>Story Queue</button>
        </div>
      );
    }
    return this.storyDisplay;
  }
}

//Simple story button creation
/*
const Story = props => {
  return (
    <button className="StoryButton" onClick={console.log("test")}>
      {props.title}
      <br />
      {props.body}
    </button>
  );
};
*/

export default StoryToggle;
