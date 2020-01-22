import React from 'react';
import "./index.css"
import Card from './Card';
import {MovieContextProvider} from "./movieContext"
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <MovieContextProvider> 
        <Card />
      </MovieContextProvider>
    </Router>
  );
}

export default App;
