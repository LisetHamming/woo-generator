import React from "react";
import waarom from "../assets/waarom.png";

function HomepageWaarom() {
	return (
		<div className="sectionWaarom">
			<img src={waarom} />
			<div className="sectionBlock">
				<div>
					<h1>Waarom een Wob-verzoek?</h1>
					<p>
						Iedereen heeft het recht om informatie op te vragen bij de overheid. In de Wet openbaarheid van bestuur (de
						Wob) is geregeld waar zo’n verzoek aan moet voldoen. Een Wob-verzoek is cruciaal om toegang te krijgen tot
						informatie die de overheid niet uit eigen beweging vrijgeeft.
					</p>
				</div>
				<div>
					<h1>Hoe doe ik een Wob-verzoek?</h1>
					<p>
						{" "}
						Het opstellen van een Wob-verzoek is niet moeilijk, maar het verzoek moet wel aan een aantal voorwaarden
						voldoen. Met de Wob-generator helpen we je een goed en geldig Wob-verzoek op te stellen. Kies welke
						documenten je wilt opvragen en bij welke overheidsinstantie. Klaar! Je kunt nu je Wob-verzoek uitprinten en
						versturen via de post of digitaal verzenden.{" "}
					</p>
				</div>
			</div>
		</div>
	);
}
export default HomepageWaarom;
