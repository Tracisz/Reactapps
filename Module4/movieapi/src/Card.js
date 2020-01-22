import React from "react"
import Movielist from "./Movielist"
import Movies from "./Movies"
import {Switch, Route} from "react-router-dom";
import MovieDetails from "./MovieDetails"

function Card(){ 
    return( 
        <div className = "card"> 
        <Switch>
            <Route exact path = "/details">
                <MovieDetails />
            </Route>
            <Route exact path = "/">
                <Movielist />
                <Movies />
            </Route>
        </Switch>
        </div>
    )
}

export default Card