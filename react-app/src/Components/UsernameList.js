import React from 'react'
import '../Styles/UsernameList.css'

import Spinner from 'react-bootstrap/Spinner';



class UsernameList extends React.Component {
    
    state = { 
        playerList: {},
        showVotes: false,
        username: ""
    }


    constructor(props){
        super(props);
        this.props.dataService.updateUserList( (updatedPlayerList, newusername) => {
            this.setState({
               playerList: updatedPlayerList,
               username: newusername
            });
            console.table(this.state.username);
        });

        this.props.dataService.hideVotes(() => {
            this.setState({
                showVotes: false
            })
        })

        this.props.dataService.showVotes(() => {
            this.setState({
                showVotes: true
            })
        })

        this.props.dataService.requestUpdate();
    }
    
    
    render() {
        const playerListElements = Object.values(this.state.playerList).map(player => {

            if(player.username == this.state.username) {
                return <li className="boldName">{player.username}</li>;
            }
            return <li>{player.username}</li>;
        });
        const voteStatus = Object.values(this.state.playerList).map(player => {
            if(!this.state.showVotes){
                if(player.vote === null)
                    return <li><Spinner animation="border" size="sm" /></li>;
                return <li>&#10004;</li>;
            }
            else{
                if(player.vote){
                    return <li>{player.vote}</li>;
                } else {
                    return <li><Spinner animation="border" size="sm" /></li>;
                }
            }
        });
        return(
            <div>
                <form className="flex-container">
                    <ul className="player">{playerListElements}</ul>
                    <ul className="status">{voteStatus}</ul>
                </form>
            </div>
        )
    }
}

export default UsernameList

