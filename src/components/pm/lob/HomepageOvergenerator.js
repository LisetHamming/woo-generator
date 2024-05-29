import React from "react";
import { Link } from "react-router-dom";
import gifLogo from "../../../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import logoVvojNieuw from "../../../assets/logo/VVOJ_Logo_RGB.png";

function HomepageOvergenerator() {
	return (
		<div className="footer">
			<h1>Tocante e generado aki</h1>
			<div className="sectionBlock2">
				<div className="block1">
					<p>
						E generado Lob ta un proyecto di e grupo di trabou di Woo di e Asociacion di Periodistanan di Investigacion
						Hulandes-Belga (
						<a className="plaintext" href="https://www.vvoj.nl" target="_blank" rel="noopener noreferrer">
							VVOJ
						</a>
						) y financieramente el a wordo haci posibel danki na{" "}
						<a className="plaintext" href="https://www.lira.nl/" target="_blank" rel="noopener noreferrer">
							Fundacion Lira
						</a>
					</p>
					<br />
					<p>
						. Desaroyo:{" "}
						<a
							className="plaintext"
							href="https://www.linkedin.com/in/tove-oegema-36107311b"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tove Oegema{" "}
						</a>{" "}
						(Asistente di Investigacion) y{" "}
						<a
							className="plaintext"
							href="https://linkedin.com/in/paulienbouw/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Paulien Bouw
						</a>
						. Contenido: periodistanan di investigacion{" "}
						<a className="plaintext" href="https://www.lisethamming.com/" target="_blank" rel="noopener noreferrer">
							Liset Hamming
						</a>{" "}
						y{" "}
						<a
							className="plaintext"
							href="https://www.platform-investico.nl/personen/tim-staal/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tim Staal
						</a>{" "}
						na nomber di VVOJ. Traduccion na Papiamento y Ingles: periodista{" "}
						<a className="plaintext" href="https://www.anibalism.com/" target="_blank" rel="noopener noreferrer">
							Luis Anibal Villegas Hernandez.
						</a>
					</p>
					<br />
					<br />
				</div>
				<div className="block1">
					<p>
						E grupo di trabou di Woo di VVOJ ta maneha e website. E website no ta conecta di ningun manera na gobierno
						Hulandes y ta completamente independiente.
					</p>
					<br></br>
					<p>
						Pa preguntanan y comentario:{" "}
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
						<Link to="/PrivacyVoorwaarden">Politica di Privacidad</Link>
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
