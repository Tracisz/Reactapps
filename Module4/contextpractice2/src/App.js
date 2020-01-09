import React, { Component } from "react"

import Header from "./Header"
import {UserContextConsumer} from "./userContext"

class App extends Component {
  state = { 
    newUserName: ""
  }
  handleChange = (e) => { 
    const {name, value} = e.target
    this.setState({[name]: value})
  }
  render(){
    return (
      <div>
        <Header />
          <UserContextConsumer>
            {({username, userNameChange}) => (
              <main>
                <p className="main">No new notifications, {username}! 🎉</p>
                  <input
                    type="text"
                    name="newUserName"
                    placeholder="New username"
                    value={this.state.newUserName}
                    onChange={this.handleChange}
                    />
                    <button onClick = {() => userNameChange(this.state.newUserName)}>Change Username</button>
              </main>
              )}
            </UserContextConsumer>
        </div>
    )
  }
}

export default App