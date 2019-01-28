import { combineReducers } from 'redux';

import favorites from './favorites';
import signup from './signup';
import login from './login';

export default combineReducers({
  favorites,
  signup,
  login
});
