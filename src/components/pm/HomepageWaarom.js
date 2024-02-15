// deze pagina wordt niet gebruikt, althans het wordt niet gelaad. komt dat omdat alle van deze homepages worden geëxporteerd als HomepageWaarom()?

import React from "react";
import bg from "./../assets/icons/orange-single-line.png";

function HomepageWaarom() {
	return (
		<div className="sectionWaarom">
			<div className="sectionBlock">
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
					Bo kier sa kico bo gobierno ta haciendo? Skirbi bo prome peticion pa divulga informacion gubernamental den 3 paso!
					</h1>
					<p>
					Bon bini na e generador pa divulga informacion gubernamental! 
					Bo t’aki pasobra bo kier pidi informacion cerca un instancia gubernamental den Reino Hulandes. 
					</p>
					<p>
					Asina mes! Desde awo, e Woo-generator no ta solamente disponibel pa pidi informacion gubernamental na Hulanda, 
					pero bo por haci un peticion na e gobiernonan tanto na e paisnan den Reino Aruba, Kòrsou y Sint Maarten (Lob) 
					como na e islanan cu ta parti di Hulanda; Boneiro, Saba y Sint Eustatius (Wob-BES).

					Cu nos generador, entrega un peticion na cualkier pais of isla den Reino Hulandes ta masha facil mes.
 	
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
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Waarom een Woo-generator?
					</h1>
					<p>
						Nogal wat journalisten denken dat een Woo-verzoek indienen een mysterieuze juridische truc is. Dat is
						overdreven, maar er zit een kern van waarheid in: er zijn best een paar punten waarop je moet letten. Met de
						Woo-generator hoef je niet bang te zijn dat je iets over het hoofd ziet. Aan de slag dus!
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Wanneer geen Woo-verzoek?
					</h1>
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
