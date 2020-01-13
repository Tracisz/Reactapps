import React from "react"
import {ThemeContextConsumer} from "./themecontext"
export default function Footer(){ 
    return( 
        <ThemeContextConsumer>
            {({theme})=> (
                <div className= {`${theme}-footer`}>
                    <span>Created by Travis Racisz in React!</span>
                </div>

            )}
        </ThemeContextConsumer>
    )
}

