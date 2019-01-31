import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';

import './config/reactotron';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyles />
      <Routes />
    </Fragment>
  </Provider>
);

export default App;
