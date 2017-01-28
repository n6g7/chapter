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
} from '../reducers/library.action';
import { types as userTypes } from '../reducers/user.action';
import { book as bookApi } from '../../firebase';
import { book as bookTransformer } from '../../services/transformers';

function* createBookSaga({ book }) {
  try {
    const result = yield call(bookApi.create, bookTransformer.serialize(book));
    yield put(addBookSuccess(book.set('bid', result.key)));
  }
  catch (error) {
    yield put(addBookFailure(error));
  }
}

function* updateBookSaga({ book }) {
  try {
    yield call(bookApi.update, book.get('bid'), bookTransformer.serialize(book));
    yield put(updateBookSuccess(book));
  }
  catch (error) {
    yield put(updateBookFailure(error));
  }
}

function* loadBooksSaga() {
  try {
    const list = yield call(bookApi.list);
    yield put(loadBooksSuccess(bookTransformer.parseList(list)));
  }
  catch (error) {
    yield put(loadBooksFailure(error));
  }
}

export function* watchBook() {
  yield takeEvery(types.ADD_BOOK.REQUEST, createBookSaga);
  yield takeEvery(types.UPDATE_BOOK.REQUEST, updateBookSaga);
  yield takeEvery(types.LOAD_BOOKS.REQUEST, loadBooksSaga);

  // Load books on login
  yield takeEvery(userTypes.LOGIN.SUCCESS, function*() {
    yield put(loadBooks());
  });
}
