import React from "react";
import engmates from './assets/engmates.svg'
import './App.css'

function Header(){
    return(
        <div className="header" >
            <div className="logo">
            <a href="">
            <img src={engmates} alt="engmates" width="200px" height="75px" />
            </a>
            </div>
            
            <nav id="navbar" className="navbar">
				<ul>
					<li className="hide"><a className="nav-link scrollto menu-btn" href="#benefits">Benefits</a></li>
					<li className="hide"><a className="nav-link scrollto menu-btn" href="#curriculum">Curriculum</a></li>
					<li className="hide"><a className="nav-link scrollto menu-btn" href="#people">Reviews</a></li>
					<li className="hide"><a className="nav-link scrollto menu-btn" href="#faq">FAQs</a></li>
					<li className="whats" id="whatsappButton">
                      WhatsApp Us
					</li>
				</ul>
			</nav>
            
        </div>
    )

}

export default Header;