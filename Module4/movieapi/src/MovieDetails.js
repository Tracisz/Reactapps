import React from "react"
import { MovieContextConsumer } from "./movieContext"
import {Switch, Route, withRouter, Link} from "react-router-dom";
import Movies from "./Movies"
import Movielist from "./Movielist"
import "./index.css"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'



function MovieDetails(){ 
    return( 
        <div className = "item"> 
       
            <MovieContextConsumer>
                {({movieToDisplay}) => (
                    <>
                     <Card bsPrefix = "details-card">
                        <Card.Body bg = "dark" bsPrefix = "item">
                        <Card.Text bg = "dark">
                        <Image src={movieToDisplay.Poster} bsPrefix = "details-image" fluid /> 
                            <p className = "card-text">Title: {movieToDisplay.Title}</p>
                            <p className = "card-text">Director: {movieToDisplay.Director}</p>
                            <p className = "card-text">Rated: {movieToDisplay.Rated}</p>
                            <p className = "card-text">Released: {movieToDisplay.Released}</p>
                            <p className = "card-text">Runtime: {movieToDisplay.Runtime}</p>
                            <p className = "card-text">Genre: {movieToDisplay.Genre}</p>
                            <p className = "card-text">Writer(s): {movieToDisplay.Writer}</p>
                            <p className = "card-text">Cast: {movieToDisplay.Actors} </p>
                            <p className = "card-text">Plot: {movieToDisplay.Plot}</p>
                            <p className = "card-text">Langauges that {movieToDisplay.Title} was released in: {movieToDisplay.Language}</p>
                            <p className = "card-text">Country of Origin: {movieToDisplay.Country}</p>
                          
                        </Card.Text>
                        <Link to = "/"><Button variant="outline-dark">Home</Button></Link>
                        </Card.Body>
                    </Card>
                       
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