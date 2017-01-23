export const types = {
  LOGIN: {
    REQUEST: 'LOGIN.REQUEST',
    SUCCESS: 'LOGIN.SUCCESS',
    FAILURE: 'LOGIN.FAILURE',
  },
  LOGOUT: {
    REQUEST: 'LOGOUT.REQUEST',
    SUCCESS: 'LOGOUT.SUCCESS',
    FAILURE: 'LOGOUT.FAILURE',
  },
}

export const login = () => ({
  type: types.LOGIN.REQUEST
});

export const loginSuccess = user => ({
  type: types.LOGIN.SUCCESS,
  user
});

export const loginFailure = () => ({
  type: types.LOGIN.FAILURE
});

export const logout = () => ({
  type: types.LOGOUT.REQUEST
});

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS
});

export const logoutFailure = () => ({
  type: types.LOGOUT.FAILURE
});
