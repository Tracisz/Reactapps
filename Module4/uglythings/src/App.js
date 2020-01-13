import React, { Component } from 'react';
import {UglyThingsContextConsumer} from "./Uglythingscontext"

class App extends Component {
  constructor(){ 
    super()
    this.state = [{ 
      newUrl: "", 
      newTitle: "", 
      newDescription: ""
    }]

  }
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
}
  render(){
  return (
    <UglyThingsContextConsumer>
      {({value, newInput}) =>(
      <form>
        <input
          type="text"
          value= {this.state.newUrl}
          name="newUrl"
          placeholder="Image URL"
          onChange={this.handleChange}>
        </input>
        <input 
          type = "text"
          value= {this.state.newTitle}
          name= "newTitle" 
          placeholder="Title"
          onChange={this.handleChange}
          >
        </input>
        <input
          type="text"
          name="newDescription"
          value={this.state.newDescription}
          placeholder="Description"
          onChange={this.handleChange}>
        </input>
        <input
          type="submit"
          onClick ={() => newInput(this.state)}>
        </input>
      </form>
      )}
      </UglyThingsContextConsumer>
  );
   }
}

export default App;
