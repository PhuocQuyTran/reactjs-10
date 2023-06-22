import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersPage from './UsersPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users" component={UsersPage} />
        {/* Các route khác của ứng dụng */}
      </Switch>
    </Router>
  );
};

export default App;