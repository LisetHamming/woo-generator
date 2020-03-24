import React, { Component, useState } from "react"
import Popup from "./popups/Popup"
import PopupButton from "./popups/PopupButton"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/logo.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Stap1({ value, changeHandlerUser, changeHandlerCheckbox, changeHandlerCompanyName }) {
    const [popUp, setPopUp] = useState(false)

    return (
        <div className="formLetter">
        <img className="logoWob" src={logo}/>
				<h2>Stap 1: Over jezelf</h2>
				<p>Je hoeft geen journalist te zijn om te wobben, maar als je het wel bent kan het handig zijn om dat kenbaar te maken. Je hoeft ook het (journalistieke) doel van je verzoek niet toe te lichten, maar ook hier geldt dat er redenen kunnen zijn om dat wel te doen. Tot slot kun je uit eigen naam of namens een organisatie wobben. Klik op de i’tjes voor meer informatie.</p>
				<form>	
					<span>
					<label className="container">Ik ben een journalist 
						<input id="userJournalist" value="userJournalist" checked={value.userJournalist} onChange={changeHandlerCheckbox} type="checkbox" />
						<div class="checkmark"></div>
					</label><PopupButton number="1" /></span>
					<span>
					
					<label className="container">Ik Wob namens een (media-) organisatie
						<input id="userCompany" value="userCompanyName" checked={value.userCompanyName} onChange={changeHandlerCompanyName} type="checkbox" />
						<div class="checkmark"></div>
					</label><PopupButton number="3" /></span>
					{value.userCompanyName&&
					<label className="formInputs" >Naam organisatie
						<input id="userCompanyNameInput" size="50" value={value.userCompanyNameInput} onChange={changeHandlerUser} type="text"/><br/>
					</label>
					}
					<span><label className="container">Ik wil mijn doel toelichten
						<input id="userNeedsGoal" value="userNeedsGoal" checked={value.userNeedsGoal} onChange={changeHandlerCheckbox} type="checkbox" />
					<div class="checkmark"></div>
					</label><PopupButton number="2" /></span>
					{value.userNeedsGoal&&		
					<label className="formInputs">Journalistieke doel (verplicht)
						<input id="userGoalInput" size="50" value={value.userGoalInput} onChange={changeHandlerUser} type="text"/><br/>
					</label>
					}

					<div className="formInputs">		
					<span>
						<label> Naam (verplicht)
			           <input size="50" value={value.userName} onChange={changeHandlerUser} id="userName" type="text" name="userInfo" placeholder="vul hier je naam in" />
			        </label>
			        </span>
			       <span> <label> Postadres
			           <input  size="40"value={value.userAdress} onChange={changeHandlerUser}id="userAdress" type="text" name="userInfo" placeholder="Vul hier je postadres in"/>
			        </label>
			        <label> Nr.
			           <input size="5" value={value.userAdressNumber} onChange={changeHandlerUser} id="userAdressNumber" type="text" name="userInfo" placeholder="nummer" />
			           </label></span>
			        <span><label> Postcode
			           <input size="15" value={value.userZipcode} onChange={changeHandlerUser} id="userZipcode" type="text" name="userInfo" placeholder="Postcode" />
			        </label>
			        <label> Plaats
			           <input size="30" value={value.userCityName} onChange={changeHandlerUser} id="userCityName" type="text" name="userInfo" placeholder="Vul hier een plaats in Nederland in" />
			        </label></span>
			        <span>
			        <label> E-mail
			           <input size="50" value={value.userEmail} onChange={changeHandlerUser} id="userEmail" type="text" name="userInfo" placeholder="Vul hier je e-mailadres in" />
			        </label>
			        </span>
			        <span>
			        <label> Telefoon
			           <input size="50" value={value.userPhoneNumber} onChange={changeHandlerUser} id="userPhoneNumber" type="text" name="userInfo" placeholder="Vul hier je telefoonnummer in" />
			        </label>
			        </span>
			        </div>								
				</form>
				<span className="extraPadding">
					<p>Hoe gaat deze app om met mijn gegevens?</p><PopupButton number="4" /><br />
					</span>
					<Link to="/">Terug</Link>
					<Link to="/Stap2">Volgende</Link>
				
			</div>
    )

}
export default Stap1