import React, { Component } from 'react'
import './index.css'
import Badge from "./Badge.js"

class Form extends Component{ 
    constructor(){ 
        super()
        this.state = {
            firstName: "", 
            lastName: "",
            email: "", 
            placeOfBirth: "",
            phoneNumber: "",
            favoriteFood: "",
            paragraph:"",
            badgeList: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
     }
     
     
    handleChange(e){ 
        let nam = e.target.name
        let val = e.target.value
        this.setState({[nam]: val})
    }
    handleSubmit(e){ 
        e.preventDefault()
       
        const {firstName, lastName, email, placeOfBirth, phoneNumber, favoriteFood, paragraph} = this.state 
        if(!Number(phoneNumber)){ 
            alert("please enter a number in the phone number field")
        } else { 

        
    //create a new badge object from state
        const newBadge = {
            firstName: firstName, 
            lastName: lastName, 
            email: email, 
            placeOfBirth: placeOfBirth, 
            phoneNumber: phoneNumber, 
            favoriteFood: favoriteFood, 
            paragraph: paragraph 
        }
    //add the new badge to the previous badgeList
     //Resetting the form fields to blank state
        this.setState(prev => {
            return {
                badgeList: [...prev.badgeList, newBadge],
                firstName: "",
                lastName: "",
                email: "", 
                placeOfBirth: "", 
                phoneNumber: "", 
                favoriteFood: "", 
                paragraph: "",
                
            }
        })
    }
        console.log(this.state.badgeList)
    }
    render(){ 
        const {firstName, lastName, email, placeOfBirth, phoneNumber, favoriteFood, paragraph} = this.state  
        const isEnabled = firstName.length > 3  && lastName.length > 3 && email.length > 3 && phoneNumber.length > 3 && favoriteFood.length > 3 && paragraph.length > 3 && placeOfBirth.length > 3 
       
        return(
            <div>
                <form className = "div-container"
                    onSubmit = {this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder = "First Name"
                        className = "input1"
                        name = "firstName"
                        value = {this.state.firstName}
                        onChange = {this.handleChange}
                        required
                        />
                    <input 
                        type = "text"
                        placeholder = "Last Name"
                        name = "lastName"
                        value = {this.state.lastName} 
                        onChange = {this.handleChange}
                        required
                        />
                    <input 
                        type="text"
                        placeholder = "Email"
                        name = "email"
                        value = {this.state.email}
                        onChange = {this.handleChange}
                        required
                        />
                    <input 
                        type = "text"
                        placeholder = "Place of Birth"
                        name = "placeOfBirth"
                        value = {this.state.placeOfBirth}
                        onChange = {this.handleChange}
                        required
                        />
                    <input 
                        type = "text"
                        placeholder = "Phone Number"
                        name = "phoneNumber"
                        value = {this.state.phoneNumber}
                        onChange = {this.handleChange}
                        required
                        />
                    <input 
                        type = "text"
                        placeholder = "Favorite Food"
                        name = "favoriteFood"
                        value = {this.state.favoriteFood}
                        onChange = {this.handleChange}
                        required
                        />
                    <textarea 
                        placeholder = "Tell us about yourself"
                        name = "paragraph"
                        className = "input2"
                        value = {this.state.paragraph}
                        onChange = {this.handleChange}
                        required
                        />
                    <button 
                        className="submit"
                        disabled = {!isEnabled}>
                        
                        Submit
                    </button>
                </form>
                <Badge 
                    firstName = {this.state.firstName}
                    lastName = {this.state.lastName}
                    email = {this.state.email}
                    placeOfBirth = {this.state.placeOfBirth}
                    phoneNumber = {this.state.phoneNumber}
                    favortieFood = {this.state.favortieFood}
                    paragraph = {this.state.paragraph}
                    badgeList = {this.state.badgeList}
                />
            </div>
        )
    }
}

export default Form