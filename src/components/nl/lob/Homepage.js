import React from "react";
import { Link } from "react-router-dom";
import machine from "../../../assets/images/WOO_KNOP.png";
import gifLogo from "../../../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import vvojLogo from "../../../assets/logo/VVOJ_Logo_RGB.png";

function Homepage({ clickHandlerSetLaw, wet }) {
	return (
		<div>
			<div className="selectLanguage">
				<Link to="/NL/lob/">NL</Link>
				<Link to="/EN/lob/">EN</Link>
				<Link to="/PM/lob/">PAP</Link>
			</div>
			<div className="homepageLogos">
				<img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" />
				<img src={vvojLogo} className="logo_VVOJ" alt="logo vvoj" />
			</div>
			<div className="homepageBlock">
				{/* <img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" /> */}
				<div className="blockText">
					<p className="logo">Lob-generator</p>
					<h1>Schrijf in 3 simpele stappen je eigen Lob-verzoek</h1>
					<p>Welkom bij de Lob-generator! </p>
					<p>
						{" "}
						Je bent hier omdat je informatie wilt opvragen bij een overheidsinstantie van Aruba, Curaçao of Sint
						Maarten.
					</p>
					<p>
						Op elk van deze (ei)landen geldt er een eigen versie van de Landsverordening openbaarheid van bestuur (Lob).
						De Lob is inhoudelijk grotendeels op de oude Wet openbaarheid van bestuur (Wob) afgestemd. <br></br>
						<br></br>
						<b>Let op!</b> Omdat je Nederlands hebt geselecteerd, wordt je brief in het Nederlands gegenereerd. Als je
						je Lob-verzoek in het Engels of Papiaments wil laten opstellen, selecteer een van die talen boven. Anders
						kan je hier je Lob-verzoek in het Nederlands maken.
					</p>
					<p>Als je klaar bent, nemen we je door de stappen om makkelijk je verzoek te maken.</p>

					<ol>
						<li>1. Je vult een aantal gegevens over jezelf in</li>
						<li>2. Je selecteert een overheidsinstantie</li>
						<li>3. Je kiest wat voor documenten of informatie je zoekt</li>
					</ol>
					<div className="nextButtons">
						<Link to="/NL/lob/StapVoorAf" className="start" onClick={e => clickHandlerSetLaw("Lob")}>
							Start je Lob-verzoek
						</Link>
						{/* <Link to="/EN/bes/StapVoorAf" onClick={e => clickHandlerSetLaw("Wob BES")}>
						WOB-BES EN
					</Link>

					<Link to="/EN/lob/StapVoorAf" onClick={e => clickHandlerSetLaw("Lob")}>
						LOB EN
					</Link> */}
					</div>
				</div>
				<div>
					<img src={machine} alt="" />
				</div>
			</div>
		</div>
	);
}
export default Homepage;
