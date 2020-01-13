import React, {useState} from "react"
const ThemeContext = React.createContext()

/**
 * Convert this ThemeContextProvider into a functional component that uses hooks
 * Tip: Use the browser dev tools if you run into a bug that isn't clear from the Scrimba console logs
 */

function ThemeContextProvider(props) {
  let [theme, setTheme]= useState("dark")
    
       function toggleTheme(){
        setTheme((prevTheme)=>{
            return prevTheme === "light" ? "dark" : "light"
            
        })
    }
        return (
            <ThemeContext.Provider value={{theme: theme, toggleTheme: toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        )
    }


export {ThemeContextProvider, ThemeContext}