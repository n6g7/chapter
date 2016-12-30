import { types } from './library';

export const addBook = (book) => ({
  type: types.ADD_BOOK,
  book
});

export const updateBook = (book) => ({
  type: types.UPDATE_BOOK,
  book
});

export const removeBook = (book) => ({
  type: types.REMOVE_BOOK,
  book
});

export const importState = (importedState) => ({
  type: types.IMPORT_STATE,
  importedState
});
