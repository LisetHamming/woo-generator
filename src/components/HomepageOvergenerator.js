import React from "react";
import { Link } from "react-router-dom";
import gifLogo from "../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import logoVvojNieuw from "../assets/logo/VVOJ_Logo_RGB.png";

function HomepageOvergenerator() {
	return (
		<div className="footer">
			<div className="sectionBlock2">
				<div className="block1">
					<h1>Over deze generator</h1>
					<p>
						Deze generator is onstaan vanuit een samenwerking van (
						<a className="plaintext" href="https://expertisecentrumspoon.nl" target="_blank" rel="noopener noreferrer">
							Expertisecentrum SPOON
						</a>
						) en de Woo-werkgroep van de Vlaams-Nederlandse Vereniging van Onderzoeksjournalisten (
						<a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
							VVOJ
						</a>
						) en financieel mogelijk gemaakt door{" "}
						<a className="plaintext" href="https://www.lira.nl/" target="_blank" rel="noopener noreferrer">
							Stichting Lira
						</a>
						. Ontwikkeling:{" "}
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
						. Inhoud:{" "}
						{/* <a className="plaintext" href="https://www.lisethamming.com/" target="_blank" rel="noopener noreferrer"> */}
						Liset Hamming
						{/* </a>{" "} */}
						en{" "}
						{/* <a
							className="plaintext"
							href="https://www.platform-investico.nl/personen/tim-staal/"
							target="_blank"
							rel="noopener noreferrer"
						> */}
						Tim Staal
						{/* </a>{" "} */}
						eerst namens de (
						<a className="plaintext" href="https://www.vvoj.org" target="_blank" rel="noopener noreferrer">
							VVOJ
						</a>
						) en sinds 2023 namens (
						<a className="plaintext" href="https://expertisecentrumspoon.nl" target="_blank" rel="noopener noreferrer">
							SPOON
						</a>
						) als beheerder van de tool.
					</p>
					<br />
					<p>
						{" "}
						Het initiatief voor een Antilliaanse versie van de Woo-generator komt van (
						<a
							className="plaintext"
							href="https://www.linkedin.com/in/anibalism/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Luis Anibal Villegas
						</a>
						).
					</p>
					<br />
					<p>
						{" "}
						Sinds 2023 beheert en ontwikkelt (
						<a className="plaintext" href="https://expertisecentrumspoon.nl" target="_blank" rel="noopener noreferrer">
							Expertisecentrum SPOON
						</a>
						) de generator. De generator is op geen enkele manier verbonden aan de Nederlandse overheid en is volstrekt
						onafhankelijk.
					</p>
					<br></br>
					<p>
						Voor vragen en opmerkingen:{" "}
						<a href="mailto:contact@expertisecentrumspoon.nl" className="plaintext">
							contact@expertisecentrumspoon.nl
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
					<div className="spanLinks">
						<Link to="/PrivacyVoorwaarden">Privacybeleid</Link>
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
