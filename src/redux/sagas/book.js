import { call, put, select, takeEvery } from 'redux-saga/effects'
import {
  types,
  addBookSuccess,
  addBookFailure,
  updateBookSuccess,
  updateBookFailure,
  loadBooks,
  loadBooksSuccess,
  loadBooksFailure,
  removeBookSuccess,
  removeBookFailure
} from '../reducers/library.action'
import { types as userTypes } from '../reducers/user.action'
import { notifyError } from '../reducers/notifications.action'
import { book as bookTransformer } from '../../services/transformers'
import rsf from '../rsf'

function * createBookSaga ({ book }) {
  const uid = yield select(state => state.getIn(['user', 'uid']))

  try {
    const key = yield call(
      rsf.database.create,
      `books/${uid}`,
      bookTransformer.serialize(book)
    )
    yield put(addBookSuccess(book.set('bid', key)))
  } catch (error) {
    yield put(addBookFailure(error))
    yield put(notifyError('Error while creating book', error.message))
  }
}

function * updateBookSaga ({ book }) {
  const uid = yield select(state => state.getIn(['user', 'uid']))

  try {
    yield call(
      rsf.database.update,
      `books/${uid}/${book.get('bid')}`,
      bookTransformer.serialize(book)
    )
    yield put(updateBookSuccess(book))
  } catch (error) {
    yield put(updateBookFailure(error))
    yield put(notifyError('Error while updating book', error.message))
  }
}

function * deleteBookSaga ({ book }) {
  const uid = yield select(state => state.getIn(['user', 'uid']))

  try {
    yield call(
      rsf.database.delete,
      `books/${uid}/${book.get('bid')}`
    )
    yield put(removeBookSuccess(book))
  } catch (error) {
    yield put(removeBookFailure(error))
    yield put(notifyError('Error while deleting book', error.message))
  }
}

function * loadBooksSaga () {
  const uid = yield select(state => state.getIn(['user', 'uid']))

  try {
    const list = yield call(
      rsf.database.read,
      `books/${uid}`
    )
    yield put(loadBooksSuccess(bookTransformer.parseList(list)))
  } catch (error) {
    yield put(loadBooksFailure(error))
    yield put(notifyError('Error while loading books', error.message))
  }
}

export function * watchBook () {
  yield takeEvery(types.ADD_BOOK.REQUEST, createBookSaga)
  yield takeEvery(types.UPDATE_BOOK.REQUEST, updateBookSaga)
  yield takeEvery(types.LOAD_BOOKS.REQUEST, loadBooksSaga)
  yield takeEvery(types.REMOVE_BOOK.REQUEST, deleteBookSaga)

  // Load books on login
  yield takeEvery(userTypes.LOGIN.SUCCESS, function * () {
    yield put(loadBooks())
  })
}
