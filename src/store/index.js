import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers';

const createApproprioateStore = 
  process.env.NODE_ENV === 'development' ? 
  console.tron.createStore : 
  createStore;

const store = createApproprioateStore(reducers, compose(applyMiddleware(...[])));

export default store;