import React from 'react'
import '../Styles/ClearVotesButton.css'

class ClearVotesButton extends React.Component {
    handleSubmit = (event) => {
    this.props.dataService.clearVotes();
    console.log("Clearing votes...");
    }

    render() {
        return (
          <div id="mybutton">
            <button className='ClearVotesButton' onClick = {this.handleSubmit}>{"Clear votes"}</button>
          </div>
            )
        }
    }
    
export default ClearVotesButton