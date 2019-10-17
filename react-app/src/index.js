<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import './index.css'
import App from './App'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
=======
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
>>>>>>> c8b18a090828e02f9106ccb1b2aa21ee1fdb3c5a
