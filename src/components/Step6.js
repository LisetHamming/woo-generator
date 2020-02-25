import React, { Component, useState } from "react"


function Step6(){
	return(
			<div>
			<h2>Alles of specifiek?</h2>
			<p>Wil je alle documenten die de overheidsinstantie heeft over je onderwerp? Of weet je al precies welke documenten je wilt hebben. Maak je keuze. <link>ietje</link> </p>
				<form>
      			 	
      			 	<input onChange={changeHandlerCheckbox} id="subjectSpecific" type="radio" checked={value.subjectSpecific} name="checkSubject" value="subjectSpecific" /> Ik wil specifieke documenten opvragen<br/>
			        <input onChange={changeHandlerCheckbox} id="subjectAll" type="radio" checked={value.subjectAll} name="checkSubject" value="subjectAll" /> Ik wil alles over het onderwerp<br/>
      			 </form>
      			 <LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
				<link to="/Step5">vorige pagina</link>
				<link to="/Step7">volgende pagina</link>
			</div>
		)
}
export default Step6