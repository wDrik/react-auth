import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { login } from "../../services/auth";

import { Creators as SignUpActions } from '../ducks/signup';

export function* signUp(action) {
  try {
    const { user: { name, email, password } } = action.payload;
    const { history } = action.payload;

    const { data } = yield call(api.post, `/auth/register`, { name, email, password });

    yield login(data.token);

    yield put(SignUpActions.signUpSuccess(data));

    history.push('/dashboard');
  } catch(err) {
    yield put(SignUpActions.signUpFailure('Usuário já cadastrado!'));
  }
}
