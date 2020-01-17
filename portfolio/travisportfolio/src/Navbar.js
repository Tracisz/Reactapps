import React from "react"
import Card from "./Card"
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function Navbar(){ 
    return (
        <>
            <div className = "landing-page"> 
                <div className = "intro-message">
                    <h2 className = "intro-text"> Hi, I'm <span style = {{color:"#000080"}}><b>Travis</b>.</span> I am a full stack Web Developer and a Cyber Security Analyst. I strive to produce simple and elegant solutions. </h2>
                    <ButtonGroup variant="text" color="none" aria-label="text primary button group">
                        <Button>Home</Button>
                        <Button>About</Button>
                        <Button>Projects</Button>
                        <Button>Contact</Button>
                    </ButtonGroup>
                </div>
            </div>
            <Card />
        </>
    )
} 