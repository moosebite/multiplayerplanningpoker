import React, { Component } from 'react'
import { BrowserRouter as Switch, Route } from "react-router-dom"
import './Styles/App.css'
import GameRoom from './Components/GameRoom'
import './Styles/GameRoom.css'
import LoginPage from './Components/LoginPage'
import './Styles/LoginPage.css'

class App extends Component {
   render () {
    return (
      <div>
        <Switch>
          <Route path='/GameRoom'>
            <GameRoom />
            </Route>
          <Route path='/'>
            <LoginPage />
            </Route>
        </Switch>
      </div>
    );
  }
}

export default App;