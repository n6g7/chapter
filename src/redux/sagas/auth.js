import { call, put, takeEvery } from 'redux-saga/effects';
import { types, loginSuccess, loginFailure } from '../reducers/user.action';
import { auth } from '../../firebase';

export function* login() {
  try {
    const user = yield call(auth.login);
    yield put(loginSuccess(user));
  }
  catch (error) {
    yield put(loginFailure());
  }
}

export function* watchLogin() {
  yield takeEvery(types.LOGIN.REQUEST, login);
}
