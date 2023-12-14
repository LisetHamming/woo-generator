import React from "react";
import bg from "./../../../assets/icons/scribbles_orange.svg";
function HomepageWaarom() {
	return (
		<div className="sectionWaarom">
			<div className="sectionBlock">
				<div>
					<h1>Waarom een Woo-verzoek?</h1>
					<p>
						Iedereen heeft het recht om informatie neergelegd in documenten op te vragen bij de overheid. In de Wet open
						overheid (de Woo) is geregeld waar zo’n verzoek aan moet voldoen. Een Wob-verzoek is cruciaal om toegang te
						krijgen tot informatie die de overheid niet uit eigen beweging vrijgeeft. Kijk{" "}
						<a href="https://wetten.overheid.nl/BWBR0005252/2018-07-28" className="plaintext" target="_blanc">
							hier
						</a>{" "}
						voor de Wet open overheid.
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Hoe doe ik een Woo-verzoek?
					</h1>

					<p>
						Het opstellen van een Woo-verzoek is niet moeilijk, maar het verzoek moet wel aan een aantal voorwaarden
						voldoen. Met de Woo-generator helpen we je een goed en geldig Woo-verzoek op te stellen. Kies welke
						documenten je wilt opvragen en bij welke overheidsinstantie. Hiervoor hebben we de eerste eenvoudig
						doorzoekbare lijst met wobbare overheidsinstanties in Nederland samengesteld. Klaar! Je kunt nu je
						Woo-verzoek opslaan en versturen via de post of digitaal verzenden.
					</p>
				</div>
				<div>
					<h1>Waarom een Woo-generator?</h1>
					<p>
						Nogal wat journalisten denken dat een Woo-verzoek indienen een mysterieuze juridische truc is. Dat is
						overdreven, maar er zit een kern van waarheid in: er zijn best een paar punten waarop je moet letten. Met de
						Woo-generator hoef je niet bang te zijn dat je iets over het hoofd ziet. Aan de slag dus!
					</p>
				</div>
				<div>
					<h1>Wanneer geen Woo-verzoek?</h1>
					<p>
						Een Woo-verzoek gebruik je alleen voor documenten die nog niet ergens anders vindbaar zijn. Bekijk voordat
						je een Woo-verzoek indient daarom bijvoorbeeld{" "}
						<a href="https://open.overheid.nl/" className="plaintext" target="_blanc">
							hier
						</a>{" "}
						of de overheid de documenten al openbaar gemaakt heeft.{" "}
					</p>
					<br></br>
					<p>
						Bedenk verder dat de overheid niet alle informatie openbaar hoeft te maken: de Woo kent een aantal
						weigeringsgronden zoals bedrijfsvertrouwelijke gegevens en de eerbiediging van de persoonlijke levenssfeer.
						 
					</p>
				</div>
			</div>
		</div>
	);
}
export default HomepageWaarom;
