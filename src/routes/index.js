// React imports
import React from 'react';

// Router DOM imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components imports
import Home from '~/pages/Home/Home';

// Custom layout import
import CustomLayout from '~/components/CustomLayout/CustomLayout';

// Exporting route service
export default function Routes() {
  return (
    <Router>
      <Switch>
        <CustomLayout>
          <Route exact path="/" component={Home} />
        </CustomLayout>
      </Switch>
    </Router>
  );
}
