import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Poll from 'pages/Poll';
import Results from './components/Results';
import CreatePoll from './pages/CreatePoll';
import Polls from './pages/Polls';

export default () => (
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
);
