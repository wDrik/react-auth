import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// import Footer from '../components/Footer';
// import Sidebar from '../components/Sidebar';

import { Layout } from '../styles/components';
import { Content } from '../styles/components';

import { isAuthenticated, isAdmin } from '../services/auth';


import Dashboard from '../pages/dashboard';
import DashboardAdmin from '../pages/dashboard-admin';
import Login from '../pages/login';
import SignUp from '../pages/signup';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ props =>
      (isAuthenticated() && !isAdmin())? (
        <Component { ...props } />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    { ...rest }
    render={ props =>
      (isAuthenticated() && isAdmin()) ? (
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
      <Layout>
        <Content>
          <Switch>
            <PrivateRoute path="/dashboard" component={ Dashboard } />

            <AdminRoute path="/dashboard-admin" component={ DashboardAdmin } />

            <Route exact path='/' component={ Login } />
            <Route path='/signup' component={ SignUp } />
            <Route path='*' component={ () => <h1>Page not found</h1> } />
          </Switch>
        </Content>
      </Layout>
    </Fragment>
  </BrowserRouter>
);

export default Routes;
