import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  changeRefresh: ['refresh']
});

const INITIAL_STATE = {
  refresh: false
};

const changeRefresh = (state = INITIAL_STATE, action) => ({
  ...state,
  refresh: action.refresh
});

export default createReducer(INITIAL_STATE, {
  [Types.CHANGE_REFRESH]: changeRefresh
});
