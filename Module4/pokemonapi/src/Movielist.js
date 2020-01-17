import React, {Component } from "react"
import Movies from "./Movies"

class Movielist extends Component{
    constructor(){ 
        super()
        this.state = { 
                movieList: [],
                movieSearch: "",
                movieId: ""
            }
            this.handleChange = this.handleChange.bind(this)
            this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){ 
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=1c37308b&s=${this.state.movieSearch}`)
            .then(res => res.json())
            .then((result) => {
                  this.setState({
                    movieList: result.Search,
                    movieId: result.Search[0].imdbID
                  })
                  console.log(result)
                  console.log(typeof this.state.movieId)
                })
            }

            
    handleChange(e){ 
        let nam = e.target.name
        let val = e.target.value
        this.setState({[nam]: val})
    }

   
    render(){ 
        return (
            
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input 
                    type = "text"
                    placeholder = "Search"
                    value = {this.state.movieSearch}
                    name = "movieSearch"
                    onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
                <Movies 
                    Movies = {this.state.movieList} 
                    Search = {this.state.movieSearch} 
                    handleSubmit = {this.handleSubmit} 
                    movieId = {this.state.movieId}
                    />
            </div>
        )
    }
}



export default Movielist
