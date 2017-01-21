import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = fromJS({
  locationBeforeTransitions: null
});

export default function(state = initialState, action) {
  switch(action.type) {
    case LOCATION_CHANGE:
      return state.set('locationBeforeTransitions', action.payload);
  }

  return state;
}
