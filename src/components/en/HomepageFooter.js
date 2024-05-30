import React from "react";
import { Link } from "react-router-dom";
import gifLogo from "../../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import logoVvojNieuw from "../../assets/logo/VVOJ_Logo_RGB.png";

function HomepageFooter() {
	return (
		<div className="footer">
			<h1>About this generator</h1>
			<div className="sectionBlock2">
				<div className="block1">
					<p>
						This generator started as an initiative of{" "}
						{/* 							
						<a className="plaintext" href="https://expertisecentrumspoon.nl" target="_blank" rel="noopener noreferrer">
						Expertisecentrum SPOON
						</a>
						)
				 */}
						the Freedom of Information working group of the Flemish-Dutch Association of Investigative Journalists (
						<a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
							VVOJ
						</a>
						) and financially made possible by{" "}
						<a className="plaintext" href="https://www.lira.nl/" target="_blank" rel="noopener noreferrer">
							Stichting Lira
						</a>
						.{" "}
					</p>
					<br />
					<p>
						Design and development:{" "}
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
						. Content:{" "}
						{/* <a className="plaintext" href="https://www.lisethamming.com/" target="_blank" rel="noopener noreferrer"> */}
						Liset Hamming {/* </a>{" "} */}
						en{" "}
						{/* <a
							className="plaintext"
							href="https://www.platform-investico.nl/personen/tim-staal/"
							target="_blank"
							rel="noopener noreferrer"
						> */}
						Tim Staal, {/* </a>{" "} */}
						first on behalf of the{" "}
						<a className="plaintext" href="https://www.vvoj.org" target="_blank" rel="noopener noreferrer">
							VVOJ{" "}
						</a>
						and since 2023 on behalf of{" "}
						<a className="plaintext" href="https://expertisecentrumspoon.nl" target="_blank" rel="noopener noreferrer">
							SPOON{" "}
						</a>
						as the current developer of the tool.
					</p>
				</div>
				<div className="block1">
					<p>
						{/* <p> Het initiatief voor een Antilliaanse versie van de Woo-generator komt van (
						<a className="plaintext" href="https://www.linkedin.com/in/anibalism/" target="_blank" rel="noopener noreferrer">
						Luis Anibal Villegas
							</a> */}{" "}
						Papiamento and English translation and content: journalist
						<a className="plaintext" href="https://anibalism.com" target="_blank" rel="noopener noreferrer">
							{" "}
							Luis Anibal Villegas Hernandez.
						</a>{" "}
					</p>
					<br />
					<p>
						{/* Sinds 2023 beheert en ontwikkelt (
				
				
					
						
							<a className="plaintext" href="https://expertisecentrumspoon.nl" target="_blank" rel="noopener noreferrer">
							Expertisecentrum SPOON
							</a>
							 de generator.  */}
						De generator is op geen enkele manier verbonden aan de Nederlandse overheid en is volstrekt onafhankelijk.
					</p>
					<br></br>
					<p>
						Voor vragen en opmerkingen:{" "}
						<a href="mailto:contact@expertisecentrumspoon.nl" className="plaintext">
							contact@expertisecentrumspoon.nl
						</a>
					</p>

					{/* <p>
                        The Wob BES generator is a project of the Woo Working Group of the Flemish-Dutch Association of Investigative Journalists (
                        <a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
                            VVOJ
                        </a>
                        ) and financially made possible by{" "}
                        <a className="plaintext" href="https://www.lira.nl/" target="_blank" rel="noopener noreferrer">
                            Lira Foundation
                        </a>
                        . Development:{" "}
                        <a
                            className="plaintext"
                            href="https://www.linkedin.com/in/tove-oegema-36107311b"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tove Oegema{" "}
                        </a>{" "}
                        (Research Assistant) and{" "}
                        <a className="plaintext" href="https://www.paulienbouw.nl/" target="_blank" rel="noopener noreferrer">
                            Paulien Bouw
                        </a>
                        . Content: {" "}
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
                        on behalf of VVOJ.

						{" "} Papiamento and English translation: journalist 
                        <a
                            className="plaintext"
                            href="https://anibalism.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >{" "}
                            Luis Anibal Villegas Hernandez.
                        </a>{" "}
                    </p>
                    <br />
                    <br />
                    <p>
                        The Woo Working Group of VVOJ manages the website. The website is in no way connected to the Dutch government and is entirely independent.
                    </p>
                    <br></br>
                    <p>
                        For questions and comments:{" "}
                        <a href="mailto:woo-generator@vvoj.org" className="plaintext">
                            woo-generator@vvoj.org
                        </a>
                    </p> */}
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
export default HomepageFooter;
