import {List, fromJS} from 'immutable';
import uuid from 'uuid';

export const INITIAL_STATE = fromJS({
  library: {
    books: []
  }
});

export function setState(state, newState) {
  return state.merge(newState);
}

export function addBook(state, book) {
  if(!book.has('uuid')) {
    book = book.set('uuid', uuid.v4());
  }

  const books = state.getIn(['library', 'books'], List()).concat([book]);

  return state.merge({
    library: { books }
  });
}
