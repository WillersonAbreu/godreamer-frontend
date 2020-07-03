import { createActions, createReducer } from 'reduxsauce';

export const { Creators, Types } = createActions({
  saveSearch: ['searchResponse'],
  clearSearch: []
});

const INITIAL_STATE = {
  searchResponse: []
};

const saveSearch = (state = INITIAL_STATE, action) => ({
  ...state,
  searchResponse: action.searchResponse
});

const clearSearch = (state = INITIAL_STATE, _action) => ({
  ...state,
  searchResponse: []
});

export default createReducer(INITIAL_STATE, {
  [Types.SAVE_SEARCH]: saveSearch,
  [Types.CLEAR_SEARCH]: clearSearch
});
