import React from 'react';
import '../Styles/ToggleVotesButton.css';

class toggleVotesButton extends React.Component {
    togglevotes = true;
    handleSubmit = (event) => {
      if (this.togglevotes){
        this.props.dataService.displayVotes();
        this.togglevotes = false;
        console.log("Showing votes...");
      } else {
        this.props.dataService.obscureVotes();
        this.togglevotes = true;
        console.log("Hidding votes...");
      }
    }

    render() {
        return (
          <div id="mybutton2">
            <button className='ToggleVotesButton' onClick = {this.handleSubmit}>{"Toggle votes"}</button>
          </div>
            )
        }
    }
    
export default toggleVotesButton;
