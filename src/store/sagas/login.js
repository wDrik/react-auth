import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { login } from "../../services/auth";

import { Creators as LoginActions } from '../ducks/login';

export function* loginSaga(action) {
  try {
    const { user: { email, password } } = action.payload;
    const { history } = action.payload;

    const { data } = yield call(api.post, `/auth/authenticate`, { email, password });

    yield login(data.token);

    yield put(LoginActions.loginSuccess(data));

    history.push('/dashboard');
  } catch(err) {
    yield put(LoginActions.loginFailure('Erro ao fazer login!!'));
  }
}
