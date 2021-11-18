import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login'
import './css/media.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);
