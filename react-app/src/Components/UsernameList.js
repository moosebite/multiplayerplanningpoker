import React from 'react'
import '../Styles/UsernameList.css'

import Spinner from 'react-bootstrap/Spinner';



class UsernameList extends React.Component {
    
    state = { 
        playerList: {},
        showVotes: false
    }


    constructor(props){
        super(props);

        this.props.dataService.updateUserList( (updatedPlayerList) => {
            this.setState({
                playerList: updatedPlayerList
            });
            console.table(this.state.playerList);
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
            if(!this.state.showVotes){
                if(player.vote === null)
                    return <div><li>{player.username}</li><li><Spinner animation="border" size="sm" /></li></div>;
                return <div><li>{player.username}</li><li><p1>&#10004;</p1></li></div>;
            }
            else{
                return <div><li>{player.username}</li><li>{player.vote}</li></div>;
            }
        });
        return(
            <div>
                <form className="wrapper">
                    <ul>{playerListElements}</ul>
                </form>
            </div>
        )
    }
}

export default UsernameList

