
import React,{useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

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
  
      order page
    </Route>
    <Route path="/checkout">
   
      checkout page
    </Route>
    
    <Route path="/payment">
      payment page
    </Route>
    
  </Switch>
    </div>
    </Router>
  );
}

export default App;

