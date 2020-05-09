import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  saveUser: ['id', 'name', 'email', 'birthdate', 'user_type'],
  clearUser: []
});

const INITIAL_STATE = {
  id: '',
  name: '',
  email: '',
  birthdate: '',
  user_type: ''
};

const saveUser = (state = INITIAL_STATE, action) => ({
  ...state,
  id: action.id,
  name: action.name,
  email: action.email,
  birthdate: action.birthdate,
  user_type: action.user_type
});

const clearUser = (state = INITIAL_STATE, action) => ({
  ...state,
  id: '',
  name: '',
  email: '',
  birthdate: '',
  user_type: ''
});

export default createReducer(INITIAL_STATE, {
  [Types.SAVE_USER]: saveUser,
  [Types.CLEAR_USER]: clearUser
});
