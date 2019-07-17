import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './NonAuthenticated/Home';
import SignUp from './NonAuthenticated/SignUp';
import SignIn from './NonAuthenticated/SignIn'
import Products from './NonAuthenticated/Products';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/products" component={Products} />
    </Switch>
  );
}

export default Routes;