import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { AppContainer } from './components/App';
import {
  EditBook,
  Library,
  NewBook,
  ViewBook
} from './components/pages';

const router = () => {
  return <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={Library} />
      <Route path="new(/:type)" component={NewBook} />
      <Route path="view/:uuid" component={ViewBook} />
      <Route path="edit/:uuid" component={EditBook} />
    </Route>
  </Router>;
};

export default router;
