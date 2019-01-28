import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';

import Footer from './components/Footer';

import './config/reactotron';
import store from './store';

import Routes from './routes';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <GlobalStyles />
      <Routes />

      <Footer />
    </Fragment>
  </Provider>
);

export default App;
