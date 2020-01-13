import React, { Component } from "react"
const {Provider, Consumer} = React.createContext()

class ThemeContextProvider extends Component{ 
    constructor(){ 
        super()
        this.state = { 
            theme: "dark"
        }
        this.changeTheme = this.changeTheme.bind(this)
    }
    changeTheme(value){
        console.log(value)
        // this.setState((prev) => {
        //     return{
        //     theme: (prev.theme === "light" ? "dark" : (prev.theme === "dark" ? "goofy" : "light"))
        //     }
        this.setState({theme: value})
            
        // })
    }
    render(){ 
        return(
            <Provider value = {{theme: this.state.theme, changeTheme: this.changeTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export  {ThemeContextProvider, Consumer as ThemeContextConsumer}