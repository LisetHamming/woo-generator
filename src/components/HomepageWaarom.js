import React from "react";
import bg from "./../assets/icons/orange-single-line.png";

function HomepageWaarom() {
	return (
		<div className="sectionWaarom">
			<div className="sectionBlock">
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Waarom zou ik een verzoek om openbaarmaking doen?
					</h1>
					<p>
						Iedereen heeft het recht om informatie neergelegd in documenten op te vragen bij de overheid. Elk deel van
						het Koninkrijk heeft een wet die regelt waar zo’n verzoek aan moet voldoen. Veel informatie maakt de
						overheid niet uit zichzelf openbaar. Een verzoek om overheidsinformatie indienen is dan cruciaal om de
						overheid ter verantwoording te roepen voor de gevolgen van beleid, corruptie op te sporen of verkwisting van
						geld te ontdekken.
					</p>
				</div>
				<div>
					<h1 className="scribble" style={{ backgroundImage: `url(${bg})` }}>
						Waarom een openbaarheidsgenerator?
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
