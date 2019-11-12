import React from "react";
import "../Styles/Story.css";

class StoryToggle extends React.Component {

  constructor(props) {
    super(props);

    this.storyList = this.props.dataService.getStory(); //Successfully makes variable to hold the story queue. Doesn't need to be a state

    //This binding is necessary
    this.handleStorySelect = this.handleStorySelect.bind(this);
    this.makeStoryButton = this.makeStoryButton.bind(this);
    //this.toggleQueue = this.toggleQueue.bind(this);
  }

  handleStorySelect = event => {
    //Gives this handle access to the story for each button and its attributes
    this.props.dataService.updateStory(event);

    this.props.dataService.requestUpdate();
  };

  //This works
  makeStoryButton(props) {
    //'Event' is important. Makes the button do it on click.
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
    this.storyDisplay = (
      <div>{this.storyList.map(story => this.makeStoryButton(story))}</div>
    );

    return this.storyDisplay;
  }
}

export default StoryToggle;
