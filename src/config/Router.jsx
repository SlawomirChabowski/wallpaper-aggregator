import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Error from '../views/Error/Error';
import Homepage from '../views/Homepage/Homepage';
import React from 'react';

function Router() {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />

      <Route path="**" component={Error} />
    </Switch>
  </BrowserRouter>
};

export default Router;
