import { combineReducers } from 'redux-immutable';

import editor from './editor';
import library from './library';
import routing from './routing';

export default combineReducers({
  editor,
  library,
  routing,
});
