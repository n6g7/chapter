export const types = {
  ADD_BOOK: {
    REQUEST: 'ADD_BOOK.REQUEST',
    SUCCESS: 'ADD_BOOK.SUCCESS',
    FAILURE: 'ADD_BOOK.FAILURE',
  },
  UPDATE_BOOK: {
    REQUEST: 'UPDATE_BOOK.REQUEST',
    SUCCESS: 'UPDATE_BOOK.SUCCESS',
    FAILURE: 'UPDATE_BOOK.FAILURE',
  },
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

export const updateBook = book => ({
  type: types.UPDATE_BOOK.REQUEST,
  book
});
export const updateBookSuccess = book => ({
  type: types.UPDATE_BOOK.SUCCESS,
  book
});
export const updateBookFailure = error => ({
  type: types.UPDATE_BOOK.FAILURE,
  error
});

export const removeBook = (book) => ({
  type: types.REMOVE_BOOK,
  book
});
