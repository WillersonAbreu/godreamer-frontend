// JWT imports
import jwt from 'jsonwebtoken';

// Global variables imports
import { JWT_SECRET } from '~/global/shared/config';

// Redux imports
import store from '~/store';
import { Creators as AuthActions } from '~/store/ducks/Auth';
import { Creators as UserActions } from '~/store/ducks/User';

export const saveToken = token => {
  token && localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const checkAuth = () => {
  const token = localStorage.getItem('token');

  try {
    jwt.verify(token, JWT_SECRET);
    const { id, name, email, birthdate, user_type } = jwt.decode(token);
    store.dispatch(UserActions.saveUser(id, name, email, birthdate, user_type));
    return true;
  } catch (error) {
    store.dispatch(AuthActions.authFail());
    localStorage.removeItem('token');
    return false;
  }
};
