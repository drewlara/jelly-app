import React from 'react';
import {Route, Switch} from 'react-router-dom';

import BaseView from '../components/BaseView';
import LoginView from '../components/LoginView';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={BaseView} />
      <Route exact path="/login" component={LoginView} />
    </Switch>
  );
}

export default Routes;