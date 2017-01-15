import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import getRouter from './router';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    { getRouter() }
  </Provider>,
  document.getElementById('app')
);
