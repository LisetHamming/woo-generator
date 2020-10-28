import React from "react";
import { Link } from "react-router-dom";
import PopupButton from "./popups/PopupButton";
import machine from "../assets/machine.png";

function Lancering() {
	return (
		<div className="homepageBlock">
			<div className="blockText">
			<p className="logo">Wob-generator</p>
						
			<p className="lanceringBold">
				Op donderdag 12 november om 20:30 uur lanceert de Vlaams-Nederlandse Vereniging van Onderzoeksjournalisten <a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
							(VVOJ)
						</a> de enige echte Wob-generator. Die is vanaf dan hier te vinden!
			</p>
			<br />
			<p>
				De Wob-generator is een project van de Wob-werkgroep van de <a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
							VVOJ
						</a> en financieel mogelijk gemaakt door Stichting Lira. 
			</p>
			<br />
			<p> Onderzoeksjournalisten Liset Hamming en Tim Staal hebben met een aantal enthousiaste programmeurs de Wob-generator ontwikkeld.</p>
			
			<br />
			<p className="lanceringBoldBlack">
				Op donderdagavond 12 november zullen Liset en Tim van 20:30 tot 21:45 uur stap voor stap door de generator lopen. Zowel de generator als de do's en don't bij het opstellen van een Wob-verzoek zullen na deze avond glashelder zijn.
			</p>
			<br />
			<p>TIP: als je zelf van tevoren alvast bedenkt welke overheidsinformatie je zou willen opvragen, heb je aan het einde van de avond meteen ook je eigen Wob-verzoek klaarliggen!</p>
			<br />
			<p className="lanceringItalic">
				Nogal wat journalisten denken dat ‘wobben’ een mysterieuze juridische truc is. Dat is overdreven, maar er zit een kern van waarheid in: er zijn best een paar punten waarop je moet letten. Misschien wobben Nederlandse journalisten daarom vrij weinig in vergelijking met andere landen. Met de Wob-generator hoef je niet bang te zijn dat je iets over het hoofd ziet.
			</p>
			</div>
			<div>
				<img src={machine} alt="illustratie van een wob-generator machine" />
			</div>

			
		</div>
	);
}
export default Lancering;
