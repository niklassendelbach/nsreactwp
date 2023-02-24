import React from "react"
import {FaGithub, FaLinkedin } from 'react-icons/fa';
import { IconContext } from "react-icons";

export const Footer = () => {    
    return (
        <footer>
        <div className="copyright"></div>
        <IconContext.Provider value={{ color: "grey", style:{verticalAlign: 'middle'}, size: 50 }}>
        <figure>
           <a href="https://linkedin.com/in/niklassendelbach" rel="noreferrer" target="_blank"><h1><FaLinkedin className="link-logo"/></h1></a>
        </figure>
        <div>
        <a href="https://github.com/niklassendelbach" rel="noreferrer" target="_blank"><h1><FaGithub className="link-logo" /></h1></a>
        </div>
        </IconContext.Provider>
    </footer>
            )
}