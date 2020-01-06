import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){ 
    super()
    this.state = {
      value: ""
    }
    this.handleChange = this.handleChange.bind(this)
    }
    handleChange(){ 
      this.setState(value)
  }
  render(){
    return (
      <div className="App">
        <input 
          type = "text"
          placeholder = "enter a name"
          value = {this.state.value}
          onChange = {this.handleChange}
          /> 

      </div>
    );
  }
}

export default App;
