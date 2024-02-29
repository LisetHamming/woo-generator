import React from "react";
import { Link } from "react-router-dom";

function HomepageLink({ wet, clickHandlerSetLaw }) {
	return (
		<div className="sectionLink">
			<div className="sectionBlock">
				<div>
					<h1>Did you know?</h1>
					<p>
					Yes indeed! From now on, there is not only the <b>Woo generator</b> for the Netherlands but also a <b>Wob BES generator</b> for Bonaire, St. Eustatius, and Saba(BES islands), and a <b>Lob generator</b> for Curaçao, Aruba, and St. Maarten (CAS islands).
					</p>
					<p>Do you want to request documents from government agencies in the European Netherlands or one of the BES islands? Then choose one of the options below.</p>
				</div>
				<div>
					<Link to="/EN/bes/" onClick={e => clickHandlerSetLaw("Wob BES")}>
						WOB BES
					</Link>
					<Link to="/EN/woo/" onClick={e => clickHandlerSetLaw("Woo")}>
						WOO
					</Link>
				</div>
			</div>
		</div>
	);
}
export default HomepageLink;
