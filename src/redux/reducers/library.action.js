export const types = {
  ADD_BOOK: {
    REQUEST: 'ADD_BOOK.REQUEST',
    SUCCESS: 'ADD_BOOK.SUCCESS',
    FAILURE: 'ADD_BOOK.FAILURE'
  },
  UPDATE_BOOK: {
    REQUEST: 'UPDATE_BOOK.REQUEST',
    SUCCESS: 'UPDATE_BOOK.SUCCESS',
    FAILURE: 'UPDATE_BOOK.FAILURE'
  },
  LOAD_BOOKS: {
    REQUEST: 'LOAD_BOOKS.REQUEST',
    SUCCESS: 'LOAD_BOOKS.SUCCESS',
    FAILURE: 'LOAD_BOOKS.FAILURE'
  },
  REMOVE_BOOK: {
    REQUEST: 'REMOVE_BOOK.REQUEST',
    SUCCESS: 'REMOVE_BOOK.SUCCESS',
    FAILURE: 'REMOVE_BOOK.FAILURE'
  }
}

export const addBook = book => ({
  type: types.ADD_BOOK.REQUEST,
  book
})
export const addBookSuccess = book => ({
  type: types.ADD_BOOK.SUCCESS,
  book
})
export const addBookFailure = error => ({
  type: types.ADD_BOOK.FAILURE,
  error
})

export const updateBook = book => ({
  type: types.UPDATE_BOOK.REQUEST,
  book
})
export const updateBookSuccess = book => ({
  type: types.UPDATE_BOOK.SUCCESS,
  book
})
export const updateBookFailure = error => ({
  type: types.UPDATE_BOOK.FAILURE,
  error
})

export const loadBooks = () => ({
  type: types.LOAD_BOOKS.REQUEST
})
export const loadBooksSuccess = books => ({
  type: types.LOAD_BOOKS.SUCCESS,
  books
})
export const loadBooksFailure = error => ({
  type: types.LOAD_BOOKS.FAILURE,
  error
})

export const removeBook = (book) => ({
  type: types.REMOVE_BOOK.REQUEST,
  book
})
export const removeBookSuccess = (book) => ({
  type: types.REMOVE_BOOK.SUCCESS,
  book
})
export const removeBookFailure = (error) => ({
  type: types.REMOVE_BOOK.FAILURE,
  error
})
