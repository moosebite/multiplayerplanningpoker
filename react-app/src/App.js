import React from 'react'
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter as Switch, Route } from "react-router-dom"
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
>>>>>>> c8b18a090828e02f9106ccb1b2aa21ee1fdb3c5a
=======
import { Switch, Route } from "react-router-dom"
>>>>>>> 1b97a86fb536cc71d111a9eb9a1e9a3bb5fb96c0
import './Styles/App.css'
import GameRoom from './Components/GameRoom'
import './Styles/GameRoom.css'
import LoginPage from './Components/LoginPage'
import './Styles/LoginPage.css'
<<<<<<< HEAD

class App extends React.Component {
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
=======
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
>>>>>>> c8b18a090828e02f9106ccb1b2aa21ee1fdb3c5a
