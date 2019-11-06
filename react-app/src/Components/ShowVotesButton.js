import React from 'react';
import '../Styles/ShowVotesButton.css';

class ShowVotesButton extends React.Component {
    handleSubmit = (event) => {
      this.props.dataService.displayVotes();
      console.log("Showing votes...");
    }

    render() {
        return (
          <div id="mybutton2">
            <button className='ShowVotesButton' onClick = {this.handleSubmit}>{"Show votes"}</button>
          </div>
            )
        }
    }
    
export default ShowVotesButton;
