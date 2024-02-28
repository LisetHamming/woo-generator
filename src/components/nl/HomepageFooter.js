import React from "react";
import { Link } from "react-router-dom";
import gifLogo from "../../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import logoVvojNieuw from "../../assets/logo/VVOJ_Logo_RGB.png";

function HomepageFooter() {
	return (
		<div className="footer">
			<div className="sectionBlock2">
				<div className="block1">
					<h1>Over deze generator</h1>
					<p>
						De Woo-generator is een project van de Woo-werkgroep van de Vlaams-Nederlandse Vereniging van
						Onderzoeksjournalisten (
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
						namens de VVOJ. Vertaling naar Papiaments en Engels: journalist{" "}
						<a className="plaintext" href="https://www.<anibalism.com/" target="_blank" rel="noopener noreferrer">
							Luis Anibal Villegas Hernandez.
						</a>
					</p>
					<br />
					<br />
					<p>
						De Woo-werkgroep van de VVOJ beheert de website. De website is op geen enkele manier verbonden aan de
						Nederlandse overheid en is volstrekt onafhankelijk.
					</p>
					<br></br>
					<p>
						Voor vragen en opmerkingen:{" "}
						<a href="mailto:woo-generator@vvoj.org" className="plaintext">
							woo-generator@vvoj.org
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
export default HomepageFooter;
