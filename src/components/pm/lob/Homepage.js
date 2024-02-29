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
					<p className="logo">Generado Lob</p>
					<h1>Bo kier sa kico bo gobierno ta haciendo? Skirbi bo prome peticion pa divulga informacion gubernamental!</h1>
					<p>Bon bini na e Lob generator!</p>
					<p> Bo t’aki pasobra bo kier pidi informacion cerca un instancia gubernamental na Aruba, Kòrsou of Sint Maarten.</p>
					<p>
					Na cada pais Caribense den Reino Hulandes tin un ley cu ta regla con gobierno tin di anda cu transparencia. 
					Esaki yama e Landsverordening openbaarheid van bestuur (Ordenansa Nacional pa transparencia gubernamental). 
					Cada isla tin nan version di e ley aki. Si bo kier lesa e texto di e ley, scroll abou y bo lo haya e textonan di e ley pa cada pais. 
					</p>

					<p> <b>Tene cuenta</b> cu na Sint Maarten Papiamento no ta wordo papia. Kiermen si bo intencion ta pa haci un peticion na Sint Maarten,
						 cambia idioma pa Hulandes of Ingles. 
						 Esaki ta necesario pasobra e generador ta traha bo peticion den e idioma cu bo ta scoge pa interactua cu e aplicacion.</p>

					<p>Cu nos generador, entrega un peticion pa divulga informacion na cualkier di e paisnan Caribense den Reino Hulandes ta masha facil mes:</p>

					<ol>
						<li>1. Prome, bo ta yena informacion manera bo nomber y detayenan di contacto</li>
						<li>2. Djey bo ta selecta un instancia gubernamental</li>
						<li>3. Finalmente, bo ta scoge ki tipo di documento of informacion bo ta buscando</li>
						<li>4. Ki bo ta warda? Bo ta cla pa entrega e peticion!</li>
					</ol>
					<div className="nextButtons">
						{/* <Link to="/EN/woo/StapVoorAf" onClick={e => clickHandlerSetLaw("Woo")}>
							{" "}
							WOO EN
						</Link>
						<Link to="/PM/bes/StapVoorAf" onClick={e => clickHandlerSetLaw("Wob BES")}>
							WOB_BES PAP
						</Link> */}
						<Link to="/PM/lob/StapVoorAf" onClick={e => clickHandlerSetLaw("Lob")}>
							Cuminsa bo peticion Lob
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
