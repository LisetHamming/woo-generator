import React from "react";
import { Link } from "react-router-dom";
import PopupButton from "./popups/PopupButton";

function StapVoorAf() {
	return (
		<div className="formLetter central">
			<p className="logo">Wob-generator</p>
			<h2>Goed om te weten</h2>
			<br />
			<p></p>

			<p>
				De Wob-generator is niet gemaakt om op je telefoon te gebruiken. Je kunt ‘m dus het beste op je computer of
				laptop openen.
			</p>
			<br />
			<p>Aan de linkerkant staan steeds vragen om te beantwoorden.</p>
			<p> </p>
			<span className="ietje">
				<p>Bij de meeste vragen staan ‘i-tjes’ waar je op kunt klikken met informatie over de vragen.</p>
				<PopupButton number="19" />
				<br />
			</span>
			<br />
			<p>
				Je antwoorden worden automatisch verwerkt en verschijnen vervolgens in het concept Wob-verzoek aan de
				rechterkant. Alles wat je invult wordt via de browser die je gebruikt ‘lokaal’ opgeslagen. Dat betekent dat
				niemand anders je antwoorden kan zien, ook wij niet.
			</p>
			<br />
			<p>Als je alle vragen hebt beantwoord, kun je je concept Wob-verzoek opslaan als Word-document of als PDF.</p>
			<br />
			<p className="extraPadding">
				Wil je iets net even anders? Dan kun je in het opgeslagen Word-document je Wob-verzoek nog aanpassen.
			</p>
			<Link to="/">Terug</Link>

			<Link to="/Stap1">Ik snap het</Link>
		</div>
	);
}
export default StapVoorAf;
