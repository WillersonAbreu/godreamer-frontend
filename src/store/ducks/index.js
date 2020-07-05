import { combineReducers } from 'redux';

// Reducers
import auth from './Auth';
import user from './User';
import search from './Search';
import global from './Global';

const reducers = combineReducers({ auth, user, search, global });

export default reducers;
