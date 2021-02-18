import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Checkout from './Components/Checkout/Checkout';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path='/' exact>
            <Header />
            <Body />
          </Route>
          <Route path='/checkout' exact>
            <Header />
            <Checkout />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
