import { call, put, takeEvery } from 'redux-saga/effects'
import {
  types,
  saveUserSuccess,
  saveUserFailure
} from '../reducers/user.action'
import { notifyError } from '../reducers/notifications.action'
import rsf from '../rsf'

function * saveUser (action) {
  const { email, displayName, photoURL } = action.user

  const [ firstName, lastName ] = displayName.split(' ', 2)

  try {
    yield call(
      rsf.database.update,
      `users/${action.user.uid}`,
      {
        email,
        firstName,
        lastName,
        photo: photoURL
      }
    )
    yield put(saveUserSuccess())
  } catch (error) {
    yield put(saveUserFailure(error))
    yield put(notifyError('Error while saving user data', error.message))
  }
}

export function * watchSaveUser () {
  yield takeEvery(types.SAVE_USER.REQUEST, saveUser)
}
