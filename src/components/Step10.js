import React, { Component, useState } from "react"
import Popup from "./popups/Popup"
import PopupButton from "./popups/PopupButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import LetterUI from "./LetterUI"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Step10({ value, filteredDataText, exportHTMLDoc }) {
    return (
        <div>
				<h2>Laatste check!</h2>
				 <p>{value.subjectLong}</p>
	
				<Link to="/Step9">vorige pagina</Link>
				<div> 		
      				<h2>Exporteren!</h2>
      				<p>Download je bestand hier!</p>   
	      			<button onClick={exportHTMLDoc}>Opslaan als DOC</button> 
	      			<button onClick={window.print}>Opslaan als PDF</button>
	      		</div>	

				
								<LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
		   
			</div>
    )
}
export default Step10