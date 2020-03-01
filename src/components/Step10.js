import React, { Component, useState } from "react"
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
				 <p>{value.subjectShort.map((subject, index) => subject)}</p>
	
				<Link to="/Step9">vorige pagina</Link>
				<div> 		
      				<h2>Exporteren!</h2>
      				<p>Download je bestand hier!</p>   
	      			<button onClick={exportHTMLDoc}>Opslaan als DOC</button> 
	      			<button>Opslaan als PDF</button>
	      		</div>	

				
								<LetterUI value={value} 
      			 		   filteredDataText={filteredDataText}
      			 		   />
		   
			</div>
    )
}
export default Step10