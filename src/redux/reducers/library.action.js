export const types = {
  ADD_BOOK: 'ADD_BOOK',
  UPDATE_BOOK: 'UPDATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
  IMPORT_STATE: 'IMPORT_STATE'
};

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
