export function setState(state) {
  return {
    type: 'SET_STATE',
    state
  };
}

export function addBook(book) {
  return {
    type: 'ADD_BOOK',
    book
  };
}

export function updateBook(book) {
  return {
    type: 'UPDATE_BOOK',
    book
  }
}

export function removeBook(book) {
  return {
    type: 'REMOVE_BOOK',
    book
  }
}
