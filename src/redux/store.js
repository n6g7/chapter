import { createStore, compose } from 'redux';

import reducers from './reducers';
import { localStorage, middlewares } from './enhancers';

const enhancers = compose(
  localStorage,
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default createStore(
  reducers,
  enhancers
);
