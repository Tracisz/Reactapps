import React from 'react';
import Dice from "./Dice"
let count = 0

class App extends React.Component {
  constructor(){ 
    super()
    this.state = { 
      num1: Math.floor(Math.random() * 6) + 1,
      num2: Math.floor(Math.random() * 6) + 1,
      num3: Math.floor(Math.random() * 6) + 1,
      num4: Math.floor(Math.random() * 6) + 1,
      num5: Math.floor(Math.random() * 6) + 1,
      num6: Math.floor(Math.random() * 6) + 1,
    }
  }

  rollDice(){ 
    
    this.setState({ 
      num1: Math.floor(Math.random() * 6) + 1,
      num2: Math.floor(Math.random() * 6) + 1,
      num3: Math.floor(Math.random() * 6) + 1,
      num4: Math.floor(Math.random() * 6) + 1,
      num5: Math.floor(Math.random() * 6) + 1,
      num6: Math.floor(Math.random() * 6) + 1,
    })
    console.log("fired")
    count++
    if(count >= 3){ 
      this.setState({
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      num6: 0,
      })
      count = 0
    }
  }
  render(){ 
    return (
      <div>
        <button onClick = {this.rollDice.bind(this)}>Roll the dice</button>
        
        <Dice number = {this.state.num1}/>
        <Dice number = {this.state.num2}/>
        <Dice number = {this.state.num3}/>
        <Dice number = {this.state.num4}/>
        <Dice number = {this.state.num5}/>
        <Dice number = {this.state.num6}/>
       
      </div>
    )

  }
}

export default App;
