import React from "react";
import { Link } from "react-router-dom";
import machine from "../../../assets/images/WOO_KNOP.png";
import gifLogo from "../../../assets/logo/Spoon_Logo_animatie_BlackonWhite_Gif.gif";
import vvojLogo from "../../../assets/logo/VVOJ_Logo_RGB.png";

function Homepage({ clickHandlerSetLaw, wet }) {
	return (
		<div>
			<div className="selectLanguage">
				<Link to="/NL/woo/">NL</Link>
				<Link to="/EN/woo/">EN</Link>
			</div>
			<div className="homepageLogos">
				<img src={gifLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" />
				<img src={vvojLogo} className="logo_VVOJ" alt="logo vvoj" />
			</div>
			<div className="homepageBlock">
				<div className="blockText">
				<p className="logo">Woo-generator</p>
					<h1>Write your own Woo request in 3 simple steps</h1>
					<p>Welcome to the Woo generator!</p>
					<p>
					On May 1, 2022, the Freedom of Information Act (Wet openbaarheid van bestuur or Wob) was replaced by the Open Government Act (Wet open overheid or Woo). 
					As a result, the Wob-generator has now become the Woo-generator, and we have taken the opportunity to enhance the generator, including with this English translation. 
					From now on, you should submit a Woo request if you want to obtain government information from a government body in the (European) Netherlands. 
					</p>
					<p>With the Woo generator, making your request is a breeze.</p>

					<ol>
						<li>1. You fill in some information about yourself</li>
						<li>2. You select a government institution</li>
						<li>3. You choose the type of documents or information you are looking for</li>
					</ol>
					<div className="nextButtons">
						<Link to="/EN/woo/StapVoorAf" onClick={e => clickHandlerSetLaw("Woo")}>
							WOO
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
