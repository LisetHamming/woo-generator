import React from "react";
import { Link } from "react-router-dom";
import gifLogo from "../../../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import logoVvojNieuw from "../../../assets/logo/VVOJ_Logo_RGB.png";

function HomepageOvergenerator() {
	return (
		<div className="footer">
			<h1>About this generator</h1>
			<div className="sectionBlock2">
				<div className="block1">
					<p>
						The Woo-generator is a project of the Woo Working Group of the Flemish-Dutch Association of Investigative
						Journalists (
						<a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
							VVOJ
						</a>
						) and financially made possible by{" "}
						<a className="plaintext" href="https://www.lira.nl/" target="_blank" rel="noopener noreferrer">
							Lira Foundation
						</a>
						.
					</p>
					<br />
					<p>
						{" "}
						Development:{" "}
						<a
							className="plaintext"
							href="https://www.linkedin.com/in/tove-oegema-36107311b"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tove Oegema{" "}
						</a>{" "}
						(Research Assistant) and{" "}
						<a
							className="plaintext"
							href="https://linkedin.com/in/paulienbouw/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Paulien Bouw
						</a>
						. Content: investigative journalists{" "}
						<a className="plaintext" href="https://www.lisethamming.com/" target="_blank" rel="noopener noreferrer">
							Liset Hamming
						</a>{" "}
						and{" "}
						<a
							className="plaintext"
							href="https://www.platform-investico.nl/personen/tim-staal/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tim Staal
						</a>{" "}
						on behalf of VVOJ. Papiamento and English translation: journalist
						<a className="plaintext" href="https://anibalism.com" target="_blank" rel="noopener noreferrer">
							{" "}
							Luis Anibal Villegas Hernandez.
						</a>{" "}
					</p>
					<br />
					<br />
				</div>
				<div className="block1">
					<p>
						The Woo Working Group of VVOJ manages the website. The website is in no way connected to the Dutch
						government and is entirely independent.
					</p>
					<br></br>
					<p>
						For questions and comments:{" "}
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
						<Link to="/PrivacyVoorwaarden">Privacy Policy</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
export default HomepageOvergenerator;
