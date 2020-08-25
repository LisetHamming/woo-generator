import React from "react";
import { Link } from "react-router-dom";
import logo_vvoj from "../assets/logo_vvoj.png";

function HomepageOvergenerator() {
	return (
		<div className="sectionWaarom">
			<div className="sectionBlock2">
				<div className="block1">
					<h1>Over deze generator</h1>
					<p>
						De Wob-generator is een project van de Wob-werkgroep van de Vlaams-Nederlandse Vereniging van
						Onderzoeksjournalisten (VVOJ) en financieel mogelijk gemaakt door Stichting Lira. Ontwikkeling: Tove Oegema
						(Research Assistant) en Paulien Bouw. Inhoud: Liset Hamming, Tim Staal (VVOJ).
					</p>
					<br />
					<br />
					<p>
						De Wob-werkgroep van de VVOJ beheert de website. De website is op geen enkele manier verbonden aan de
						Nederlandse overheid en is volstrekt onafhankelijk.
					</p>
					<br></br>
					<p>
						Contact:{" "}
						<a href="mailto:info@wob-generator.nl" class="plaintext">
							info@wob-generator.nl
						</a>
					</p>
					<div className="spanLinks">
						<img src={logo_vvoj} className="logo_vvoj" />
					</div>
					<div className="spanLinks">
						<Link to="/PrivacyVoorwaarden">Privacy Policy </Link>
						<Link to="/AlgemeneVoorwaarden">Algemene voorwaarden</Link>
					</div>
				</div>
				<div className="projectTeam">
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
}
export default HomepageOvergenerator;
