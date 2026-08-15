import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navigation from './Navigation';
import '../styles/App.css';

const App = () => {
  return (
    <Router>
      <div id="main">
        {/* Do not remove the main div */}
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
