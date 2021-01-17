import React from 'react';
import history from "./history";
import { Router, Route, Switch } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import './vibe/scss/styles.scss';

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={DashboardLayout} />
      </Switch>
    </Router>
  );
}
