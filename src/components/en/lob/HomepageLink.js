import React from "react";
import { Link } from "react-router-dom";

function HomepageLink({ wet, clickHandlerSetLaw }) {
	return (
		<div className="sectionLink">
			<div className="sectionBlock">
				<div>
					<h1>Did you know?</h1>
					<p>
						<p>
							Yes indeed! From now on, there is not only the <b>Woo generator</b> for the Netherlands but also a{" "}
							<b>Wob BES generator</b> for Bonaire, St. Eustatius, and Saba (BES islands), and a <b>Lob generator</b>{" "}
							for Curaçao, Aruba, and St. Maarten (CAS islands).
						</p>
						<p>
							Instead of requesting documents from one of the CAS islands, do you instead want to request from
							government agencies in the Netherlands or one of the BES islands? Then choose one of the options below.
						</p>
					</p>
				</div>
				<div>
					<Link to="/EN/woo/" onClick={e => clickHandlerSetLaw("Woo")}>
						WOO
					</Link>
					<Link to="/EN/bes/" onClick={e => clickHandlerSetLaw("Wob BES")}>
						WOB BES
					</Link>
				</div>
			</div>
		</div>
	);
}
export default HomepageLink;
