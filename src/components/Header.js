import React from 'react'
import {
    Link
  } from "react-router-dom";
  
export default function Header({toggle,switchToggle}) {
    return (
        <header>
            <div className="wrapper">
            <ul className="nav">
            <li className="nav__link" ><Link  to="/">Home</Link></li>
            <li className="nav__link" ><Link to="/about">About</Link></li>
            <li className="nav__link" ><Link to="contact">Contact</Link></li>
            <li className="nav__link" > <div className={toggle?"switch-btn":"switch-btn switch-on"} onClick={()=>switchToggle()} ></div></li>
            
        </ul>
    </div>
        <div className="bg-white">
            <div className="wrapper">
                <div className="header">
                    <div className="logo">React Gallery</div>
                </div>
            </div>
        </div>
        </header>
    )
}
