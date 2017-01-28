import { createStore, compose } from 'redux';

import reducers from './reducers';
import { middlewares } from './enhancers';
import { sagaMiddleware } from './enhancers/middlewares';
import rootSaga from './sagas';

const enhancers = compose(
  middlewares,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(
  reducers,
  enhancers
);

sagaMiddleware.run(rootSaga);

export default store;
