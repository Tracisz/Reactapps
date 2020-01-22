import React, { Component } from "react"
import "./index.css"
import { MovieContextConsumer } from "./movieContext"

class Movielist extends Component{
    render(){
        return (
            <div className = "card-children">
                <MovieContextConsumer>
                {({handleSubmit, handleChange, movieSearch}) => (
                    <>
                        <center><h1 className = "card-children">Search a movie</h1></center>
                        <center>
                            <form onSubmit = {handleSubmit} className = "card-children">
                                <input className = "card-children"
                                    type = "text"
                                    placeholder = "Search"
                                    value = {movieSearch}
                                    name = "movieSearch"
                                    onChange={handleChange}/>
                                <button className = "card-children">Submit</button>
                            </form>
                        </center>
                    </>
                   
                )}
                </MovieContextConsumer>
            </div>
        )
    }
    // static contextType = MovieContextConsumer;
}


export default Movielist
