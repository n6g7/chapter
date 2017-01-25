import { call, put, takeEvery } from 'redux-saga/effects';
import {
  types,
  addBookSuccess,
  addBookFailure,
  updateBookSuccess,
  updateBookFailure,
} from '../reducers/library.action';
import { book as bookApi } from '../../firebase';

const transform = book => ({
  author: book.get('author'),
  cover: {
    colour: book.getIn(['cover', 'colour']),
    image: book.getIn(['cover', 'image'])
  },
  endDate: book.get('endDate'),
  ISBN: book.get('ISBN'),
  progress: book.get('progress'),
  startDate: book.get('startDate'),
  state: book.get('state'),
  title: book.get('title')
});

function* createBookSaga({ book }) {
  try {
    const result = yield call(bookApi.create, transform(book));
    yield put(addBookSuccess(book.set('bid', result.key)));
  }
  catch (error) {
    yield put(addBookFailure(error));
  }
}

function* updateBookSaga({ book }) {
  try {
    yield call(bookApi.update, book.get('bid'), transform(book));
    yield put(updateBookSuccess(book));
  }
  catch (error) {
    yield put(updateBookFailure(error));
  }
}

export function* watchBook() {
  yield takeEvery(types.ADD_BOOK.REQUEST, createBookSaga);
  yield takeEvery(types.UPDATE_BOOK.REQUEST, updateBookSaga);
}
