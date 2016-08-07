import { Map } from 'immutable';
import states from '../config/bookStates';

export function newBook(state = states.stock) {
  return Map({
    state
  });
}
