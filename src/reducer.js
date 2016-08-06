import {INITIAL_STATE, addBook, updateBook, removeBook, importState} from './core';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_BOOK':
      return addBook(state, action.book);
    case 'UPDATE_BOOK':
      return updateBook(state, action.book);
    case 'REMOVE_BOOK':
      return removeBook(state, action.book);
    case 'IMPORT_STATE':
      return importState(state, action.importedState);
  }

  return state;
}
