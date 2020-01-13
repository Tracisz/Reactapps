import React, { Component } from "react"
const {Provider, Consumer} = React.createContext()

class UglyThingsContextProvider extends Component{ 
    constructor(){ 
        super()
        this.state = { 
            imgUrl: "", 
            title:"", 
            description:""
        }
    }
    newInput(inputValue){ 
        this.setState({
            imgUrl: inputValue.newUrl,
            description: inputValue.newDescription,
            title: inputValue.newTitle
        })
        console.log(this.state)
    }
    render(){ 
        return(
            <Provider value={{imgUrl: this.state.imgUrl, title: this.state.title, description: this.state.description, newInput: this.newInput}}>
               {this.props.children} 
            </Provider>
        )
    }
}

export  {UglyThingsContextProvider, Consumer as UglyThingsContextConsumer}