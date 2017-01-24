import { call, put, takeEvery } from 'redux-saga/effects';
import { types, loginSuccess, loginFailure, saveUser } from '../reducers/user.action';
import { auth } from '../../firebase';

export function* login() {
  try {
    const user = yield call(auth.login);
    yield put(loginSuccess(user));
    yield put(saveUser(user));
  }
  catch (error) {
    yield put(loginFailure(error));
  }
}

export function* watchLogin() {
  yield takeEvery(types.LOGIN.REQUEST, login);
}
