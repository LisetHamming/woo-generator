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

function Step7({ value, filteredDataText, changeHandlerUser, clickHandlerSubjectPeriod }) {
    return (
        <div>
			<h2>Alles over je onderwerp - Periode</h2>
			<p>Selecteer hier de periode waarbinnen je denkt dat er voor jou interessante informatie beschikbaar is. Door de periode in te perken voorkom je dat je irrelevante informatie ontvangt en de wob-ambtenaren nodeloos lang bezig zijn met je verzoek. </p>
				 <form>
				 	
				 	<label> Van
			           <input value={value.subjectDateStart} onChange={changeHandlerUser} id="subjectDateStart" type="date" name="subjectDate" onfocus="(this.type='date')" placeholder="22-11-2019" /><br/>
			        </label>
			        <label> Tot
			           <input value={value.subjectDateEnd} onChange={changeHandlerUser}id="subjectDateEnd" type="date" name="subjectDate" placeholder="31-12-2019"/><br/>
			        </label>
			       
      			 </form>	
      			

      			<p>Denk goed na welke periodes wel of niet nuttig zijn.</p><PopupButton number="15" />
				<Link to="/Step6">vorige pagina</Link>
				<Link to="/Step9">volgende pagina</Link>
				 <LetterUI value={value} 
      			 		   filteredDataText={filteredDataText} />
			</div>
    )
}
export default Step7