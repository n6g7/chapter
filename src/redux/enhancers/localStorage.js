import { fromJS } from 'immutable';
import persistState from 'redux-localstorage';

export default persistState('', {
  merge: (initialState, persistedState) => {
    initialState = initialState || fromJS({});
    persistedState = fromJS(persistedState);
    return initialState.merge(persistedState);
  }
})
