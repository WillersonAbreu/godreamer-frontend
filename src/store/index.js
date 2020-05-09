import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import reducers from './ducks';

const store = createStore(reducers, composeWithDevTools());

export default store;
