import ReactDOM from 'react-dom';

import getRouter from './router';
import store from './redux/store';

ReactDOM.render(
  getRouter(store),
  document.getElementById('app')
);
