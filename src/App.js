import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Vote from 'components/vote';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
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
}
