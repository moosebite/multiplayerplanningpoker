import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Styles/App.css";

import GameRoom from './Components/GameRoom';
import LoginPage from './Components/LoginPage';
import LoginPageGM from './Components/LoginPageGM';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/DecisionSourceMultiplayerPlanningPokerGameMasterLoginPage_GodMode'>
            <LoginPageGM/>
          </Route>
          <Route path='/GameRoom'>
            <GameRoom/>
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
