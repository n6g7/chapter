import { fromJS } from 'immutable';
import states from '../../config/bookStates';

export const types = {
  SET_FIELD: 'SET_EDITOR_FIELD',
  RESET: 'RESET_EDITOR'
};

const initialState = fromJS({
  author: '',
  endDate: '',
  ISBN: '',
  progress: 0,
  startDate: '',
  state: states.stock,
  title: '',
  uuid: ''
});


export default function(state = initialState, action) {
  switch(action.type) {
    case types.SET_FIELD:
      return state.set(action.field, action.value);
    case types.RESET:
      return action.book ? action.book : initialState;
  }

  return state;
}
