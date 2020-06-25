// React imports
import React from 'react';

// React Router DOM imports
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ path, component, exact, isSigned }) {
  return isSigned ? (
    <Route exact={exact} path={path} component={component} />
  ) : (
    isSigned === false && <Redirect to="/" />
  );
}
