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
			<p>
				Aan de linkerkant van het scherm staat welke informatie we nodig hebben voor je verzoek en vakjes om deze
				informatie in te vullen.
			</p>
			<br />
			<span className="ietje">
				<p>Voor meer uitleg kun je klikken op de i'tjes.</p>
				<PopupButton number="19" />
				<br />
			</span>

			<p>
				Wat je invult en aanvinkt wordt automatisch verwerkt en verschijnt vervolgens in het concept Wob-verzoek aan de
				rechterkant. Om dat mogelijk te maken wordt dit via de browser die je gebruikt ‘lokaal’ opgeslagen in je
				browser. Niemand anders kan je Wob-verzoek zien, ook wij niet. Let er wel op dat dit dus ook het geval is als je
				op een openbare computer werkt. In alle gevallen kun je als je klaar bent op de knop ‘Alles wissen’ drukken.
			</p>
			<br />
			<p>Als je alle vragen hebt beantwoord, kun je je concept Wob-verzoek opslaan als DOC en de tekst aanpassen.</p>
			<br />
			<p className="extraPadding">
				Wil je iets net even anders of wil je bijvoorbeeld een extra toelichting op je verzoek toevoegen? Dan kun je in
				het opgeslagen Word-document je Wob-verzoek nog aanpassen.
			</p>
			<Link to="/">Terug</Link>

			<Link to="/Stap1">Ik snap het</Link>
		</div>
	);
}
export default StapVoorAf;
