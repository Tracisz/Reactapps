import React, { Component } from "react"
const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component{ 
    state = { 
        username: "Travis"
    }
    userNameChange = (username) => { 
        this.setState({username: username})
    }
    render(){
        const {username} = this.state
        return(
            <Provider value={{username, userNameChange: this.userNameChange}}>
                {this.props.children}
            </Provider>
        )
    }
}
export  {UserContextProvider, Consumer as UserContextConsumer}
