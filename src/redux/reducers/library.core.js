import uuid from 'uuid';

export function addBook(state, book) {
  if(!book.has('uuid') || !book.get('uuid')) {
    book = book.set('uuid', uuid.v4());
  }

  return state.update('books', books => books.push(book));
}

export function updateBook(state, book) {
  const uuid = book.get('uuid');
  const books = state.getIn(['books']);
  const index = books.findKey(bk => bk.get('uuid') === uuid);

  return state.set('books', books.set(index, book));
}

export function removeBook(state, book) {
  const books = state.getIn(['books']);
  const index = books.findKey(bk => bk === book);

  return state.set('books', books.delete(index));
}
