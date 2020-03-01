import React, { Component, useState } from "react"
import LetterUI from "./LetterUI"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Step9({ changeHandlerCheckbox, value, filteredDataText }) {
    return (
        <div>
			<h2>Alles over je onderwerp - Welke documenttypes?</h2>
				 <form>
				 	     			 	
      			 	<input onChange={changeHandlerCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectMeeting} name="checkSubjectType" value="subjectSpecific" /> Vergaderstukken<br/>
			        <input onChange={changeHandlerCheckbox} id="subjectReports" type="checkbox" checked={value.subjectReports} name="checkSubjectType" value="subjectAll" /> Rapporten & presentaties<br/>
 					<input onChange={changeHandlerCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectMeeting} name="checkSubjectType" value="subjectSpecific" /> Correspondentie en gespreksverslagen<br/>
			        <input onChange={changeHandlerCheckbox} id="subjectReports" type="checkbox" checked={value.subjectReports} name="checkSubjectType" value="subjectAll" /> Financiele documenten<br/>
 					<input onChange={changeHandlerCheckbox} id="subjectMeeting" type="checkbox" checked={value.subjectMeeting} name="checkSubjectType" value="subjectSpecific" /> Datasets<br/>
			        <input onChange={changeHandlerCheckbox} id="subjectReports" type="checkbox" checked={value.subjectReports} name="checkSubjectType" value="subjectAll" /> Anders<br/>

      		</form>	
      			 
      	<p>Welke informatie moet de overheid openbaar maken.<button>ietje</button></p>
      	<p>Denk goed na welke documenten, zoals e-mails, wel of niet nuttig zijn.<button>ietje</button></p>
				<Link to="/Step8">vorige pagina</Link>
				<Link to="/Step10">volgende pagina</Link>
				<LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
			</div>
    )
}
export default Step9