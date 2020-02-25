import React, { Component, useState } from "react"


function Step8(){
	return(
			<div>
			<h2>Alles over je onderwerp - Periode</h2>
			<p>Selecteer hier de periode waarbinnen je denkt dat er voor jou interessante informatie beschikbaar is. Door de periode in te perken voorkom je dat je irrelevante informatie ontvangt en de wob-ambtenaren nodeloos lang bezig zijn met je verzoek. Je kunt ook meerdere periodes kiezen. <link>ietje</link></p>
				 <form>
				 	
				 	<label> Van
			           <input value={value.subjectDateStart} onChange={changeHandlerUser} id="subjectDateStart" type="date" name="subjectDate" placeholder="22-11-2019" /><br/>
			        </label>
			        <label> Tot
			           <input value={value.subjectDateEnd} onChange={changeHandlerUser}id="subjectDateEnd" type="date" name="subjectDate" placeholder="31-12-2019"/><br/>
			        </label>
			        <button onclick={clickHandlerSubjectPeriod}>Voeg periode toe</button> 
      			 </form>	
      			 <LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
      			<p>Denk goed na welke periodes wel of niet nuttig zijn.<link>ietje</link></p>
				<link>vorige pagina</link>
				<link>volgende pagina</link>
			</div>
		)
}
export default Step8