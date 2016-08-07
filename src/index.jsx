import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import persistState from 'redux-localstorage';
import {fromJS} from 'immutable';

import {INITIAL_STATE} from './core';
import App from './containers/App';
import Library from './containers/Library';
import NewBook from './containers/NewBook';
import EditBook from './containers/EditBook';
import ImportExport from './containers/ImportExport';
import reducer from './reducer';

import './assets/styl/chapter.styl';

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
      <Route path="/" component={App}>
        <IndexRoute component={Library} />
        <Route path="new(/:type)" component={NewBook} />
        <Route path="edit/:uuid" component={EditBook} />
        <Route path="io" component={ImportExport} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
