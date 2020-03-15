import React, { Component, useState } from "react"
import DataPopup from "./popups/DataPopup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


function SetSelectedAuthorityManual({ clickHandlerAuthority }) {

    const [manualAuthorityNaam, setManualAuthorityNaam] = useState("")
    const [manualAuthorityAdres, setManualAuthorityAdres] = useState({ "straat": "", "husinummer": "", "postcode": "", "plaats": "" })

    const changeHandlerManualAdres = ({ currentTarget: { value, id } }) => {
        setManualAuthorityAdres(current => ({ ...current, [id]: value }))
    }
    const changeHandlerManualNaam = ({ currentTarget: { value, id } }) => {
        setManualAuthorityNaam(value)
    }
    return (
        <div>	

			<span>
					<p>Vul hier de gegevens in van de instantie waar je je verzoek aan wilt richten.</p>
					<form>
						<label> Naam instantie
							<input onChange={changeHandlerManualNaam} id="selectedAuthorityNaam"  name="ManualAuthority" type="text" value={manualAuthorityNaam} placeholder="Vul de naam van de instantie in"/>
						</label><br />
						<label> Straatnaam
							<input onChange={changeHandlerManualAdres} id="straat" name="ManualAuthority"type="text" value={manualAuthorityAdres.straat} placeholder="Vul de straatnaam of postbus in"/>
						</label><br />
						<label> Huisnummer
							<input onChange={changeHandlerManualAdres} id="huisnummer" name="ManualAuthority" type="text" value={manualAuthorityAdres.huisnummer} placeholder="Huisnummer of postbus nummer" />
						</label><br />
						<label> Postcode
							<input onChange={changeHandlerManualAdres} id="postcode" name="ManualAuthority" type="text" value={manualAuthorityAdres.postcode} placeholder="Postcode"/>
						</label><br />
						<label> Plaats
							<input onChange={changeHandlerManualAdres} id="plaats" name="ManualAuthority" type="text" value={manualAuthorityAdres.plaats} placeholder="Plaatnaam"/>
						</label><br />


			
			<button type="button" onClick={()=>clickHandlerAuthority({naam: manualAuthorityNaam, adres: manualAuthorityAdres})}>Gebruik gegevens</button>
			</form>
			</span>
		</div>
    )
}
export default SetSelectedAuthorityManual