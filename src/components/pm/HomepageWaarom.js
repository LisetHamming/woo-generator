// deze pagina wordt niet gebruikt, althans het wordt niet gelaad. komt dat omdat alle van deze homepages worden geëxporteerd als HomepageWaarom()?

import React from "react";
import bg from "./../../assets/icons/orange-single-line.png";

function HomepageWaarom() {
	return (
		<div className="sectionWaarom">
			<div className="sectionBlock">
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Bo kier sa kico bo gobierno ta haciendo? Skirbi bo prome peticion pa divulga informacion gubernamental den 3
						paso!
					</h1>
					<p>
						Bon bini na e generador pa divulga informacion gubernamental! Bo t’aki pasobra bo kier pidi informacion
						cerca un instancia gubernamental den Reino Hulandes.
					</p>
					<p>
						Asina mes! Desde awo, e Woo-generator no ta solamente disponibel pa pidi informacion gubernamental na
						Hulanda, pero bo por haci un peticion na e gobiernonan tanto na e paisnan den Reino Aruba, Kòrsou y Sint
						Maarten (Lob) como na e islanan cu ta parti di Hulanda; Boneiro, Saba y Sint Eustatius (Wob-BES). Cu nos
						generador, entrega un peticion na cualkier pais of isla den Reino Hulandes ta masha facil mes.
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
			</div>
		</div>
	);
}
export default HomepageWaarom;
