import React from "react";
import { Link } from "react-router-dom";

function HomepageLink({ wet, clickHandlerSetLaw }) {
	return (
		<div className="sectionLink">
			<div className="sectionBlock">
				<div>
					<h1>Bo tabata sa?</h1>
					<p>
						For di awe, no tin solamente e <b>generado Woo</b> pa Hulanda, pero tambe tin un <b>generado Wob BES</b> pa
						Bonaire, St. Eustatius y Saba y un <b>generado Lob</b> pa Kòrsou, Aruba y St. Maarten.
					</p>
					<p>
						Si bo kier pidi documentonan cerca un instancia gubernamental na Hulanda, of na Aruba, Kòrsou of Sint
						Maarten, scoge aki bou unda bo kier bay.
					</p>
				</div>
				<div>
					<Link to="/EN/woo/" onClick={e => clickHandlerSetLaw("woo")}>
						WOO
					</Link>
					<Link to="/PM/lob/" onClick={e => clickHandlerSetLaw("LOB")}>
						LOB
					</Link>
				</div>
			</div>
		</div>
	);
}
export default HomepageLink;
