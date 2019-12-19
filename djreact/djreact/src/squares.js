import React from "react"

class Squares extends React.Component { 

   
    render(){ 
        const squareStyle = { 
            gridRow: this.props.gridRow,
            gridColumn: this.props.gridColumn,
            height: "200px",
            width: "auto",
            backgroundColor: this.props.color,
            border: "1px solid black"
        }
    
        
        return (
            <div>
                <div style={squareStyle}></div>
            </div>
        
        )
    }
}



export default Squares