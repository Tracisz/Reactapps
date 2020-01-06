import React, { Component } from 'react'
import './App.css'
import TodoList from "./Todolist.js"

class App extends Component {
  constructor(){ 
    super()
    this.state = {
      items: [], 
      currentItem: {text:"", key: ""},
    }
    this.inputElement = React.createRef()
  }
  handleInput = e =>{
    const itemText = e.target.value
    const currentItem = {text: itemText, key: Date.now()}
    this.setState({
      currentItem,
    })
    console.log("I am handling input!")
    
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
    }
  }
  render() {
    return (
      <div className="App">
        <TodoList 
          inputElement = {this.inputElement} 
          addItem = {this.addItem}
          handleInput = {this.handleInput}
          currentItem = {this.state.currentItem}
          entries = {this.state.items}/>
      </div>
    )
  }
}
export default App
