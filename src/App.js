import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <Router>
      <p>s</p>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
      </Switch>
    </Router>
  );
}

export default App;
