import React from 'react'
import { Switch, Route } from "react-router-dom"
import './Styles/App.css'
import GameRoom from './Components/GameRoom'
import './Styles/GameRoom.css'
import LoginPage from './Components/LoginPage'
import './Styles/LoginPage.css'
import DataService from './Utils/DataService'
import io from 'socket.io-client';

class App extends React.Component {

  DataObject = () => {
    const socket = io('http://localhost:8080');
    var data = new DataService(socket);
    return data;
  }
  data = this.DataObject();
   render () {
    return (
      <div>
        <Switch>
          <Route path='/GameRoom'>
            <GameRoom data = {this.data} />
            </Route>
          <Route path='/'>
            <LoginPage data = {this.data} />
            </Route>
        </Switch>
      </div>
    );
  }
}

export default App;