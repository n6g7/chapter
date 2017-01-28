import { call, put, takeEvery } from 'redux-saga/effects';
import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  saveUser
} from '../reducers/user.action';
import { auth } from '../../firebase';

export function* login() {
  try {
    const user = yield call(auth.login);
    yield put(saveUser(user));
  }
  catch (error) {
    yield put(loginFailure(error));
  }
}

export function* listenForChange() {
  const channel = auth.authChannel();

  while(true) {
    try {
      const user = yield call(channel);

      if (user) yield put(loginSuccess(user));
      else yield put(logoutSuccess());
    }
    catch(error) {
      console.error(error);
    }
  }
}

export function* watchLogin() {
  yield takeEvery(types.LOGIN.REQUEST, login);
  yield listenForChange();
}
