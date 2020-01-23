import React, { Component } from "react"
import "./index.css"
import { MovieContextConsumer } from "./movieContext"
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css';



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
                                <InputGroup bsPrefix = "input" className="mb-3">
                                    <FormControl
                                    placeholder="Search"
                                    aria-label="Searcg"
                                    aria-describedby="basic-addon2"
                                    type = "text"
                                    value = {movieSearch}
                                    name = "movieSearch"
                                    onChange = {handleChange}
                                    />
                                    <InputGroup.Append>
                                    <Button onClick = {handleSubmit} variant="outline-secondary" >Submit</Button>
                                    </InputGroup.Append>
                                </InputGroup>
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
