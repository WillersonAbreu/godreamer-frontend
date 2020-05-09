import { combineReducers } from 'redux';

// Reducers
import auth from './Auth';
import user from './User';

const reducers = combineReducers({ auth, user });

export default reducers;
