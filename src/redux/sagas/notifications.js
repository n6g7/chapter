import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'
import {
  types,
  removeNotification
} from '../reducers/notifications.action'

export function * removeNotificationSaga ({ uuid }) {
  yield delay(5000)
  yield put(removeNotification(uuid))
}

export function * watchNotifications () {
  yield takeEvery(types.ADD_NOTIFICATION, removeNotificationSaga)
}
