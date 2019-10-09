import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './Styles/App.css'
import GameRoom from './Components/GameRoom'
import './Styles/GameRoom.css'
import LoginPage from './Components/LoginPage'
import './Styles/LoginPage.css'
//import { isObjectExpression } from '@babel/types';

function App() {
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

export default App;

//var username = prompt('Please tell me your name');
//socket.emit('username', username);
//import openSocket from 'socket.io-client';
//const socket = openSocket(myURL);