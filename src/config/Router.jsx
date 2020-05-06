import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Error from '../views/Error/Error';
import Homepage from '../views/Homepage/Homepage';

function AppRouter() {
  return <HashRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />

      <Route component={Error} />
    </Switch>
  </HashRouter>;
}

export default AppRouter;
