import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Vote from 'components/vote';
import Results from './pages/Results';

export default () => (
  <Router>
    <div>
      <Switch>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/vote">
          <Vote />
        </Route>
        <Route path="/">
          <Vote />
        </Route>
      </Switch>
    </div>
  </Router>
);
