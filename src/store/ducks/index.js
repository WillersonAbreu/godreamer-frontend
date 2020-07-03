import { combineReducers } from 'redux';

// Reducers
import auth from './Auth';
import user from './User';
import search from './Search';

const reducers = combineReducers({ auth, user, search });

export default reducers;
