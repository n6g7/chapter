import { combineReducers } from 'redux-immutable'

import editor from './editor';
import library from './library';


export default combineReducers({
  editor,
  library
});
