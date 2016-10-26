import React from 'react';
import { Router, Route } from 'react-router';
import { history } from './redux/store';
import App from './App';
import { SignUpContainer } from './modules';

export default (
  <Router history={history}>
    <Route path="/" component={App}>
      <Route path="/signup" component={SignUpContainer} />
    </Route>
  </Router>
);
