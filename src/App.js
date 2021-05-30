
import React,{useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";

function App() {
  
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });   
          } 
      else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [])
 

  return (
    <Router>
    <div className="app">
      <Header />
  <Switch>
    <Route path="/login">
     <Login />

    </Route>
    <Route path="/signup">
   <Signup />
      
    </Route>
    <Route path="/orders">
  
      <Orders />
    </Route>
    <Route path="/checkout">
   <Checkout />
     
    </Route>
    
    <Route path="/payment">
     
      <Payment />
    </Route>
    <Route path="/">
            
            <Home />
    </Route>
  </Switch>
    </div>
    </Router>
  );
}

export default App;

