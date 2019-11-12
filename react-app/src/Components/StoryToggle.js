import React from "react";
import "../Styles/Story.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap'


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
    //'Event' is important. Makes the button do it on click for the specific button
    
    return(
      <a onClick={event => this.handleStorySelect(props)}>
        <Card className= 'card-item'>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    );
    //
  
  }

  render() {
    this.storyDisplay = (
      <div className='card-container'>{this.storyList.map(story => this.makeStoryButton(story))}</div>
    );

    return this.storyDisplay;
  }
}

export default StoryToggle;
