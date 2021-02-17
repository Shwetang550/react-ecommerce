import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Checkout from './Components/Checkout/Checkout';

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
