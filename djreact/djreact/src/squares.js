import React from "react"

class Squares extends React.Component { 
    constructor(){ 
        super()
        this.state = { 
            color: ["blue", "purple", "blue", "blue"]
        }
    }
    changeSquareColor(){ 
        this.setState({ 
            color: this.state.color[0]
        })
        console.log("fired")
    }

    render(){ 
       const squareColor = { 
            display: "inline-block",
            border: "1px solid black",
            backgroundColor: "red",
            width: "200px",
            height: "200px",
    
        }
        return (
            <div>
                <div style = {squareColor} onClick = {this.changeSquareColor.bind(this)}></div>
                <div style = {squareColor} onClick = {this.changeSquareColor.bind(this)}></div>
                <div style = {squareColor} onClick = {this.changeSquareColor.bind(this)}></div>
                <div style = {squareColor} onClick = {this.changeSquareColor.bind(this)}></div>
            </div>
        
        )
    }
}



export default Squares