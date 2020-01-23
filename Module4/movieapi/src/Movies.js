import React, { Component } from "react"
import {Switch, Route, withRouter} from "react-router-dom";
import "./index.css"
import { MovieContextConsumer } from "./movieContext";
import MovieDetails from "./MovieDetails";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge'


class Movies extends Component{
  render(){
  return (
    <div>
      <MovieContextConsumer>
        {({handleChoice, movieList, count, nextPage, previousPage}) => (
          <div className = "card-children">
            <div className = "flex-container item">
            {movieList === undefined ? <h1 className = "item">No movies found, Please try again</h1> :
              movieList.map((movie) => (
                <div key = {movie.imdbID} className = "item">
                    <h5>{movie.Title}</h5>
                    <span className = "card-children">{movie.Year}</span>
                    <p></p>
                    <img alt = "404 not found" src = {movie.Poster}></img>
                    <br></br>
                      <form className = "button" >
                        <Button variant = "outline-dark" bsClass = "button" to = "/details" onClick = {(e) => {
                          handleChoice(e) 
                          this.props.history.push("/details")
                        }} name = {movie.imdbID} >See More</Button>
                      </form>
                        <Switch>
                          <Route exact path = "/details">
                            <MovieDetails />
                          </Route>
                        </Switch>
                  </div>
                    ))}
            </div>
             
            <div className = "button-group">
              <Button className = "card-children" variant="outline-info" disabled>
                Page <Badge variant="dark">{count}</Badge>
                <span className="sr-only">Current Page</span>
              </Button>
              <Button variant = "secondary" onClick = {previousPage}>Previous Page</Button>
              <Button variant = "primary"  onClick = {nextPage}>Next Page</Button>
            </div>  
          </div> 
          )}
        </MovieContextConsumer>
      </div>
        )}
}


export default withRouter(Movies)

// function Pokemon(props){ 
//         const pokemon = props.map(item => (<h1>{item.name}</h1>))
//     return( 
//         {pokemon}
//     )
// }

// export default Pokemon