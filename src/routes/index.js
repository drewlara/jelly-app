import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppAppBar from 'views/AppAppBar';
import AppFooter from 'views/AppFooter';
import Home from './NonAuthenticated/Home';
import SignUp from './NonAuthenticated/SignUp';
import SignIn from './NonAuthenticated/SignIn'
import Products from './NonAuthenticated/Products';
import Profile from './Authenticated/Profile';

const Routes = () => {
  return (
    <React.Fragment>
      <AppAppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
      <AppFooter />
    </React.Fragment>
  );
}

export default Routes;