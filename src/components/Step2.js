import React, { Component, useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Step2({value, changeHandlerUser, changeHandlerCheckbox}){

	return(
			<div>
			<h2>Voor wie en waarom WOB je?</h2>
				<form>	
					<label>Ik ben een journalist
						<input id="userJournalist" value="userJournalist" checked={value.userJournalist} onChange={changeHandlerCheckbox} type="checkbox" /><br/>
					</label>
					<label>Ik Wob namens een (media-) organisatie
						<input id="userCompany" value="userCompanyName" checked={value.userCompanyName} onChange={changeHandlerCheckbox} type="checkbox" /><br/>
					</label>
					{value.userCompanyName&&
					<label>Naam organisatie
						<input id="userCompanyNameInput" value={value.userCompanyNameInput} onChange={changeHandlerUser} type="text"/><br/>
					</label>
					}
					<label>Ik wil mijn doel toelichten
						<input id="userNeedsGoal" value="userNeedsGoal" checked={value.userNeedsGoal} onChange={changeHandlerCheckbox} type="checkbox" /><br/>
					</label>
					{value.userNeedsGoal&&		
					<label>Journalistieke doel (verplicht)
						<input id="userGoalInput" value={value.userGoalInput} onChange={changeHandlerUser} type="text"/><br/>
					</label>
					}								
				</form>
				<Link to="/Step1">vorige pagina</Link>
				<Link to="/Step3">volgende pagina</Link>
			</div>
		)
	}
}
export default Step2