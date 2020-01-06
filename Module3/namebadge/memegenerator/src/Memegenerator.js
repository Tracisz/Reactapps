import React, { Component } from "react"


class Memegenerator extends Component{ 
    constructor(){ 
        super()
        this.state = { 
            topText: "",
            bottomText: "", 
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemesImgs: []

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes)
                this.setState({ allMemesImgs: memes })
            })
            
    }
    handleChange(e){ 
        let nam = e.target.name
        let val = e.target.value
        this.setState({[nam]: val})
    }  

    handleSubmit(e){ 
        e.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemesImgs.length)
        console.log(randomNum)
        const imgUrl = this.state.allMemesImgs[randomNum].url
        this.setState({
            randomImg: imgUrl
        })
        console.log("fired", this.state.allMemesImgs[0].url)
    }
    render(){ 
        
        return( 
            <div> 
                <form className = "meme-form"
                    onSubmit = {this.handleSubmit}> 
                    <input
                        type = "text"
                        placeholder = "Top Text"
                        value = {this.state.topText}
                        name = "topText"
                        onChange = {this.handleChange}
                        >
                    </input>
                    <input 
                        type = "text"
                        placeholder = "Bottom Text"
                        value = {this.state.bottomText}
                        name = "bottomText"
                        onChange = {this.handleChange}
                        >
                    </input>
                    <button>GEN</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default Memegenerator