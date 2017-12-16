import { fromJS, Map } from 'immutable'
import { types } from './notifications.action'

const initialState = fromJS([])

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_NOTIFICATION:
      return state.push(Map({
        title: action.title,
        text: action.text,
        kind: action.kind,
        uuid: action.uuid
      }))
    case types.REMOVE_NOTIFICATION:
      return state.filter(notif => notif.get('uuid') !== action.uuid)
  }

  return state
}
