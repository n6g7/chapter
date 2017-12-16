export const types = {
  LOGIN: {
    REQUEST: 'LOGIN.REQUEST',
    SUCCESS: 'LOGIN.SUCCESS',
    FAILURE: 'LOGIN.FAILURE'
  },
  LOGOUT: {
    REQUEST: 'LOGOUT.REQUEST',
    SUCCESS: 'LOGOUT.SUCCESS',
    FAILURE: 'LOGOUT.FAILURE'
  },
  SAVE_USER: {
    REQUEST: 'SAVE_USER.REQUEST',
    SUCCESS: 'SAVE_USER.SUCCESS',
    FAILURE: 'SAVE_USER.FAILURE'
  }
}

export const login = () => ({
  type: types.LOGIN.REQUEST
})

export const loginSuccess = user => ({
  type: types.LOGIN.SUCCESS,
  user
})

export const loginFailure = error => ({
  type: types.LOGIN.FAILURE,
  error
})

export const logout = () => ({
  type: types.LOGOUT.REQUEST
})

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS
})

export const logoutFailure = () => ({
  type: types.LOGOUT.FAILURE
})

export const saveUser = user => ({
  type: types.SAVE_USER.REQUEST,
  user
})

export const saveUserSuccess = () => ({
  type: types.SAVE_USER.SUCCESS
})

export const saveUserFailure = error => ({
  type: types.SAVE_USER.FAILURE,
  error
})
