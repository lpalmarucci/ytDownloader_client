import React from 'react';
import ReactDOM from 'react-dom';
import Download from './Download';
import Login from './components/Login';
import Register from './components/Register.js';
import './css/media.css';
import './css/index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Download} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
