import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';

import {setState} from './action-creators';
import App from './containers/App';
import Library from './containers/Library';
import reducer from './reducer';

import './style.styl';

import library from '../library.json';

const store = createStore(reducer);
store.dispatch(setState({ library }));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/" component={Library}></Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
