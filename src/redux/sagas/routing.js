import { push } from 'react-router-redux'
import { put, takeEvery } from 'redux-saga/effects'
import { types as libraryTypes } from '@actions/library'

const redirectTo = path => function * () {
  yield put(push(path))
}

export function * routing () {
  yield [
    takeEvery(libraryTypes.ADD_BOOK.SUCCESS, redirectTo('/')),
    takeEvery(libraryTypes.UPDATE_BOOK.SUCCESS, redirectTo('/')),
    takeEvery(libraryTypes.REMOVE_BOOK.SUCCESS, redirectTo('/'))
  ]
}
