import { fromJS } from 'immutable';
import { types } from './library.action';
import {
  addBook,
  updateBook,
  removeBook,
} from './library.core';

const initialState = fromJS({
  books: [],
  loading: false,
});

export default function(state = initialState, action) {
  switch(action.type) {
    case types.ADD_BOOK.REQUEST:
      return state.set('loading', true);
    case types.ADD_BOOK.SUCCESS:
      return addBook(state, action.book).set('loading', false);
    case types.ADD_BOOK.FAILURE:
      return state.set('loading', false);
    case types.UPDATE_BOOK:
      return updateBook(state, action.book);
    case types.REMOVE_BOOK:
      return removeBook(state, action.book);
  }

  return state;
}
