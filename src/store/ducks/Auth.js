import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  authSuccess: ['token'],
  logout: [],
  authFail: []
});

const INITIAL_STATE = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
};

const authSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  token: action.token
});

const logout = (state = INITIAL_STATE, action) => ({
  ...state,
  token: ''
});

const authFail = (state = INITIAL_STATE, action) => ({
  ...state,
  token: ''
});

export default createReducer(INITIAL_STATE, {
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.LOGOUT]: logout,
  [Types.AUTH_FAIL]: authFail
});
