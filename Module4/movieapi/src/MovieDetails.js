import React from "react"

function MovieDetails(props){ 
    console.log( "333", props)
    return( 
        <div> 
            <h1>{props.Director}</h1>
            <h1>Hi</h1>
        </div> 
    )
}

export default MovieDetails