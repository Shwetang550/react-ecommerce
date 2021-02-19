import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import Checkout from './Components/Checkout/Checkout';
import SignIn from './Components/SignIn/SignIn';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Components/Payment/Payment';

function App() {
  const [{ cart, user }, dispatch] = useStateValue();

  useEffect(() => { 
    auth.onAuthStateChanged(authUser => {

      if (authUser) {
        //the user just logged in / the user was logged in
        
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

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
          <Route path="/sign-in" exact>
            <SignIn />
          </Route>
          <Route path="/payment" exact>
            <Header />
            <Payment />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
