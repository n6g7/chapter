import { call, put, takeEvery } from 'redux-saga/effects'
import {
  types,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  saveUser
} from '../reducers/user.action'
import { notifyError } from '../reducers/notifications.action'
import { auth } from '../../services/firebase'

export function * login () {
  try {
    yield call(auth.login)
  } catch (error) {
    yield put(loginFailure(error))
    yield put(notifyError('Error during login', error.message))
  }
}

export function * logout () {
  try {
    yield call(auth.logout)
  } catch (error) {
    yield put(logoutFailure(error))
    yield put(notifyError('Error during logout', error.message))
  }
}

export function * listenForChange () {
  const channel = auth.authChannel()

  while (true) {
    try {
      const user = yield call(channel)

      if (user) {
        yield put(loginSuccess(user))
        yield put(saveUser(user))
      } else yield put(logoutSuccess())
    } catch (error) {
      yield put(notifyError('Error during login/logout', error.message))
    }
  }
}

export function * watchLogin () {
  yield takeEvery(types.LOGIN.REQUEST, login)
  yield takeEvery(types.LOGOUT.REQUEST, logout)
  yield listenForChange()
}
