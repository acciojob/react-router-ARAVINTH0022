import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';
import '../styles/App.css';

const App = () => {
  return (
    <Router>
      <div id="main">
        {/* Do not remove the main div */}
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/users/:id" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
