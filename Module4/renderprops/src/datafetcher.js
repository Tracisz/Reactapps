import React, {Component} from "react"

class DataFetcher extends Component {
    state = {
        loading: true,
        data: null
    }
    
    componentDidMount() {
        this.setState({loading: true})
        fetch(this.props.site)
                .then(res => res.json())
                .then(data => this.setState({data: data, loading: false}))
                .catch(err => console.warn("111", err))
    }

    
    
    render() {
        return (
            <div> 
                {this.props.children({loading: this.state.loading, data: this.state.data, ...this.props})}
            </div>
            
            /**
             * Part 1: Figure out what you're returning here. You should pass the 
             * loading state and the data state through to the component needing it.
             * 
             * Remember: the render props pattern allows us to separate the data 
             * and logic (like fetching data and setting the loading state) from 
             * the UI (JSX). Think about which one of those this component is in 
             * charge of. You'll need to pass both pieces of state to whatever 
             * component is making use of the DataFetcher
             * 
             * Also, there's more than one "correct" way to make use of the render
             * props pattern. Check App.js to determine which way it's being implemented
             * in this challenge.
             */
        )
    }
}

export default DataFetcher