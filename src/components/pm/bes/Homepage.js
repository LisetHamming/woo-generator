import React from "react";
import { Link } from "react-router-dom";
import machine from "../../../assets/images/WOB_KNOP.png";
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
				<div className="blockText">
				<p className="logo">Wob BES generator</p>
					<h1>Bo kier sa kico bo gobierno ta haciendo? Skirbi bo prome peticion pa divulga informacion gubernamental den 3 paso!</h1>
					<p>Bon bini na e Wob BES generator!</p>
					<p> Bo t’aki pasobra bo kier pidi informacion cerca un instancia gubernamental riba <b>Boneiro.</b> </p>
					<p>
						Tene cuenta cu na Saba y Statia e gobiernonan no ta tuma peticion den Papiamento. 
						Si bo ta pensa di haci un peticion na un isla cu no ta Boneiro, cambia pa Ingles of Hulandes ariba. 
						Esaki ta pasobra bo peticion ta wordo traha den e idioma cu bo ta scoge di lesa e website.</p> <br></br>
						<p>Si bo ta cla pa traha bo peticion na Boneiro, nos ta mustra bo con:</p>
					<ol>
						<li>1. Prome, bo ta yena informacion manera bo nomber y detayenan di contacto</li>
						<li>2. Djey bo ta selecta un instancia gubernamental</li>
						<li>3. Finalmente, bo ta scoge ki tipo di documento of informacion bo ta buscando</li>
						<li>4. Ki bo ta warda? Bo ta cla pa entrega e peticion!</li>
					</ol>

					<div className="nextButtons">
						{/* <Link to="/EN/woo/StapVoorAf" onClick={e => clickHandlerSetLaw("Woo")}>
							WOO EN
						</Link> */}
						<Link to="/PM/bes/StapVoorAf" onClick={e => clickHandlerSetLaw("Wob BES")}>
							Wob BES
						</Link>
						{/* <Link to="/PM/lob/StapVoorAf" onClick={e => clickHandlerSetLaw("Lob")}>
							LOB PM
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
