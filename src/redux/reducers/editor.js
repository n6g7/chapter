import { fromJS } from 'immutable';
import states from '../../config/bookStates';

export const types = {
  SET_FIELD: 'SET_EDITOR_FIELD',
  SET_COVER_FIELD: 'SET_EDITOR_COVER_FIELD',
  RESET: 'RESET_EDITOR'
};

const initialState = fromJS({
  author: '',
  bid: '',
  cover: {
    colour: '',
    image: ''
  },
  endDate: '',
  ISBN: '',
  progress: 0,
  startDate: '',
  state: states.stock,
  title: '',
});


export default function(state = initialState, action) {
  switch(action.type) {
    case types.SET_FIELD:
      return state.set(action.field, action.value);
    case types.SET_COVER_FIELD:
      return state.setIn(['cover', action.field], action.value);
    case types.RESET:
      return action.book ? action.book : initialState;
  }

  return state;
}
