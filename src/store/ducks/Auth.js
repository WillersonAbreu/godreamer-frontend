import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  authStart: [],
  authSuccess: ['token'],
  authFail: [],
  authLogout: []
});

const INITIAL_STATE = {
  token: localStorage.getItem('token') || null,
  loading: false
};

const authSuccess = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  token: action.token
});

const authStart = (state = INITIAL_STATE, _action) => ({
  ...state,
  loading: true
});

const authFail = (state = INITIAL_STATE, _action) => ({
  ...state,
  token: null,
  loading: false
});

const authLogout = (state = INITIAL_STATE, _action) => ({
  ...state,
  token: null,
  refreshToken: null
});

export default createReducer(INITIAL_STATE, {
  [Types.AUTH_START.toString()]: authStart,
  [Types.AUTH_SUCCESS.toString()]: authSuccess,
  [Types.AUTH_FAIL.toString()]: authFail,
  [Types.AUTH_LOGOUT.toString()]: authLogout
});
