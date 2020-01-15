import React from 'react';
import {Link, Route, Switch} from "react-router-dom"

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {
  return (
    <Route>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to ="/contact">Contact</Link>
      </nav>
    <Switch> 
      <Route exact path = "/">{Home}</Route>
      <Route exact path = "/about">{About}</Route>
      <Route exact path = "/Contact">{Contact}</Route>
    </Switch>
    </Route>
  );
}

export default App;
