export const types = {
  ADD_BOOK: 'ADD_BOOK',
  UPDATE_BOOK: 'UPDATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
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
