import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import {
  EditBook,
  Home,
  NewBook,
  ViewBook
} from './components/pages';

const router = () => {
  return <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home}>
        <IndexRoute />
        <Route path="new(/:type)" component={NewBook} />
        <Route path="view/:uuid" component={ViewBook} />
        <Route path="edit/:uuid" component={EditBook} />
      </Route>
    </Route>
  </Router>;
};

export default router;
