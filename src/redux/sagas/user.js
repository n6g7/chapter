import { call, put, takeEvery } from 'redux-saga/effects';
import {
  types,
  saveUserSuccess,
  saveUserFailure
} from '../reducers/user.action';
import { notifyError } from '../reducers/notifications.action';
import { user } from '../../firebase';

function* saveUser(action) {
  const { email, displayName } = action.user;

  try {
    yield call(user.save, action.user.uid, { email, name: displayName });
    yield put(saveUserSuccess());
  }
  catch (error) {
    yield put(saveUserFailure(error));
    yield put(notifyError('Error while saving user data', error.message));
  }
}

export function* watchSaveUser() {
  yield takeEvery(types.SAVE_USER.REQUEST, saveUser);
}
