7import React from "react";
import mypic from '../../assets/mypic.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";
import './hero.css';
const Hero=()=>{
    return(
        <div className='hero' id="home">
             <img src={mypic} alt="" height={200} width={200}></img>
             <h1><span>I'm Salman Hashmi , </span>full-stack developer.</h1>
             <p>
                I build modern web applications using React & Node.js <br/>
                passionate Full Stack Developer eager to build and learn.
            </p>
             
             <div className="hero-action">
                <div className="hero-connect"><AnchorLink className="anchor-link"  href="#contact">Connect With me</AnchorLink></div>
                <div className="hero-resume"><a  href="#" target="_blank" rel="noopener noreferrer">My Resume</a></div>
            

             </div>
        </div>
    )
}
export default Hero
