import React, { Component } from "react"
import {Switch, Route, withRouter} from "react-router-dom";
import "./index.css"
import { MovieContextConsumer } from "./movieContext";
import MovieDetails from "./MovieDetails";

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
                      <form>
                        <button to = "/details" onClick = {(e) => {
                          handleChoice(e) 
                          this.props.history.push("/details")
                        }} name = {movie.imdbID} >See More</button>
                      </form>
                        <Switch>
                          <Route exact path = "/details">
                            <MovieDetails />
                          </Route>
                        </Switch>
                  </div>
                    ))}
            </div>
            <div className = "card-children"> page {count}</div>
            <button className = "card-children" onClick = {previousPage}>Previous Page</button>
            <button className = "card-children" onClick = {nextPage}>Next Page</button>
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