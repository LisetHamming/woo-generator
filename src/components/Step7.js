import React, { Component, useState } from "react"


function Step7(){
	return(
			<div>
			<h2>Welke informatie zoek je?</h2>
			<p>Begin met het kort en bondig omschrijven van het onderwerp waarover je informatie vraagt. Let op: je kunt alleen informatie over overheidstaken opvragen. <link>ietje</link></p>
			<p>Omschrijf je onderwerp eerst in enkele trefwoorden, dit komt bovenaan de brief te staan. Omschrijf vervolgens je onderwerp in een of enkele zinnen. Dit komt in de lopende tekst van je brief.</p>	
				 <form>
				 	
				 	<label> Onderwerp in trefwoorden (verplicht)
			           <input value={value.subjectShort} onChange={changeHandlerUser} id="subjectShort" type="text" name="subjectinfo" placeholder="trefwoord 1" /><br/>
			        </label>
			        <label> Onderwerp in lopende tekst (verplicht)
			           <input value={value.subjectLong} onChange={changeHandlerUser}id="subjectLong" type="text" name="subjectinfo" placeholder="Vul hier je onderwerp kort en bondig in, bijvoorbeeld 'boetes voor snelheidsovertredingen in Friesland'  "/><br/>
			        </label>
			        <label>
			        	<input onChange={changeHandlerCheckbox} id="subjectMilieu" type="checkbox" checked={value.subjectMilieu} name="subjectInfo" value="subjectMilieu" /> Dit onderwerp gaat over milieu<br/>
			        </label>   
      			 </form>	
      			 <LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
				<link>vorige pagina</link>
				<link>volgende pagina</link>
			</div>
		)
}
export default Step7