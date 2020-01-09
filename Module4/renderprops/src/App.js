import React from "react"
import DataFetcher from "./datafetcher"

function App() {    
    return (
        <div>
            <DataFetcher site="https://swapi.co/api/people/1">
                {
                  ({loading, data}) => {
                    return(
                    <h1>{JSON.stringify(data)} {loading ? "loading..." : ""}</h1>
                    )
                  }
                }
            </DataFetcher>
        </div>
    )
}

export default App
