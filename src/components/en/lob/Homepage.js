import React from "react";
import { Link } from "react-router-dom";
import machine from "../../../assets/images/WOB_KNOP.png";
import spoonLogo from "../../../assets/logo/spoonlogoExpertisecentrum.png";
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
				<img src={spoonLogo} className="logo_SPOON" alt="logo expertisecentrum spoon" />
				<img src={vvojLogo} className="logo_VVOJ" alt="logo vvoj" />
			</div>
			<div className="homepageBlock">
				<div className="blockText">
					<p className="logo">Lob generator</p>
					<h1>Write your own Lob request in 3 simple steps</h1>
					<p>Welcome to the Lob generator!</p>
					<p>
						You are here because you want to request information from a government authority in Aruba, Curaçao or Sint
						Maarten.{" "}
					</p>
					<p>
						All three of these islands have a freedom of information law called the Lob. By invoking this law, anyone is
						allowed to request documents that the government institutions of the CAS islands possess.
					</p>

					<br></br>
					<p>
						<b>Please note</b> that communication with the government in Aruba & Curaçao is only possible either in
						Dutch or Papiamento. If you're considering making a request to any government institutions in Aruba or
						Curaçao, change to one of the other languages. This is required because the Lob generator makes your request
						in your chosen language.
					</p>

					<p>With the Lob generator, making a correct request for government information is a breeze.</p>

					<ol>
						<li>1. You fill in some information about yourself</li>
						<li>2. You select a government authority</li>
						<li>3. You choose the type of documents or information you are looking for</li>
					</ol>

					<div className="nextButtons">
						{/* <Link to="/EN/lob/StapVoorAf" onClick={e => clickHandlerSetLaw("Lob")}>
							WOO EN
						</Link> */}
						<Link to="/EN/lob/StapVoorAf" className="start" onClick={e => clickHandlerSetLaw("start your lob request")}>
							start your lob request
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
