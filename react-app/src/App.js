import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './Styles/App.css';

import GameRoom from './Components/GameRoom';
import LoginPage from './Components/LoginPage';

class App extends React.Component {
   render () {
    return (
      <div>
        <Switch>
        <Route>
        <Route path='/DecisionSourceMultiplayerPlanningPokerGameMasterLoginPage#GodMode'>
            <LoginPageGM/>
          </Route>
            <Route path='/DecisionSourceMultiplayerPlanningPokerGameMasterGameRoom'>
            <GameRoomGM />
            </Route>
        </Route>
          <Route path='/GameRoom'>
            <GameRoom/>
          </Route>
          <Route path='/'>
            <LoginPage/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
