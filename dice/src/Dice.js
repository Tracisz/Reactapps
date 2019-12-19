import React from "react"


class Dice extends React.Component {
    constructor(){ 
        super()
        this.state = {
            number: 0
         }
    }
    rollOneDice(){ 
        this.setState({ 
            number: Math.floor(Math.random() * 6) + 1
        })
           
        console.log(this.state.number)
    }

    handleChange(){ 

        this.setState(prevState => {
            return{
                number: prevState.number
                
                
            }
            
        })
        console.log("checked")
    }

    render(){ 
    
        return(
            <div>
                <div>Group Dice roll: {this.props.number} <br></br>
                Individual Dice roll: {this.state.number}</div>  
                <input type = "checkbox" onChange = {this.handleChange.bind(this)}></input> Save Number <br></br>           
                <button onClick={this.rollOneDice.bind(this)}>Roll this dice</button>
            </div>
        )
    }
}

export default Dice