import { List, fromJS } from 'immutable';
import uuid from 'uuid';

export function addBook(state, book) {
  if(!book.has('uuid') || !book.get('uuid')) {
    book = book.set('uuid', uuid.v4());
  }

  const books = state.getIn(['books'], List()).push(book);

  return state.merge({
    books
  });
}

export function updateBook(state, book) {
  const uuid = book.get('uuid');
  const books = state.getIn(['books']);
  const index = books.findKey(bk => bk.get('uuid') === uuid);

  return state.merge({
    books: books.set(index, book)
  });
}

export function removeBook(state, book) {
  const books = state.getIn(['books']);
  const index = books.findKey(bk => bk === book);

  return state.merge({
    books: books.delete(index)
  });
}

export function importState(state, imported) {
  const importedState = fromJS(imported);

  return importedState.updateIn(['books'], books => {
    return books.map(book => {
      return book.merge({
        uuid: uuid.v4()
      });
    });
  });
}
