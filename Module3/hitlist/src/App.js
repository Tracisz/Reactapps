import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
  constructor(){ 
    super()
    this.state = { 
      hitList: []
    }
    this.createHit = this.createHit.bind(this)
  }
  createHit(items){ 
    console.log(this.state.hitList)
    return(
      <div className = "container">
        <img alt = "" src = {items.image}></img>
        <p>Target: {items.name}</p>
      </div>
    )
  }
  componentDidMount(){ 
      fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
        .then(res => res.json())
        .then(data => this.setState({
          hitList: data
          
        }))
  }

  render(){
  return (
    <div className="App">
      <Navbar />
      {this.state.hitList.map(this.createHit)}

    </div>
  );
  }
}

export default App;
