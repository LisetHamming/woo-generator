import React, { Component, useState } from "react"


function Step9(){
	return(
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
      			 <LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
      			<p>Welke informatie moet de overheid openbaar maken.<link>ietje</link></p>
      			<p>Denk goed na welke documenten, zoals e-mails, wel of niet nuttig zijn.<link>ietje</link></p>
				<link>vorige pagina</link>
				<link>volgende pagina</link>
			</div>
		)
}
export default Step9