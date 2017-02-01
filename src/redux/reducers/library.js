import { fromJS } from 'immutable';
import { types } from './library.action';
import { types as userTypes } from './user.action';
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
    case types.UPDATE_BOOK.REQUEST:
    case types.LOAD_BOOKS.REQUEST:
      return state.set('loading', true);
    case types.ADD_BOOK.FAILURE:
    case types.UPDATE_BOOK.FAILURE:
    case types.LOAD_BOOKS.FAILURE:
      return state.set('loading', false);

    case types.ADD_BOOK.SUCCESS:
      return addBook(state, action.book).set('loading', false);
    case types.UPDATE_BOOK.SUCCESS:
      return updateBook(state, action.book).set('loading', false);
    case types.LOAD_BOOKS.SUCCESS:
      return state.set('books', action.books).set('loading', false);

    case types.REMOVE_BOOK:
      return removeBook(state, action.book);

    case userTypes.LOGOUT.SUCCESS:
      return initialState;
  }

  return state;
}
