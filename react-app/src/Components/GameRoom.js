/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import '../Styles/GameRoom.css';
import { withRouter } from 'react-router-dom';  
import UsernameList from './UsernameList';
import Story from './Story';
import FibButtons from './FibButtons';
import DataService from '../Utils/DataService';
import ClearVotesButton from './ClearVotesButton';

class GameRoom extends React.Component {
    constructor(props) {
        super(props);
        if (!localStorage.getItem('username')) {
            this.props.history.push('./LoginPage');
        } else {
            this.username = localStorage.getItem('username');
            this.dataService = new DataService(this.username);
        }
    }

    render() {
        const GameRoomElements = (
            <div className='gameroomBackground'>
                <Story />
                <br />
                <UsernameList dataService = {this.dataService} />
                <FibButtons dataService = {this.dataService} />
                <ClearVotesButton dataService = {this.dataService} />
            </div>
        );

        const redirect = <p>Redirecting to login...</p>;

        return this.dataService ? GameRoomElements : redirect;
    }
}

export default withRouter(GameRoom);
