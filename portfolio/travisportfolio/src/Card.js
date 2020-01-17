import React from "react"
// import Button from '@material-ui/core/Button';

function Card(){ 
    return( 
        <div className = "card"> 
            <h1 style = {{textAlign:"center", marginTop: "10pt"}}><b>About</b></h1>
            <div className = "about-container">
                <h2 className = "about-text">6 years ago I began my journey into the information technology field. I joined the United States Air Force as a cyber security analyst. I obtained my bachelors of science in cyber security. After seperating from the Air Force I decided that I wanted to become a software developer so I attended a bootcamp at Vschool in SLC, UT. I strive to continue learning and growing in any team that I join. </h2>
            </div>

            <h1 style = {{textAlign:"center", marginTop: "50pt"}}>Projects</h1>
                <div className = "about-container"> 
                    <div className = {"project-card"}> 
                        Project 1
                    </div>
                    <div className = {"project-card"}> 
                        Project 2
                    </div>
                </div>
        </div>
    )
}

export default Card