import React from 'react'
import '../Styles/UsernameList.css'

import Spinner from 'react-bootstrap/Spinner';



class UsernameList extends React.Component {
    
    state = { 
        playerList: {}
    }


    constructor(props){
        super(props);

        this.props.dataService.updateUserList( (updatedPlayerList) => {
            this.setState({
                playerList: updatedPlayerList
            });
            console.table(this.state.playerList);
        });

        this.props.dataService.requestUpdate();
    }
    
    
    render() {
        const playerListElements = Object.values(this.state.playerList).map(player => {
            return <li>{player.username}</li>;
        });
        //This is a test to make sure React-Bootstrap is running
        //properly and to make sure the spinner works for later use.

        //The spinner will ideally replace the bullet point by each name
        return(
            <div class="wrapper">
            <ul>{playerListElements}</ul>
            <Spinner animation="border" size="sm" />
            </div>
        )
    }
}

export default UsernameList

