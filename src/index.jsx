import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import persistState from 'redux-localstorage';
import {fromJS} from 'immutable';

import {INITIAL_STATE} from './core';
import { AppContainer } from './components/App';
import { NewBookContainer } from './components/NewBook';
import { EditBookContainer } from './components/EditBook';
import { ViewBookContainer } from './components/ViewBook';
import { ImportExportContainer } from './components/ImportExport';
import reducer from './reducer';

const createPersistentStore = compose(
  persistState('', {
    merge: (initialState, persistedState) => {
      initialState = initialState || INITIAL_STATE;
      persistedState = fromJS(persistedState);
      return initialState.merge(persistedState);
    }
  })
)(createStore);

const store = createPersistentStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer}>
        <Route path="new(/:type)" component={NewBookContainer} />
        <Route path="view/:uuid" component={ViewBookContainer} />
        <Route path="edit/:uuid" component={EditBookContainer} />
        <Route path="io" component={ImportExportContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
