import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import { AppContainer } from './components/App';
import { NewBookContainer } from './components/NewBook';
import { EditBookContainer } from './components/EditBook';
import { ViewBookContainer } from './components/ViewBook';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="new(/:type)" component={NewBookContainer} />
        <Route path="view/:uuid" component={ViewBookContainer} />
        <Route path="edit/:uuid" component={EditBookContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
