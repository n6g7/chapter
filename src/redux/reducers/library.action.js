export const types = {
  ADD_BOOK: {
    REQUEST: 'ADD_BOOK.REQUEST',
    SUCCESS: 'ADD_BOOK.SUCCESS',
    FAILURE: 'ADD_BOOK.FAILURE',
  },
  UPDATE_BOOK: 'UPDATE_BOOK',
  REMOVE_BOOK: 'REMOVE_BOOK',
};

export const addBook = book => ({
  type: types.ADD_BOOK.REQUEST,
  book
});
export const addBookSuccess = book => ({
  type: types.ADD_BOOK.SUCCESS,
  book
});
export const addBookFailure = error => ({
  type: types.ADD_BOOK.FAILURE,
  error
});

export const updateBook = (book) => ({
  type: types.UPDATE_BOOK,
  book
});

export const removeBook = (book) => ({
  type: types.REMOVE_BOOK,
  book
});
