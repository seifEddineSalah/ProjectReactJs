import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import HomeCocktail from "./components/HomeCocktail";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const App = function() {
  

  return (
    <Router>
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
         
        </ul>
      </nav> */}

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
       
        
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/cocktail">
          <HomeCocktail></HomeCocktail>
        </Route>
        <Route path="/"> <Login></Login></Route>
      </Switch>
    </div>
  </Router>
  );
};

export default App;