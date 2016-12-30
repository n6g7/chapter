import { fromJS } from 'immutable';
import {
  addBook,
  updateBook,
  removeBook,
  importState
} from './library.core';

export const types = {
  ADD_BOOK: 'ADD_BOOK',
  UPDATE_BOOK: 'UPDATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  IMPORT_STATE: 'IMPORT_STATE'
};

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
    case types.IMPORT_STATE:
      return importState(state, action.importedState);
  }

  return state;
}
