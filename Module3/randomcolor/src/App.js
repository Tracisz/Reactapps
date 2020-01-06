import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){ 
    super()
    this.state = { 
        color: {}
    }
   
  
  }
  
  componentDidMount(){ 
    fetch("http://www.colr.org/json/color/random")
      .then(res => res.json())
      .then(data => this.setState({
        color: data
      }))
  }
  
  render(){
    const randomColor = { 
      backgroundColor: `#${this.state.color.colors ? this.state.color.colors[0].hex : '555'}`,
      height: "100vh"
    }
  return (
    <div style = {randomColor}>

       {(this.state.color.colors && this.state.color.colors[0].hex)}
    </div>
  );
  
  }
}

export default App;
