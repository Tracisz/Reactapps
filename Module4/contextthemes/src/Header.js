import React from "react"
import {ThemeContextConsumer} from "./themecontext.js"
function Header(){ 
    return(
        <ThemeContextConsumer>
            {({theme})=> (
                <div className ={`${theme}-nav-bar`}>
                    <span>Home</span>
                    <span>About</span>  
                    <span>Contact</span>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Header