import React from "react";
import { Link } from "react-router-dom";
import machine from "../../../assets/images/LOB_KNOP.png";
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
				<div className="blockText">
					<p className="logo">Lob-generator</p>
					<h1>Bo kier sa kico bo gobierno ta haciendo? Skirbi bo prome peticion pa divulga informacion gubernamental den 3 paso!</h1>
					<p>Bon bini na e Lob generator!</p>
					<p> Bo t’aki pasobra bo kier pidi informacion cerca un instancia gubernamental den Reino Hulandes. </p>
					<p>
					Asina mes! Desde awo, e Woo-generator no ta solamente disponibel pa pidi informacion gubernamental na Hulanda, 
					pero bo por haci un peticion na e gobiernonan tanto na e paisnan den Reino: Aruba, Kòrsou y Sint Maarten (Lob) 
					como na e islanan cu ta parti di Hulanda; Boneiro, Saba y Sint Eustatius (Wob BES). 
					</p>
					<p>Cu nos generador, entrega un peticion pa divulga informacion na cualkier pais of isla den Reino Hulandes ta masha facil mes.</p>

					<ol>
						<li>1. Prome, bo ta yena informacion manera bo nomber y detayenan di contacto</li>
						<li>2. Djey bo ta selecta un instancia gubernamental</li>
						<li>3. Finalmente, bo ta scoge ki tipo di documento of informacion bo ta buscando</li>
						<li>4. Ki bo ta warda? Bo ta cla pa entrega e peticion!</li>
					</ol>

					<p> Primi riba un di e botonnan aki bou pa scoge na unda bo kier pidi informacion gubernamental, 
						sea cu ta na Hulanda, Aruba, Kòrsou of Sint Maarten, of Boneiro, Statia of Saba.  
						Ariba na banda drechi bo por scoge pa cambia di idioma. </p>
					<div className="nextButtons">
						{/* <Link to="/EN/woo/StapVoorAf" onClick={e => clickHandlerSetLaw("Woo")}>
							{" "}
							WOO EN
						</Link>
						<Link to="/PM/bes/StapVoorAf" onClick={e => clickHandlerSetLaw("Wob BES")}>
							WOB_BES PAP
						</Link> */}
						<Link to="/PM/lob/StapVoorAf" onClick={e => clickHandlerSetLaw("Lob")}>
							LOB
						</Link>
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
