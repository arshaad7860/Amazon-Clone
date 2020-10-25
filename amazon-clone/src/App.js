import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        // the user just logged in / user was logged in already
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        {/* created firebase login */}
        {/* header navigation */}

        <Switch>
          {/* login route */}
          <Route path="/login">
            {/* login component */}
            <Login />
          </Route>
          {/* checkout route */}
          <Route path="/checkout">
            {/* header navigation */}

            <Header />
            {/* checkout component */}
            <Checkout />
          </Route>
          <Route path="/payment">
            {/* header navigation */}

            <Header />
            {/* payment component */}
            <Payment />
          </Route>

          {/* Home page route must be at bottom */}
          <Route path="/">
            {/* header navigation */}

            <Header />
            {/* home page component */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
