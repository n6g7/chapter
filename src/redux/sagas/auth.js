import { call, put, take, takeEvery } from 'redux-saga/effects'
import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  saveUser
} from '../reducers/user.action'
import { notifyError } from '../reducers/notifications.action'
import rsf, { authProvider } from '../rsf'

function * loginSaga () {
  try {
    yield call(rsf.auth.signInWithPopup, authProvider)
  } catch (error) {
    yield put(loginFailure(error))
    yield put(notifyError('Error during login', error.message))
  }
}

function * logoutSaga () {
  try {
    yield call(rsf.auth.signOut)
  } catch (error) {
    yield put(logoutFailure(error))
    yield put(notifyError('Error during logout', error.message))
  }
}

function * syncUserSaga () {
  const channel = yield call(rsf.auth.channel)

  while (true) {
    const { user } = yield take(channel)

    if (user) {
      yield put(loginSuccess(user))
      yield put(saveUser(user))
    } else {
      yield put(logoutSuccess())
    }
  }
}

export function * watchLogin () {
  yield takeEvery(types.LOGIN.REQUEST, loginSaga)
  yield takeEvery(types.LOGOUT.REQUEST, logoutSaga)
  yield syncUserSaga()
}
