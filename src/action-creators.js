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
