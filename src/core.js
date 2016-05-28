import {List, fromJS} from 'immutable';

export const INITIAL_STATE = fromJS({
  library: {
    books: []
  }
});

export function setState(state, newState) {
  return state.merge(newState);
}

export function addBook(state, book) {
  const books = state.getIn(['library', 'books'], List()).concat([book]);

  return state.merge({
    library: { books }
  });
}
