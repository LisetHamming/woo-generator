import React from "react";
import bg from "./../../../assets/icons/orange-single-line.png";

function HomepageWaarom() {
	return (
		<div className="sectionWaarom">
			<div className="sectionBlock">
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Waarom een Lob-verzoek?
					</h1>
					<p>
						Iedereen heeft het recht om informatie neergelegd in documenten op te vragen bij de overheid. 
						In de Landsverordening openbaarheid van bestuur (de Lob) wordt dit geregeld. 
						Elk van de (ei)landen in het Koninkrijk heeft een eigen versie van deze wet.
						Een Lob-verzoek is cruciaal om toegang te
						krijgen tot informatie die de overheid niet uit eigen beweging vrijgeeft. Kijk{" "}

						<a href="https://cuatro.sim-cdn.nl/arubaoverheid2858bd/uploads/0206ab99.012.pdf" className="plaintext" target="_blanc">
						hier  
						</a>{" "} voor de Lob van Aruba,  {" "}
						<a href="https://gobiernu.cw/wp-content/uploads/2010/09/T.-Landsverordening-openbaarheid-van-bestuur-Cura%C3%A7ao.pdf" className="plaintext" target="_blanc">
						hier 
						</a>{" "} voor de Lob van Curaçao, {" "}
						<a href="https://lokaleregelgeving.overheid.nl/CVDR155440/1" className="plaintext" target="_blanc">
						en hier {" "}
						</a>{" "} voor de Lob van Sint Maarten.
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Hoe doe ik een Lob-verzoek?
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
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Waarom een Lob-generator?
					</h1>
					<p>
						Nogal wat journalisten denken dat een Woo-verzoek indienen een mysterieuze juridische truc is. Dat is
						overdreven, maar er zit een kern van waarheid in: er zijn best een paar punten waarop je moet letten. Met de
						Woo-generator hoef je niet bang te zijn dat je iets over het hoofd ziet. Aan de slag dus!
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Wanneer geen Lob-verzoek?
					</h1>
					<p>
						Een Woo-verzoek gebruik je alleen voor documenten die nog niet ergens anders vindbaar zijn. Bekijk voordat
						je een Woo-verzoek indient daarom bijvoorbeeld{" "}
						<a href="https://open.overheid.nl/" className="plaintext" target="_blanc">
							hier
						</a>{" "}
						of de overheid de documenten al openbaar gemaakt heeft. 
						Tip: al openbaar gemaakte documenten kunnen je makkelijker de weg wijzen naar gerelateerd documenten die nog niet openbaar zijn gemaakt!{" "}
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
