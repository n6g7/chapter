import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'

import App from './components/App';
import {
  EditBook,
  Home,
  NewBook,
  Timeline,
  ViewBook
} from './components/pages';


const router = store => {
  const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState: state => {
      return state.getIn(['routing']).toJS();
    }
  });

  return <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={Home}>
          <IndexRoute />
          <Route path="new(/:type)" component={NewBook} />
          <Route path="view/:bid" component={ViewBook} />
          <Route path="edit/:bid" component={EditBook} />
        </Route>
        <Route path="timeline" component={Timeline} />
      </Route>
    </Router>
  </Provider>;
};

export default router;
