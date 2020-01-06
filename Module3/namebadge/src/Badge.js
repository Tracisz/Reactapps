import React, { Component } from "react"


class Badge extends Component{ 
    createBadge(items){ 
        return(
            <div className = "div-container">
                <h1 className = "input2">Badge</h1>
                <h3>Name: {items.firstName} {items.lastName}</h3>
                <h3>Email: {items.email}</h3>
                <h3>Place of Birth: {items.placeOfBirth}</h3>
                <h3>Phone Number: {items.phoneNumber}</h3>
                <h3>Favorite Food: {items.favoriteFood}</h3>
                <h3>About: {items.paragraph}</h3>
            </div>
        )
    }
    render(){
        return(
            <div> 
                {this.props.badgeList.map(this.createBadge)}
            </div>
        )
    }
    
}


export default Badge