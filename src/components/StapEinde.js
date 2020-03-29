import React, { Component, useState } from "react"
import Popup from "./popups/Popup"
import PopupButton from "./popups/PopupButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import LetterUI from "./LetterUI"
import logo from "../assets/logo.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function StapEinde({ value, filteredDataText, exportHTMLDoc }) {
    return (
        <div className="formLetter">
         <img className="logoWob" src={logo}/>
				<h2>Laatste check!</h2>
				 <p className="extraPadding">Wob-verzoek met onderwerp: {value.subjectLong}</p>
	
				<Link to="/StapExtra">vorige pagina</Link>
				<div> 		
      				<h2 className="extraPaddingh2">Exporteren!</h2>
      				<p>Download je bestand hier!</p>   
	      			<button className="buttonStyle" onClick={exportHTMLDoc}>Opslaan als DOC</button> 
	      			<button className="buttonStyle" onClick={window.print}>Opslaan als PDF</button>
	      		</div>	

				
								<LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
		   
			</div>
    )
}
export default StapEinde