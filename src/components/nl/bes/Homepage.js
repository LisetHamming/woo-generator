import React from "react";
import { Link } from "react-router-dom";
import machine from "../../../assets/images/WOO_KNOP.png";
import gifLogo from "../../../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import vvojLogo from "../../../assets/logo/VVOJ_Logo_RGB.png";

function Homepage({ clickHandlerSetLaw, wet }) {
	return (
		<div>
			<div className="selectLanguage">
				<Link to="/NL/bes/">NL</Link>
				<Link to="/EN/bes/">EN</Link>
				<Link to="/PM/bes/">PAP</Link>
			</div>
			<div className="homepageLogos">
				<img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" />
				<img src={vvojLogo} className="logo_VVOJ" alt="logo vvoj" />
			</div>
			<div className="homepageBlock">
				{/* <img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" /> */}
				<div className="blockText">
					<p className="logo">Wob BES-generator</p>
					<h1>Schrijf in 3 simpele stappen je eigen Wob BES verzoek</h1>
					<p>Welkom bij de Wob BES-generator! </p>
					<p> Je bent hier omdat je informatie wilt opvragen bij een overheidsinstantie van <b>Bonaire, Sint Eustatius of Saba.</b></p>
					<p>
						Op Bonaire, Sint Eustatius en Saba geldt de Wet openbaarheid van bestuur BES voor de bestuursorganen van deze eilanden. 
						Met de Wob BES generator maak je een geldig en begrijpelijk verzoek op een van de BES-eilanden. </p>
						<p>
						<b>Bedenk wel</b> dat sommige informatie van deze eilanden ook bij een Nederlandse bestuursorgaan is op te vragen op grond van de Woo. 
						Dit komt omdat sommige Nederlandse overheidsinstellingen ook taken voor de BES-eilanden uitvoeren. Denk hierbij aan De Nederlandsche Bank of het Centraal Bureau voor de Statistiek.
						Denk dus goed na waar je je verzoek indient, en of je juist niet een Woo-verzoek zou willen indienen.</p>
						<p>
						<b>Let op!</b> Op de BES-eilanden wordt er naast het Nederlands vaker Engels (Saba en Sint Eustatius) en Papiaments (Bonaire) gesproken. 
						Als je je verzoek wil indienen in een van deze andere talen, kies een van ze rechtsboven.

					</p>
					<p>Klaar om je verzoek te maken? We maken het voor je makkelijk!</p>

					<ol>
						<li>1. Je vult een aantal gegevens over jezelf in</li>
						<li>2. Je selecteert een overheidsinstantie</li>
						<li>3. Je kiest wat voor documenten of informatie je zoekt</li>
					</ol>
					<div className="nextButtons">
						<Link to="/NL/bes/StapVoorAf" onClick={e => clickHandlerSetLaw("Wob BES")}>
							Start je wob-bes verzoek
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
