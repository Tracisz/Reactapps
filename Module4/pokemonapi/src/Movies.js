import React, { Component } from "react"


class Movies extends Component{
   constructor(){ 
     super()
     this.state = { 
      //  movieId: this.props.movieId,
       movieToDisplay: {}
     }
     this.handleChoice = this.handleChoice.bind(this)
   }
   handleChoice(e){
     e.preventDefault()
     let movieChoice = e.target.name 
     console.log("111", movieChoice)
     fetch(`http://www.omdbapi.com/?apikey=1c37308b&i=${movieChoice}`)
      .then(res => res.json())
      .then((result) => {
        this.setState({
          movieToDisplay: result
        })
        console.log(this.state.movieToDisplay)
      })

    }
    render(){
    return (
        <div>
          <center><h1>Search a movie</h1></center>
          {this.props.Movies.map((movie) => (
            <div>
              <div>
                <h5>{movie.Title}</h5>
                <span>{movie.Year}</span>
                <p></p>
                <img alt = "404 not found" src = {movie.Poster}></img>
                <button onClick ={this.handleChoice} key = {movie.imdbID} name = {movie.imdbID}>See more</button>
                {console.log(movie.imdbID)}
            </div>
        </div>
          ))}
            <div> {this.state.movieToDisplay.Released} </div> 
            <div> {this.state.movieToDisplay.Director} </div> 
            <div> {this.state.movieToDisplay.Actors} </div> 
            <div> {this.state.movieToDisplay.Plot} </div> 
            <div> {this.state.movieToDisplay.Awards} </div> 
          </div>
      )
    }
  }


    

export default Movies

// function Pokemon(props){ 
//         const pokemon = props.map(item => (<h1>{item.name}</h1>))
//     return( 
//         {pokemon}
//     )
// }

// export default Pokemon