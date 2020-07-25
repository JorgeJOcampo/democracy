import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Poll from 'pages/Poll';
import Results from './pages/Results';
import CreatePoll from './pages/CreatePoll';
import Polls from './pages/Polls';

export default () => (
  <Router>
    <div>
      <Switch>
        <Route path="/results/:id">
          <Results />
        </Route>
        <Route path="/polls/:id">
          <Poll />
        </Route>
        <Route path="/polls">
          <Polls />
        </Route>
        <Route path="/create-poll">
          <CreatePoll />
        </Route>
        <Route path="/">
          <Polls />
        </Route>
      </Switch>
    </div>
  </Router>
);
