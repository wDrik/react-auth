import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavoriteTypes }  from '../ducks/favorites';
import { Types as SignUpTypes }  from '../ducks/signup';

import { addFavorite } from './favorites';
import { signUp } from './signup';

export default function* rootSaga() {
  yield all([
    takeLatest(FavoriteTypes.REQUEST, addFavorite),
    takeLatest(SignUpTypes.REQUEST, signUp),
  ])
}
