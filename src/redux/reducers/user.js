import { fromJS } from 'immutable';
import { types } from './user.action';

const initialState = fromJS({
  email: '',
  loading: false,
  loggedIn: false,
  name: '',
  uid: '',
});

export default function(state = initialState, action) {
  switch(action.type) {
    case types.LOGIN.REQUEST:
      return state.set('loading', true);
    case types.LOGIN.SUCCESS:
      return state.merge({
        email: action.user.email,
        loading: false,
        loggedIn: true,
        name: action.user.displayName,
        uid: action.user.uid,
      });
    case types.LOGIN.FAILURE:
      return state.set('loading', true);
  }

  return state;
}
