import { combineReducers } from 'redux';

import favorites from './favorites';
import signup from './signup';

export default combineReducers({
  favorites,
  signup
});
