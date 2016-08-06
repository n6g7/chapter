import {List, Map, fromJS} from 'immutable';
import uuid from 'uuid';

export const INITIAL_STATE = fromJS({
  library: {
    books: []
  }
});

export function addBook(state, book) {
  if(!book.has('uuid')) {
    book = book.set('uuid', uuid.v4());
  }

  const books = state.getIn(['library', 'books'], List()).push(book);

  return state.merge({
    library: { books }
  });
}

export function updateBook(state, book) {
  const uuid = book.get('uuid');
  const books = state.getIn(['library', 'books']);
  const index = books.findKey(bk => bk.get('uuid') === uuid);

  return state.merge({
    library: {
      books: books.set(index, book)
    }
  });
}

export function removeBook(state, book) {
  const books = state.getIn(['library', 'books']);
  const index = books.findKey(bk => bk === book);

  return state.merge({
    library: {
      books: books.delete(index)
    }
  });
}

export function importState(state, imported) {
  let importedState = fromJS(imported);

  if (importedState.has('books')) {
    importedState = Map({
      library: importedState
    });
  }

  return importedState.updateIn(['library', 'books'], books => {
    return books.map(book => {
      return book.merge({
        uuid: uuid.v4()
      });
    });
  });
}
