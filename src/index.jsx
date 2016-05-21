import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {setState} from './action-creators';
import Library from './containers/Library';
import reducer from './reducer';

import './style.styl';

import library from '../library.json';

const store = createStore(reducer);
store.dispatch(setState({ library }));

ReactDOM.render(
  <Provider store={store}>
    <Library/>
  </Provider>,
  document.getElementById('app')
);
