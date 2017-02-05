import { call, put, takeEvery } from 'redux-saga/effects';
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
  removeBookFailure,
} from '../reducers/library.action';
import { types as userTypes } from '../reducers/user.action';
import { notifyError } from '../reducers/notifications.action';
import { book as bookApi } from '../../services/firebase';
import { book as bookTransformer } from '../../services/transformers';

function* createBookSaga({ book }) {
  try {
    const result = yield call(bookApi.create, bookTransformer.serialize(book));
    yield put(addBookSuccess(book.set('bid', result.key)));
  }
  catch (error) {
    yield put(addBookFailure(error));
    yield put(notifyError('Error while creating book', error.message));
  }
}

function* updateBookSaga({ book }) {
  try {
    yield call(bookApi.update, book.get('bid'), bookTransformer.serialize(book));
    yield put(updateBookSuccess(book));
  }
  catch (error) {
    yield put(updateBookFailure(error));
    yield put(notifyError('Error while updating book', error.message));
  }
}

function* deleteBookSaga({ book }) {
  try {
    yield call(bookApi.delete, book.get('bid'));
    yield put(removeBookSuccess(book));
  }
  catch (error) {
    yield put(removeBookFailure(error));
    yield put(notifyError('Error while deleting book', error.message));
  }
}

function* loadBooksSaga() {
  try {
    const list = yield call(bookApi.list);
    yield put(loadBooksSuccess(bookTransformer.parseList(list)));
  }
  catch (error) {
    yield put(loadBooksFailure(error));
    yield put(notifyError('Error while loading books', error.message));
  }
}

export function* watchBook() {
  yield takeEvery(types.ADD_BOOK.REQUEST, createBookSaga);
  yield takeEvery(types.UPDATE_BOOK.REQUEST, updateBookSaga);
  yield takeEvery(types.LOAD_BOOKS.REQUEST, loadBooksSaga);
  yield takeEvery(types.REMOVE_BOOK.REQUEST, deleteBookSaga);

  // Load books on login
  yield takeEvery(userTypes.LOGIN.SUCCESS, function*() {
    yield put(loadBooks());
  });
}
