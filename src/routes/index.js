// React imports
import React from 'react';

// Router DOM imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components imports
import Home from '~/pages/Home/Home';
import Feed from '~/pages/Feed/Feed';
import Profile from '~/pages/Profile/Profile';
import GroupFeed from '~/pages/GroupFeed/GroupFeed';

// Custom layout import
import CustomLayout from '~/components/CustomLayout/CustomLayout';

// Private Route
import PrivateRoute from './PrivateRoute';

// Helpers
import { useSelector } from 'react-redux';

// jwt
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '~/global/shared/config';

// Redux
import { useDispatch } from 'react-redux';
import { Creators as AuthActions } from '~/store/ducks/Auth';
import { Creators as UserActions } from '~/store/ducks/User';

// Exporting route service
export default function Routes() {
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  function checkAuth() {
    try {
      jwt.verify(token, JWT_SECRET);
      const { id, name, email, birthdate, user_type } = jwt.decode(token);
      dispatch(UserActions.saveUser(id, name, email, birthdate, user_type));
      return true;
    } catch (error) {
      dispatch(AuthActions.authFail());
      localStorage.removeItem('token');
      return false;
    }
  }

  return (
    <Router>
      <Switch>
        <CustomLayout isSigned={checkAuth()}>
          <Route exact path="/" component={Home} />

          <PrivateRoute isSigned={checkAuth()} path="/feed" component={Feed} />
          <PrivateRoute
            isSigned={checkAuth()}
            exact
            path="/profile"
            component={Profile}
          />
          <PrivateRoute
            isSigned={checkAuth()}
            exact
            path="/group/:groupId"
            component={GroupFeed}
          />
        </CustomLayout>
      </Switch>
    </Router>
  );
}
