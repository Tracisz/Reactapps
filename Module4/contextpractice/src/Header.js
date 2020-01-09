import React from "react"
import usernameContext from "./UsernameContext"

function Header(){
        return (
            <usernameContext.Consumer>
                {username => (
                <header>
                    <p>Welcome, {`${username}`}</p>
                </header>
                )}
            </usernameContext.Consumer>
        )    
    }


export default Header
