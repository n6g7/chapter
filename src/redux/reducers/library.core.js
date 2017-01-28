export function addBook(state, book) {
  return state.update('books', books => books.push(book));
}

export function updateBook(state, book) {
  const bid = book.get('bid');
  const books = state.getIn(['books']);
  const index = books.findKey(bk => bk.get('bid') === bid);

  return state.set('books', books.set(index, book));
}

export function removeBook(state, book) {
  const books = state.getIn(['books']);
  const index = books.findKey(bk => bk === book);

  return state.set('books', books.delete(index));
}
