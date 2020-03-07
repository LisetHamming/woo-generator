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

function Step5({ value, changeHandlerCheckbox, changeHandlerUser, filteredDataText }) {

    return (
        <div>
			<h2>Welke informatie zoek je?</h2>
			<p>Begin met het kort en bondig omschrijven van het onderwerp waarover je informatie vraagt. Let op: je kunt alleen informatie over overheidstaken opvragen.</p><PopupButton number="8" /><br />
			<p>Omschrijf je onderwerp eerst in enkele trefwoorden, dit komt bovenaan de brief te staan. Omschrijf vervolgens je onderwerp in een of enkele zinnen. Dit komt in de lopende tekst van je brief.</p>	
			       	<form>
			        <label> Onderwerp in lopende tekst (verplicht)
			           <input value={value.subjectLong} onChange={changeHandlerUser}id="subjectLong" type="text" name="subjectinfo" placeholder="Vul hier je onderwerp kort en bondig in, bijvoorbeeld 'boetes voor snelheidsovertredingen in Friesland'  "/><br/>
			        </label>
			        <label>
			        	<input onChange={changeHandlerCheckbox} id="subjectMilieu" type="checkbox" checked={value.subjectMilieu} name="subjectInfo" value="subjectMilieu" /> Dit onderwerp gaat over milieu<br/>
			        </label>  <PopupButton number="9" /><br /> 
      			 	</form>
      			
				<Link to="/Step4">vorige pagina</Link>
				<Link to="/Step6">volgende pagina</Link>
				 <LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
			</div>
    )
}
export default Step5