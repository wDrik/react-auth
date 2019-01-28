import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { isAuthenticated } from '../services/auth';

import Main from '../pages/main';
import Login from '../pages/login';
import SignUp from '../pages/signup';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ props =>
      isAuthenticated() ? (
        <Component { ...props } />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route exact path='/' component={ Login } />
        <Route path='/signup' component={ SignUp } />
        <PrivateRoute path="/dashboard" component={ Main } />
        <Route path='*' component={ () => <h1>Page not found</h1> } />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
