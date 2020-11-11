import React from "react";

function Cookiemelding({ showCookie, value }) {
	return (
		<div className="cookie">
			<div className="cookieBlock">
				<p className="logo">Wob-generator</p>
				<h1>Wob-generator gebruikt alleen functionele en analytische cookies</h1>
				<p>
					De Wob-generator gebruikt alleen functionele cookies en een analytische cookie. Als je de functionele cookies
					uitzet, dan werkt de Wob-generator niet: na het aanklikken van een optie of het invullen van een invulveld
					verschijnt dan bijvoorbeeld de bijbehorende alinea niet in de brief. Vandaar dat je de Wob-generator niet kan
					gebruiken zonder de functionele cookies te accepteren. Met de analytische cookie kunnen we zien hoe vaak en
					waar in Nederland de wob-generator gebruikte wordt. Wij vinden dit belangrijk voor de verbetering van de
					Wob-generator.
				</p>
				<br />
				<p>
					Toelichting functionele cookie:
					<br />
					Wat je aanklikt en invult wordt door de functionele cookie in de browser opgeslagen, zodat de browser de
					informatie kan gebruiken om de wob-generator te laten werken. Dat is voor de tijd dat je je wob-verzoek aan
					het opstellen bent prettig, maar je kan zelfs afsluiten en als je terugkeert zie je de eerder ingevulde
					informatie weer. Als je de ingevulde informatie wil wissen, bijvoorbeeld omdat je op een openbare computer
					bent ingelogd, dan kan je aan het einde van de rit op ‘Alles wissen’ klikken. Maar voor de duidelijkheid
					nogmaals: de VVOJ slaat zelf de informatie die jij hebt ingevuld of aangeklikt niet op. De VVOJ kan ook niet
					zien wat je hebt ingevuld of aangeklikt.
					<br />
					<br />
				</p>

				<button
					className="buttonStyle"
					type="button"
					onClick={() => {
						showCookie(value.showCookie);
					}}
				>
					Akkoord
				</button>
			</div>
		</div>
	);
}
export default Cookiemelding;
