import React, { Component } from "react"


class TodoList extends Component { 
    createNames(items){ 
        return (
            <div>
                <ul>Your name is: {items.text}</ul>
            </div>
        )
    }
    
    render(){ 
        const nameEntries = this.props.entries
        const listNames = nameEntries.map(this.createNames)        

        return (
            <div>
                
                <form onSubmit = {this.props.addItem}>
                    <input 
                        type = "text"
                        ref = {this.props.inputElement} 
                        placeholder="Name"
                        value = {this.props.currentItem.text} 
                        onChange ={this.props.handleInput}/>
                    <button type="submit"> Add Name </button>
                </form>
                {listNames}
            </div>
        )
    }
}

export default TodoList