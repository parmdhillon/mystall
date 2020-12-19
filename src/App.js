import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CategoryScreen from './screens/CategoryScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/category/:catname" component={CategoryScreen} />
      </Switch>
    </Router>
  );
}

export default App;
