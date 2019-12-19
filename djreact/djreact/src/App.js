import './App.css';
import Squares from './squares';
import React from "react"

class App extends React.Component{
  constructor(){ 
    super()
    this.state = { 
      color: ["white", "white", "white", "white"]
  }
}
  
  changeAllSquareColor(){ 
    if(this.state.color[0] === "white"){
        this.setState({ 
            color: ["pink", "pink", "pink", "pink"]
        })
        } else { 
            this.setState({ 
                color: ["white", "white", "white", "white"]
            })
        }
      }

      changeTopTwoColors(){ 
        if(this.state.color[0] === "white"){
          this.setState({ 
              color: ["yellow", "yellow", this.state.color[2], this.state.color[3]]
          })
          } else { 
            this.setState({ 
              color: ["white", "white", this.state.color[2], this.state.color[3]]
          }
            )}
        }   

        changeBottomLeftColors(){ 
          if(this.state.color[2] === "white"){
            this.setState({ 
                color: [this.state.color[0], this.state.color[1], "orange", this.state.color[3]]
            })
            } else { 
              this.setState({ 
                color: [this.state.color[0], this.state.color[1], "white", this.state.color[3]]
            }
              )}
          } 
          
          changeBottomRightColors(){ 
            if(this.state.color[3] === "white"){
              this.setState({ 
                  color: [this.state.color[0], this.state.color[1], this.state.color[2], "black"]
              })
              } else { 
                this.setState({ 
                  color: [this.state.color[0], this.state.color[1], this.state.color[2], "white"]
              }
                )}
            }   
  

      
    
  render(){
    const grid = { 
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows:"repeat(4, 1fr)",

    }
    const button = { 
      gridColumn: "1/ -1", 
      gridRow: "1/2"
    }
    const button1 = { 
      gridColumn: "1/ -1", 
      gridRow: "2/3"
    }



  return (
    <div style={grid} >
      <button style = {button} onClick = {this.changeAllSquareColor.bind(this)}>Change Color</button>
      <button style = {button1} onClick = {this.changeTopTwoColors.bind(this)}>Change top two colors</button>
      <button onClick = {this.changeBottomLeftColors.bind(this)}>Change Bottom left</button>
      <button onClick = {this.changeBottomRightColors.bind(this)}>Change Bottom right</button>
      <Squares color = {this.state.color[0]} gridColumn = {"1/2"} gridRow = {"1/2"}/>
      <Squares color = {this.state.color[1]} gridColumn = {"1/2"} gridRow = {"1/2"}/>
      <Squares color = {this.state.color[2]} gridColumn = {"2/3"} gridRow = {"2/3"}/>
      <Squares color = {this.state.color[3]} gridColumn = {"2/3"} gridRow = {"2/3"}/>
   </div>
  )}
}

export default App;
