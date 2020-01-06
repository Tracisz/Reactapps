import React from "react"

const navStyle = { 
    height: "5vh", 
    width: "100vw", 
    backgroundColor: "grey",
    gridColumns: 1/3
}

function Navbar(){ 
    return( 
        <div style = {navStyle}>
            <h1>The Hit List</h1>
        </div>
    )
}

export default Navbar