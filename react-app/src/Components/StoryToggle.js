import React from "react";
import "../Styles/Story.css";

class StoryToggle extends React.Component {
  state = {
    showStoryQueue: false
  };

  constructor(props) {
    super(props);

    this.storyList = this.props.dataService.getStory(); //Successfully makes variable to hold the story queue. Doesn't need to be a state

    this.toggleQueue = this.toggleQueue.bind(this); //This is necessary
  }

  toggleQueue() {
    //Sets the state for if the story queue needs to be visible or not
    this.setState({
      showStoryQueue: !this.state.showStoryQueue
    });
  }

  render() {
    if (this.state.showStoryQueue) {
      this.storyDisplay = (
        <div>
          {this.storyList.map(story => {
            return (
              <Story
                key={story.title}
                title={story.title}
                body={story.description}
              />
            );
          })}
          <button onClick={this.toggleQueue}>Story Queue</button>
        </div>
      );
      return this.storyDisplay;
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

//Simple story button creation
const Story = props => {
  return (
    <button className="StoryButton">
      {props.title}
      <br />
      {props.body}
    </button>
  );
};

export default StoryToggle;
