import { all, takeLatest } from 'redux-saga/effects';

import { Types as FavoriteTypes }  from '../ducks/favorites';
import { Types as SignUpTypes }  from '../ducks/signup';
import { Types as LoginTypes }  from '../ducks/login';

import { addFavorite } from './favorites';
import { signUpSaga } from './signup';
import { loginSaga } from './login';

export default function* rootSaga() {
  yield all([
    takeLatest(FavoriteTypes.REQUEST, addFavorite),
    takeLatest(SignUpTypes.REQUEST, signUpSaga),
    takeLatest(LoginTypes.REQUEST, loginSaga),
  ])
}
