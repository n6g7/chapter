import { combineReducers } from 'redux-immutable'

import editor from './editor'
import library from './library'
import notifications from './notifications'
import routing from './routing'
import user from './user'

export default combineReducers({
  editor,
  library,
  notifications,
  routing,
  user
})
