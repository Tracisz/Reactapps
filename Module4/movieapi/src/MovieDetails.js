import React from "react"
import { MovieContextConsumer } from "./movieContext"
import {Switch, Route, withRouter, Link} from "react-router-dom";
import Movies from "./Movies"
import Movielist from "./Movielist"
import "./index.css"

function MovieDetails(){ 
    return( 
        <div className = "item"> 
            <MovieContextConsumer>
                {({movieToDisplay}) => (
                    <>
                        <p className = "item">Title: {movieToDisplay.Title}</p>
                        <img alt= "404 not found" src = {movieToDisplay.Poster}></img>
                        <p className = "item">Director: {movieToDisplay.Director}</p>
                        <p className = "item">Rated: {movieToDisplay.Rated}</p>
                        <p className = "item">Released: {movieToDisplay.Released}</p>
                        <p className = "item">Runtime: {movieToDisplay.Runtime}</p>
                        <p className = "item">Genre: {movieToDisplay.Genre}</p>
                        <p className = "item">Writer(s): {movieToDisplay.Writer}</p>
                        <p className = "item">Cast: {movieToDisplay.Actors} </p>
                        <p className = "item">Plot: {movieToDisplay.Plot}</p>
                        <p className = "item">Langauges that {movieToDisplay.Title} was released in: {movieToDisplay.Language}</p>
                        <p className = "item">Country of Origin: {movieToDisplay.Country}</p>
                        <Link to = "/">Home</Link>
                       
                      <Switch>
                        <Route exact path = "/">
                            <Movielist />
                            <Movies />
                        </Route>
                    </Switch>
                        {/* <span className = "item">Ratings: {movieToDisplay.Ratings}</span> */}
                    </>
                )}
            </MovieContextConsumer>
        </div> 
    )
}

export default withRouter(MovieDetails)