import React, { Component, useState } from "react"
import LetterUI from "./LetterUI"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Step6({ value, filteredDataText, changeHandlerCheckbox }) {
    return (
        <div>
			<h2>Alles of specifiek?</h2>
			<p>Wil je alle documenten die de overheidsinstantie heeft over je onderwerp? Of weet je al precies welke documenten je wilt hebben. Maak je keuze. <button>ietje</button> </p>
				<form>
      			 	
      			 	<input onChange={changeHandlerCheckbox} id="subjectSpecific" type="radio" checked={value.subjectSpecific} name="checkSubject" value="subjectSpecific" /> Ik wil specifieke documenten opvragen<br/>
			        <input onChange={changeHandlerCheckbox} id="subjectAll" type="radio" checked={value.subjectAll} name="checkSubject" value="subjectAll" /> Ik wil alles over het onderwerp<br/>
      			 </form>

				<Link to="/Step5">vorige pagina</Link>
				<Link to="/Step7">volgende pagina</Link>
				<LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
			</div>
    )
}
export default Step6