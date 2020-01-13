import React, { Component } from "react"
import {ThemeContextConsumer} from "./themecontext"

class Body extends Component{ 
    constructor(){ 
        super()
        this.state = { 
            dropDownValue: "light"
        }
        this.handleChange = this.handleChange.bind(this)
    } 
    handleChange(e){ 
        e.preventDefault()
        // const themeSelected = e.target.value
        // console.log(themeSelected)
        // this.setState( prev => 
        //     {return { 
        //        dropDownValue: prev.dropDownValue

        //     }
            // })
        // this.setState({dropDownValue: themeSelected})
        // console.log(this.state.dropDownValue)
        
        
    }
    render(){
    return(
        <ThemeContextConsumer>
            {({theme, changeTheme}) => (
                <div className = {`${theme}-main-body`}> 
                    <p>Click the button to change the theme</p>
                    <hr/>
                    <button onClick={changeTheme} className = {`${theme}-button`}>Change Theme</button>
                    <form >
                        <select onChange = {e => changeTheme(e.target.value) }> 
                            <option 
                                name="dropDownValue"
                                value = "light"
                                label = "Light Theme"
                                >
                            </option>
                            <option 
                                name="dropDownValue" 
                                value = "dark"
                                label="Dark Theme">
                                </option>
                            <option 
                                name= "dropDownValue"
                                value = "goofy"
                                label = "Goofy Theme">
                            </option>
                        </select>
                        
                    </form>
                </div>
            )}
        </ThemeContextConsumer>
    )
  }
}

export default Body