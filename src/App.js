import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Basket from './Views/Basket';
import Product from './Views/Product';
import Home from './Views/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route path="/products/:id" component={Product} />
          <Route path="/basket" component={Basket} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
