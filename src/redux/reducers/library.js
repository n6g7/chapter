import { fromJS } from 'immutable';
import { types } from './library.action';
import {
  addBook,
  updateBook,
  removeBook,
} from './library.core';

const initialState = fromJS({
  books: []
});

export default function(state = initialState, action) {
  switch(action.type) {
    case types.ADD_BOOK:
      return addBook(state, action.book);
    case types.UPDATE_BOOK:
      return updateBook(state, action.book);
    case types.REMOVE_BOOK:
      return removeBook(state, action.book);
  }

  return state;
}
