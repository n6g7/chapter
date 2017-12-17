import { fromJS } from 'immutable'

import { types } from '@actions/editor'
import states from '@config/bookStates'

const initialState = fromJS({
  author: '',
  bid: '',
  cover: {
    colour: '',
    image: ''
  },
  endDate: null,
  ISBN: '',
  progress: 0,
  startDate: null,
  state: states.stock,
  title: ''
})

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SET_FIELD:
      return state.set(action.field, action.value)
    case types.SET_COVER_FIELD:
      return state.setIn(['cover', action.field], action.value)
    case types.RESET:
      return initialState.merge(action.book)
  }

  return state
}
