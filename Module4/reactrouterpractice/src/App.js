import React from "react"
import Contact from "./Contact"
import Home from "./Home"
import About from "./About"
import {Link, Switch, Route} from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

function App() {    
    return (
        <Router>
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
            <Link to = "/contact">Contact</Link>
            <Switch>
                <Route exact path="/">{Home}</Route>
                <Route exact path="/contact">{Contact}</Route>
                <Route exact path="/about">{About}</Route>
            </Switch>
        </Router>
    )
}

export default App