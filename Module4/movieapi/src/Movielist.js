import React, {Component } from "react"
import Movies from "./Movies"
import "./index.css"

class Movielist extends Component{
    constructor(){ 
        super()
        this.state = { 
                movieList: [],
                movieSearch: "",
                moviePages: 0,
                count: 1
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
                    moviePages: Math.floor(result.totalResults / 10)
                  })
                })
                .catch(err => console.log(err))
            }
        nextPage = () => {
            console.log(this.state.count)
            fetch(`http://www.omdbapi.com/?apikey=1c37308b&s=${this.state.movieSearch}&page=${this.state.count + 1}`)
                .then(res => res.json())
                .then((result) => { 
                    this.setState((prevState) => {
                     return {
                        movieList: result.Search,
                        count: prevState.count + 1
                     }
                    })
                })
            
        }
        previousPage = () => {
            console.log(this.state.count)
            fetch(`http://www.omdbapi.com/?apikey=1c37308b&s=${this.state.movieSearch}&page=${this.state.count - 1}`)
                .then(res => res.json())
                .then((result) => { 
                    this.setState((prevState) => {
                        return {
                           movieList: result.Search,
                           count: prevState.count - 1
                        }
                       })
                   })
            }
              
            
    handleChange(e){ 
        let nam = e.target.name
        let val = e.target.value
        this.setState({[nam]: val})
    }

   
    render(){ 
        return (
            <div className = "card-children">
                <center><h1 className = "card-children">Search a movie</h1></center>
                <center><form onSubmit = {this.handleSubmit} className = "card-children">
                        <input className = "card-children"
                            type = "text"
                            placeholder = "Search"
                            value = {this.state.movieSearch}
                            name = "movieSearch"
                            onChange={this.handleChange}/>
                        <button className = "card-children">Submit</button>
                    </form>
                    </center>
                <Movies 
                    Movies = {this.state.movieList} 
                    Search = {this.state.movieSearch} 
                    handleSubmit = {this.handleSubmit} 
                    moviePages = {this.state.moviePages}
                    nextPage = {this.nextPage}
                    count = {this.state.count}
                    prevPage = {this.previousPage}
                    />
            </div>
        )
    }
}



export default Movielist
