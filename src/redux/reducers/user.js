import { fromJS } from 'immutable'

import { types } from '@actions/user'

const initialState = fromJS({
  email: '',
  loading: false,
  loggedIn: false,
  firstName: '',
  lastName: '',
  photo: '',
  uid: ''
})

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN.REQUEST:
    case types.LOGOUT.REQUEST:
    case types.SAVE_USER.REQUEST:
      return state.set('loading', true)
    case types.LOGIN.SUCCESS:
      return state.merge({
        email: action.user.email,
        loading: false,
        loggedIn: true,
        firstName: action.user.displayName.split(' ', 2)[0],
        lastName: action.user.displayName.split(' ', 2)[1],
        photo: action.user.photoURL,
        uid: action.user.uid
      })
    case types.SAVE_USER.SUCCESS:
    case types.LOGIN.FAILURE:
    case types.LOGOUT.FAILURE:
    case types.SAVE_USER.FAILURE:
      return state.set('loading', false)
    case types.LOGOUT.SUCCESS:
      return initialState
  }

  return state
}
