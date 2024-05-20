import React from "react";
import bg from "./../../assets/icons/orange-single-line.png";

function HomepageWaarom() {
	return (
		<div className="sectionWaarom">
			<div className="sectionBlock">
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Wat is een verzoek om openbaarmaking?
					</h1>
					<p>
						Iedereen heeft het recht om informatie op te vragen bij de overheid. Je kunt om alle informatie vragen die
						op één of andere manier is vastgelegd. Elk deel van het Koninkrijk heeft een wet die regelt waar zo’n
						verzoek aan moet voldoen. Veel informatie maakt de overheid niet uit zichzelf openbaar.
					</p>
					<p>
						{" "}
						Een verzoek om overheidsinformatie indienen is dan de enige manier om de overheid ter verantwoording te
						roepen voor de totstandkoming van beleid, corruptie op te sporen of verkwisting van geld te ontdekken. In de
						(<a href="https://expertisecentrumspoon.nl/kennisbank/">kennisbank van SPOON</a>) vindt je meer informatie.
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Waarom een generator?
					</h1>
					<p>
						Nogal wat journalisten, activisten, onderzoekers en maatschappelijk betrokken burgers denken dat een
						openbaarmakingsverzoek indienen een mysterieuze juridische truc is. Dat is overdreven, maar er zit een kern
						van waarheid in: er zijn best een paar punten waarop je moet letten om echt de informatie de bemachtigen die
						je zoekt. Met onze generator hoef je niet bang te zijn dat je iets over het hoofd ziet. Aan de slag dus!
					</p>
				</div>
			</div>
		</div>
	);
}
export default HomepageWaarom;
