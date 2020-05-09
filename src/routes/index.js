// React imports
import React, { useEffect, useState } from 'react';

// Router DOM imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components imports
import Home from '~/pages/Home/Home';
import Feed from '~/pages/Feed/Feed';

// Custom layout import
import CustomLayout from '~/components/CustomLayout/CustomLayout';

// Private Route
import PrivateRoute from './PrivateRoute';

// Helpers
import { checkAuth } from '~/helpers/AuthHelper';
import { useSelector } from 'react-redux';

// Exporting route service
export default function Routes() {
  const checkSigned = useSelector(state => state.auth.token);
  const [isSigned, setIsSigned] = useState(!!checkSigned);

  useEffect(() => {
    checkAuth();
  }, [isSigned]);

  return (
    <Router>
      <Switch>
        <CustomLayout>
          <Route exact path="/" component={Home} />
          <PrivateRoute isSigned={isSigned} path="/feed" component={Feed} />
        </CustomLayout>
      </Switch>
    </Router>
  );
}
