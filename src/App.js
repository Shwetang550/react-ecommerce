import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './Components/Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Header />
        <Switch>
          <Route path='/checkout' exact>
            <Checkout />
          </Route>
          <Route path='/' exact>
            <Body />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
