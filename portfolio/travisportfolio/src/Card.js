import React from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Project1logo from "/Users/student/dev/React-apps/portfolio/travisportfolio/src/MovieAPI.png"
import Project2logo from "/Users/student/dev/React-apps/portfolio/travisportfolio/src/images/hashfiles.png"
import {MdEmail} from "react-icons/md"
import { IconContext } from "react-icons";
import {FaLinkedin} from "react-icons/fa"



function Cards(){ 
    return( 
        <>
        <div className = "main-card"> 
            <h1 id = "About" style = {{textAlign:"center", marginTop: "10pt"}}><b>About</b></h1>
            <div className = "about-container">
                <h2 className = "about-text">6 years ago I began my journey into the information technology field. I joined the United States Air Force as a cyber security analyst. I obtained my bachelors of science in cyber security. After seperating from the Air Force I decided that I wanted to become a software developer so I attended a bootcamp at Vschool in SLC, UT. I strive to continue learning and growing in any team that I join. </h2>
            </div>

            <h1 id = "Projects" style = {{textAlign:"center", marginTop: "60pt"}}>Projects</h1>
                <div className = "about-container"> 
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {Project1logo}/>
                    <Card.Body>
                        <Card.Title>CineSearch</Card.Title>
                        <Card.Text bsPrefix = "project-card-text">
                        This project uses the OMDB API to allow a user to search for a movie title and find more details about specific movies. This Project was built using React, CSS, OMDB API, and Bootstrap. 
                        </Card.Text>
                        <Button variant="primary" href = "https://github.com/Tracisz/Reactapps/tree/master/Module4/movieapi">See Source Code</Button>
                        <br></br>
                        <Button variant="secondary" href = "http://cinesearch.surge.sh/">See Live Website</Button>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src= {Project2logo}/>
                    <Card.Body>
                        <Card.Title>SHA256 file hasher</Card.Title>
                        <Card.Text bsPrefix = "project-card-text">
                            This project uses React, React particles, and the CryptoJS library to create a SHA256 hash for files that are uploaded to the users browser. 
                            <br></br> <br></br> <br></br>
                        </Card.Text>
                        <Button variant="primary" href = "https://github.com/Tracisz/Reactapps/tree/master/portfolio/hashfiles">See Source Code</Button>
                        <br></br>
                        <Button variant="secondary" href="http://filehasher.surge.sh/">See Live Website</Button>
                    </Card.Body>
                    </Card>
                </div>
                <h1 id = "Contact" style = {{textAlign:"center", marginTop: "90pt"}}><b>Get in Touch</b></h1>
                <IconContext.Provider value={{ color: "black", className: "icons" }}>
                    <div className = "icon-container">
                        <a href = "mailto:Tracisz@hotmail.com"><MdEmail /></a>
                        <a href = "https://www.linkedin.com/in/travis-racisz-a5780682/"><FaLinkedin/></a>
                    </div>
                </IconContext.Provider>
        </div>
        </>
    )
}

export default Cards