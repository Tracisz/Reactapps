import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import "./index.css"
import Card from './Card';
import MovieDetails from './MovieDetails';


function App() {
  return (
   <Router>
     <Switch>
     <div>
        <Route exact path="/" component = {Card}/>
        <Route exact path = "/details" component = {MovieDetails} />
      </div>
      </Switch>
    </Router>
  );
}

export default App;
