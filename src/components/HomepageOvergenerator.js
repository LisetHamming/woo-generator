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
						Onderzoeksjournalisten (
						<a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
							VVOJ
						</a>
						) en financieel mogelijk gemaakt door{" "}
						<a className="plaintext" href="https://www.lira.nl/" target="_blank" rel="noopener noreferrer">
							Stichting Lira
						</a>
						. Ontwikkeling: Tove Oegema (
						<a className="plaintext" href="https://researchassistant.nl/" target="_blank" rel="noopener noreferrer">
							Research Assistant
						</a>
						) en{" "}
						<a className="plaintext" href="https://www.paulienbouw.nl/" target="_blank" rel="noopener noreferrer">
							Paulien Bouw
						</a>
						. Inhoud: onderzoeksjournlisten{" "}
						<a className="plaintext" href="https://www.lisethamming.com/" target="_blank" rel="noopener noreferrer">
							Liset Hamming
						</a>{" "}
						en Tim Staal namens de VVOJ.
					</p>
					<br />
					<br />
					<p>
						De Wob-werkgroep van de VVOJ beheert de website. De website is op geen enkele manier verbonden aan de
						Nederlandse overheid en is volstrekt onafhankelijk.
					</p>
					<br></br>
					<p>
						Voor vragen en opmerkingen:{" "}
						<a href="mailto:info@wob-generator.nl" className="plaintext">
							info@wob-generator.nl
						</a>
					</p>
					<div className="spanLinks">
						<a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
							<img src={logo_vvoj} className="logo_vvoj" alt="VVOJ" />
						</a>
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
