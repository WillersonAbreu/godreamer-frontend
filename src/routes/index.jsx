// React imports
import React, { useEffect, useState } from 'react';

// Router DOM imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

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
import { checkAuth } from '~/helpers/AuthHelper';
import Search from '~/pages/Search/Search';

// Exporting route service
export default function Routes() {
  const token = useSelector(state => state.auth.token);

  const [isSigned, setIsSigned] = useState(null);

  useEffect(() => {
    const authenticated = checkAuth();
    setIsSigned(authenticated);
  }, [token]);

  return (
    <Router>
      <Switch>
        <CustomLayout isSigned={isSigned}>
          <Route exact path="/" component={Home} />
          <PrivateRoute isSigned={isSigned} path="/feed" component={Feed} />
          <PrivateRoute
            isSigned={isSigned}
            path="/group/:groupId"
            component={GroupFeed}
          />
          <PrivateRoute
            isSigned={isSigned}
            path="/profile/:userName"
            component={Profile}
          />
          <PrivateRoute
            isSigned={isSigned}
            path="/search/user/:userNameOrEmail"
            component={Search}
          />
          <PrivateRoute
            isSigned={isSigned}
            path="/search/group/:groupName"
            component={Search}
          />
        </CustomLayout>
      </Switch>
    </Router>
  );
}
