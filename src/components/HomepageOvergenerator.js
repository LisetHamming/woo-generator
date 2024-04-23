import React from "react";
import gifLogo from "../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import logoVvojNieuw from "../assets/logo/VVOJ_Logo_RGB.png";

function HomepageOvergenerator() {
	return (
		<div className="footer">
			<div className="sectionBlock2">
				<div className="block1">
					<h1>Over deze generator</h1>
					<p>
						De Wob-generator is in 2019 voor de{" "}
						<a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
							Vereniging van Onderzoeksjournalisten
						</a>{" "}
						ontwikkeld door de oprichters van{" "}
						<a className="plaintext" href="https://expertisecentrumspoon.nl/" target="_blank" rel="noopener noreferrer">
							Stichting SPOON
						</a>
						, financieel ondersteund door{" "}
						<a className="plaintext" href="https://www.lira.nl/" target="_blank" rel="noopener noreferrer">
							Stichting Literaire Rechten Auteurs
						</a>
						. Toen op 1 mei 2022 de Wet openbaarheid van bestuur (Wob) werd vervangen door de Wet open overheid (Woo) is
						ook de Wob-generator de Woo-generator geworden.
						<br />
					</p>
					<br />
					<p>
						Bij de start van SPOON in 2023 is het beheer van de Woo-generator overgenomen door SPOON. Je kunt nu dus
						voor al je vragen en opmerkingen over de Woo-generator bij SPOON terecht.
						<br />
					</p>
					<br />
					<p>
						{" "}
						Ontwikkeling:{" "}
						<a
							className="plaintext"
							href="https://www.linkedin.com/in/tove-oegema-36107311b"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tove Oegema{" "}
						</a>{" "}
						(Research Assistant) en{" "}
						<a className="plaintext" href="https://www.paulienbouw.nl/" target="_blank" rel="noopener noreferrer">
							Paulien Bouw
						</a>
						. Inhoud: onderzoeksjournalisten{" "}
						<a className="plaintext" href="https://www.lisethamming.com/" target="_blank" rel="noopener noreferrer">
							Liset Hamming
						</a>{" "}
						en{" "}
						<a
							className="plaintext"
							href="https://www.platform-investico.nl/personen/tim-staal/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tim Staal
						</a>{" "}
						namens de VVOJ.
					</p>

					<br />
					<p>
						De Woo-generator is op geen enkele manier verbonden aan de Nederlandse overheid en is volstrekt
						onafhankelijk.
					</p>
					<br></br>
					<p>
						Voor vragen en opmerkingen:{" "}
						<a href="mailto:woo-generator@expertisecentrumspoon.nl" className="plaintext">
							woo-generator@expertisecentrumspoon.nl
						</a>
					</p>
					<div className="footerLogos">
						<div className="spanLinks">
							<a
								className="plaintext"
								href="https://www.expertisecentrumspoon.nl"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={gifLogo} className="logo_spoon" alt="logo expertisecentrum spoon" />
							</a>
						</div>
						<div className="spanLinks">
							<a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
								<img src={logoVvojNieuw} className="logo_vvoj" alt="VVOJ" />
							</a>
						</div>
					</div>
					{/* <div className="spanLinks">
						<Link to="/PrivacyVoorwaarden">Privacybeleid</Link>
					</div> */}
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
