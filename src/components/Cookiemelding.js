import React from "react";

function Cookiemelding({ showCookie, value }) {
	return (
		<div className="cookie">
			<div className="cookieBlock">
				<p className="logo">Wob-generator</p>
				<h1>Wob-generator gebruikt geen cookies</h1>
				<p>
					DPG Media en derde partijen plaatsen cookies en vergelijkbare technieken (“cookies”) en verwerken gegevens
					(zoals informatie over jouw toestel, je browser, je surfgedrag en je locatie) op onze websites en apps voor de
					volgende doeleinden: informatie op een apparaat opslaan en/of openen, het gebruik van de sites analyseren om
					deze te verbeteren, sociale media integreren, gepersonaliseerde advertenties en content, advertentie- en
					contentmeting, inzichten in het publiek en productontwikkeling.
				</p>
				<p>
					DPG Media deelt jouw (persoons)gegevens met Mediahuis Nederland en RTL Nederland, via ‘NLProfiel’, om
					gezamenlijke groepsprofielen op te stellen op basis van cookies.
				</p>
				<p>
					Daarnaast biedt DPG Media enkele adverteerders de mogelijkheid de door DPG Media verzamelde informatie ook
					buiten haar websites en apps te gebruiken bij het inkopen van advertentieruimte en laat DPG Media deze
					adverteerders bij het tonen van hun advertenties cookies plaatsen om zo zelf informatie te verzamelen.
				</p>
				<p>
					Door op ‘akkoord’ te klikken, ga je hiermee akkoord. Wil je meer informatie en/of wil je niet alle soorten
					cookies toestaan, klik dan op “Cookie-instellingen”. Toestemming kan op ieder moment weer ingetrokken worden
					via de cookie-instellingen link onderaan elke pagina.
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
