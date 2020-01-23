import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

class MovieContextProvider extends Component{ 
    constructor(){ 
        super()
        this.state = { 
            movieList: [], 
            movieSearch: "", 
            moviePages: 0, 
            count: 1, 
            movieToDisplay: {},
        }
    }
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://www.omdbapi.com/?apikey=1c37308b&s=${this.state.movieSearch}`)
            .then(res => res.json())
            .then((result) => {
                  this.setState({
                    movieList: result.Search,
                    moviePages: Math.floor(result.totalResults / 10)
                  })
                })
                .catch(err => console.log(err))
    }
    nextPage = () => {
        fetch(`http://www.omdbapi.com/?apikey=1c37308b&s=${this.state.movieSearch}&page=${this.state.count + 1}`)
            .then(res => res.json())
            .then((result) => { 
                this.setState((prevState) => {
                 return {
                    movieList: result.Search,
                    count: prevState.count + 1
                 }
                })
            })
        
    }
    previousPage = () => {
        fetch(`http://www.omdbapi.com/?apikey=1c37308b&s=${this.state.movieSearch}&page=${this.state.count - 1}`)
            .then(res => res.json())
            .then((result) => { 
                this.setState((prevState) => {
                    return {
                       movieList: result.Search,
                       count: prevState.count - 1
                    }
                   })
               })
    }
          

    handleChoice = (e) => {
        e.preventDefault()
        let movieChoice = e.target.name
        console.log(movieChoice)
        fetch(`http://www.omdbapi.com/?apikey=1c37308b&i=${movieChoice}&plot=full`)
        .then(res => res.json())
        .then((result) => {
        this.setState({
            movieToDisplay: result
        })

        console.log(555, this.state.movieToDisplay)
        })
    }

    render(){ 
        return( 
            <Provider value = {
                {
                    movieList: this.state.movieList,
                    movieSearch: this.state.movieSearch,
                    moviePages: this.state.moviePages, 
                    count: this.state.count,
                    handleSubmit: this.handleSubmit,
                    nextPage: this.nextPage,
                    previousPage: this.previousPage,
                    handleChange: this.handleChange,
                    handleChoice: this.handleChoice,
                    movieToDisplay: this.state.movieToDisplay,

                    }
                }>
                {this.props.children}
            </Provider>
        )
    }
}


export  {MovieContextProvider, Consumer as MovieContextConsumer}