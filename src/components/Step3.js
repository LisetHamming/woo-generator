import React, { Component, useState } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Step3({value, changeHandlerUser}){
	return(
			<div>
			<h2>Contactgegevens</h2>
			<p>Als je een Wob-verzoek verstuurt, moet de overheid weten van wie het verzoek komt en waar hun besluit op je verzoek naartoe moet worden gestuurd. Vul daarom hier je contactgegevens en, als je het</p>
				<form>
					
					<label> Naam (verplicht)
			           <input value={value.userName} onChange={changeHandlerUser} id="userName" type="text" name="userInfo" placeholder="vul hier je naam in" /><br/>
			        </label>
			        <label> Postadres
			           <input value={value.userAdress} onChange={changeHandlerUser}id="userAdress" type="text" name="userInfo" placeholder="Vul hier je postadres in"/><br/>
			        </label>
			        <label> Nr.
			           <input value={value.userAdressNumber} onChange={changeHandlerUser} id="userAdressNumber" type="text" name="userInfo" placeholder="nummer" /><br/>
			        </label>
			        <label> Postcode
			           <input value={value.userZipcode} onChange={changeHandlerUser} id="userZipcode" type="text" name="userInfo" placeholder="Postcode" /><br/>
			        </label>
			        <label> Plaats
			           <input value={value.userCityName} onChange={changeHandlerUser} id="userCityName" type="text" name="userInfo" placeholder="Vul hier een plaats in Nederland in" /><br/>
			        </label>
			        <label> E-mail
			           <input value={value.userEmail} onChange={changeHandlerUser} id="userEmail" type="text" name="userInfo" placeholder="Vul hier je e-mailadres in" /><br/>
			        </label>
			        <label> Telefoon
			           <input value={value.userPhoneNumber} onChange={changeHandlerUser} id="userPhoneNumber" type="text" name="userInfo" placeholder="Vul hier je telefoonnummer in" /><br/>
			        </label>

      			 </form>
      			 <p>Hoe gaat deze app om met mijn gegevens?<button>ietje</button></p>
				<Link to="/Step2">vorige pagina</Link>
				<Link to="/Step4">volgende pagina</Link>
			</div>
		)
}
export default Step3