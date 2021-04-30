import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SignIn from './views/SignIn.js';
import SignUp from './views/SignUp.js';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

var hist = createBrowserHistory();
ReactDOM.render(

  <Router history={hist}>
  <Switch>
    <Route path="/sign-in" component={SignIn} />
    <Route path="/sign-up" component={SignUp} />
    <Route path="/" component={SignIn} />
  </Switch>
</Router>,
  document.getElementById('root')
);

