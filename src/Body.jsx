import React from "react";
import engmates from './assets/engmates.mp4'
import './App.css'
import placeholder from './assets/placeholder.png'

function Body(){
    return(
    <div className="bodycontainer">
            <div className="bodycolumn-1">
                <h1><strong>English Speaking Institute in Tilak Nagar</strong></h1> 
                <h2>Delhi's,<strong style={{color:"black"}}> #1 </strong> English Speaking Institute with <span style={{color:"#C77201", fontWeight:"900"}}>Proven Track Record.</span></h2>
                <div className="anchor"><a className="bodyanchor">Call For Consultation<i className="bi bi-arrow-right"></i></a></div>
                <div className="para"><p className="bodypara"><strong style={{color:"black"}}>1,00,000+</strong>students enrolled till date</p></div>
                <div className="block">Batch Starting on Monday...</div>
            </div>
            <div className="bodycolumn-2">
            <video className="video_on" width="560" height="315" autoplay="" controls loop poster={placeholder}>
                    <source src={engmates} type="video/mp4" />
                    <source src={engmates} type="video/ogg" />
                </video>
            </div>
        
    </div>)
}

export default Body;