import React from "react"
import usernameContext from "./UsernameContext"
import Header from "./Header"

function App() {
    return (
            <usernameContext.Consumer>
                {username => (
                    <div>
                        <Header />
                        <main>
                            <p className="main">No new notifications, {`${username}`}! 🎉🎉🎉🎉</p>
                        </main>
                    </div>

                )}
            </usernameContext.Consumer>
       
    )
    }


App.contextType = usernameContext

export default App
