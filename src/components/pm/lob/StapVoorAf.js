import React from "react";
import { Link } from "react-router-dom";
import PopupButton from "../../popups/PopupButton";

function StapVoorAf() {
	return (
		<div className="formLetter central">
			<p className="logo">Woo-generator</p>
			<h2>Goed om te weten</h2>
			<br />
			<br />

			<p>
				De Woo-generator is niet gemaakt om op je telefoon te gebruiken. Je kunt ‘m dus het beste op je computer of
				laptop openen.
			</p>
			<br />
			<p>
				Aan de linkerkant van het scherm staat welke informatie we nodig hebben voor je verzoek en vakjes om deze
				informatie in te vullen.
			</p>
			<span className="nieuwietje">
				<p>Voor meer uitleg kun je klikken op de i'tjes.</p>
				<PopupButton number="19" />

				<br />
			</span>

			<p>
				Je antwoorden worden automatisch verwerkt en verschijnen vervolgens in het concept Woo-verzoek aan de
				rechterkant. Zo kun je steeds zien of de tekst goed loopt. Alles wat je invult wordt via de browser die je
				gebruikt ‘lokaal’ opgeslagen. Dat betekent dat niemand anders je antwoorden kan zien, ook wij niet.
			</p>
			<br />
			<p>Als je alle vragen hebt beantwoord, kun je je concept Woo-verzoek opslaan als DOC en de tekst aanpassen.</p>
			<br />
			<p className="extraPadding">
				Wil je iets net even anders of wil je bijvoorbeeld een extra toelichting op je verzoek toevoegen? Dan kun je in
				het opgeslagen Word-document je Woo-verzoek nog aanpassen.
			</p>
			<Link to="/">Terug</Link>

			<Link to="/PM/lob/Stap1">Ik snap het</Link>
		</div>
	);
}
export default StapVoorAf;
