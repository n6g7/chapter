import React from 'react';
import ReactDOM from 'react-dom';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
import persistState from 'redux-localstorage';
import {Map, fromJS} from 'immutable';

import {setState} from './action-creators';
import App from './containers/App';
import Library from './containers/Library';
import NewBook from './containers/NewBook';
import reducer from './reducer';

import './style.styl';

const createPersistentStore = compose(
  persistState('', {
    merge: (initialState, persistedState) => {
      initialState = initialState || Map();
      persistedState = fromJS(persistedState);
      return initialState.merge(persistedState);
    }
  })
)(createStore);

const store = createPersistentStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Library}></Route>
        <Route path="/new" component={NewBook}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
