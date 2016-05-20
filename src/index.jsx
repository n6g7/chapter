import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './components/BookList';
import Library from './components/Library';

import './style.styl';

import library from '../library.json';

ReactDOM.render(
  <Library library={library} />,
  document.getElementById('app')
);
