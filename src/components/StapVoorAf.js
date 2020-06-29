import React from "react";
import { Link } from "react-router-dom";
import PopupButton from "./popups/PopupButton";

function StapVoorAf() {
	return (
		<div className="formLetter">
			<p className="logo">Wob-generator</p>
			<h2>Voordat je begint</h2>
			<p>Welkom bij de Wob-generator!</p>
			<br />
			<p>
				Natuurlijk kan ook deze Wob-generator altijd beter. Laat het ons daarom zeker ook weten als je iets mist, anders
				wil of natuurlijk als je er heel blij van wordt via info@wob-generator.nl! Vermeld gerust dat je gebruik hebt
				gemaakt van deze tool, zodat zoveel mogelijk mensen zo goed mogelijk gaan ‘wobben’ en belangrijke informatie en
				verhalen gedeeld worden.
			</p>
			<br />
			<h2>Goed om te weten</h2>
			<p>
				De Wob-generator is niet gemaakt om op je telefoon te gebruiken. Je kunt ‘m dus het beste op je computer of
				laptop openen.
			</p>
			<br />
			<p>
				Aan de linkerkant staan steeds de vragen om te beantwoorden. Je antwoorden worden automatisch verwerkt en
				verschijnen vervolgens in het concept Wob-verzoek aan de rechterkant.
			</p>
			<br />
			<p>Bij de meeste vragen staan ‘i-tjes’ met informatie over de vragen. Daar kun je op klikken. </p>
			<br />
			<span>
				<p>Kijk maar, hier staat zo'n i'tje.</p>
				<PopupButton number="19" />
				<br />
			</span>
			<br />
			<p>
				Alles wat je invult wordt via de browser die je gebruikt ‘lokaal’ opgeslagen. Dat betekent dat niemand anders je
				antwoorden kan zien, ook wij niet. Het betekent ook dat je de pagina’s (per ongeluk) kan refreshen zonder dat de
				informatie verloren gaat én dat je op de ‘begin opnieuw’ knop moet klikken als je alle ingevulde velden in één
				keer weer leeg wil maken.
			</p>
			<br />
			<p>
				Als je alle vragen hebt beantwoord, kun je je concept Wob-verzoek opslaan als Word-document of meteen als PDF.
			</p>
			<br />
			<p className="extraPadding">
				Wil je iets toch net even anders formuleren? Dan kun je in het opgeslagen Word-document je Wob-verzoek nog
				helemaal aanpassen.
			</p>
			<Link to="/">Terug</Link>

			<Link to="/Stap1">Ik snap het</Link>
		</div>
	);
}
export default StapVoorAf;
