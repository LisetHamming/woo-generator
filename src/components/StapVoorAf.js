import React from "react";
import { Link } from "react-router-dom";
import PopupButton from "./popups/PopupButton";

function StapVoorAf() {
	return (
		<div className="formLetter">
			<p className="logo">Wob-generator</p>
			<h2>Voordat je begint</h2>
			<p className="extraPadding">
				Aan de linkerkant staan de vragen die je moet beantwoorden om je Wob-verzoek te schrijven. Klik daar op de
				i'tjes voor meer informatie over de vragen en keuzes. Je antwoorden worden direct in je Wob-verzoek geplaatst
				dat verschijnt aan de rechterkant van je scherm. Wil je iets toch net even anders formuleren, dan kun je aan het
				einde van de rit als je je Wob-verzoek in Word hebt opgeslagen je verzoek aanpassen.
			</p>
			<span className="extraPadding">
				<p>Hoe ziet een ietje er dan uit?</p>
				<PopupButton number="19" />
				<br />
			</span>

			<Link to="/">Terug</Link>

			<Link to="/Stap1">Ik snap het</Link>
		</div>
	);
}
export default StapVoorAf;
