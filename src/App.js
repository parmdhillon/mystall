import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CategoryScreen from './screens/CategoryScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SearchScreen from './screens/SearchScreen';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/item/:catname/:prodID" component={ProductScreen} />
        <Route path="/category/:catname" component={CategoryScreen} />
        <Route path="/search" component={SearchScreen} />
      </Switch>
    </Router>
  );
}

export default App;
