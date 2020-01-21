import React, {Component} from "react"
import {Link, Route, withRouter} from "react-router-dom"
import "./index.css"
import MovieDetails from "./MovieDetails"

class Movies extends Component{
   constructor(){ 
     super()
     this.state = { 
      //  movieId: this.props.movieId,
       movieToDisplay: {},
       
     }
     this.handleChoice = this.handleChoice.bind(this)
   }
   
   handleChoice(e){
     e.preventDefault()
     let movieChoice = e.target.name 
     console.log("111", movieChoice)
     console.log("222",this.props.moviePages)
     fetch(`http://www.omdbapi.com/?apikey=1c37308b&i=${movieChoice}`)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          movieToDisplay: result
        })
      })
    }

   
   
    render(){
      
      console.log("444" ,this.state.movieToDisplay)
    return (
      <div className = "card-children">
          <div className = "flex-container item">
          {this.props.Movies === undefined ? <h1 className = "item">No movies found, Please try again</h1> :
            this.props.Movies.map((movie) => (
              <div className = "item">
                  <h5>{movie.Title}</h5>
                  <span className = "card-children">{movie.Year}</span>
                  <p></p>
                  <img alt = "404 not found" src = {movie.Poster}></img>
                  <br></br>
                  <button onClick = {this.handleChoice} name = {movie.imdbID}>See More</button>
                </div>
                  )
                  )
                }
            </div>
                <div className = "card-children"> page {this.props.count}</div>
                <button className = "card-children" onClick = {this.props.nextPage}>Next Page</button>
                <button className = "card-children" onClick = {this.props.prevPage}>Previous Page</button>
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