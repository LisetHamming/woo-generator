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
					<h1>Write your own Wob BES request in 3 simple steps</h1>
					<p>Welcome to the Wob BES generator!</p>
					<p>
						You are here because you want to request information from a government institution in Bonaire, Saba or
						Statia. </p> 
					<p>
						The BES islands have a special freedom of information law called the Wob BES. By invoking this law, anyone
						is allowed to ask that government documents are divulged by the government institutions of the BES islands.
					</p>

					<br></br><p><b>Please note</b> that communication with the government in Bonaire is only possible either in Dutch or Papiamento. 
						If you're considering making a request to any government institutions in Bonaire, change to one of the other languages.
						This is required because the Wob BES generator makes your request in your chosen language. 
					</p>
					
					<p>With the Woo-generator, making a request is a breeze by following the steps below.</p>

					<ol>
						<li>1. You fill in some information about yourself</li>
						<li>2. You select a government institution</li>
						<li>3. You choose the type of documents or information you are looking for</li>
					</ol>

					<div className="nextButtons">
						{/* <Link to="/EN/woo/StapVoorAf" onClick={e => clickHandlerSetLaw("Woo")}>
							WOO EN
						</Link> */}
						<Link to="/EN/bes/StapVoorAf" onClick={e => clickHandlerSetLaw("Wob BES")}>
							WOB-BES
						</Link>
						{/* <Link to="/EN/lob/StapVoorAf" onClick={e => clickHandlerSetLaw("Lob")}>
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
