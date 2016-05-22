import {INITIAL_STATE, setState, addBook} from './core';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'ADD_BOOK':
      return addBook(state, action.book);
  }

  return state;
}
