// React imports
import React from 'react';

// Routes import
import Routes from '~/routes';

// Redux imports
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
