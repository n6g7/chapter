import { fromJS } from 'immutable';
import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage'

import reducers from './reducers';

const enhancers = compose(
  persistState('', {
    merge: (initialState, persistedState) => {
      initialState = initialState || fromJS({});
      persistedState = fromJS(persistedState);
      return initialState.merge(persistedState);
    }
  }),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default createStore(
  reducers,
  enhancers
);
