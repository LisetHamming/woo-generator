import React, { Component, useState } from "react"
import Popup from "./popups/Popup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Step2({ value, changeHandlerUser, changeHandlerCheckbox, changeHandlerCompanyName }) {
    const [popUp, setPopUp] = useState(false)

    return (
        <div>
				<h2>Voor wie en waarom WOB je?</h2>
				<form>	
					<label>Ik ben een journalist 
						<input id="userJournalist" value="userJournalist" checked={value.userJournalist} onChange={changeHandlerCheckbox} type="checkbox" />
					</label><button type="button" className="popupI" onClick={()=>setPopUp(curr=>!curr)}><FontAwesomeIcon className="fontIcon" icon={faInfoCircle} /></button>{popUp&& <Popup number={"1"} clickHandler={()=>setPopUp(false)} />}<br />
					<label>Ik Wob namens een (media-) organisatie
						<input id="userCompany" value="userCompanyName" checked={value.userCompanyName} onChange={changeHandlerCompanyName} type="checkbox" /><br/>
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
export default Step2